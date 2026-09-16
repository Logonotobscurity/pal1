import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { writeSession } from "@/lib/session";

export const Route = createFileRoute("/register")({ component: RegisterPage });

function RegisterPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("displayName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");
    if (!name || !email.includes("@") || password.length < 8) {
      setError("Name, valid email, and 8+ character password are required.");
      return;
    }
    writeSession({ email, name });
    void navigate({ to: "/approvals" });
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-md flex-col items-center justify-center px-4 py-12">
      <div className="w-full rounded-[28px] border border-border bg-surface p-8">
        <p className="text-center text-xs uppercase tracking-[0.28em] text-subtle">PAL</p>
        <h1 className="font-display mt-2 text-center text-2xl">Create workspace</h1>
        <p className="mt-2 text-center text-sm text-muted">
          A personal workspace with you as owner. Demo only — stored on this device.
        </p>
        <form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit}>
          <label className="flex flex-col gap-1 text-sm text-muted">
            Display name
            <Input name="displayName" type="text" autoComplete="name" required />
          </label>
          <label className="flex flex-col gap-1 text-sm text-muted">
            Email
            <Input name="email" type="email" autoComplete="email" required />
          </label>
          <label className="flex flex-col gap-1 text-sm text-muted">
            Password
            <Input
              name="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
            />
          </label>
          {error ? (
            <p role="alert" className="text-sm text-danger">
              {error}
            </p>
          ) : null}
          <Button type="submit" variant="accent" className="w-full">
            Create account
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-accent hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
