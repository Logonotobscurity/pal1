import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { writeSession } from "@/lib/session";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");
    if (!email.includes("@") || password.length < 8) {
      setError("Use a valid email and a password of at least 8 characters.");
      return;
    }
    writeSession({ email, name: email.split("@")[0] ?? "Owner" });
    void navigate({ to: "/approvals" });
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-md flex-col items-center justify-center px-4 py-12">
      <div className="w-full rounded-[28px] border border-border bg-surface p-8">
        <p className="text-center text-xs uppercase tracking-[0.28em] text-subtle">PAL</p>
        <h1 className="font-display mt-2 text-center text-2xl">Sign in</h1>
        <p className="mt-2 text-center text-sm text-muted">
          Review what PAL is asking. Nothing consequential runs without you.
        </p>
        <form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit}>
          <label className="flex flex-col gap-1 text-sm text-muted">
            Email
            <Input name="email" type="email" autoComplete="email" required />
          </label>
          <label className="flex flex-col gap-1 text-sm text-muted">
            Password
            <Input
              name="password"
              type="password"
              autoComplete="current-password"
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
            Sign in
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted">
          No account yet?{" "}
          <Link to="/register" className="text-accent hover:underline">
            Create one
          </Link>
        </p>
      </div>
      <p className="mt-4 max-w-md text-center text-xs text-subtle">
        Demo workspace: sign in locally to open Approvals. Evaluation is public.
      </p>
    </main>
  );
}
