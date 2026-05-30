import { StatsGrid } from "@/components/dashboard/stats-grid";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="mt-2 text-slate-400">Track project generation, AI usage, and deployment readiness.</p>
      </div>
      <StatsGrid />
    </div>
  );
}
