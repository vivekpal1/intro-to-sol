import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";

describe("Hello World", () => {
  // Configure the client
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.HelloWorld as Program;

  it("Calls hello function and logs the slot", async () => {
    // Call the hello function
    const tx = await program.methods.hello().rpc();
    console.log("Transaction signature:", tx);
    
    // Fetch the transaction details
    const txDetails = await provider.connection.getTransaction(tx);
    
    // Verify we got a transaction receipt
    if (!txDetails) {
      throw new Error("Transaction should be confirmed");
    }
    
    // Check logs contain our expected message
    const logs = txDetails.meta.logMessages;
    const helloLogFound = logs.some(log => 
      log.includes("Hello, World! Current slot is")
    );
    
    if (!helloLogFound) {
      throw new Error("Hello World message with slot should be in logs");
    }
    
    console.log("✅ Test passed!");
  });
}); 