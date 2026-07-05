import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — CheapAPI",
  description: "Terms of Service for CheapAPI — 10x Cheaper AI API",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <p className="text-text-muted mb-6">Last updated: July 5, 2026</p>

      <section className="space-y-6 text-text-muted leading-relaxed">
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>By accessing or using CheapAPI (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">2. Description of Service</h2>
          <p>CheapAPI provides an API gateway that gives developers access to third-party AI language models including DeepSeek, Qwen, GLM, Doubao, and others. We act as a reseller and aggregator of these third-party APIs.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">3. Account Registration</h2>
          <p>You must register for an account to use the Service. You are responsible for maintaining the confidentiality of your API keys and account credentials. You are liable for all activity under your account.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">4. Subscription &amp; Payment</h2>
          <p>Services are provided on a subscription basis. Fees are charged monthly in advance and are non-refundable except as stated in our Refund Policy. We reserve the right to change pricing with 30 days notice.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">5. Fair Use</h2>
          <p>Token usage is subject to your plan limits. We reserve the right to rate-limit or suspend accounts that abuse the Service, including but not limited to: illegal content generation, excessive concurrent requests, or attempts to resell the API without authorization.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">6. Service Availability</h2>
          <p>We strive for high availability but do not guarantee uninterrupted access. The Service depends on third-party model providers and may experience downtime beyond our control.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">7. Limitation of Liability</h2>
          <p>CheapAPI is provided &quot;as is&quot; without warranties. We are not liable for any damages arising from your use of the Service, including but not limited to data loss, business interruption, or third-party model outputs.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">8. Termination</h2>
          <p>Either party may terminate the agreement at any time. Upon termination, your right to access the Service immediately ceases. Any outstanding fees remain payable.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">9. Contact</h2>
          <p>For questions about these Terms, contact us at <a href="mailto:support@cheap-api.io" className="text-brand hover:underline">support@cheap-api.io</a>.</p>
        </div>
      </section>
    </div>
  );
}
