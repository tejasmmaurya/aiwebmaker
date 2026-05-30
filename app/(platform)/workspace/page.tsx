import { BuilderWorkspace } from "@/components/workspace/builder-workspace";

export default function WorkspacePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">AI Builder Workspace</h1>
        <p className="mt-2 text-slate-400">Generate product requirements, code, and schema with persistent context.</p>
      </div>
      <BuilderWorkspace />
    </div>
  );
}
