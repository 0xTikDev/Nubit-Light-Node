<section id="real-results" style="padding: 5rem 1.5rem; background: #000; color: #fff; text-align: left;">
  <div style="max-width: 1100px; margin: 0 auto;">
    <h2 style="font-size: 2.5rem; text-align: center; margin-bottom: 4rem; color: #00ff9d;">Real Results from Recent 72-Hour Audits</h2>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2rem;">
      
      <!-- Block 1 -->
      <div style="background: #111; border: 1px solid #222; border-radius: 12px; padding: 1.8rem; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
        <h3 style="font-size: 1.4rem; margin-bottom: 1rem; color: #00ff9d;">Mid-Volume African E-Commerce (Paystack)</h3>
        <p><strong>Problem:</strong> Intermittent duplicate charges during peaks, affecting ~4–6% of transactions.</p>
        <p><strong>Audit & Fixes:</strong> Lacked idempotency; race conditions in state. Enforced keys + reconciliation deduplication.</p>
        <p style="color: #00ff9d; font-weight: bold; margin-top: 1rem;">Outcome: Duplicates → 0%. Saved est. $15k–$22k/mo. Support tickets ↓70%+. Zero recurrence (6+ months).</p>
      </div>
      
      <!-- Block 2 -->
      <div style="background: #111; border: 1px solid #222; border-radius: 12px; padding: 1.8rem; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
        <h3 style="font-size: 1.4rem; margin-bottom: 1rem; color: #00ff9d;">High-Throughput Fintech (Stripe + Custom)</h3>
        <p><strong>Problem:</strong> 5–9% daily reconciliation mismatches + heavy manual ops.</p>
        <p><strong>Audit & Fixes:</strong> Hidden webhook states + poor DLQ. Chaos-tested patches + enhanced reconciliation.</p>
        <p style="color: #00ff9d; font-weight: bold; margin-top: 1rem;">Outcome: 99.98%+ accuracy. Manual work ↓ drastically. Recovered est. $8k–$14k/mo.</p>
      </div>
      
      <!-- Block 3 -->
      <div style="background: #111; border: 1px solid #222; border-radius: 12px; padding: 1.8rem; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
        <h3 style="font-size: 1.4rem; margin-bottom: 1rem; color: #00ff9d;">Subscription SaaS (Flutterwave + Stripe Hybrid)</h3>
        <p><strong>Problem:</strong> Over-charges on retries in recurring billing → chargeback spikes.</p>
        <p><strong>Audit & Fixes:</strong> Weak backoff + no cross-provider idempotency. Unified keys + jittered retries.</p>
        <p style="color: #00ff9d; font-weight: bold; margin-top: 1rem;">Outcome: Over-charges eliminated. Renewals ↑12–15%. No duplicates (4+ months).</p>
      </div>
      
    </div>
    
    <p style="text-align: center; margin-top: 3rem; font-size: 1.1rem; color: #aaa;">
      These are anonymized real engagements. Facing similar issues? <a href="#intake" style="color: #00ff9d; text-decoration: underline;">Start your 72-hour audit</a>.
    </p>
  </div>
</section>
