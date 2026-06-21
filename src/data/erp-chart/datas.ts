import type { ErpPlanActual, ErpSpiCpiData, ErpDonutSegment, ErpBarItem, GanttTask } from "../../types/erp-chart/data";

export const planActual: ErpPlanActual[] = [
  { name: "Gajah Mada Pipeline", type: "EPCIC", planned: 80, actual: 72 },
  { name: "Krakatau Flare System", type: "EPCIC", planned: 60, actual: 65 },
  { name: "Batam Jetty Upgrade", type: "Construction Service", planned: 90, actual: 85 },
  { name: "Riau Compressor House", type: "Construction Service", planned: 45, actual: 38 },
  { name: "Chevron Gen-Set Lease", type: "O&M Rental", planned: 70, actual: 68 },
  { name: "Pertamina Scaffold", type: "O&M Rental", planned: 35, actual: 28 },
];

export const defaultSpiCpi: ErpSpiCpiData = {
  Q1: [0.92, 0.88, 1.02],
  Q2: [1.05, 0.97, 1.08],
  Q3: [0.91, 0.95, 1.0],
  Q4: [1.03, 1.1, 0.98],
};

export const defaultDonut: ErpDonutSegment[] = [
  { label: "On Track", value: 5, color: "#1D9E75" },
  { label: "At Risk", value: 2, color: "#BA7517" },
  { label: "Delayed", value: 1, color: "#E24B4A" },
];

export const defaultVerticalBar: ErpBarItem[] = [
  { label: "EPCIC", value: 8 },
  { label: "Construction Service", value: 5 },
  { label: "O&M Rental", value: 3 },
];

export const defaultGanttTasks: GanttTask[] = [
  { name: "Preliminaries", start: "2026-01-15", end: "2026-04-30", progress: 80 },
  { name: "Design", start: "2026-03-01", end: "2026-07-31", progress: 60 },
  { name: "Engineering", start: "2026-05-01", end: "2026-09-30", progress: 90 },
  { name: "Construction", start: "2026-07-01", end: "2026-11-30", progress: 45 },
];
