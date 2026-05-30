"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { loginWithEmail, loginWithGoogle, requestPasswordReset, signUpWithEmail } from "@/lib/firebase/auth";

type Mode = "login" | "signup" | "forgot";

interface AuthFormProps {
  mode: Mode;
}

export function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (mode === "login") {
        await loginWithEmail(email, password);
        setMessage("Logged in successfully.");
      }
      if (mode === "signup") {
        await signUpWithEmail(email, password);
        setMessage("Account created. Verification email sent.");
      }
      if (mode === "forgot") {
        await requestPasswordReset(email);
        setMessage("Password reset link sent.");
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Authentication error.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setMessage("");
      await loginWithGoogle();
      setMessage("Logged in with Google.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Google authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h1 className="text-2xl font-semibold text-white">
        {mode === "login" ? "Welcome back" : mode === "signup" ? "Create your account" : "Reset your password"}
      </h1>
      <p className="mt-2 text-sm text-slate-300">Secure Firebase authentication for ForgeAI.</p>

      <form className="mt-6 space-y-4" onSubmit={submit}>
        <input
          className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm"
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {mode !== "forgot" && (
          <input
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm"
            type="password"
            required
            minLength={6}
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        )}
        <button className="w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-black" disabled={loading} type="submit">
          {loading ? "Please wait..." : mode === "login" ? "Login" : mode === "signup" ? "Sign up" : "Send reset link"}
        </button>
      </form>

      {mode !== "forgot" && (
        <button
          onClick={handleGoogleLogin}
          className="mt-3 w-full rounded-xl border border-white/20 px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-60"
          type="button"
          disabled={loading}
        >
          Continue with Google
        </button>
      )}

      {message && <p className="mt-4 text-sm text-cyan-200">{message}</p>}

      <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-400">
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
        <Link href="/forgot-password">Forgot Password</Link>
        <Link href="/verify-email">Email Verification</Link>
      </div>
    </div>
  );
}
