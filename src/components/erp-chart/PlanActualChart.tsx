import { useState } from "react";
import { planActual } from "../../data/erp-chart/datas";

export default function PlanActualChart() {
  const [rows, setRows] = useState(planActual);

  const update = (i: number, field: "planned" | "actual", val: number) => setRows((r) => r.map((row, idx) => (idx === i ? { ...row, [field]: val } : row)));

  return (
    <div>
      {" "}
      {/* outer */}
      {/* === CHART SECTION === */}
      <div>
        {" "}
        {/* header row */}
        <span>Progress Kemajuan</span>
        <span>■ Planned ■ Actual</span>
      </div>
      {rows.map((row, i) => (
        <div key={row.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 120, flexShrink: 0 }}>{row.name}</span>

          <div style={{ flex: 1 }}>
            {" "}
            {/* bar group */}
            {/* planned bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 52, fontSize: 11 }}>Planned</span>
              <div style={{ flex: 1, background: "#1e2a4a", borderRadius: 4, height: 10 }}>
                {" "}
                {/* track */}
                <div style={{ width: `${row.planned}%`, height: "100%", background: "#85b7eb", borderRadius: 4, transition: "width 0.15s ease" }} />
              </div>
              <span style={{ width: 32, fontSize: 11 }}>{row.planned}%</span>
            </div>
            {/* actual bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 52, fontSize: 11 }}>Actual</span>
              <div style={{ flex: 1, background: "#1e2a4a", borderRadius: 4, height: 10 }}>
                <div style={{ width: `${row.actual}%`, height: "100%", background: "#378add", borderRadius: 4, transition: "width 0.15s ease" }} />
              </div>
              <span style={{ width: 32, fontSize: 11 }}>{row.actual}%</span>
            </div>
          </div>

          <span style={{ width: 40, color: row.actual - row.planned >= 0 ? "#1D9E75" : "#E24B4A", fontWeight: 600 }}>
            {row.actual - row.planned >= 0 ? "+" : ""}
            {row.actual - row.planned}%
          </span>
        </div>
      ))}
      {/* === SLIDERS SECTION === */}
      {rows.map((row, i) => (
        <div key={row.name} style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ width: 120, flexShrink: 0 }}>{row.name}</span>
          <label>
            Planned <input type="range" min={0} max={100} value={row.planned} onChange={(e) => update(i, "planned", +e.target.value)} />
          </label>
          <label>
            Actual <input type="range" min={0} max={100} value={row.actual} onChange={(e) => update(i, "actual", +e.target.value)} />
          </label>
        </div>
      ))}
    </div>
  );
}
