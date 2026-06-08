"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { User, Bell, Shield, Wallet, Moon, ChevronRight } from "lucide-react";

export default function SettingsPage() {
  const username = useAuthStore((state) => state.username);

  const sections = [
    { title: "Account", icon: <User className="text-cyan-400" /> },
    { title: "Notifications", icon: <Bell className="text-cyan-400" /> },
    { title: "Security & Privacy", icon: <Shield className="text-cyan-400" /> },
    { title: "Trading Preferences", icon: <Wallet className="text-cyan-400" /> },
    { title: "Appearance", icon: <Moon className="text-cyan-400" /> },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 text-zinc-100">
      <h1 className="text-4xl font-black">⚙️ Settings</h1>

      {/* Profile Card */}
      <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900/80 p-8 flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-3xl font-black">
          {username?.slice(0, 2).toUpperCase() || "UN"}
        </div>
        <div>
          <h2 className="text-2xl font-bold">{username || "User"}</h2>
          <p className="text-zinc-400">Bunz AI Demo Account</p>
          <button className="mt-2 text-sm text-cyan-400 hover:text-cyan-300 font-semibold">Edit Profile</button>
        </div>
      </div>

      {/* Settings List */}
      <div className="grid gap-4">
        {sections.map((section, i) => (
          <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition cursor-pointer group">
            <div className="flex items-center gap-4">
              {section.icon}
              <span className="font-bold text-lg">{section.title}</span>
            </div>
            <ChevronRight className="text-zinc-600 group-hover:text-cyan-400 transition" />
          </div>
        ))}
      </div>

      {/* Danger Zone */}
      <div className="pt-8">
        <button className="text-red-500 font-bold hover:text-red-400 transition">Log Out</button>
      </div>
    </div>
  );
}