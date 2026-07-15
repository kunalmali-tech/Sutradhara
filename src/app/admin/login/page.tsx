"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff } from "lucide-react";
import Button from "@/components/ui/Button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError("Incorrect password.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gym-black flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        {/* Brand mark */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-10 h-10 flex items-center justify-center mb-3">
            <div className="absolute w-7 h-7 border-2 border-gym-red rotate-45" />
            <div className="w-2.5 h-2.5 rounded-full bg-gym-red" />
          </div>
          <span className="font-display text-xl tracking-widest text-gym-white">
            THESUTRA<span className="text-gym-red">DHARA</span>
          </span>
          <span className="text-gym-muted text-[10px] tracking-[0.3em] uppercase mt-1">
            Admin
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gym-card border border-gym-border p-8"
        >
          <label className="text-xs font-semibold tracking-[0.2em] uppercase text-gym-muted block mb-2">
            Password
          </label>
          <div className="relative">
            <Lock
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gym-muted"
            />
            <input
              autoFocus
              required
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full bg-gym-surface border border-gym-border text-gym-white placeholder:text-gym-muted/50 pl-10 pr-10 py-3 text-sm transition-colors duration-200"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gym-muted hover:text-gym-white transition-colors cursor-pointer"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-xs mt-3">{error}</p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-6"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </main>
  );
}
