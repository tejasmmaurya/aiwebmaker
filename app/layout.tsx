import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ForgeAI - Turn Ideas Into Applications Instantly",
  description: "AI-powered app builder for generating architecture, UI, backend, and deploy-ready projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#06070d] text-slate-100">{children}</body>
    </html>
  );
}
