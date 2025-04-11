# Demo 3: Deploy a "Hello, World!" Program with Current Slot Using Anchor

## Objective
Deploy a Rust program to devnet that logs "Hello, World! Current slot is [slot number]".

## Steps
1. **Go to Solana Playground**:
   - Visit [Solana Playground](https://beta.solpg.io/).
2. **Create a New Project**:
   - Click "Create a new project" → select "Anchor (Rust)".
3. **Update the Program**:
   - Open `lib.rs` and replace its content with the code in `src/lib.rs`.
   - Replace `"YourProgramIDHere"` with a unique ID (or use the default).
4. **Compile and Deploy**:
   - Click "Build" to compile.
   - Click "Deploy" to send to devnet.
5. **Run the Client Script**:
   - Open `client.ts` and replace its content with the code in `src/client.ts`.
   - Click "Run" to execute.
6. **Check Logs**:
   - View the transaction logs for the message, e.g., "Hello, World! Current slot is 123456789".

## Troubleshooting
- Ensure Solana Playground is set to devnet.
- Fix typos in `lib.rs` if the build fails.