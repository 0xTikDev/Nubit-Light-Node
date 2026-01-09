.container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  overflow: hidden;
}

.diagram {
  width: 100%;
  height: auto;
}

.node {
  fill: #f3f4f6;
  stroke: #d1d5db;
  stroke-width: 2;
  transition: all 0.6s ease;
}

.nodeText {
  font-size: 14px;
  font-weight: 600;
  text-anchor: middle;
  fill: #1f2937;
}

.state1 { fill: #e5e7eb; }
.state2 { fill: #dbeafe; }
.statePending { fill: #fef3c7; } /* yellow */
.stateYellow { fill: #fef08a; }
.stateWebhook { fill: #d1fae5; }
.stateInternal { fill: #a7f3d0; }
.stateGreen { fill: #bbf7d0; } /* confirmed green */
.stateNeutral { fill: #f3f4f6; }

.solidflowPoint {
  fill: #3b82f6;
  opacity: 0;
  animation: pulse 2s infinite;
}

.solidflowText {
  font-size: 12px;
  fill: white;
  text-anchor: middle;
}

.arrow {
  fill: none;
  stroke: #9ca3af;
  stroke-width: 3;
  stroke-linecap: round;
}

.flow {
  stroke-dasharray: 12 8;
  stroke-dashoffset: 20;
  animation: flow 4s linear infinite paused;
}

.failureFlow {
  stroke: #ef4444;
  stroke-dasharray: 10 5;
  animation: flow 5s linear infinite paused;
}

.failureText {
  font-size: 13px;
  fill: #ef4444;
  opacity: 0;
}

.animate .flow,
.animate .failureFlow {
  animation-play-state: running;
}

@keyframes flow {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.15); }
}

.overlayText {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.6);
  padding: 1rem 2rem;
  border-radius: 12px;
  pointer-events: none;
}

@media (max-width: 768px) {
  .diagram { height: 600px; }
}
