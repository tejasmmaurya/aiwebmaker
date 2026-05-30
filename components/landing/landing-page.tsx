"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Database, Download, Layout, Sparkles, Wrench } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { pricingPlans } from "@/lib/constants/navigation";

const featureCards = [
  { title: "AI UI Generation", icon: Layout },
  { title: "Frontend Generation", icon: Sparkles },
  { title: "Backend Starter Generation", icon: Wrench },
  { title: "Database Schema Generation", icon: Database },
  { title: "Live Preview", icon: BrainCircuit },
  { title: "Project Export", icon: Download },
  { title: "Error Fixing AI", icon: Sparkles },
  { title: "Architecture Planning", icon: BrainCircuit },
];

const demoOutput = ["UI", "Backend", "Database", "Folder Structure"];
const yearlyPriceMultiplier = 10;
const yearlyDiscountRate = 0.8;
const typingSource = "Describe your product idea and generate a full-stack blueprint in seconds.";

export function LandingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedText((current) => {
        if (current.length >= typingSource.length) return "";
        return typingSource.slice(0, current.length + 1);
      });
    }, 70);

    return () => clearInterval(timer);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 36 }).map((_, index) => ({
        id: index,
        left: `${(index * 13) % 100}%`,
        top: `${(index * 19) % 100}%`,
        delay: (index % 6) * 0.5,
      })),
    [],
  );

  return (
    <div className="relative overflow-hidden bg-[#06070d] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.25),transparent_40%)]" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="pointer-events-none absolute h-1 w-1 animate-pulse rounded-full bg-cyan-300/70"
          style={{ left: particle.left, top: particle.top, animationDelay: `${particle.delay}s` }}
        />
      ))}

      <main className="relative mx-auto flex max-w-7xl flex-col gap-28 px-6 py-14 md:px-10">
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" /> ForgeAI
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">Turn Ideas Into Applications Instantly</h1>
            <p className="max-w-xl text-lg text-slate-300">
              Describe your app in plain English and watch AI generate the architecture, design, database, and code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300" href="/signup">
                Start Building
              </Link>
              <a className="rounded-xl border border-slate-600 px-5 py-3 font-semibold transition hover:border-cyan-300" href="#demo">
                Watch Demo
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_50px_rgba(56,189,248,0.15)] backdrop-blur-xl"
          >
            <p className="mb-4 rounded-lg border border-cyan-300/20 bg-cyan-400/10 p-2 font-mono text-xs text-cyan-100">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
            <p className="mb-4 text-sm text-slate-300">AI Prompt Stream</p>
            <div className="space-y-3 font-mono text-sm">
              <div className="rounded-lg bg-black/40 p-3 text-cyan-200">{`> build a fintech dashboard with auth and analytics`}</div>
              <div className="rounded-lg bg-black/40 p-3 text-violet-200">{`> design modern onboarding with gradient glass cards`}</div>
              <div className="rounded-lg bg-black/40 p-3 text-emerald-200">{`> generate backend starter with firestore schema`}</div>
            </div>
          </motion.div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Platform Features</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map(({ title, icon: Icon }) => (
              <motion.article
                key={title}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
              >
                <Icon className="mb-3 h-5 w-5 text-cyan-300" />
                <p className="font-medium">{title}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="demo" className="space-y-6">
          <h2 className="text-3xl font-semibold">Live Demo Generator</h2>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
            <p className="text-sm text-slate-400">User Prompt</p>
            <p className="mt-2 rounded-lg bg-black/40 p-3 text-cyan-200">Create a fitness tracking app</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {demoOutput.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm"
                >
                  {item} generated
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-3xl font-semibold">Testimonials</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {["Saved us 4 weeks of setup.", "The workspace feels magical.", "Best app ideation pipeline."].map((quote) => (
              <motion.blockquote key={quote} whileHover={{ scale: 1.01 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                “{quote}”
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold">Pricing</h2>
            <button
              onClick={() => setBilling((value) => (value === "monthly" ? "yearly" : "monthly"))}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm"
            >
              {billing === "monthly" ? "Switch to yearly" : "Switch to monthly"}
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={clsx(
                  "rounded-2xl border p-5",
                  plan.name === "Pro" ? "border-cyan-300 bg-cyan-300/10" : "border-white/10 bg-white/[0.04]",
                )}
              >
                <p className="text-xl font-semibold">{plan.name}</p>
                <p className="mt-2 text-3xl font-bold">
                  {billing === "monthly"
                    ? plan.price
                    : `$${Math.round(Number(plan.price.slice(1)) * yearlyPriceMultiplier * yearlyDiscountRate)}`}
                  <span className="text-base font-normal text-slate-400">/{billing === "monthly" ? "mo" : "yr"}</span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <ArrowRight className="h-3.5 w-3.5 text-cyan-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
