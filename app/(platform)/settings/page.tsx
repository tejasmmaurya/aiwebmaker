export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Settings</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "Theme",
          "AI Provider",
          "API Keys",
          "Notifications",
          "Account Security",
        ].map((item) => (
          <article key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            {item}
          </article>
        ))}
      </div>
    </div>
  );
}
