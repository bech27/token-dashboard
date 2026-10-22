const SEPOLIA_CHAIN_ID = "0xaa36a7"; // 11155111

const TOKENS = {
    silver: {
        address: "0x555c9d25845086696A4dD60831bcd1daB5Df6224",
        symbol: "BSC"
    },
    gold: {
        address: "0x72Fe04AdE3b074317aBE89b7F6eb50B11870aE43",
        symbol: "BGC"
    }
};

const ERC20_ABI = [
    "function balanceOf(address account) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function transfer(address recipient, uint256 amount) returns (bool)"
];

let provider;
let signer;
let userAddress;

const connectBtn = document.getElementById("connectBtn");
const walletAddressNav = document.getElementById("walletAddressNav");
const networkWarning = document.getElementById("networkWarning");
const switchNetworkBtn = document.getElementById("switchNetworkBtn");
const refreshBtn = document.getElementById("refreshBtn");
const sendBtn = document.getElementById("sendBtn");
const txStatus = document.getElementById("txStatus");

const silverBalanceSpan = document.getElementById("silverBalance");
const goldBalanceSpan = document.getElementById("goldBalance");

async function checkNetwork() {
    if (!window.ethereum) return false;
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    if (chainId !== SEPOLIA_CHAIN_ID) {
        networkWarning.style.display = "block";
        return false;
    } else {
        networkWarning.style.display = "none";
        return true;
    }
}

async function connectWallet() {
    if (!window.ethereum) {
        alert("Please install MetaMask!");
        return;
    }
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        userAddress = await signer.getAddress();
        
        walletAddressNav.textContent = userAddress;
        connectBtn.textContent = "Connected";

        await checkNetwork();
        await updateBalances();
    } catch (err) {
        console.error(err);
    }
}

async function switchNetwork() {
    try {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: SEPOLIA_CHAIN_ID }],
        });
        await checkNetwork();
        await updateBalances();
    } catch (err) {
        console.error(err);
    }
}

async function getTokenBalance(tokenKey) {
    if (!signer) return "0";
    const tokenInfo = TOKENS[tokenKey];
    const contract = new ethers.Contract(tokenInfo.address, ERC20_ABI, signer);
    try {
        const decimals = await contract.decimals();
        const rawBalance = await contract.balanceOf(userAddress);
        return {
            formatted: ethers.formatUnits(rawBalance, decimals),
            raw: rawBalance,
            decimals: decimals
        };
    } catch (err) {
        console.error(`Error loading ${tokenKey} balance:`, err);
        return null;
    }
}

async function updateBalances() {
    const isSepolia = await checkNetwork();
    if (!isSepolia || !signer) return;

    silverBalanceSpan.textContent = "Loading...";
    goldBalanceSpan.textContent = "Loading...";

    const silver = await getTokenBalance("silver");
    const gold = await getTokenBalance("gold");

    silverBalanceSpan.textContent = silver ? `${silver.formatted} ${TOKENS.silver.symbol}` : "Error";
    goldBalanceSpan.textContent = gold ? `${gold.formatted} ${TOKENS.gold.symbol}` : "Error";
}

async function sendTokens() {
    txStatus.innerHTML = "";
    const isSepolia = await checkNetwork();
    if (!isSepolia) {
        alert("Please switch to the Sepolia network before sending!");
        return;
    }

    const tokenKey = document.getElementById("tokenSelect").value;
    const recipient = document.getElementById("recipientInput").value.trim();
    const amountStr = document.getElementById("amountInput").value.trim();

    // 1. ethers.isAddress check
    if (!ethers.isAddress(recipient)) {
        txStatus.innerHTML = `<div class="error">Invalid recipient address!</div>`;
        return;
    }

    const amountNum = parseFloat(amountStr);
    if (isNaN(amountNum) || amountNum <= 0) {
        txStatus.innerHTML = `<div class="error">Amount must be greater than 0!</div>`;
        return;
    }

    const tokenInfo = TOKENS[tokenKey];
    const contract = new ethers.Contract(tokenInfo.address, ERC20_ABI, signer);

    try {
        const decimals = await contract.decimals();
        const rawBalance = await contract.balanceOf(userAddress);
        const parsedAmount = ethers.parseUnits(amountStr, decimals);

        // Check if amount <= balance
        if (parsedAmount > rawBalance) {
            txStatus.innerHTML = `<div class="error">Insufficient token balance!</div>`;
            return;
        }

        txStatus.innerHTML = `<div>Confirm transaction in MetaMask...</div>`;
        const tx = await contract.transfer(recipient, parsedAmount);
        
        txStatus.innerHTML = `<div>Transaction sent, waiting for confirmation (tx.wait)...</div>`;
        const receipt = await tx.wait();

        txStatus.innerHTML = `
            <div class="success">
                Successfully sent! <br>
                <a href="https://sepolia.etherscan.io/tx/${receipt.hash}" target="_blank">View on Etherscan: ${receipt.hash}</a>
            </div>
        `;
        await updateBalances();
    } catch (err) {
        console.error(err);
        if (err.code === "ACTION_REJECTED" || err.info?.error?.code === 4001 || (err.message && err.message.includes("user rejected"))) {
            txStatus.innerHTML = `<div class="error">Transaction rejected in MetaMask (ACTION_REJECTED) — nothing was sent.</div>`;
        } else {
            txStatus.innerHTML = `<div class="error">Error: ${err.reason || err.message}</div>`;
        }
    }
}

connectBtn.addEventListener("click", connectWallet);
switchNetworkBtn.addEventListener("click", switchNetwork);
refreshBtn.addEventListener("click", updateBalances);
sendBtn.addEventListener("click", sendTokens);

if (window.ethereum) {
    window.ethereum.on("accountsChanged", () => { connectWallet(); });
    window.ethereum.on("chainChanged", () => { window.location.reload(); });
}
