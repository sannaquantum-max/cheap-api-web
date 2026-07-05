import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CheapAPI",
  description: "Privacy Policy for CheapAPI — 10x Cheaper AI API",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-text-muted mb-6">Last updated: July 5, 2026</p>

      <section className="space-y-6 text-text-muted leading-relaxed">
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">1. Information We Collect</h2>
          <p>When you register, we collect your email address and account information. When you use the API, we log request metadata (model, token count, timestamp) for billing purposes. We do NOT store, log, or read the content of your API requests or responses.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">2. How We Use Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide and maintain the Service</li>
            <li>To process payments and manage subscriptions</li>
            <li>To calculate and display your token usage</li>
            <li>To send service-related communications (billing, updates, security)</li>
            <li>To improve the Service through aggregated, anonymized analytics</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">3. Data Through API</h2>
          <p>Your API requests are transmitted to third-party model providers (DeepSeek, Alibaba Cloud, Zhipu AI, ByteDance) for processing. We do not permanently store your prompt or response content. Data is processed in transit only.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">4. Payment Information</h2>
          <p>Payments are processed by Paddle, our Merchant of Record. We do not store your credit card or payment details. Paddle&apos;s privacy policy governs the handling of your payment data.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">5. Cookies</h2>
          <p>We use essential cookies for authentication and session management. We do not use tracking cookies or third-party analytics that track you across sites.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">6. Data Sharing</h2>
          <p>We do not sell, rent, or share your personal data with third parties except as necessary to provide the Service (e.g., payment processing via Paddle, API routing to model providers).</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">7. Your Rights</h2>
          <p>You may request deletion of your account and associated data at any time by contacting us. We will comply within 30 days.</p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-2">8. Contact</h2>
          <p>For privacy inquiries, contact us at <a href="mailto:support@cheap-api.io" className="text-brand hover:underline">support@cheap-api.io</a>.</p>
        </div>
      </section>
    </div>
  );
}
