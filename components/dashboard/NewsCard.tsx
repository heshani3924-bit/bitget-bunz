"use client"; // Client component එකක් නිසා මේක අනිවාර්යයි
import { Newspaper, ArrowUpRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function NewsCard() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="rounded-3xl border border-cyan-500/15 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-2xl bg-cyan-500/10 p-3">
          <Newspaper className="text-cyan-400" size={22} />
        </div>
        <span className="text-xs text-zinc-500">News Feed</span>
      </div>

      <div className="space-y-3">
        {loading ? (
          <div className="flex justify-center p-4 text-cyan-400">
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          news.map((item, index) => (
            <a key={index} href={item.link} target="_blank" className="block rounded-2xl bg-zinc-900/70 p-3 transition hover:bg-zinc-800">
              <div className="flex items-start justify-between">
                <p className="text-sm text-zinc-300">{item.title}</p>
                <ArrowUpRight size={16} className="text-cyan-400 flex-shrink-0" />
              </div>
            </a>
          ))
        )}
      </div>

      <div className="mt-4 text-xs text-cyan-400">
        Live News updated
      </div>
    </div>
  );
}