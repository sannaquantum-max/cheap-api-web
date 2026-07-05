import PaddleCheckout from "@/components/PaddleCheckout";

const plans = [
  {
    name: "Starter",
    price: "$6.99",
    tokens: "5M",
    tokensLabel: "5,000,000 tokens/month",
    rate: "100 req/min",
    support: "Email (24h)",
    highlight: false,
    paddlePriceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_STARTER || "pri_starter",
  },
  {
    name: "Pro",
    price: "$24.99",
    tokens: "20M",
    tokensLabel: "20,000,000 tokens/month",
    rate: "300 req/min",
    support: "Priority email",
    highlight: true,
    paddlePriceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_PRO || "pri_pro",
  },
  {
    name: "Team",
    price: "$89.99",
    tokens: "100M",
    tokensLabel: "100,000,000 tokens/month",
    rate: "1,000 req/min",
    support: "Slack + email <4h",
    highlight: false,
    paddlePriceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_TEAM || "pri_team",
  },
  {
    name: "Enterprise",
    price: "$249.99",
    tokens: "500M",
    tokensLabel: "500,000,000 tokens/month",
    rate: "Custom",
    support: "24/7 dedicated",
    highlight: false,
    paddlePriceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_ENTERPRISE || "pri_enterprise",
  },
];

export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h1>
        <p className="text-text-muted text-lg">
          All plans include all models. Upgrade or cancel anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-xl border p-6 flex flex-col ${
              p.highlight
                ? "border-brand bg-brand/5 ring-1 ring-brand"
                : "border-white/10 bg-surface-light"
            }`}
          >
            {p.highlight && (
              <div className="text-xs font-semibold text-brand mb-2 uppercase tracking-wide">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold mb-1">{p.name}</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">{p.price}</span>
              <span className="text-text-muted">/month</span>
            </div>
            <ul className="space-y-3 mb-6 flex-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">✓</span>
                <span>{p.tokensLabel}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">✓</span>
                <span>All 5 models included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">✓</span>
                <span>OpenAI-compatible API</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">✓</span>
                <span>{p.rate}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-text-muted mt-0.5">•</span>
                <span className="text-text-muted">{p.support}</span>
              </li>
            </ul>
            <PaddleCheckout
              priceId={p.paddlePriceId}
              planName={p.name}
              className={`block text-center py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                p.highlight
                  ? "bg-brand hover:bg-brand-dark text-white"
                  : "border border-white/20 hover:border-white/40 text-white"
              }`}
            >
              Get {p.name}
            </PaddleCheckout>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-20 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel anytime from your dashboard. No long-term contracts.",
            },
            {
              q: "What happens if I exceed my token limit?",
              a: "Your API will return a 429 error. Upgrade to a higher plan or wait for the monthly reset.",
            },
            {
              q: "Do unused tokens roll over?",
              a: "No. Tokens reset on the 1st of each month.",
            },
            {
              q: "Can I switch plans mid-month?",
              a: "Yes. Upgrade anytime and the difference is prorated. Downgrades take effect next billing cycle.",
            },
            {
              q: "Is there a free trial?",
              a: "We don't offer free trials, but our Starter plan is only $6.99 — less than a coffee.",
            },
            {
              q: "Which models are included?",
              a: "All plans include DeepSeek-V3, DeepSeek-R1, Qwen-Max, and GLM-4. More models coming soon.",
            },
          ].map((faq) => (
            <div key={faq.q} className="border-b border-white/10 pb-4">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-text-muted text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
