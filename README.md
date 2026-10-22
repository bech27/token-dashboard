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

## Proof of some purchases:
0x941e7a305879de320cd86e47385d00b1d99216776763e2ed6a0695b66edd7de2
0x68ef9cb12154d39c1cea33b5b02ad4c3272d1a587510bb555c0bff04e37d874a
0x90f79d41b9df52e56a7a6d93d43bd1a6eea67f2b9e5ef61b65bad8c0b52b62ae
0xdd685d9ac74af6f08016bbf3aaced65e7bc7b2256fa21b99f802c26da0e2cd76

## Proof of pool:

Silver Coin BSC: 0x05f1bf5765c06cbf1a31e995fcd9ef10191cbcde3460a49863e984db9e440cec
Gold Coin BGC: 0xe683a3b48cc0772da9814cdc7b4b3dc8fb724441f14a4a20737cf1ea18e8d7ca
