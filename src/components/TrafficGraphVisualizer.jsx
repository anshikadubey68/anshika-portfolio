import React, { useState } from 'react';
import { Activity, GitBranch, Zap, Navigation } from 'lucide-react';

/**
 * Interactive Graph & Dynamic Traffic Signal Visualizer
 * Simulates C++ graph algorithms (BFS, Dijkstra, Dynamic 15-45s signal timing).
 * Perfectly proportioned SVG with zero stretching and crisp circular nodes.
 */
export default function TrafficGraphVisualizer() {
  const [activeAlgorithm, setActiveAlgorithm] = useState('dijkstra');
  const [activePath, setActivePath] = useState(['A', 'B', 'D', 'F']);
  const [signalTimings, setSignalTimings] = useState({
    A: 25,
    B: 40,
    C: 18,
    D: 35,
    E: 20,
    F: 45,
  });
  const [telemetryMessage, setTelemetryMessage] = useState('Dijkstra optimal path computed [A -> B -> D -> F] (Cost: 14 units)');

  // Well-proportioned coordinates inside 100 x 65 viewBox
  const nodes = [
    { id: 'A', label: 'North Hub', x: 18, y: 18 },
    { id: 'B', label: 'Central Cross', x: 50, y: 14 },
    { id: 'C', label: 'East Arterial', x: 82, y: 18 },
    { id: 'D', label: 'Midtown Junc', x: 30, y: 44 },
    { id: 'E', label: 'Ind. Loop', x: 70, y: 44 },
    { id: 'F', label: 'South Terminal', x: 50, y: 56 },
  ];

  const edges = [
    { from: 'A', to: 'B', weight: '4 km' },
    { from: 'B', to: 'C', weight: '6 km' },
    { from: 'A', to: 'D', weight: '7 km' },
    { from: 'B', to: 'D', weight: '3 km' },
    { from: 'B', to: 'E', weight: '5 km' },
    { from: 'C', to: 'E', weight: '4 km' },
    { from: 'D', to: 'F', weight: '7 km' },
    { from: 'E', to: 'F', weight: '8 km' },
  ];

  const runAlgorithm = (type) => {
    setActiveAlgorithm(type);

    if (type === 'dijkstra') {
      setActivePath(['A', 'B', 'D', 'F']);
      setSignalTimings({ A: 25, B: 38, C: 20, D: 42, E: 22, F: 45 });
      setTelemetryMessage("Dijkstra's Shortest Path: [A -> B -> D -> F]. Minimal edge latency: 14 units.");
    } else if (type === 'bfs') {
      setActivePath(['A', 'B', 'C', 'D', 'E', 'F']);
      setSignalTimings({ A: 20, B: 20, C: 20, D: 20, E: 20, F: 20 });
      setTelemetryMessage('BFS Breadth Exploration: Full topological connectivity verified (6/6 nodes online).');
    } else if (type === 'congestion') {
      setActivePath(['A', 'C', 'E', 'F']);
      setSignalTimings({ A: 15, B: 45, C: 35, D: 45, E: 30, F: 45 });
      setTelemetryMessage('Congestion Heuristics: Density detected on Node B/D. Dynamic green signal scaled to 45s.');
    }
  };

  return (
    <div className="rounded-2xl bg-[#090b14] border border-white/10 p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-2xl">
      {/* Simulation Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#00f0ff] animate-pulse" />
          <span className="font-mono text-xs text-white font-bold tracking-wider">
            GRAPH ENGINE SIMULATION // C++
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10b981]" />
          <span className="font-mono text-[11px] text-[#94a3b8]">6 NODES • 8 EDGES</span>
        </div>
      </div>

      {/* SVG Interactive Canvas with Preserved Aspect Ratio */}
      <div className="relative w-full h-[220px] sm:h-[260px] my-3 select-none bg-black/40 rounded-xl border border-white/[0.06] overflow-hidden flex items-center justify-center">
        <svg className="w-full h-full max-h-full" viewBox="0 0 100 65" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Edges */}
          {edges.map((edge, idx) => {
            const fromNode = nodes.find((n) => n.id === edge.from);
            const toNode = nodes.find((n) => n.id === edge.to);
            const isPathActive =
              activePath.includes(edge.from) &&
              activePath.includes(edge.to) &&
              Math.abs(activePath.indexOf(edge.from) - activePath.indexOf(edge.to)) === 1;

            return (
              <g key={idx}>
                <line
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={isPathActive ? '#00f0ff' : 'rgba(255, 255, 255, 0.15)'}
                  strokeWidth={isPathActive ? '1.8' : '0.8'}
                  strokeDasharray={isPathActive ? 'none' : '2,2'}
                  filter={isPathActive ? 'url(#cyanGlow)' : 'none'}
                  className="transition-all duration-500"
                />
                <text
                  x={(fromNode.x + toNode.x) / 2}
                  y={(fromNode.y + toNode.y) / 2 - 1.2}
                  fill="#64748b"
                  fontSize="2.4"
                  textAnchor="middle"
                  className="font-mono select-none"
                >
                  {edge.weight}
                </text>
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const isHighlighted = activePath.includes(node.id);
            const timing = signalTimings[node.id];

            return (
              <g key={node.id} className="transition-all duration-300">
                {/* Outer signal circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="4.2"
                  fill="#0d111e"
                  stroke={isHighlighted ? '#00f0ff' : 'rgba(255,255,255,0.25)'}
                  strokeWidth={isHighlighted ? '1.6' : '0.9'}
                  filter={isHighlighted ? 'url(#cyanGlow)' : 'none'}
                />

                {/* Node ID */}
                <text
                  x={node.x}
                  y={node.y + 0.9}
                  fill={isHighlighted ? '#00f0ff' : '#94a3b8'}
                  fontSize="2.8"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-mono select-none"
                >
                  {node.id}
                </text>

                {/* Dynamic signal timing badge */}
                <text
                  x={node.x}
                  y={node.y - 5.5}
                  fill="#10b981"
                  fontSize="2.2"
                  textAnchor="middle"
                  className="font-mono font-bold select-none"
                >
                  {timing}s
                </text>
              </g>
            );
          })}
        </svg>

        {/* Live Legend Floating Badge */}
        <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-[#090b14]/90 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] font-mono text-[#94a3b8] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          <span>GREEN SIGNAL (15s — 45s DYNAMIC)</span>
        </div>
      </div>

      {/* Real-time Telemetry Readout */}
      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] font-mono text-xs text-[#94a3b8] flex items-center gap-2 mb-3">
        <span className="text-[#00f0ff] font-bold shrink-0">&gt;&gt;</span>
        <span className="truncate text-[11px] sm:text-xs text-white/90">{telemetryMessage}</span>
      </div>

      {/* Control Buttons Array - Responsive for all mobile screens */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        <button
          onClick={() => runAlgorithm('dijkstra')}
          className={`py-2 px-1 sm:px-3 rounded-xl font-mono text-[10px] sm:text-xs transition-all flex items-center justify-center gap-1 sm:gap-1.5 truncate ${
            activeAlgorithm === 'dijkstra'
              ? 'bg-[#00f0ff] text-[#050609] font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
              : 'bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/10'
          }`}
        >
          <Navigation className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          <span>DIJKSTRA</span>
        </button>

        <button
          onClick={() => runAlgorithm('bfs')}
          className={`py-2 px-1 sm:px-3 rounded-xl font-mono text-[10px] sm:text-xs transition-all flex items-center justify-center gap-1 sm:gap-1.5 truncate ${
            activeAlgorithm === 'bfs'
              ? 'bg-[#00f0ff] text-[#050609] font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
              : 'bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/10'
          }`}
        >
          <GitBranch className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          <span>BFS AUDIT</span>
        </button>

        <button
          onClick={() => runAlgorithm('congestion')}
          className={`py-2 px-1 sm:px-3 rounded-xl font-mono text-[10px] sm:text-xs transition-all flex items-center justify-center gap-1 sm:gap-1.5 truncate ${
            activeAlgorithm === 'congestion'
              ? 'bg-[#00f0ff] text-[#050609] font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
              : 'bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/10'
          }`}
        >
          <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          <span>CONGESTION</span>
        </button>
      </div>
    </div>
  );
}
