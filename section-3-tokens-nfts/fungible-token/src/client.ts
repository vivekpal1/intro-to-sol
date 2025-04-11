import { createMint } from '@solana/spl-token';
import { Connection, PublicKey } from '@solana/web3.js';

async function createToken() {
  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
  const wallet = window.solana; // Phantom wallet
  const mintAuthority = wallet.publicKey;
  const freezeAuthority = wallet.publicKey;

  const mint = await createMint(
    connection,
    wallet,             // Pays for the transaction
    mintAuthority,      // Can mint new tokens
    freezeAuthority,    // Can freeze accounts (optional)
    9                   // Decimals (like SOL)
  );
  console.log('Mint address:', mint.toBase58());
}

createToken();