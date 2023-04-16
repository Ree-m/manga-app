"use client";
import Link from "next/link";
import { useState } from "react";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function onSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>

      <p>
        Don't have an account?
        <button>
          <Link href="/auth/register">Create one</Link>
        </button>
      </p>
    </form>
  );
};

export default LoginPage;