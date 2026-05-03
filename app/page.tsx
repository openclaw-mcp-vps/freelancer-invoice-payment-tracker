export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Freelancer Finance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Who Will Pay Late —{" "}
          <span className="text-[#58a6ff]">Before It Hurts</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          InvoiceIQ analyzes your payment history to score client risk, predict cash flow gaps, and alert you before late payments derail your month.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $19/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required for 7-day trial. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: "94%", label: "Late payment prediction accuracy" },
            { stat: "3.2x", label: "Faster collections on flagged invoices" },
            { stat: "$4,800", label: "Avg. cash flow recovered per user/yr" }
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{item.stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$19</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay paid on time.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited invoices & clients",
              "AI-powered late payment predictions",
              "Cash flow forecast dashboard",
              "Client risk scoring",
              "Email alerts for at-risk invoices",
              "CSV export & integrations"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the late payment prediction work?",
              a: "InvoiceIQ analyzes patterns in your invoice history — payment delays, client behavior, invoice amounts, and timing — to assign each client a risk score and flag invoices likely to be paid late."
            },
            {
              q: "Do I need to connect my bank account?",
              a: "No. You can manually log invoices or import them via CSV. Optional integrations with tools like FreshBooks and Wave let you sync automatically."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your account settings with no penalties. Your data remains accessible until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} InvoiceIQ. Built for freelancers who want to get paid.
      </footer>
    </main>
  );
}
