export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-20">

      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <div className="inline-block mx-auto bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff]">
          Built for bootcamp grads &amp; career changers
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Review your GitHub portfolio<br />
          <span className="text-[#58a6ff]">like a hiring manager</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto">
          Get an AI-powered analysis of your GitHub profile and receive specific, actionable feedback to dramatically improve your chances of landing a dev job.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get Portfolio Review — $8/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e] pt-2">
          <span>✓ GitHub API analysis</span>
          <span>✓ AI-powered feedback</span>
          <span>✓ Actionable report</span>
          <span>✓ Cancel anytime</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold text-white">Simple, affordable pricing</h2>
        <div className="w-full max-w-sm bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-[#58a6ff] font-medium uppercase tracking-wide">Pro Plan</span>
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold text-white">$8</span>
              <span className="text-[#8b949e] mb-2">/month</span>
            </div>
            <p className="text-[#8b949e] text-sm">Everything you need to stand out to hiring managers.</p>
          </div>
          <ul className="flex flex-col gap-3 text-sm">
            {[
              "Full GitHub profile analysis",
              "AI-generated improvement report",
              "Project quality scoring",
              "README & documentation tips",
              "Commit history insights",
              "Unlimited monthly reviews"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors text-center text-base"
          >
            Start for $8/mo
          </a>
          <p className="text-xs text-[#8b949e] text-center">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions</h2>
        <div className="flex flex-col gap-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-white">How does the portfolio analysis work?</h3>
            <p className="text-[#8b949e] text-sm">You authenticate with GitHub and we use the GitHub API to pull your public repositories, commit history, README files, and profile data. Our AI then evaluates your portfolio against what hiring managers actually look for and generates a detailed feedback report.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-white">Who is this for?</h3>
            <p className="text-[#8b949e] text-sm">PortfolioReview is built specifically for coding bootcamp graduates and career changers who are applying for their first or second developer role. If you have a GitHub profile and want honest, specific feedback, this is for you.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-white">Can I cancel my subscription?</h3>
            <p className="text-[#8b949e] text-sm">Yes, absolutely. You can cancel at any time from your billing portal with no questions asked. You keep access until the end of your current billing period.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} PortfolioReview. All rights reserved.
      </footer>
    </main>
  );
}
