export type ErpPlanActual = {
  name: string;
  type: "EPCIC" | "Construction Service" | "O&M Rental";
  planned: number;
  actual: number;
};

export type ErpSpiCpiData = {
  Q1: [number, number, number];
  Q2: [number, number, number];
  Q3: [number, number, number];
  Q4: [number, number, number];
};

export type ErpDonutSegment = {
  label: string;
  value: number;
  color: string;
};

export type ErpBarItem = {
  label: string;
  value: number;
};

export type GanttTask = {
  name: string;
  start: string;
  end: string;
  progress: number;
};
