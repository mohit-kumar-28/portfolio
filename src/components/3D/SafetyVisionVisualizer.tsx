import React, { useState, useEffect } from 'react';
import { Camera, ShieldCheck, AlertTriangle, FileText } from 'lucide-react';

export const SafetyVisionVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: 'Camera Stream', icon: Camera, desc: 'Shopfloor 1080p live surveillance feed' },
    { label: 'YOLOv11', icon: ShieldCheck, desc: 'Object detection & PPE segmentation' },
    { label: 'PPE Check', icon: ShieldCheck, desc: 'Helmet + Vest + Footwear verified' },
    { label: 'Restricted-Zone', icon: AlertTriangle, desc: 'Polygon boundary intrusion logic' },
    { label: 'Alerting', icon: FileText, desc: 'Real-time alert dispatch & Streamlit logging' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="editorial-card p-5 sm:p-6 space-y-5">
      {/* Visualizer Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-xs font-mono font-semibold text-slate-900 uppercase tracking-wider">
            TATA MOTORS • COMPUTER VISION PIPELINE
          </span>
        </div>
        <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold border border-emerald-200">
          YOLOv11 &amp; OpenCV
        </span>
      </div>

      {/* Camera Feed Simulation Box */}
      <div className="relative w-full h-[140px] rounded-xl bg-slate-900 overflow-hidden flex flex-col justify-between p-3 shadow-inner">
        {/* Top HUD */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
            REC • CAM-04
          </span>
          <span className="text-emerald-400 font-semibold">FPS: 30.2 | 1080p</span>
        </div>

        {/* Bounding box simulation in center */}
        <div className="relative mx-auto my-auto w-44 h-16 border-2 border-emerald-400 rounded-lg bg-emerald-500/10 flex flex-col justify-between p-1">
          <div className="flex items-center justify-between text-[9px] font-mono font-bold text-emerald-950 bg-emerald-300 px-1 py-0.5 rounded">
            <span>OPERATOR #104</span>
            <span>98.6%</span>
          </div>
          <div className="flex items-center justify-between text-[8px] font-mono font-bold text-emerald-200">
            <span>✓ HELMET ON</span>
            <span>✓ VEST ON</span>
          </div>
        </div>

        {/* Bottom HUD */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/10 pt-1">
          <span>PERIMETER: NORMAL</span>
          <span className="text-emerald-400 font-semibold">PPE COMPLIANT</span>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isCurrent = idx === activeStep;
          return (
            <div
              key={idx}
              className={`p-2 rounded-lg border text-center transition-colors ${
                isCurrent
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900 shadow-2xs'
                  : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}
            >
              <Icon className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-600" />
              <div className="text-[9px] font-mono font-medium line-clamp-1">
                {step.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Active step details */}
      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
        <div className="text-xs text-slate-700 font-mono">
          <strong className="text-emerald-800 font-semibold">Step 0{activeStep + 1}:</strong>{' '}
          {steps[activeStep].desc}
        </div>
        <span className="text-[10px] font-mono font-semibold text-emerald-800 shrink-0 ml-2">
          Real-time Event Logging
        </span>
      </div>
    </div>
  );
};
