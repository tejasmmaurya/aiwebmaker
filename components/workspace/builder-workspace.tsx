"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const EditorLoading = () => <div className="h-[60vh] animate-pulse rounded-xl bg-white/5" />;
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false, loading: EditorLoading });

const tree = ["app/page.tsx", "components/navbar.tsx", "lib/api/client.ts", "firestore/schema.ts"];

export function BuilderWorkspace() {
  const [prompt, setPrompt] = useState("Create a modern food delivery application");

  return (
    <section className="grid gap-4 xl:grid-cols-[260px_minmax(0,1fr)_360px]">
      <aside
        aria-label="Project structure panel (horizontally resizable)"
        className="resize-x overflow-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4"
      >
        <h2 className="text-sm font-semibold text-cyan-200">Project Structure</h2>
        <div className="mt-2 h-1 w-14 rounded-full bg-cyan-300/30" />
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {tree.map((item) => (
            <li key={item} className="rounded-lg bg-black/30 px-2 py-1">{item}</li>
          ))}
        </ul>
      </aside>

      <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <label className="text-xs text-slate-400" htmlFor="workspace-prompt">
          Generation Prompt
        </label>
        <input
          id="workspace-prompt"
          aria-label="Project generation prompt"
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

      <aside
        aria-label="Preview and assistant panel (horizontally resizable)"
        className="resize-x overflow-auto space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
      >
        <div className="h-1 w-14 rounded-full bg-cyan-300/30" />
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
