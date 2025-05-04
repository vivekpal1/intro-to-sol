# Section 2: Programming on Solana

This section includes two hands-on demos:
1. Check an account's balance using JavaScript/TypeScript with `@anza-xyz/kit` in Next.js.
2. Deploy a "Hello, World!" program with the current slot number using Anchor Framework.

## Prerequisites
- Node.js and npm installed (for the Next.js demo).
- Phantom wallet set to devnet with test SOL.

## Demos
- `balance-checker/`: Next.js app to check a Solana account balance.
- `hello-world-slot/`: Rust program to log a greeting with the current slot.

## Token Minting with Solana CLI

You can also create and manage tokens directly using Solana CLI:

```bash
# 1. Create a token
spl-token create-token --decimals 9

# 2. Create token account for your wallet
spl-token create-account <TOKEN_ADDRESS>

# 3. Mint tokens to your account
spl-token mint <TOKEN_ADDRESS> <AMOUNT> <RECIPIENT_ADDRESS>

# 4. Check your token balance
spl-token balance <TOKEN_ADDRESS>

# 5. Transfer tokens to another address
spl-token transfer <TOKEN_ADDRESS> <AMOUNT> <DESTINATION_ADDRESS>
```

Remember to run these commands with `--url https://api.devnet.solana.com` flag to operate on devnet.