import { createMint } from '@solana/spl-token';
import { Connection, Keypair } from '@solana/web3.js';
import * as anchor from "@coral-xyz/anchor";

async function createToken() {
  // Use Solana Playground's connection and wallet
  const provider = anchor.AnchorProvider.env();
  const connection = provider.connection;
  const wallet = provider.wallet;
  
  const mintAuthority = wallet.publicKey;
  const freezeAuthority = wallet.publicKey;

  console.log("Creating new token...");
  const mint = await createMint(
    connection,
    wallet.payer,       // Keypair that pays for the transaction
    mintAuthority,      // Can mint new tokens
    freezeAuthority,    // Can freeze accounts (optional)
    9                   // Decimals (like SOL)
  );
  console.log('Token created successfully!');
  console.log('Mint address:', mint.toBase58());
}

createToken();