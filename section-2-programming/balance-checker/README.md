# Solana Balance Checker Demo

A simple Next.js app that checks Solana account balances on the devnet network.

## What This App Does

This app lets you:
- Enter a Solana wallet address
- Check its balance on Solana devnet
- See the result in SOL (not lamports)

## How It Works

1. Uses `@solana/web3.js` to connect to Solana's devnet
2. Converts the input address to a Solana PublicKey
3. Queries the account balance
4. Converts from lamports to SOL (1 SOL = 1,000,000,000 lamports)

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Try It Out

1. Enter a Solana wallet address (e.g., your Phantom wallet address)
2. Click "Check Balance"
3. See the balance in SOL

## Learn More

- [Solana Web3.js Documentation](https://solana-labs.github.io/solana-web3.js/)
- [Solana Developer Resources](https://solana.com/developers)