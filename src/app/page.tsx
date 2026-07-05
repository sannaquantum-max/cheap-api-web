import Link from "next/link";

const models = [
  { name: "DeepSeek-V3", price: "$0.27 / $1.10", quality: "GPT-4o", savings: "10x" },
  { name: "Qwen-Max", price: "$0.40 / $1.20", quality: "GPT-4o", savings: "8x" },
  { name: "GLM-4", price: "$0.14 / $0.14", quality: "GPT-4 Turbo", savings: "20x" },
  { name: "Doubao-Pro", price: "$0.11 / $0.28", quality: "GPT-4o-mini", savings: "25x" },
  { name: "Kimi", price: "$0.21 / $0.83", quality: "GPT-4o (128K)", savings: "12x" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm mb-6">
          🔥 Now serving 5 Chinese AI models through one API
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Same AI Quality.
          <br />
          <span className="text-brand">10x Cheaper.</span>
        </h1>
        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-8">
          One API key. Five models. Zero lock-in. Just change your{" "}
          <code className="bg-surface-light px-1.5 py-0.5 rounded text-brand text-sm">base_url</code>{" "}
          and start saving $100s every month.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pricing"
            className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            View Plans from $6.99/mo →
          </Link>
          <Link
            href="/docs"
            className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Read Docs
          </Link>
        </div>
        <div className="mt-6 text-text-muted text-sm">
          No credit card required to try • Cancel anytime • 10K free test tokens
        </div>
      </section>

      {/* Code Demo */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="bg-surface-light rounded-xl overflow-hidden border border-white/10">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/30 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-text-muted text-xs ml-2">3 lines to switch from OpenAI</span>
          </div>
          <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
            <code>
              <span className="text-text-muted">from</span>{" "}
              <span className="text-yellow-400">openai</span>{" "}
              <span className="text-text-muted">import</span>{" "}
              <span className="text-blue-400">OpenAI</span>{"\n\n"}
              <span className="text-blue-400">client</span> ={" "}
              <span className="text-blue-400">OpenAI</span>({"\n"}
              {"  "}<span className="text-green-400">base_url</span>=<span className="text-orange-300">"https://api.cheap-api.io/v1"</span>,{"\n"}
              {"  "}<span className="text-green-400">api_key</span>=<span className="text-orange-300">"sk-th-your-key-here"</span>,{"\n"}
              ){"\n\n"}
              <span className="text-blue-400">response</span> ={" "}
              <span className="text-blue-400">client</span>.chat.completions.create({" "}
              <span className="text-green-400">model</span>=<span className="text-orange-300">"deepseek-chat"</span>, ...)
            </code>
          </pre>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          How much you save vs OpenAI
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-text-muted text-sm">
                <th className="py-3 px-4">Model</th>
                <th className="py-3 px-4">Price (input/output per 1M tokens)</th>
                <th className="py-3 px-4">Comparable to</th>
                <th className="py-3 px-4 text-brand">You Save</th>
              </tr>
            </thead>
            <tbody>
              {models.map((m) => (
                <tr key={m.name} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-4 px-4 font-medium">{m.name}</td>
                  <td className="py-4 px-4 font-mono text-sm">{m.price}</td>
                  <td className="py-4 px-4">{m.quality}</td>
                  <td className="py-4 px-4 text-brand font-semibold">{m.savings} cheaper</td>
                </tr>
              ))}
              <tr className="bg-brand/5">
                <td className="py-4 px-4 font-medium text-text-muted">GPT-4o</td>
                <td className="py-4 px-4 font-mono text-sm text-text-muted">$2.50 / $10.00</td>
                <td className="py-4 px-4 text-text-muted">—</td>
                <td className="py-4 px-4 text-text-muted">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface-light py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why developers choose CheapAPI
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "10-25x Cheaper",
                desc: "Same model quality as GPT-4o. Save hundreds every month on API costs.",
              },
              {
                icon: "🔌",
                title: "Drop-in Replacement",
                desc: "OpenAI-compatible API. Change one line of code and you're done.",
              },
              {
                icon: "🔄",
                title: "Auto-Routing",
                desc: "Requests auto-route to the cheapest available model. Zero config.",
              },
              {
                icon: "📊",
                title: "Usage Dashboard",
                desc: "Real-time token usage tracking. Know exactly what you spend.",
              },
              {
                icon: "🔐",
                title: "No Lock-in",
                desc: "Cancel anytime. Your data passes through, we don't store it.",
              },
              {
                icon: "🌍",
                title: "Global CDN",
                desc: "API endpoints worldwide. Low latency from US, EU, and Asia.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-surface border border-white/10 rounded-xl p-6 hover:border-brand/30 transition-colors"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-text-muted text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to cut your AI costs by 90%?
        </h2>
        <p className="text-text-muted mb-8">
          Join developers worldwide who switched to CheapAPI.
        </p>
        <Link
          href="/pricing"
          className="bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
        >
          View Plans — Starting at $6.99/mo →
        </Link>
      </section>
    </>
  );
}
