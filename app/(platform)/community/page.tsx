export default function CommunityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Community</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">Publish projects and share templates.</article>
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">Like, comment, and follow creators.</article>
      </div>
    </div>
  );
}
