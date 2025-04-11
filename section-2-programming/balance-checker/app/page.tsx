"use client";

import { Connection, PublicKey, clusterApiUrl } from "@anza-xyz/kit";
import { useState, useEffect } from "react";

export default function Home() {
  const [balance, setBalance] = useState<number | null>(null);
  const [address, setAddress] = useState<string>("");

  const checkBalance = async () => {
    try {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      const publicKey = new PublicKey(address);
      const lamports = await connection.getBalance(publicKey);
      setBalance(lamports / 1_000_000_000); // Convert lamports to SOL
    } catch (error) {
      console.error("Error fetching balance:", error);
      setBalance(null);
    }
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Solana Balance Checker</h1>
      <input
        type="text"
        placeholder="Enter Solana address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={checkBalance} style={{ padding: "5px 10px" }}>
        Check Balance
      </button>
      {balance !== null && <p>Balance: {balance} SOL</p>}
    </main>
  );
}