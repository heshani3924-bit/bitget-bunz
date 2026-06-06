"use client";

import { useAuthStore } from "@/store/useAuthStore";

export default function SettingsPage() {
  const username = useAuthStore(
    (state) => state.username
  );

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        ⚙️ Settings
      </h1>

      <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900 p-6">
        <p>User: {username}</p>

        <p className="mt-2 text-zinc-400">
          Bunz AI Demo Account
        </p>
      </div>
    </div>
  );
}