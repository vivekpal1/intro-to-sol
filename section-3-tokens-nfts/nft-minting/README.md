# Swinburne Solana Workshop NFT Minter

For this workshop, we'll focus on the simplest approach - minting NFTs directly in Solana Playground and distributing them to participants.

## Simple NFT Minting with Solana Playground

1. **Open Solana Playground**:
   - Go to [Solana Playground](https://beta.solpg.io/)
   - Create a new project or use an existing one

2. **Upload the Client Code**:
   - Use the code in `src/client.ts` to mint NFTs
   - This code already includes the metadata URI pointing to your workshop NFT

3. **Mint NFTs for Participants**:
   - Run the client code in Solana Playground
   - It will mint an NFT and output the mint address
   - You can record this address and share it with participants

4. **Participants can claim their NFT**:
   - Participants need to add the token to their Phantom wallet
   - In Phantom, they can click "Receive" → "Import Token" → paste the mint address

## NFT Metadata

Your NFT metadata is already hosted on IPFS via Lighthouse:

- **Metadata JSON**: `https://gateway.lighthouse.storage/ipfs/bafkreifozvv2mjgwql4yexurxncxh5ri2lgd4ibhc4wyzo5vpnzzp4odia`
- **Image**: `https://gateway.lighthouse.storage/ipfs/bafkreiabnti5sfv44gflcdkuvumordzflq7xue5nwf75lnififpj7z45ii`

## Advanced Options (For future reference)

For a more advanced setup with a web interface for participants to mint their own NFTs:

1. Set up a Node.js server with Express
2. Host a web interface that connects to Phantom wallet
3. Create a server endpoint that mints NFTs to participants' wallets

This approach requires more setup but provides a better user experience. The code for this approach is included in:
- `mint-page.html` - Frontend interface
- `server.js` - Backend minting server