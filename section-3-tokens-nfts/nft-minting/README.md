# Demo 5: Mint a Basic NFT

## Objective
Mint a basic NFT on Solana devnet using Solana Playground.

## Steps
1. **Go to Solana Playground**:
   - Visit [Solana Playground](https://beta.solpg.io/).
2. **Use Existing Project**:
   - Use the same project from the fungible token demo or create a new one.
3. **Connect Phantom Wallet**:
   - Ensure Phantom is on devnet and has test SOL.
4. **Add the Script**:
   - Open `client.ts` and replace its content with the code in `src/client.ts`.
5. **Run the Script**:
   - Click "Run" and approve the transaction in Phantom.
   - Check the console for the NFT’s mint address.

## Troubleshooting
- Ensure decimals are set to 0 for the NFT.
- Verify wallet has enough SOL for fees.