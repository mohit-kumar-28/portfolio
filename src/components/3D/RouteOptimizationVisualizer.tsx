import React from 'react';

export const RouteOptimizationVisualizer: React.FC = () => {
  const nodes = [
    { x: 30, y: 35, label: 'MG Road' },
    { x: 120, y: 30, label: 'Indiranagar' },
    { x: 210, y: 55, label: 'Whitefield' },
    { x: 70, y: 110, label: 'Koramangala' },
    { x: 160, y: 120, label: 'HSR Layout' },
    { x: 240, y: 130, label: 'Electronic City' },
  ];

  return (
    <div className="w-full h-full min-h-[260px] bg-white p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="font-mono text-xs text-slate-800 font-semibold">
            BANGALORE ROAD GRAPH • ACO &amp; PSO PATHFINDING
          </span>
        </div>
        <span className="font-mono text-[10px] text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold border border-emerald-200">
          +20% Efficiency Gain
        </span>
      </div>

      {/* SVG Bangalore Network Graph */}
      <div className="relative w-full h-[120px] flex items-center justify-center my-auto">
        <svg viewBox="0 0 280 160" className="w-full h-full">
          {/* Edges */}
          <line x1="30" y1="35" x2="120" y2="30" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="120" y1="30" x2="210" y2="55" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="30" y1="35" x2="70" y2="110" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="70" y1="110" x2="160" y2="120" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="160" y1="120" x2="240" y2="130" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="120" y1="30" x2="160" y2="120" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="210" y1="55" x2="240" y2="130" stroke="#e2e8f0" strokeWidth="2" />

          {/* Converged Optimal Pheromone Route */}
          <polyline
            points="30,35 120,30 160,120 240,130"
            fill="none"
            stroke="#059669"
            strokeWidth="3.5"
            strokeDasharray="6 3"
          />

          {/* Graph Nodes */}
          {nodes.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r="6" fill="#ffffff" stroke="#047857" strokeWidth="2" />
              <circle cx={n.x} cy={n.y} r="2.5" fill="#047857" />
              <text
                x={n.x}
                y={n.y - 8}
                fill="#475569"
                fontSize="9"
                fontFamily="monospace"
                fontWeight="600"
                textAnchor="middle"
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Metrics footer */}
      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 flex items-center justify-between">
        <span className="text-slate-700 font-medium">
          Simulated 100+ concurrent route trajectories
        </span>
        <span className="text-[10px] text-emerald-800 font-semibold">
          Pheromone Converged ✓
        </span>
      </div>
    </div>
  );
};
