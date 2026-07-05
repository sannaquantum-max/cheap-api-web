import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — CheapAPI",
  description: "About CheapAPI — 10x cheaper AI API, same quality",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">About CheapAPI</h1>

      <section className="space-y-8 text-text-muted leading-relaxed">
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">Our Mission</h2>
          <p>
            CheapAPI makes AI accessible to every developer. By aggregating the best Chinese AI models —{" "}
            DeepSeek, Qwen, GLM, Doubao, and Kimi — and delivering them through a single OpenAI-compatible API,{" "}
            we cut your AI costs by 10-25x compared to GPT-4o.
          </p>
        </div>

        <div>
          <h2 className="text-white text-xl font-semibold mb-3">Why We Exist</h2>
          <p>
            The best Chinese AI models now match or exceed GPT-4o quality — at 1/10th the price.{" "}
            But most Western developers don&apos;t know they exist, or find them too inconvenient to access.{" "}
            We bridge that gap: one API key, one base URL, instant access to five world-class models.
          </p>
        </div>

        <div>
          <h2 className="text-white text-xl font-semibold mb-3">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {[
              { step: "1", title: "You subscribe", desc: "Pick a plan from $6.99/month. Get your API key instantly." },
              { step: "2", title: "We route", desc: "Your requests auto-route to the best available model." },
              { step: "3", title: "You save", desc: "Same quality, 10-25x cheaper than OpenAI. No lock-in." },
            ].map((s) => (
              <div key={s.step} className="bg-surface-light border border-white/10 rounded-xl p-5">
                <div className="text-brand font-bold text-lg mb-1">{s.step}</div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-xl font-semibold mb-3">The Models We Serve</h2>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            {[
              ["DeepSeek-V3 / R1", "General purpose & reasoning, GPT-4o quality"],
              ["Alibaba Qwen-Max / Plus", "Multilingual, enterprise-grade"],
              ["Zhipu GLM-4 / Flash", "Best value, Flash tier is free"],
              ["ByteDance Doubao-Pro / Lite", "Fastest, cheapest inference"],
              ["Moonshot Kimi", "128K context for long documents"],
            ].map(([name, desc]) => (
              <div key={name} className="flex items-start gap-3 bg-surface-light border border-white/10 rounded-lg p-3">
                <span className="text-brand mt-0.5 text-sm">▸</span>
                <div>
                  <h4 className="text-white text-sm font-medium">{name}</h4>
                  <p className="text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white text-xl font-semibold mb-3">Our Commitment</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li><strong className="text-white">No lock-in.</strong> OpenAI-compatible API. Switch back anytime.</li>
            <li><strong className="text-white">Privacy-first.</strong> We don&apos;t store your prompts or responses.</li>
            <li><strong className="text-white">Transparent pricing.</strong> No hidden fees. Cancel anytime.</li>
            <li><strong className="text-white">Global CDN.</strong> Low-latency endpoints in US, EU, and Asia.</li>
          </ul>
        </div>

        <div className="bg-surface-light border border-brand/20 rounded-xl p-8 text-center">
          <h2 className="text-white text-xl font-semibold mb-2">Ready to save 90% on AI?</h2>
          <a href="/pricing" className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold mt-4 transition-colors">
            View Plans from $6.99/mo →
          </a>
        </div>
      </section>
    </div>
  );
}
