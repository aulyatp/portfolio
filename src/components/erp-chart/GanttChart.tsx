import { useState, useRef } from "react";
import type { GanttTask } from "../../types/erp-chart/data";
import { defaultGanttTasks } from "../../data/erp-chart/datas";

type DragState = {
  taskIdx: number;
  side: "start" | "end";
  originClientX: number;
  originDate: Date;
};

const BAR_COLOR = "#378add";

const LABEL_W = 158;
const CHART_W = 560;
const ROW_H = 34;
const BAR_H = 20;
const HEADER_H = 36;
const VIEW_W = LABEL_W + CHART_W + 16;

export default function GanttChart() {
  const [tasks, setTasks] = useState<GanttTask[]>(defaultGanttTasks);
  const [today, setToday] = useState(new Date().toISOString().slice(0, 10));
  const [tooltip, setTooltip] = useState<{ task: GanttTask; x: number; y: number } | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const allMs = tasks.flatMap(t => [+new Date(t.start), +new Date(t.end)]);
  const minMs = Math.min(...allMs);
  const maxMs = Math.max(...allMs);
  const totalMs = maxMs - minMs;

  const toX = (d: string) => LABEL_W + 8 + ((+new Date(d) - minMs) / totalMs) * CHART_W;

  const months: Date[] = [];
  const mc = new Date(new Date(minMs).getFullYear(), new Date(minMs).getMonth(), 1);
  while (+mc <= maxMs) {
    months.push(new Date(mc));
    mc.setMonth(mc.getMonth() + 1);
  }

  const svgH = HEADER_H + tasks.length * ROW_H + 4;
  const todayX = toX(today);
  const chartLeft = LABEL_W + 8;
  const chartRight = chartLeft + CHART_W;

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const dr = dragRef.current;
    if (!dr || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const scaleX = rect.width / VIEW_W;
    const deltaX = (e.clientX - dr.originClientX) / scaleX;
    const deltaMs = (deltaX / CHART_W) * totalMs;
    const newMs = +dr.originDate + deltaMs;

    setTasks(prev =>
      prev.map((t, i) => {
        if (i !== dr.taskIdx) return t;
        if (dr.side === "start") {
          const clamped = Math.min(newMs, +new Date(t.end) - 86400000);
          return { ...t, start: new Date(clamped).toISOString().slice(0, 10) };
        } else {
          const clamped = Math.max(newMs, +new Date(t.start) + 86400000);
          return { ...t, end: new Date(clamped).toISOString().slice(0, 10) };
        }
      })
    );
  };

  const stopDrag = () => { dragRef.current = null; };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
        <label style={{ fontSize: 11, color: "#85b7eb", display: "flex", alignItems: "center", gap: 5 }}>
          Today
          <input
            type="date"
            value={today}
            onChange={e => setToday(e.target.value)}
            style={{
              background: "#1e2a4a",
              color: "#fff",
              border: "1px solid #2a3a6a",
              borderRadius: 4,
              padding: "2px 6px",
              fontSize: 11,
            }}
          />
        </label>
      </div>

      <div style={{ overflowX: "auto" }}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VIEW_W} ${svgH}`}
          style={{ width: "100%", display: "block", userSelect: "none" }}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          {/* month grid lines + labels */}
          {months.map((m, i) => {
            const mx = toX(m.toISOString());
            if (mx < chartLeft || mx > chartRight) return null;
            return (
              <g key={i}>
                <line x1={mx} y1={HEADER_H - 4} x2={mx} y2={svgH} stroke="#2a3a6a" strokeWidth={0.5} />
                <text x={mx + 2} y={HEADER_H - 8} fontSize={7.5} fill="#85b7eb">
                  {m.toLocaleString("default", { month: "short", year: "2-digit" })}
                </text>
              </g>
            );
          })}

          {/* today marker */}
          {todayX >= chartLeft && todayX <= chartRight && (
            <line
              x1={todayX}
              y1={HEADER_H - 4}
              x2={todayX}
              y2={svgH}
              stroke="#E24B4A"
              strokeDasharray="4 3"
              strokeWidth={1.5}
            />
          )}

          {/* task rows */}
          {tasks.map((task, i) => {
            const rowY = HEADER_H + i * ROW_H;
            const barY = rowY + (ROW_H - BAR_H) / 2;
            const bx = toX(task.start);
            const bw = Math.max(toX(task.end) - bx, 6);

            return (
              <g key={task.name}>
                <line x1={0} y1={rowY + ROW_H} x2={VIEW_W} y2={rowY + ROW_H} stroke="#1e2a4a" strokeWidth={0.5} />

                <text x={LABEL_W + 2} y={rowY + ROW_H / 2 + 3} fontSize={8.5} fill="#cdd8f0" textAnchor="end">
                  {task.name}
                </text>

                {/* bar track */}
                <rect x={bx} y={barY} width={bw} height={BAR_H} rx={3} fill={BAR_COLOR} opacity={0.2} />
                {/* progress fill */}
                <rect x={bx} y={barY} width={bw * (task.progress / 100)} height={BAR_H} rx={3} fill={BAR_COLOR} />
                {bw > 30 && (
                  <text x={bx + bw / 2} y={barY + BAR_H / 2 + 3} fontSize={7} fill="#fff" textAnchor="middle">
                    {task.progress}%
                  </text>
                )}

                {/* hover target */}
                <rect
                  x={bx}
                  y={barY}
                  width={bw}
                  height={BAR_H}
                  fill="transparent"
                  onMouseEnter={e => setTooltip({ task, x: e.clientX, y: e.clientY })}
                  onMouseLeave={() => setTooltip(null)}
                  onMouseMove={e =>
                    setTooltip(prev => (prev ? { ...prev, x: e.clientX, y: e.clientY } : null))
                  }
                />

                {/* start handle */}
                <rect
                  x={bx}
                  y={barY}
                  width={7}
                  height={BAR_H}
                  rx={3}
                  fill={BAR_COLOR}
                  opacity={0.75}
                  style={{ cursor: "ew-resize" }}
                  onMouseDown={e => {
                    e.stopPropagation();
                    dragRef.current = { taskIdx: i, side: "start", originClientX: e.clientX, originDate: new Date(task.start) };
                  }}
                />

                {/* end handle */}
                <rect
                  x={bx + bw - 7}
                  y={barY}
                  width={7}
                  height={BAR_H}
                  rx={3}
                  fill={BAR_COLOR}
                  opacity={0.75}
                  style={{ cursor: "ew-resize" }}
                  onMouseDown={e => {
                    e.stopPropagation();
                    dragRef.current = { taskIdx: i, side: "end", originClientX: e.clientX, originDate: new Date(task.end) };
                  }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {tooltip && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x + 12,
            top: tooltip.y + 12,
            zIndex: 200,
            background: "#0f1c4d",
            border: "1px solid #2a3a6a",
            borderRadius: 6,
            padding: "8px 12px",
            fontSize: 11,
            color: "#cdd8f0",
            pointerEvents: "none",
            lineHeight: 1.6,
          }}
        >
          <div style={{ fontWeight: 600, color: "#fff" }}>{tooltip.task.name}</div>
          <div>{tooltip.task.start} → {tooltip.task.end}</div>
          <div style={{ color: tooltip.task.progress >= 80 ? "#1D9E75" : "#85b7eb" }}>
            Progress: {tooltip.task.progress}%
          </div>
        </div>
      )}
    </div>
  );
}
