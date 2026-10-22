# Student Token Dashboard

🌐 **Public Web Dashboard:** [https://bech27.github.io/token-dashboard/](https://bech27.github.io/token-dashboard/)  
📂 **GitHub Repository:** [https://github.com/bech27/token-dashboard](https://github.com/bech27/token-dashboard)

---

## 🪙 Token Specifications (Ethereum Sepolia)

| Specification | Gold Token (BGC) | Silver Token (BSC) |
| :--- | :--- | :--- |
| **Token Symbol** | BGC | BSC |
| **Contract Address** | `0x72Fe04AdE3b074317aBE89b7F6eb50B11870aE43` | `0x555c9d25845086696A4dD60831bcd1daB5Df6224` |
| **Decimals** | 18 | 18 |
| **Etherscan Link** | [Sepolia Etherscan](https://sepolia.etherscan.io/address/0x72Fe04AdE3b074317aBE89b7F6eb50B11870aE43) | [Sepolia Etherscan](https://sepolia.etherscan.io/address/0x555c9d25845086696A4dD60831bcd1daB5Df6224) |

---

## 📥 How to Obtain Tokens
1. Connect your Web3 wallet (e.g., MetaMask) configured to the **Ethereum Sepolia Testnet** via the [Live Dashboard](https://bech27.github.io/token-dashboard/).
2. Import the custom token contract addresses shown above directly into your MetaMask wallet to track balances.
3. Receive token transfers from the deploying wallet or your course peers to start interacting with the dashboard.

---

## 👨‍🏫 Lecturer Transfer Transactions

* **Lecturer Wallet Address:** `0x5f3046bD5aA3c6d4575AF09B8198d584f130708E`
* **Gold (BGC) Transfer Transaction:** [View on Sepolia Etherscan](https://sepolia.etherscan.io/tx/0x5bc7c9cd8e8e4f0a71491fc6a4d46f7c46f7493f4e6e4d380981d1ae38730973)
* **Silver (BSC) Transfer Transaction:** [View on Sepolia Etherscan](https://sepoly.etherscan.io/) *(or your provided hash)*

---

## 🧪 Acceptance Test Matrix

| Test Scenario | Action / Input | Expected Behavior | Status |
| :--- | :--- | :--- | :--- |
| **Invalid Address** | Input a malformed/invalid Ethereum address | Caught by `ethers.isAddress`, transaction blocked | Passed |
| **Zero / Over-balance** | Input `0` or an amount higher than your token balance | Error message displayed, execution prevented | Passed |
| **Wrong Network** | Connected to any network other than Sepolia | Warning banner triggered, switch network prompt shown | Passed |
| **MetaMask Rejection** | Click "Reject" when MetaMask prompts for signature | Catches `ACTION_REJECTED`, cleanly stops execution | Passed |
| **Page Reloading** | Refresh the browser window (`F5`) | Safe state reset, prompts user to reconnect wallet | Passed |

---

## ⛽ Brief Gas Explanation
**Gas** is the fundamental execution fee unit required to process operations on the Ethereum network (such as executing token transfers or running smart contract functions). On the Sepolia testnet, gas is paid entirely using **Sepolia ETH** (test ETH), while custom tokens like BGC and BSC are separate application assets and are never used to pay network gas fees.
