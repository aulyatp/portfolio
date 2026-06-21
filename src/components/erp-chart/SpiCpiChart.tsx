import { useState } from "react";
import type { ErpSpiCpiData } from "../../types/erp-chart/data";
import { defaultSpiCpi } from "../../data/erp-chart/datas";

type Quarter = "Q1" | "Q2" | "Q3" | "Q4";

const W = 400;
const H = 120;
const PAD = 20;
const CHART_H = H - PAD * 2;
const MAX_VAL = 1.5;
const XS = [PAD + 50, W / 2, W - PAD - 50];
const MONTHS = ["Month 1", "Month 2", "Month 3"];
const QUARTERS: Quarter[] = ["Q1", "Q2", "Q3", "Q4"];

const toY = (v: number) => PAD + (1 - v / MAX_VAL) * CHART_H;

export default function SpiCpiChart() {
  const [activeQ, setActiveQ] = useState<Quarter>("Q1");
  const [data, setData] = useState<ErpSpiCpiData>(defaultSpiCpi);

  const pts = data[activeQ];
  const baseY = toY(1.0);
  const lastPt = pts[pts.length - 1];
  const lineColor = lastPt >= 1 ? "#1D9E75" : "#E24B4A";
  const polyPts = pts.map((v, i) => `${XS[i]},${toY(v)}`).join(" ");

  const updateMonth = (monthIdx: number, val: number) =>
    setData(prev => ({
      ...prev,
      [activeQ]: prev[activeQ].map((v, i) => (i === monthIdx ? val : v)) as [number, number, number],
    }));

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        {QUARTERS.map(q => (
          <button
            key={q}
            onClick={() => setActiveQ(q)}
            style={{
              padding: "3px 14px",
              background: activeQ === q ? "#378add" : "#1e2a4a",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 12,
            }}
          >
            {q}
          </button>
        ))}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", display: "block" }}>
        {/* baseline at 1.0 */}
        <line x1={PAD} y1={baseY} x2={W - PAD} y2={baseY} stroke="#85b7eb" strokeOpacity={0.4} strokeDasharray="4 3" />
        <text x={W - PAD - 2} y={baseY - 4} fontSize={8} fill="#85b7eb" textAnchor="end">
          1.0 baseline
        </text>

        {/* month labels */}
        {XS.map((x, i) => (
          <text key={i} x={x} y={H - 4} fontSize={8} fill="#85b7eb" textAnchor="middle">
            {MONTHS[i]}
          </text>
        ))}

        {/* polyline */}
        <polyline points={polyPts} fill="none" stroke={lineColor} strokeWidth={2} />

        {/* dots + value labels */}
        {pts.map((v, i) => (
          <g key={i}>
            <circle cx={XS[i]} cy={toY(v)} r={4} fill={lineColor} />
            <text x={XS[i]} y={toY(v) - 7} fontSize={8} fill="#fff" textAnchor="middle">
              {v.toFixed(2)}
            </text>
          </g>
        ))}
      </svg>

      <div style={{ display: "flex", gap: 20, marginTop: 12 }}>
        {MONTHS.map((m, i) => (
          <label
            key={i}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, fontSize: 11, color: "#85b7eb", flex: 1 }}
          >
            {m}
            <input
              type="range"
              min={0.5}
              max={1.5}
              step={0.01}
              value={pts[i]}
              onChange={e => updateMonth(i, +e.target.value)}
              style={{ width: "100%" }}
            />
            <span>{pts[i].toFixed(2)}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
