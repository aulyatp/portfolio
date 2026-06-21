import { useState } from "react";
import type { ErpBarItem } from "../../types/erp-chart/data";
import { defaultVerticalBar } from "../../data/erp-chart/datas";

const COLORS = ["#378add", "#1D9E75", "#BA7517"];

export default function VerticalBarChart() {
  const [bars, setBars] = useState<ErpBarItem[]>(defaultVerticalBar);
  const [selected, setSelected] = useState<number | null>(null);

  const max = Math.max(...bars.map(b => b.value), 1);

  const updateBar = (i: number, raw: string) => {
    const val = Math.max(0, Number(raw) || 0);
    setBars(prev => prev.map((b, idx) => (idx === i ? { ...b, value: val } : b)));
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 16, height: 160 }}>
        {bars.map((bar, i) => {
          const color = COLORS[i % COLORS.length];
          const heightPct = (bar.value / max) * 100;
          return (
            <div
              key={i}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, height: "100%" }}
            >
              {selected === i ? (
                <input
                  type="number"
                  min={0}
                  value={bar.value}
                  autoFocus
                  onChange={e => updateBar(i, e.target.value)}
                  onBlur={() => setSelected(null)}
                  onKeyDown={e => e.key === "Enter" && setSelected(null)}
                  style={{
                    width: 52,
                    background: "#1e2a4a",
                    color: "#fff",
                    border: `1px solid ${color}`,
                    borderRadius: 4,
                    padding: "2px 4px",
                    fontSize: 11,
                    marginBottom: 4,
                    textAlign: "center",
                  }}
                />
              ) : (
                <span style={{ fontSize: 11, color: "#cdd8f0", marginBottom: 4 }}>{bar.value}</span>
              )}

              <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
                <div
                  title="Click to edit"
                  onClick={() => setSelected(i)}
                  style={{
                    width: "100%",
                    height: `${heightPct}%`,
                    background: color,
                    borderRadius: "4px 4px 0 0",
                    transition: "height 0.2s ease",
                    cursor: "pointer",
                  }}
                />
              </div>

              <span
                style={{
                  fontSize: 10,
                  color: "#85b7eb",
                  marginTop: 6,
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                {bar.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
