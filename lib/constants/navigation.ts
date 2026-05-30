import { FolderKanban, LayoutDashboard, Settings, Shapes, Trophy, Users, Shield } from "lucide-react";

const baseSidebarItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/templates", label: "Templates", icon: Shapes },
  { href: "/community", label: "Community", icon: Users },
  { href: "/competitions", label: "Build Battle", icon: Trophy },
  { href: "/settings", label: "Settings", icon: Settings },
];

const adminSidebarItem = { href: "/admin", label: "Admin", icon: Shield };

export const sidebarItems =
  process.env.NEXT_PUBLIC_ENABLE_ADMIN === "true" ? [...baseSidebarItems, adminSidebarItem] : baseSidebarItems;

export const pricingPlans = [
  { name: "Free", price: "$0", features: ["3 projects", "50 AI requests", "Community templates"] },
  { name: "Pro", price: "$29", features: ["Unlimited projects", "5,000 AI requests", "Exports + deployments"] },
  { name: "Team", price: "$99", features: ["Team workspaces", "Shared credits", "Priority AI models"] },
];
