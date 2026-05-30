"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false, loading: () => <div className="h-[60vh] animate-pulse rounded-xl bg-white/5" /> });

const tree = ["app/page.tsx", "components/navbar.tsx", "lib/api/client.ts", "firestore/schema.ts"];

export function BuilderWorkspace() {
  const [prompt, setPrompt] = useState("Create a modern food delivery application");

  return (
    <section className="grid gap-4 xl:grid-cols-[260px_minmax(0,1fr)_360px]">
      <aside className="resize-x overflow-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <h2 className="text-sm font-semibold text-cyan-200">Project Structure</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {tree.map((item) => (
            <li key={item} className="rounded-lg bg-black/30 px-2 py-1">{item}</li>
          ))}
        </ul>
      </aside>

      <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <input
          className="w-full rounded-xl border border-cyan-300/20 bg-black/40 px-3 py-2 text-sm"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
        />
        <MonacoEditor
          height="60vh"
          defaultLanguage="typescript"
          defaultValue={`export async function POST() {\n  return Response.json({ ok: true });\n}`}
          theme="vs-dark"
          options={{ minimap: { enabled: false }, fontSize: 13, smoothScrolling: true }}
        />
      </div>

      <aside className="resize-x overflow-auto space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div>
          <h3 className="text-sm font-semibold text-cyan-200">Live Preview</h3>
          <div className="mt-2 rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-slate-300">Responsive app preview updates here.</div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-cyan-200">AI Assistant</h3>
          <div className="mt-2 rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-slate-300">
            Context-aware chat: explain code, fix bugs, refactor APIs, generate components.
          </div>
        </div>
      </aside>
    </section>
  );
}
