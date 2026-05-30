"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarItems } from "@/lib/constants/navigation";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 flex-col border-r border-white/10 bg-black/30 p-4 lg:flex">
      <p className="mb-6 text-sm font-semibold tracking-wider text-cyan-300">ForgeAI</p>
      <nav className="space-y-1">
        {sidebarItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 transition",
              pathname === href ? "bg-cyan-400/15 text-cyan-200" : "hover:bg-white/5",
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
