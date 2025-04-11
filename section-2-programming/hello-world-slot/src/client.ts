import * as anchor from "@coral-xyz/anchor";

const provider = anchor.AnchorProvider.local();
anchor.setProvider(provider);

const program = anchor.workspace.HelloWorld;

const tx = await program.methods.hello().rpc();
console.log("Transaction signature", tx);