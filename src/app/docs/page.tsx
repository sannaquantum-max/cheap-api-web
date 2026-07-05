export default function Docs() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">API Documentation</h1>
      <p className="text-text-muted mb-8">Get started with CheapAPI in 3 minutes.</p>

      {/* Quick Start */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Quick Start</h2>
        <div className="bg-surface-light rounded-xl border border-white/10 p-6 mb-6">
          <h3 className="font-medium mb-3 text-brand">1. Get your API key</h3>
          <p className="text-text-muted text-sm mb-4">
            After subscribing, your API key is sent to your email. It looks like:{" "}
            <code className="bg-surface px-1.5 py-0.5 rounded text-orange-300 text-xs">
              sk-th-xxxxxxxxxxxx
            </code>
          </p>

          <h3 className="font-medium mb-3 text-brand">2. Install OpenAI SDK</h3>
          <div className="bg-surface rounded-lg p-4 mb-4">
            <code className="text-sm">pip install openai</code>
          </div>

          <h3 className="font-medium mb-3 text-brand">3. Make your first request</h3>
          <div className="bg-surface rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm leading-relaxed">
              <code>
                <span className="text-text-muted">from</span>{" "}
                <span className="text-yellow-400">openai</span>{" "}
                <span className="text-text-muted">import</span>{" "}
                <span className="text-blue-400">OpenAI</span>
                {"\n\n"}
                <span className="text-blue-400">client</span> ={" "}
                <span className="text-blue-400">OpenAI</span>({"\n"}
                {"  "}<span className="text-green-400">base_url</span>=
                <span className="text-orange-300">"https://api.cheap-api.io/v1"</span>,{"\n"}
                {"  "}<span className="text-green-400">api_key</span>=
                <span className="text-orange-300">"sk-th-your-key-here"</span>,{"\n"}
                ){"\n\n"}
                <span className="text-blue-400">response</span> ={" "}
                <span className="text-blue-400">client</span>.chat.completions.create({"{"}
                {"\n"}
                {"  "}<span className="text-green-400">"model"</span>:{" "}
                <span className="text-orange-300">"deepseek-chat"</span>,{"\n"}
                {"  "}<span className="text-green-400">"messages"</span>: [{"{"}
                {"\n"}
                {"    "}<span className="text-green-400">"role"</span>:{" "}
                <span className="text-orange-300">"user"</span>,{"\n"}
                {"    "}<span className="text-green-400">"content"</span>:{" "}
                <span className="text-orange-300">"Hello, world!"</span>,{"\n"}
                {"  "}{"}"}],{"\n"}
                {"}"}){"\n\n"}
                <span className="text-blue-400">print</span>(
                <span className="text-blue-400">response</span>.choices[0].message.content)
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Available Models</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-text-muted text-sm">
                <th className="py-3 px-4">Model ID</th>
                <th className="py-3 px-4">Provider</th>
                <th className="py-3 px-4">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["deepseek-chat", "DeepSeek-V3", "General purpose, coding"],
                ["deepseek-reasoner", "DeepSeek-R1", "Math, logic, reasoning"],
                ["qwen-max", "Alibaba Qwen-Max", "Multilingual, enterprise"],
                ["qwen-plus", "Alibaba Qwen-Plus", "Balanced perf/cost"],
                ["doubao-pro", "ByteDance Doubao-Pro", "Fast, ultra-cheap"],
                ["doubao-lite", "ByteDance Doubao-Lite", "Lightweight, cheapest"],
                ["glm-4", "Zhipu GLM-4", "General purpose, great value"],
                ["glm-4-flash", "Zhipu GLM-4 Flash", "Lightweight, free tier"],
                ["kimi", "Moonshot Kimi", "Long context 128K, documents"],
              ].map(([id, provider, best]) => (
                <tr key={id} className="border-b border-white/5">
                  <td className="py-3 px-4 font-mono text-sm text-brand">{id}</td>
                  <td className="py-3 px-4">{provider}</td>
                  <td className="py-3 px-4 text-text-muted">{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Endpoints */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">API Endpoints</h2>
        <div className="space-y-4">
          {[
            { method: "POST", path: "/v1/chat/completions", desc: "Chat completions (OpenAI-compatible)" },
            { method: "GET", path: "/v1/models", desc: "List available models" },
            { method: "GET", path: "/health", desc: "Health check" },
          ].map((e) => (
            <div key={e.path} className="bg-surface-light border border-white/10 rounded-lg p-4 flex items-center gap-4">
              <span className="bg-brand/20 text-brand px-2 py-0.5 rounded text-xs font-mono font-bold">{e.method}</span>
              <code className="text-sm">{e.path}</code>
              <span className="text-text-muted text-sm ml-auto">{e.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Rate Limits */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Rate Limits & Errors</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-text-muted text-sm">
              <th className="py-3 px-4">HTTP Code</th>
              <th className="py-3 px-4">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["200", "Success"],
              ["401", "Invalid or missing API key"],
              ["429", "Monthly quota exceeded or rate limit hit — upgrade your plan"],
              ["503", "Upstream model temporarily unavailable, retry in 5s"],
            ].map(([code, meaning]) => (
              <tr key={code} className="border-b border-white/5">
                <td className="py-3 px-4 font-mono text-sm font-bold">{code}</td>
                <td className="py-3 px-4 text-sm">{meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
