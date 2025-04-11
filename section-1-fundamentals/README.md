# Section 1: Fundamentals of Solana Network

## Demo 1: Wallet Creation and Balance Check

### Objective
Create a Phantom wallet on devnet, fund it with test SOL, and check your balance.

### Steps
1. **Install Phantom Wallet**:
   - Go to [Phantom Wallet](https://phantom.app/) and install the browser extension.
   - Create a new wallet and securely store your seed phrase.
2. **Switch to Devnet**:
   - In Phantom, click the network dropdown (top-left) and select "Devnet".
3. **Fund with Test SOL**:
   - Visit [Solana Faucet](https://faucet.solana.com/).
   - Enter your wallet address and request up to 5 SOL.
4. **Check Balance**:
   - View your balance in Phantom (displayed on the main screen).
   - Alternatively, open a terminal and run:
     ```bash
     solana balance <YOUR_WALLET_ADDRESS> --url https://api.devnet.solana.com
     ```
     
5. **Troubleshooting**:
    - Ensure Phantom is set to devnet, not mainnet.
    - If the faucet fails, request smaller amounts or try again later.