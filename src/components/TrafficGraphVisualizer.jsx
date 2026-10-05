import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Activity, GitBranch, Zap, Navigation } from 'lucide-react';

/**
 * Interactive Graph & Dynamic Traffic Signal Visualizer
 * Simulates C++ graph algorithms (BFS, Dijkstra, Dynamic 15-45s signal timing).
 */
export default function TrafficGraphVisualizer() {
  const [activeAlgorithm, setActiveAlgorithm] = useState('dijkstra'); // 'dijkstra', 'bfs', 'congestion'
  const [activePath, setActivePath] = useState(['A', 'B', 'D', 'F']);
  const [signalTimings, setSignalTimings] = useState({
    A: 25,
    B: 40,
    C: 18,
    D: 35,
    E: 20,
    F: 45,
  });
  const [isSimulating, setIsSimulating] = useState(false);
  const [telemetryMessage, setTelemetryMessage] = useState('Dijkstra optimal path computed [A -> B -> D -> F] (Cost: 14)');

  const nodes = [
    { id: 'A', label: 'Node A // Northern Hub', x: 20, y: 30 },
    { id: 'B', label: 'Node B // Central Crossing', x: 50, y: 20 },
    { id: 'C', label: 'Node C // East Arterial', x: 80, y: 30 },
    { id: 'D', label: 'Node D // Midtown Junction', x: 35, y: 70 },
    { id: 'E', label: 'Node E // Industrial Loop', x: 65, y: 70 },
    { id: 'F', label: 'Node F // Southern Terminal', x: 50, y: 90 },
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
    setIsSimulating(true);

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
      setTelemetryMessage('Congestion Heuristics: Density detected on Node B/D. Dynamic green signal scaled to 45s maximum.');
    }

    setTimeout(() => {
      setIsSimulating(false);
    }, 600);
  };

  return (
    <div className="rounded-2xl bg-[#090b10] border border-white/10 p-5 sm:p-7 overflow-hidden flex flex-col justify-between">
      {/* Simulation Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#00f0ff] animate-pulse" />
          <span className="font-mono text-xs text-white font-bold tracking-wider">
            GRAPH ENGINE SIMULATION // C++ CORE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10b981]" />
          <span className="font-mono text-[11px] text-[#94a3b8]">6 NODES • 8 EDGES</span>
        </div>
      </div>

      {/* SVG Interactive Canvas */}
      <div className="relative w-full h-[260px] sm:h-[300px] my-4 select-none bg-black/40 rounded-xl border border-white/[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
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
                  className="transition-all duration-500"
                />
                {/* Weight badge in midpoint */}
                <text
                  x={(fromNode.x + toNode.x) / 2}
                  y={(fromNode.y + toNode.y) / 2 - 1}
                  fill="#64748b"
                  fontSize="2.5"
                  textAnchor="middle"
                  className="font-mono"
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
              <g key={node.id} className="transition-transform duration-300">
                {/* Outer signal circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="4.5"
                  fill="#0e1017"
                  stroke={isHighlighted ? '#00f0ff' : 'rgba(255,255,255,0.2)'}
                  strokeWidth={isHighlighted ? '1.5' : '0.8'}
                />

                {/* Node ID */}
                <text
                  x={node.x}
                  y={node.y + 1}
                  fill={isHighlighted ? '#00f0ff' : '#94a3b8'}
                  fontSize="3"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-mono"
                >
                  {node.id}
                </text>

                {/* Dynamic signal timing badge */}
                <text
                  x={node.x}
                  y={node.y - 6}
                  fill="#10b981"
                  fontSize="2.2"
                  textAnchor="middle"
                  className="font-mono font-semibold"
                >
                  {timing}s
                </text>
              </g>
            );
          })}
        </svg>

        {/* Live Legend Floating Badge */}
        <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-[#0e1017]/90 border border-white/10 text-[10px] font-mono text-[#94a3b8] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          <span>GREEN SIGNAL TIMING (15s — 45s DYNAMIC)</span>
        </div>
      </div>

      {/* Real-time Telemetry Readout */}
      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs text-[#94a3b8] flex items-center gap-2 mb-4">
        <span className="text-[#00f0ff] font-bold">&gt;&gt;</span>
        <span className="truncate">{telemetryMessage}</span>
      </div>

      {/* Control Buttons Array */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => runAlgorithm('dijkstra')}
          className={`py-2 px-3 rounded-xl font-mono text-xs transition-all flex items-center justify-center gap-1.5 ${
            activeAlgorithm === 'dijkstra'
              ? 'bg-[#00f0ff] text-[#070709] font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
              : 'bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/10'
          }`}
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>DIJKSTRA</span>
        </button>

        <button
          onClick={() => runAlgorithm('bfs')}
          className={`py-2 px-3 rounded-xl font-mono text-xs transition-all flex items-center justify-center gap-1.5 ${
            activeAlgorithm === 'bfs'
              ? 'bg-[#00f0ff] text-[#070709] font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
              : 'bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/10'
          }`}
        >
          <GitBranch className="w-3.5 h-3.5" />
          <span>BFS AUDIT</span>
        </button>

        <button
          onClick={() => runAlgorithm('congestion')}
          className={`py-2 px-3 rounded-xl font-mono text-xs transition-all flex items-center justify-center gap-1.5 ${
            activeAlgorithm === 'congestion'
              ? 'bg-[#00f0ff] text-[#070709] font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
              : 'bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/10'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>CONGESTION</span>
        </button>
      </div>
    </div>
  );
}

