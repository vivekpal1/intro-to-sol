"use client";

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState<number | null>(null);
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const checkBalance = async () => {
    try {
      setError(null);
      
      if (!address) {
        setError("Please enter a Solana address");
        return;
      }

      // Create connection to Solana devnet
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      
      // Create a PublicKey from the address
      const publicKey = new PublicKey(address);
      
      // Get account balance (in lamports)
      const lamports = await connection.getBalance(publicKey);
      
      // Convert lamports to SOL (1 SOL = 1,000,000,000 lamports)
      setBalance(lamports / 1_000_000_000);
    } catch (error) {
      console.error("Error:", error);
      setError("Invalid address or network error");
      setBalance(null);
    }
  };

  return (
    <main style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Solana Balance Checker</h1>
      
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Solana address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ 
            width: "100%", 
            padding: "8px", 
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc" 
          }}
        />
        
        <button 
          onClick={checkBalance}
          style={{ 
            padding: "8px 16px", 
            backgroundColor: "#4444dd", 
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Check Balance
        </button>
      </div>
      
      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          {error}
        </div>
      )}
      
      {balance !== null && (
        <div style={{ padding: "10px", backgroundColor: "#eeffee", borderRadius: "4px" }}>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            Balance: {balance} SOL
          </p>
          <p style={{ fontSize: "14px" }}>
            Network: Devnet
          </p>
        </div>
      )}
    </main>
  );
}