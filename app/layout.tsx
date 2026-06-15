import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PortfolioReview — Review coding portfolios like a hiring manager",
  description: "AI-powered GitHub portfolio analysis for bootcamp grads and career changers. Get actionable feedback to land your first dev job."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9b794402-07da-4179-942c-31c61d012725"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
