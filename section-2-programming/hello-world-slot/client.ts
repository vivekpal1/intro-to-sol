import * as anchor from "@coral-xyz/anchor";

async function main() {
  try {
    // Setup connection to Solana
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);
    
    // Get reference to our program
    const program = anchor.workspace.HelloWorld;
    
    console.log("Calling our Hello World program...");
    
    // Call the hello method
    const tx = await program.methods.hello().rpc();
    console.log("Transaction signature:", tx);
    
    // Get transaction details
    const txDetails = await provider.connection.getTransaction(tx);
    
    // Extract and display program output
    console.log("\nProgram Output:");
    txDetails?.meta?.logMessages?.forEach(log => {
      if (log.includes("Program log:")) {
        console.log(log.replace("Program log:", "").trim());
      }
    });
  } catch (error) {
    console.error("Error:", error);
    console.log("\nTip: If connection fails, try reloading the page or trying again later.");
  }
}

main(); 