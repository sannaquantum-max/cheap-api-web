import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CheapAPI — 10x Cheaper AI API, Same Quality",
  description:
    "Get OpenAI-compatible API access to DeepSeek, Qwen, GLM and more. Same quality as GPT-4o, 10-25x cheaper. No lock-in, cancel anytime.",
  keywords: ["cheap AI API", "OpenAI alternative", "DeepSeek API", "LLM API gateway", "affordable AI API"],
  openGraph: {
    title: "CheapAPI — 10x Cheaper AI API",
    description: "Same GPT-4o quality, 10x cheaper. DeepSeek, Qwen, GLM at your fingertips.",
    url: "https://cheap-api.io",
    siteName: "CheapAPI",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 py-8 text-center text-text-muted text-sm">
          <div className="max-w-6xl mx-auto px-4">
            <p>© {new Date().getFullYear()} CheapAPI. All rights reserved.</p>
            <p className="mt-1">
              Powered by DeepSeek · Qwen · GLM · Doubao |{" "}
              <a href="/docs" className="text-brand hover:underline">Docs</a> ·{" "}
              <a href="/pricing" className="text-brand hover:underline">Pricing</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
