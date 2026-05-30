"use client";

import { FormEvent, useState } from "react";

const options = {
  framework: ["Next.js", "React", "Vue"],
  database: ["Firestore", "PostgreSQL", "MongoDB"],
  deploymentTarget: ["Vercel", "Firebase", "Docker"],
};

export default function ProjectsPage() {
  const [result, setResult] = useState("");

  const createProject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("projectName");
    setResult(`Project ${name} submitted for AI processing.`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-2 text-slate-400">Create and manage your app generation pipeline.</p>
      </div>

      <form onSubmit={createProject} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-2">
        <input className="rounded-xl border border-white/10 bg-black/40 px-3 py-2" name="projectName" placeholder="Project Name" required />
        <input className="rounded-xl border border-white/10 bg-black/40 px-3 py-2" name="description" placeholder="Description" required />
        <input className="rounded-xl border border-white/10 bg-black/40 px-3 py-2" name="techStack" placeholder="Tech Stack" required />
        <select className="rounded-xl border border-white/10 bg-black/40 px-3 py-2" name="framework">
          {options.framework.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select className="rounded-xl border border-white/10 bg-black/40 px-3 py-2" name="database">
          {options.database.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select className="rounded-xl border border-white/10 bg-black/40 px-3 py-2" name="deploymentTarget">
          {options.deploymentTarget.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <button className="rounded-xl bg-cyan-400 px-4 py-2 font-semibold text-black lg:col-span-2" type="submit">
          Create Project
        </button>
      </form>

      {result && <p className="text-cyan-200">{result}</p>}
    </div>
  );
}
