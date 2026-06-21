import { useState } from "react";
import type { ErpPlanActual } from "../../types/erp-chart/data";
import { planActual } from "../../data/erp-chart/datas";

type ProjectType = "All" | "EPCIC" | "Construction Service" | "O&M Rental";

const TYPE_COLORS: Record<Exclude<ProjectType, "All">, string> = {
  EPCIC: "#378add",
  "Construction Service": "#1D9E75",
  "O&M Rental": "#BA7517",
};

const TYPES: ProjectType[] = ["All", "EPCIC", "Construction Service", "O&M Rental"];

export default function PlanActualChart() {
  const [rows, setRows] = useState<ErpPlanActual[]>(planActual);
  const [filter, setFilter] = useState<ProjectType>("All");

  const visible = filter === "All" ? rows : rows.filter(r => r.type === filter);

  // update by name so sliders still work correctly after filtering
  const update = (name: string, field: "planned" | "actual", val: number) =>
    setRows(prev => prev.map(row => (row.name === name ? { ...row, [field]: val } : row)));

  return (
    <div>
      {/* type filter */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        {TYPES.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            style={{
              padding: "3px 10px",
              background: filter === t ? "#378add" : "#1e2a4a",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 11,
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* chart rows */}
      {visible.map(row => {
        const typeColor = TYPE_COLORS[row.type];
        const dev = row.actual - row.planned;
        return (
          <div key={row.name} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span style={{ width: 160, flexShrink: 0, display: "flex", alignItems: "center", gap: 5 }}>
              <span
                style={{ width: 6, height: 6, borderRadius: "50%", background: typeColor, flexShrink: 0 }}
              />
              <span style={{ fontSize: 11, color: "#cdd8f0" }}>{row.name}</span>
            </span>

            <div style={{ flex: 1 }}>
              {/* planned */}
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 48, fontSize: 10, color: "#85b7eb", flexShrink: 0 }}>Planned</span>
                <div style={{ flex: 1, background: "#1e2a4a", borderRadius: 4, height: 8 }}>
                  <div
                    style={{
                      width: `${row.planned}%`,
                      height: "100%",
                      background: "#85b7eb",
                      borderRadius: 4,
                      transition: "width 0.15s ease",
                    }}
                  />
                </div>
                <span style={{ width: 32, fontSize: 10, color: "#85b7eb", textAlign: "right" }}>
                  {row.planned}%
                </span>
              </div>

              {/* actual */}
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 3 }}>
                <span style={{ width: 48, fontSize: 10, color: typeColor, flexShrink: 0 }}>Actual</span>
                <div style={{ flex: 1, background: "#1e2a4a", borderRadius: 4, height: 8 }}>
                  <div
                    style={{
                      width: `${row.actual}%`,
                      height: "100%",
                      background: typeColor,
                      borderRadius: 4,
                      transition: "width 0.15s ease",
                    }}
                  />
                </div>
                <span style={{ width: 32, fontSize: 10, color: typeColor, textAlign: "right" }}>
                  {row.actual}%
                </span>
              </div>
            </div>

            <span
              style={{
                width: 36,
                fontSize: 11,
                fontWeight: 600,
                textAlign: "right",
                color: dev >= 0 ? "#1D9E75" : "#E24B4A",
                flexShrink: 0,
              }}
            >
              {dev >= 0 ? "+" : ""}
              {dev}%
            </span>
          </div>
        );
      })}

      {/* sliders */}
      <div style={{ marginTop: 14, borderTop: "1px solid #1e2a4a", paddingTop: 12 }}>
        {visible.map(row => (
          <div key={row.name} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 6 }}>
            <span style={{ width: 160, fontSize: 10, color: "#85b7eb", flexShrink: 0 }}>{row.name}</span>
            <label
              style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: "#85b7eb", flex: 1 }}
            >
              P
              <input
                type="range"
                min={0}
                max={100}
                value={row.planned}
                onChange={e => update(row.name, "planned", +e.target.value)}
                style={{ flex: 1 }}
              />
            </label>
            <label
              style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: "#85b7eb", flex: 1 }}
            >
              A
              <input
                type="range"
                min={0}
                max={100}
                value={row.actual}
                onChange={e => update(row.name, "actual", +e.target.value)}
                style={{ flex: 1 }}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
