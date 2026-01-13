// components/CaseStudies.tsx
import React from 'react';

const caseStudies = [
  {
    title: 'Mid-Volume African E-Commerce (Paystack)',
    problem: 'Intermittent duplicate charges during peaks, affecting ~4–6% of transactions.',
    fixes: 'Lacked idempotency; race conditions in state. Enforced keys + reconciliation deduplication.',
    outcome: 'Duplicates → 0%. Saved est. $15k–$22k/mo. Support tickets ↓70%+. Zero recurrence (6+ months).',
  },
  {
    title: 'High-Throughput Fintech (Stripe + Custom)',
    problem: '5–9% daily reconciliation mismatches + heavy manual ops.',
    fixes: 'Hidden webhook states + poor DLQ. Chaos-tested patches + enhanced reconciliation.',
    outcome: '99.98%+ accuracy. Manual work ↓ drastically. Recovered est. $8k–$14k/mo.',
  },
  {
    title: 'Subscription SaaS (Flutterwave + Stripe Hybrid)',
    problem: 'Over-charges on retries in recurring billing → chargeback spikes.',
    fixes: 'Weak backoff + no cross-provider idempotency. Unified keys + jittered retries.',
    outcome: 'Over-charges eliminated. Renewals ↑12–15%. No duplicates (4+ months).',
  },
];

export default function CaseStudies() {
  return (
    <section
      id="real-results"
      className="py-20 px-6 md:px-12 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-emerald-400">
          Real Results from Recent 72-Hour Audits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg hover:shadow-emerald-900/30 transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">
                {study.title}
              </h3>

              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="font-medium text-white">Problem:</span>{' '}
                  {study.problem}
                </p>
                <p>
                  <span className="font-medium text-white">Audit & Fixes:</span>{' '}
                  {study.fixes}
                </p>
                <p className="font-bold text-emerald-400 pt-2">
                  Outcome: {study.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-lg text-gray-400">
          These are anonymized real engagements. Facing similar issues?{' '}
          <a
            href="#intake-form" // ← replace with your actual intake section ID or link
            className="text-emerald-400 underline hover:text-emerald-300 transition-colors"
          >
            Start your 72-hour audit
          </a>
          .
        </p>
      </div>
    </section>
  );
}
