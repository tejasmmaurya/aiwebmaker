export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Admin Panel</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "User Management",
          "Analytics",
          "Project Monitoring",
          "Revenue Tracking",
          "Feature Management",
        ].map((item) => (
          <article key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            {item}
          </article>
        ))}
      </div>
    </div>
  );
}
