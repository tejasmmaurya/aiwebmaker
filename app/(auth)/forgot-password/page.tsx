import { AuthForm } from "@/components/auth/auth-form";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070a12] px-6">
      <AuthForm mode="forgot" />
    </main>
  );
}
