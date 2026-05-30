const stats = [
  { title: "Total Projects", value: "24" },
  { title: "AI Requests", value: "1,482" },
  { title: "Generated Files", value: "8,940" },
  { title: "Storage Usage", value: "12.4 GB" },
];

export function StatsGrid() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-slate-400">{item.title}</p>
          <p className="mt-3 text-2xl font-semibold">{item.value}</p>
        </article>
      ))}
    </section>
  );
}
