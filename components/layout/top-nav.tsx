import { Bell, Cpu } from "lucide-react";

export function TopNav() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-8">
      <div>
        <p className="text-sm text-slate-400">AI Status</p>
        <p className="text-sm text-emerald-300">All providers online</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-lg border border-white/10 p-2 text-slate-300">
          <Bell className="h-4 w-4" />
        </button>
        <button className="rounded-lg border border-white/10 p-2 text-slate-300">
          <Cpu className="h-4 w-4" />
        </button>
        <div className="rounded-full border border-cyan-300/50 bg-cyan-400/10 px-3 py-1 text-xs">Alex Builder</div>
      </div>
    </header>
  );
}
