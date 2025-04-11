import { createMint, getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token';
import { Connection, Keypair, PublicKey, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';
import * as anchor from "@coral-xyz/anchor";
import { 
  PROGRAM_ID as METADATA_PROGRAM_ID,
  createCreateMetadataAccountV3Instruction
} from '@metaplex-foundation/mpl-token-metadata';

async function createNFT() {
  try {
    // Use Solana Playground's connection and wallet
    const provider = anchor.AnchorProvider.env();
    const connection = provider.connection;
    const wallet = provider.wallet;
    
    const mintAuthority = wallet.publicKey;
    const freezeAuthority = wallet.publicKey;
    
    console.log("Creating NFT mint...");
    const mint = await createMint(
      connection,
      wallet.payer,       // Keypair that pays for the transaction
      mintAuthority,      // Can mint the NFT
      freezeAuthority,    // Can freeze (optional)
      0                   // Decimals (0 for NFTs)
    );
    console.log('NFT Mint created successfully!');
    console.log('NFT Mint address:', mint.toBase58());
    
    // Create token account
    console.log("Creating token account...");
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      wallet.payer,
      mint,
      wallet.publicKey
    );
    console.log("Token account created:", tokenAccount.address.toBase58());
    
    // Mint 1 token (NFT)
    console.log("Minting 1 token...");
    await mintTo(
      connection,
      wallet.payer,
      mint,
      tokenAccount.address,
      mintAuthority,
      1      // For an NFT, we just mint 1
    );
    console.log("NFT minted successfully!");
    
    // Now create metadata for the NFT with image
    console.log("Creating NFT metadata...");
    
    // NFT metadata - you can customize these values
    const nftMetadata = {
      name: "Solana Workshop NFT",
      symbol: "WORKSHOP",
      uri: "https://gateway.lighthouse.storage/ipfs/bafkreifozvv2mjgwql4yexurxncxh5ri2lgd4ibhc4wyzo5vpnzzp4odia", // Replace with your Lighthouse IPFS URI for metadata JSON
      sellerFeeBasisPoints: 0, // 0% royalty
    };
    
    // Derive metadata account PDA
    const [metadataAccount] = PublicKey.findProgramAddressSync(
      [
        Buffer.from("metadata"),
        METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
      ],
      METADATA_PROGRAM_ID
    );
    
    // Create metadata instruction
    const createMetadataInstruction = createCreateMetadataAccountV3Instruction(
      {
        metadata: metadataAccount,
        mint: mint,
        mintAuthority: wallet.publicKey,
        payer: wallet.publicKey,
        updateAuthority: wallet.publicKey,
      },
      {
        createMetadataAccountArgsV3: {
          data: {
            name: nftMetadata.name,
            symbol: nftMetadata.symbol,
            uri: nftMetadata.uri,
            sellerFeeBasisPoints: nftMetadata.sellerFeeBasisPoints,
            creators: [
              {
                address: wallet.publicKey,
                verified: true,
                share: 100,
              },
            ],
            collection: null,
            uses: null,
          },
          isMutable: true,
          collectionDetails: null,
        },
      }
    );
    
    // Create and send transaction with metadata instruction
    const transaction = new Transaction().add(createMetadataInstruction);
    const metadataTx = await sendAndConfirmTransaction(connection, transaction, [wallet.payer]);
    
    console.log("✅ NFT metadata created successfully! Transaction:", metadataTx);
    console.log("\nYour NFT details:");
    console.log("- Mint address:", mint.toBase58());
    console.log("- Owner:", wallet.publicKey.toBase58());
    console.log("- NFT Name:", nftMetadata.name);
    console.log("- Metadata URI:", nftMetadata.uri);
    console.log("\nView your NFT: https://explorer.solana.com/address/" + mint.toBase58() + "?cluster=devnet");
  } catch (error) {
    console.error("Error creating NFT:", error);
  }
}

createNFT();