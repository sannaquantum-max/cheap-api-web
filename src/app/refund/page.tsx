import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — CheapAPI",
  description: "Refund Policy for CheapAPI — 10x Cheaper AI API",
};

export default function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Refund Policy</h1>
      <p className="text-text-muted mb-6">Last updated: July 5, 2026</p>

      <section className="space-y-6 text-text-muted leading-relaxed">
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">1. Digital Products</h2>
          <p>CheapAPI sells access to API token usage — a digital, consumable service. Once tokens are consumed, they cannot be returned or refunded.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">2. 7-Day Money-Back Guarantee</h2>
          <p>We offer a 7-day money-back guarantee on your first subscription payment. If you are unsatisfied for any reason, contact us within 7 days of your first payment and we will issue a full refund. After this period, subscriptions are non-refundable.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">3. Service Downtime</h2>
          <p>If the Service experiences significant downtime (over 24 consecutive hours) due to our fault, we will issue a prorated credit or refund for the affected period upon request.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">4. Billing Errors</h2>
          <p>If you believe you were billed in error, contact us within 30 days of the charge. We will investigate and, if confirmed, issue a refund for the incorrect amount.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">5. Cancellation</h2>
          <p>You may cancel your subscription at any time from your Dashboard. Cancellation takes effect at the end of the current billing period. You retain access until that date. No partial refunds are issued for mid-cycle cancellations.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">6. Unused Tokens</h2>
          <p>Monthly token quotas reset at the beginning of each billing cycle. Unused tokens do not roll over and are non-refundable.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">7. Contact</h2>
          <p>For refund requests, contact us at <a href="mailto:support@cheap-api.io" className="text-brand hover:underline">support@cheap-api.io</a>. Please include your account email and order details.</p>
        </div>
      </section>
    </div>
  );
}
