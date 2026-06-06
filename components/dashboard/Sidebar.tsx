"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Trophy,
  ScrollText,
  Settings,
} from "lucide-react";
import Image from "next/image";
import XPProgress from "@/components/gamification/XPProgress";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Bunny Chat",
    href: "/rabbit",
    icon: MessageSquare,
  },
  {
    title: "Arena",
    href: "/arena",
    icon: Trophy,
  },
  {
    title: "Quests",
    href: "/quests",
    icon: ScrollText,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <aside className="hidden w-72 lg:flex" />;
  }

  return (
    <aside className="hidden w-72 flex-col border-r border-cyan-500/10 bg-white/5 backdrop-blur-xl lg:flex">
      {/* Logo */}
      <div className="border-b border-cyan-500/10 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-cyan-500/10 shadow-[0_0_25px_rgba(6,182,212,0.35)]">
            <Image
              src="/rabbit.png"
              alt="Bitget Bunz"
              width={48}
              height={48}
            />
          </div>

          <div>
            <h2 className="font-bold text-white">
              Bitget Bunz
            </h2>

            <p className="text-xs text-cyan-400">
              AI Trading Companion
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
                  active
                    ? "bg-cyan-500/10 text-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom XP Progress */}
      <div className="p-4">
        <XPProgress />
      </div>
    </aside>
  );
}