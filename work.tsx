// components/SolidFlowAnimatedFlow.tsx
'use client';

import { useEffect, useRef } from 'react';
import styles from './SolidFlowAnimatedFlow.module.css';

const SolidFlowAnimatedFlow = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Optional: Pause animation on scroll out of view (performance)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        } else {
          entry.target.classList.remove(styles.animate);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <svg
        className={styles.diagram}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Nodes (States) */}
        <g className={styles.nodeGroup}>
          {/* 1. Initiated */}
          <rect x="100" y="100" width="180" height="80" rx="12" className={`${styles.node} ${styles.state1}`} />
          <text x="190" y="140" className={styles.nodeText}>Payment Initiated</text>

          {/* 2. Authorized */}
          <rect x="350" y="100" width="180" height="80" rx="12" className={`${styles.node} ${styles.state2}`} />
          <text x="440" y="140" className={styles.nodeText}>Authorized</text>

          {/* 3. Pending */}
          <rect x="600" y="100" width="180" height="80" rx="12" className={`${styles.node} ${styles.statePending}`} />
          <text x="690" y="140" className={styles.nodeText}>Pending / Processing</text>

          {/* 4. Provider Response */}
          <rect x="850" y="100" width="180" height="80" rx="12" className={`${styles.node} ${styles.stateYellow}`} />
          <text x="940" y="140" className={styles.nodeText}>Provider Response</text>

          {/* 5. Webhook (Source of Truth) */}
          <rect x="600" y="250" width="180" height="80" rx="12" className={`${styles.node} ${styles.stateWebhook}`} />
          <text x="690" y="290" className={styles.nodeText}>Webhook Received</text>

          {/* 6. Internal Update */}
          <rect x="600" y="380" width="180" height="80" rx="12" className={`${styles.node} ${styles.stateInternal}`} />
          <text x="690" y="420" className={styles.nodeText}>Internal Update</text>

          {/* 7. Fulfillment */}
          <rect x="600" y="510" width="180" height="80" rx="12" className={`${styles.node} ${styles.stateGreen}`} />
          <text x="690" y="550" className={styles.nodeText}>Fulfillment</text>

          {/* 8. Post-Monitoring */}
          <rect x="600" y="640" width="180" height="80" rx="12" className={`${styles.node} ${styles.stateNeutral}`} />
          <text x="690" y="680" className={styles.nodeText}>Post-Monitoring</text>

          {/* SolidFlow Intervention Points (blue highlights) */}
          <circle cx="900" cy="140" r="30" className={styles.solidflowPoint} />
          <text x="900" y="145" className={styles.solidflowText}>SolidFlow</text>
          {/* More points can be added at other risky transitions */}
        </g>

        {/* Arrows with flowing animation */}
        <g className={styles.arrowGroup}>
          <path
            d="M280,140 H350"
            className={`${styles.arrow} ${styles.flow}`}
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M530,140 H600"
            className={`${styles.arrow} ${styles.flow}`}
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M780,140 Q850,140 850,250 Q850,300 780,300"
            className={`${styles.arrow} ${styles.flow}`}
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M690,330 V380"
            className={`${styles.arrow} ${styles.flow}`}
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M690,460 V510"
            className={`${styles.arrow} ${styles.flow}`}
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M690,590 V640"
            className={`${styles.arrow} ${styles.flow}`}
            markerEnd="url(#arrowhead)"
          />

          {/* Failure / Recovery loop example */}
          <path
            d="M780,140 Q900,50 1000,140 Q1100,230 900,300 Q780,300 780,250"
            className={`${styles.arrow} ${styles.failureFlow}`}
            markerEnd="url(#arrowhead-red)"
          />
          <text x="950" y="180" className={styles.failureText}>Failure / Recovery Loop</text>
        </g>

        {/* Arrowhead definitions */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#4f46e5" />
          </marker>
          <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
          </marker>
        </defs>
      </svg>

      {/* Optional overlay text */}
      <div className={styles.overlayText}>
        <h2>SolidFlow Owns the State Machine</h2>
        <p>Stabilizing every transition — so you never lose money to misunderstood states.</p>
      </div>
    </div>
  );
};

export default SolidFlowAnimatedFlow;
