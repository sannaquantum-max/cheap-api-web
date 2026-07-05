"use client";

import { useState } from "react";

export default function Dashboard() {
  const [apiKey] = useState("sk-th-xxxxxxxxxxxx");

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-text-muted text-sm">Welcome back, developer@example.com</p>
        </div>
        <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm font-medium">
          Starter Plan
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Tokens Used", value: "1,247,832" },
          { label: "Monthly Limit", value: "5,000,000" },
          { label: "Remaining", value: "3,752,168" },
          { label: "Days Left", value: "17" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-surface-light border border-white/10 rounded-xl p-4"
          >
            <div className="text-text-muted text-xs mb-1">{s.label}</div>
            <div className="text-xl font-bold">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Usage Bar */}
      <div className="bg-surface-light border border-white/10 rounded-xl p-6 mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Monthly Usage</span>
          <span className="text-text-muted text-sm">25%</span>
        </div>
        <div className="w-full bg-surface rounded-full h-3 overflow-hidden">
          <div
            className="bg-brand h-full rounded-full transition-all"
            style={{ width: "25%" }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-text-muted">
          <span>0</span>
          <span>5,000,000 tokens</span>
        </div>
      </div>

      {/* API Key */}
      <div className="bg-surface-light border border-white/10 rounded-xl p-6 mb-8">
        <h2 className="font-semibold mb-2">Your API Key</h2>
        <p className="text-text-muted text-sm mb-3">
          Keep this secret. Use it in your API requests.
        </p>
        <div className="flex items-center gap-3">
          <code className="bg-surface px-4 py-2 rounded-lg text-sm flex-1 font-mono">
            {apiKey}
          </code>
          <button
            onClick={() => navigator.clipboard.writeText(apiKey)}
            className="border border-white/20 hover:border-white/40 px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Copy
          </button>
          <button className="border border-white/20 hover:border-red-400 px-4 py-2 rounded-lg text-sm text-red-400 transition-colors">
            Regenerate
          </button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-2 gap-4">
        <a
          href="/docs"
          className="bg-surface-light border border-white/10 rounded-xl p-6 hover:border-brand/30 transition-colors"
        >
          <h3 className="font-semibold mb-1">📖 API Docs</h3>
          <p className="text-text-muted text-sm">Quick start guides and model reference.</p>
        </a>
        <a
          href="/pricing"
          className="bg-surface-light border border-white/10 rounded-xl p-6 hover:border-brand/30 transition-colors"
        >
          <h3 className="font-semibold mb-1">⬆️ Upgrade Plan</h3>
          <p className="text-text-muted text-sm">Need more tokens? Upgrade anytime.</p>
        </a>
      </div>
    </div>
  );
}
