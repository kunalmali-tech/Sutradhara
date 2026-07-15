"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  LogOut,
  Search,
  Trash2,
  Mail,
  Phone,
  RefreshCw,
  Inbox,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

interface ContactMessage {
  id: number;
  name: string;
  email: string | null;
  phone: string;
  goal: string | null;
  message: string | null;
  is_read: boolean;
  created_at: string;
}

const goalLabels: Record<string, string> = {
  "stress-relief": "Stress Relief & Relaxation",
  flexibility: "Flexibility & Strength",
  meditation: "Meditation & Mindfulness",
  weight: "Weight Management",
  spiritual: "Spiritual Growth",
  general: "General Wellness",
};

function timeAgo(iso: string, now: number): string {
  const diffMs = now - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [goalFilter, setGoalFilter] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  // Snapshot of "now" taken when data was last fetched — used for relative
  // timestamps and the Today/This Week stats, kept out of the render path
  // since calling Date.now() during render is an impure call.
  const [loadedAt, setLoadedAt] = useState(0);

  // Only performs the fetch; does not touch `loading` synchronously so it's
  // safe to call directly from an effect body. Callers that want an
  // immediate spinner (button clicks) call setLoading(true) themselves first.
  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/admin/messages");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      if (!res.ok) throw new Error();
      const data = await res.json();
      setMessages(data.messages);
      setLoadedAt(Date.now());
      setError("");
    } catch {
      setError("Could not load messages.");
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = () => {
    setLoading(true);
    fetchMessages();
  };

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const res = await fetch("/api/admin/messages");
        if (res.status === 401) {
          router.push("/admin/login");
          return;
        }
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (ignore) return;
        setMessages(data.messages);
        setLoadedAt(Date.now());
        setError("");
      } catch {
        if (!ignore) setError("Could not load messages.");
      } finally {
        if (!ignore) setLoading(false);
      }
    })();
    return () => {
      ignore = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const toggleExpand = async (msg: ContactMessage) => {
    const opening = expandedId !== msg.id;
    setExpandedId(opening ? msg.id : null);
    if (opening && !msg.is_read) {
      setMessages((prev) =>
        prev.map((m) => (m.id === msg.id ? { ...m, is_read: true } : m))
      );
      await fetch(`/api/admin/messages/${msg.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isRead: true }),
      });
    }
  };

  const toggleRead = async (msg: ContactMessage, e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !msg.is_read;
    setMessages((prev) =>
      prev.map((m) => (m.id === msg.id ? { ...m, is_read: next } : m))
    );
    await fetch(`/api/admin/messages/${msg.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isRead: next }),
    });
  };

  const handleDelete = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm("Delete this message? This can't be undone.")) return;
    setDeletingId(id);
    try {
      await fetch(`/api/admin/messages/${id}`, { method: "DELETE" });
      setMessages((prev) => prev.filter((m) => m.id !== id));
    } finally {
      setDeletingId(null);
    }
  };

  const filtered = useMemo(() => {
    return messages.filter((m) => {
      if (goalFilter && m.goal !== goalFilter) return false;
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        m.name.toLowerCase().includes(q) ||
        (m.email ?? "").toLowerCase().includes(q) ||
        m.phone.toLowerCase().includes(q) ||
        (m.message ?? "").toLowerCase().includes(q)
      );
    });
  }, [messages, search, goalFilter]);

  const unreadCount = messages.filter((m) => !m.is_read).length;

  return (
    <main className="min-h-screen bg-gym-black">
      {/* Header */}
      <header className="border-b border-gym-border sticky top-0 bg-gym-black/95 backdrop-blur-sm z-10">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
              <div className="absolute w-5 h-5 border-2 border-gym-red rotate-45" />
              <div className="w-1.5 h-1.5 rounded-full bg-gym-red" />
            </div>
            <div>
              <h1 className="font-display text-xl tracking-widest text-gym-white leading-none">
                ENQUIRIES
              </h1>
              <p className="text-gym-muted text-[10px] tracking-widest uppercase mt-0.5">
                TheSutraDhara Admin
              </p>
            </div>
            {unreadCount > 0 && (
              <span className="ml-2 bg-gym-red text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {unreadCount} new
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={loadMessages}
              className="w-9 h-9 flex items-center justify-center border border-gym-border text-gym-muted hover:text-gym-white hover:border-gym-white/30 transition-colors cursor-pointer"
              title="Refresh"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gym-muted hover:text-gym-red transition-colors cursor-pointer"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-gym-border mb-8">
          {[
            { label: "Total", value: messages.length },
            { label: "Unread", value: unreadCount },
            {
              label: "Today",
              value: messages.filter(
                (m) =>
                  new Date(m.created_at).toDateString() ===
                  new Date(loadedAt).toDateString()
              ).length,
            },
            {
              label: "This Week",
              value: messages.filter(
                (m) =>
                  loadedAt - new Date(m.created_at).getTime() <
                  7 * 24 * 60 * 60 * 1000
              ).length,
            },
          ].map((s) => (
            <div key={s.label} className="bg-gym-card p-5">
              <div className="font-display text-3xl text-gym-red leading-none">
                {s.value}
              </div>
              <div className="text-gym-muted text-xs tracking-widest uppercase mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gym-muted"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, phone, email, or message..."
              className="w-full bg-gym-card border border-gym-border text-gym-white placeholder:text-gym-muted/50 pl-9 pr-4 py-3 text-sm transition-colors duration-200"
            />
          </div>
          <select
            value={goalFilter}
            onChange={(e) => setGoalFilter(e.target.value)}
            className="bg-gym-card border border-gym-border text-gym-white px-4 py-3 text-sm cursor-pointer transition-colors duration-200"
          >
            <option value="" className="bg-gym-card">
              All goals
            </option>
            {Object.entries(goalLabels).map(([value, label]) => (
              <option key={value} value={value} className="bg-gym-card">
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Messages list */}
        {loading ? (
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-20 bg-gym-card border border-gym-border animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-400 text-sm mb-4">{error}</p>
            <button
              onClick={loadMessages}
              className="text-gym-red text-xs uppercase tracking-widest underline cursor-pointer"
            >
              Try again
            </button>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gym-muted">
            <Inbox size={40} className="mx-auto mb-4 opacity-40" />
            <p className="text-sm">
              {messages.length === 0
                ? "No enquiries yet."
                : "No messages match your search."}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((msg) => {
              const isExpanded = expandedId === msg.id;
              const whatsappHref = `https://wa.me/${msg.phone.replace(/\D/g, "")}`;
              return (
                <div
                  key={msg.id}
                  onClick={() => toggleExpand(msg)}
                  className={`bg-gym-card border cursor-pointer transition-colors duration-200 ${
                    isExpanded
                      ? "border-gym-red/40"
                      : "border-gym-border hover:border-gym-white/20"
                  }`}
                >
                  <div className="flex items-center gap-4 p-5">
                    {!msg.is_read && (
                      <span
                        className="w-2 h-2 rounded-full bg-gym-red shrink-0"
                        title="Unread"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          className={`text-sm ${
                            msg.is_read
                              ? "text-gym-white"
                              : "font-semibold text-gym-white"
                          }`}
                        >
                          {msg.name}
                        </h3>
                        {msg.goal && (
                          <span className="text-[10px] tracking-widest uppercase text-gym-red bg-gym-red/10 border border-gym-red/20 px-2 py-0.5">
                            {goalLabels[msg.goal] ?? msg.goal}
                          </span>
                        )}
                      </div>
                      <p className="text-gym-muted text-xs mt-1 truncate">
                        {msg.phone}
                        {msg.email ? ` · ${msg.email}` : ""}
                      </p>
                      {!isExpanded && msg.message && (
                        <p className="text-gym-muted text-xs mt-1.5 truncate max-w-lg">
                          {msg.message}
                        </p>
                      )}
                    </div>
                    <span className="text-gym-muted text-xs shrink-0">
                      {timeAgo(msg.created_at, loadedAt)}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-gym-muted shrink-0 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {isExpanded && (
                    <div
                      className="px-5 pb-5 border-t border-gym-border pt-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {msg.message && (
                        <p className="text-gym-white text-sm leading-relaxed mb-4 whitespace-pre-wrap">
                          {msg.message}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white px-4 py-2.5 transition-opacity hover:opacity-90"
                          style={{ backgroundColor: "#25D366" }}
                        >
                          <MessageCircle size={13} />
                          WhatsApp
                        </a>
                        <a
                          href={`tel:${msg.phone}`}
                          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gym-white border border-gym-border px-4 py-2.5 hover:border-gym-white/30 transition-colors"
                        >
                          <Phone size={13} />
                          Call
                        </a>
                        {msg.email && (
                          <a
                            href={`mailto:${msg.email}`}
                            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gym-white border border-gym-border px-4 py-2.5 hover:border-gym-white/30 transition-colors"
                          >
                            <Mail size={13} />
                            Email
                          </a>
                        )}
                        <button
                          onClick={(e) => toggleRead(msg, e)}
                          className="text-xs font-semibold tracking-widest uppercase text-gym-muted hover:text-gym-white transition-colors cursor-pointer ml-auto"
                        >
                          Mark as {msg.is_read ? "unread" : "read"}
                        </button>
                        <button
                          onClick={(e) => handleDelete(msg.id, e)}
                          disabled={deletingId === msg.id}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-red-400 hover:text-red-300 transition-colors cursor-pointer disabled:opacity-50"
                        >
                          <Trash2 size={13} />
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
