import { useState } from "react";
import type { ErpDonutSegment } from "../../types/erp-chart/data";
import { defaultDonut } from "../../data/erp-chart/datas";

export default function DonutChart() {
  const [segments, setSegments] = useState<ErpDonutSegment[]>(defaultDonut);

  const total = segments.reduce((s, seg) => s + seg.value, 0);

  let offset = 0;
  const arcs = segments.map(seg => {
    const len = total > 0 ? (seg.value / total) * 100 : 0;
    const dashArray = `${len} ${100 - len}`;
    const dashOffset = 100 - offset;
    offset += len;
    return { ...seg, dashArray, dashOffset };
  });

  const updateValue = (i: number, raw: string) => {
    const val = Math.max(0, Number(raw) || 0);
    setSegments(prev => prev.map((s, idx) => (idx === i ? { ...s, value: val } : s)));
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
      <svg viewBox="0 0 42 42" style={{ width: 140, height: 140, flexShrink: 0 }}>
        {/* background ring */}
        <circle r="15.9155" cx="21" cy="21" fill="none" strokeWidth="5" stroke="#1e2a4a" />

        {arcs.map((seg, i) => (
          <circle
            key={i}
            r="15.9155"
            cx="21"
            cy="21"
            fill="none"
            strokeWidth="5"
            stroke={seg.color}
            strokeDasharray={seg.dashArray}
            strokeDashoffset={seg.dashOffset}
            style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
          />
        ))}

        <text x="21" y="19.5" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="5" fontWeight="bold">
          {total}
        </text>
        <text x="21" y="24.5" textAnchor="middle" dominantBaseline="middle" fill="#85b7eb" fontSize="3.5">
          Projects
        </text>
      </svg>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {segments.map((seg, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{ width: 10, height: 10, borderRadius: "50%", background: seg.color, flexShrink: 0 }}
            />
            <span style={{ fontSize: 11, color: "#cdd8f0", width: 76 }}>{seg.label}</span>
            <input
              type="number"
              min={0}
              value={seg.value}
              onChange={e => updateValue(i, e.target.value)}
              style={{
                width: 48,
                background: "#1e2a4a",
                color: "#fff",
                border: "1px solid #2a3a6a",
                borderRadius: 4,
                padding: "2px 6px",
                fontSize: 11,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
