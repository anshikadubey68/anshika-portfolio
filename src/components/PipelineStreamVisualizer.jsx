import React, { useState, useEffect } from 'react';
import { AlertTriangle, RefreshCw, Zap, Server } from 'lucide-react';

/**
 * Interactive Industrial IoT Stream Failover Simulation
 * Visualizes 4 parallel pipeline streams with 2-second telemetry refresh
 * and sub-50ms automated failover state machine.
 */
export default function PipelineStreamVisualizer() {
  const [streams, setStreams] = useState([
    { id: 1, name: 'STREAM_ALPHA_01', flowRate: 84.2, pressure: 6.4, status: 'NORMAL', active: true },
    { id: 2, name: 'STREAM_BETA_02', flowRate: 91.6, pressure: 7.1, status: 'NORMAL', active: true },
    { id: 3, name: 'STREAM_GAMMA_03', flowRate: 0.0, pressure: 4.2, status: 'STANDBY', active: false },
    { id: 4, name: 'STREAM_DELTA_04', flowRate: 0.0, pressure: 4.1, status: 'STANDBY', active: false },
  ]);

  const [failoverLatency, setFailoverLatency] = useState(null);
  const [isFaultActive, setIsFaultActive] = useState(false);
  const [systemState, setSystemState] = useState('ALL SYSTEMS NOMINAL');

  // Automatic 2-second telemetry jitter
  useEffect(() => {
    const interval = setInterval(() => {
      setStreams((prev) =>
        prev.map((s) => {
          if (s.status === 'FAULT') return s;
          if (s.active) {
            const jitter = (Math.random() - 0.5) * 1.5;
            return {
              ...s,
              flowRate: Math.max(10, Math.min(100, Number((s.flowRate + jitter).toFixed(1)))),
            };
          }
          return s;
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const triggerFaultSimulation = () => {
    if (isFaultActive) {
      setIsFaultActive(false);
      setFailoverLatency(null);
      setSystemState('ALL SYSTEMS NOMINAL');
      setStreams([
        { id: 1, name: 'STREAM_ALPHA_01', flowRate: 84.2, pressure: 6.4, status: 'NORMAL', active: true },
        { id: 2, name: 'STREAM_BETA_02', flowRate: 91.6, pressure: 7.1, status: 'NORMAL', active: true },
        { id: 3, name: 'STREAM_GAMMA_03', flowRate: 0.0, pressure: 4.2, status: 'STANDBY', active: false },
        { id: 4, name: 'STREAM_DELTA_04', flowRate: 0.0, pressure: 4.1, status: 'STANDBY', active: false },
      ]);
      return;
    }

    setIsFaultActive(true);
    setSystemState('PRESSURE DROP DETECTED — STATE MACHINE TRIGGERED');

    // Simulate sub-50ms instant failover!
    const randomLatency = Math.floor(Math.random() * 15) + 32; // 32ms - 47ms
    setFailoverLatency(randomLatency);

    setStreams((prev) =>
      prev.map((s) => {
        if (s.id === 2) {
          return { ...s, flowRate: 0.0, pressure: 1.2, status: 'FAULT', active: false };
        }
        if (s.id === 3) {
          return { ...s, flowRate: 89.4, pressure: 6.8, status: 'FAILOVER_ACTIVE', active: true };
        }
        return s;
      })
    );

    setTimeout(() => {
      setSystemState(`FAILOVER EXECUTED IN ${randomLatency}ms (STANDBY STREAM 3 ENGAGED)`);
    }, 50);
  };

  return (
    <div className="rounded-2xl bg-[#090b14] border border-white/10 p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-2xl">
      {/* IIoT Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-[#818cf8]" />
          <span className="font-mono text-xs text-white font-bold tracking-wider">
            IIoT STREAM TELEMETRY // 2s CYCLE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              isFaultActive ? 'bg-[#ef4444] animate-ping' : 'bg-[#10b981]'
            }`}
          />
          <span className="font-mono text-[11px] text-[#94a3b8]">
            {isFaultActive ? 'ANOMALY DETECTED' : '4 STREAMS ONLINE'}
          </span>
        </div>
      </div>

      {/* 4 Parallel Stream Monitor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
        {streams.map((stream) => {
          const isFault = stream.status === 'FAULT';
          const isFailover = stream.status === 'FAILOVER_ACTIVE';

          return (
            <div
              key={stream.id}
              className={`p-3.5 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                isFault
                  ? 'bg-[#ef4444]/15 border-[#ef4444]/60 shadow-[0_0_20px_rgba(239,68,68,0.25)]'
                  : isFailover
                  ? 'bg-[#818cf8]/20 border-[#818cf8]/70 shadow-[0_0_20px_rgba(129,140,248,0.35)]'
                  : stream.active
                  ? 'bg-white/[0.03] border-white/15'
                  : 'bg-white/[0.01] border-white/[0.06] opacity-60'
              }`}
            >
              {stream.active && (
                <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#818cf8] to-transparent animate-pulse" />
              )}

              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-white tracking-tight">{stream.name}</span>
                <span
                  className={`px-2 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider font-semibold ${
                    isFault
                      ? 'bg-[#ef4444] text-white'
                      : isFailover
                      ? 'bg-[#818cf8] text-[#050609] font-bold'
                      : stream.active
                      ? 'bg-[#10b981]/20 text-[#10b981]'
                      : 'bg-white/10 text-[#94a3b8]'
                  }`}
                >
                  {stream.status}
                </span>
              </div>

              {/* Real-time Telemetry Data */}
              <div className="grid grid-cols-2 gap-2 mt-2 font-mono text-xs">
                <div>
                  <span className="text-[#64748b] text-[10px] block">FLOW VELOCITY</span>
                  <span className="text-white font-bold text-xs sm:text-sm">
                    {stream.flowRate}{' '}
                    <span className="text-[10px] text-[#94a3b8] font-normal">L/min</span>
                  </span>
                </div>
                <div>
                  <span className="text-[#64748b] text-[10px] block">LINE PRESSURE</span>
                  <span className="text-white font-bold text-xs sm:text-sm">
                    {stream.pressure}{' '}
                    <span className="text-[10px] text-[#94a3b8] font-normal">BAR</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* State Machine Status & Latency Badge */}
      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
        <div className="flex items-center gap-2 text-[#94a3b8]">
          <span className="text-[#818cf8] font-bold shrink-0">&gt;&gt;</span>
          <span className="text-white font-medium truncate text-[11px] sm:text-xs">{systemState}</span>
        </div>

        {failoverLatency && (
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40 self-start sm:self-auto font-bold text-[10px] sm:text-xs shrink-0 animate-pulse">
            <Zap className="w-3.5 h-3.5" />
            <span>SWITCH TIME: {failoverLatency}ms (&lt;50ms)</span>
          </div>
        )}
      </div>

      {/* Interactive Trigger Button */}
      <button
        onClick={triggerFaultSimulation}
        className={`w-full py-2.5 sm:py-3 px-4 rounded-xl font-mono text-xs font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
          isFaultActive
            ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            : 'bg-gradient-to-r from-[#818cf8] to-[#a855f7] text-white hover:shadow-[0_0_25px_rgba(129,140,248,0.5)]'
        }`}
      >
        {isFaultActive ? (
          <>
            <RefreshCw className="w-4 h-4" />
            <span>RESET TELEMETRY SIMULATION</span>
          </>
        ) : (
          <>
            <AlertTriangle className="w-4 h-4" />
            <span>TRIGGER LINE 2 FAULT (TEST &lt;50ms FAILOVER)</span>
          </>
        )}
      </button>
    </div>
  );
}
