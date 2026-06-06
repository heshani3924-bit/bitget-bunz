"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import Image from 'next/image';

export default function LoginPage() {
  const [name, setName] = useState("");
  const login = useAuthStore(
    (state) => state.login
  );

  const router = useRouter();

  const handleLogin = () => {
    if (!name.trim()) return;

    login(name);

    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-[400px] rounded-3xl border border-cyan-500/20 bg-zinc-900 p-8">


<div className="mb-6 flex justify-center">
<Image
  src="/rabbit.png" 
  alt="Bitget Bunz"
  width={100}
  height={100}

  className="rounded-3xl border border-cyan-500/20 bg-transparent object-cover"
/>
</div>

        <h1 className="mb-4 text-center text-2xl font-bold text-white">
          Welcome to Bunz AI
        </h1>

        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="mb-4 w-full rounded-xl bg-zinc-800 p-3 text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full rounded-xl bg-cyan-400 py-3 font-bold text-black"
        >
          Enter Demo
        </button>
      </div>
    </div>
  );
}