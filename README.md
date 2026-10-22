# token-dashboard
## Student Token Dashboard

Public Page: [https://bech27.github.io/student-token-dashboard/](https://bech27.github.io/student-token-dashboard/)

## Token Information (Ethereum Sepolia)
- **Silver Token (BSC):** `0x555c9d25845086696A4dD60831bcd1daB5Df6224` (18 decimals, symbol: BSC)
- **Gold Token (BGC):** `0x72Fe04AdE3b074317aBE89b7F6eb50B11870aE43` (18 decimals, symbol: BGC)

## Token Table
| Name | Symbol | Purpose | Initial Supply | Mint Policy |
|---|---|---|---|---|
| SilverToken | BSC | Course settlements / testing | Fixed | No additional mint (Fixed Supply) |
| GoldToken | BGC | Course settlements / testing | Fixed | No additional mint (Fixed Supply) |

## Lecturer Transaction Links (1 Token Transfer)
- **Silver (BSC):** [Etherscan link here]
- **Gold (BGC):** [Etherscan link here]

## How to Get Tokens
Tokens can be imported into MetaMask using the contract addresses listed above if received from the developer or classmates.

## Test Table
| Test Scenario | Input / Action | Expected Result | Result |
|---|---|---|---|
| Invalid address | Entered invalid eth address | Warning message, transaction blocked | OK |
| Zero / Too large amount | 0 or greater than balance | Error message, transaction blocked | OK |
| Wrong network | Network is not Sepolia | Warning and network switch button appear | OK |
| MetaMask rejection | Click "Reject" in MetaMask prompt | Notice of `ACTION_REJECTED`, nothing sent | OK |
| Page reload | F5 browser reload | State resets, prompts reconnection | OK |

## Brief Gas Explanation
Gas is the execution unit on the Ethereum network. It covers computational and storage resources required to execute transactions or smart contract functions (like `transfer`) on the Sepolia testnet. Gas fees are paid in Sepolia ETH, whereas the custom tokens (BSC/BGC) are not used to pay for gas.
