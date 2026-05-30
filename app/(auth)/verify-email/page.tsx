import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070a12] px-6">
      <section className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl">
        <h1 className="text-2xl font-semibold">Verify your email</h1>
        <p className="mt-3 text-sm text-slate-300">We sent a verification link to your inbox. Confirm it to unlock project generation and exports.</p>
        <Link href="/login" className="mt-6 inline-flex rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-black">
          Back to login
        </Link>
      </section>
    </main>
  );
}
