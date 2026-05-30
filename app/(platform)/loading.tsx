export default function PlatformLoading() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="h-24 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
      ))}
    </div>
  );
}
