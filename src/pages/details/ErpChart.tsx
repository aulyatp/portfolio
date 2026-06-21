import BoundingBox from "../../components/details/BoundingBox";
import Header from "../../components/details/Header";
import Paragraph from "../../components/details/Paragraph";
import Title from "../../components/details/Title";
import BannerLayout from "../../components/details/BannerLayout";
import PlanActualChart from "../../components/erp-chart/PlanActualChart";
import SpiCpiChart from "../../components/erp-chart/SpiCpiChart";
import DonutChart from "../../components/erp-chart/DonutChart";
import VerticalBarChart from "../../components/erp-chart/VerticalBarChart";
import GanttChart from "../../components/erp-chart/GanttChart";

export default function ErpChart() {
  return (
    <BannerLayout imgSrc={`${import.meta.env.BASE_URL}wcp_erp_cover.png`}>
      <Title>Engineering Intelligence, Unified</Title>

      <Header
        items={[
          { label: "Role", value: <>Frontend Developer</> },
          { label: "Tools", value: "Laravel Blade, Bootstrap 5, Vue.js, ApexCharts" },
        ]}
      />

      <Paragraph>
        <div style={{ textAlign: "center" }}>
          Multi-domain ERP dashboard for PT. Wira Cipta Perkasa — SPI, CPI, HSE, procurement, and finance unified in
          one glass-morphism interface on a deep-navy gradient.
        </div>
      </Paragraph>

      {/* Chart 1 — Progress Kemajuan */}
      <BoundingBox>
        <Header items={[{ label: "01. PROGRESS KEMAJUAN", value: "Planned vs Actual (horizontal bar)" }]} />
        <Paragraph>
          Each project row shows planned and actual completion side-by-side. Drag the sliders to see how deviation
          changes in real time — green when ahead, red when behind schedule.
        </Paragraph>
        <PlanActualChart />
      </BoundingBox>

      {/* Chart 2 — SPI / CPI */}
      <BoundingBox>
        <Header
          items={[{ label: "02. SPI / CPI LINE CHART", value: "Schedule & Cost Performance Index by quarter" }]}
        />
        <Paragraph>
          Switch quarters with the tab buttons. Adjust each month's ratio with the sliders below — the polyline and
          colour update instantly. Values above 1.0 (the dashed baseline) are on track.
        </Paragraph>
        <SpiCpiChart />
      </BoundingBox>

      {/* Chart 3 — Project Status Donut */}
      <BoundingBox>
        <Header items={[{ label: "03. PROJECT STATUS", value: "Donut chart — On Track / At Risk / Delayed" }]} />
        <Paragraph>
          Edit the count next to each legend item and watch the donut redraw instantly. All segments recalculate
          together because every arc length depends on the running total.
        </Paragraph>
        <DonutChart />
      </BoundingBox>

      {/* Chart 4 — Project Type Vertical Bar */}
      <BoundingBox>
        <Header items={[{ label: "04. PROJECT MIX", value: "Vertical bar chart — project count by type" }]} />
        <Paragraph>
          Click any bar to open an inline number input. Press Enter or click away to confirm — bar heights animate
          as the max recalculates across all bars.
        </Paragraph>
        <VerticalBarChart />
      </BoundingBox>

      {/* Chart 5 — Gantt */}
      <BoundingBox>
        <Header items={[{ label: "05. PROJECT TIMELINE", value: "Gantt chart with drag-to-resize bars" }]} />
        <Paragraph>
          Filter by project type, move the "Today" marker with the date picker, hover bars for details, and drag the
          darker handles at each bar edge to shift start or end dates — all without a chart library.
        </Paragraph>
        <GanttChart />
      </BoundingBox>
    </BannerLayout>
  );
}
