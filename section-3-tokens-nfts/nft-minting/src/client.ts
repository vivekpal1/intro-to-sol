import { createMint } from '@solana/spl-token';
import { Connection, PublicKey } from '@solana/web3.js';

async function createNFT() {
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
  const wallet = window.solana; // Phantom wallet
  const mintAuthority = wallet.publicKey;
  const freezeAuthority = wallet.publicKey;

  const mint = await createMint(
    connection,
    wallet,             // Pays for the transaction
    mintAuthority,      // Can mint the NFT
    freezeAuthority,    // Can freeze (optional)
    0                   // Decimals (0 for NFTs)
  );
  console.log('NFT Mint address:', mint.toBase58());
}

createNFT();