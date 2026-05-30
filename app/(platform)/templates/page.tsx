const templates = ["SaaS", "E-Commerce", "Portfolio", "Dashboard", "AI Tools", "Social Apps"];

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Templates Marketplace</h1>
      <input className="w-full max-w-md rounded-xl border border-white/10 bg-black/40 px-3 py-2" placeholder="Search templates" />
      <div className="grid gap-4 md:grid-cols-3">
        {templates.map((template) => (
          <article key={template} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="font-medium">{template}</p>
            <p className="mt-2 text-sm text-slate-400">Browse, favorite, and clone starter projects.</p>
          </article>
        ))}
      </div>
    </div>
  );
}
