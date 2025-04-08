"use client"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  type ChartOptions,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

export function SalesChart() {
  // Sample data (October days)
  const labels = ["1st", "5th", "10th", "15th", "20th", "25th", "30th", "5th", "10th", "15th", "20th", "25th"]

  // Chart data with gradient background
  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: [
          30, 42, 33, 45, 35, 40, 60, 80, 45, 35, 40, 50, 35, 45, 55, 45, 40, 45, 35, 45, 60, 40, 45, 50, 45, 35, 30,
          45, 40,
        ],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        pointBackgroundColor: "rgb(59, 130, 246)",
        pointRadius: 2,
        pointHoverRadius: 4,
        fill: true,
      },
    ],
  }

  // Annotated point (peak at 15th)
  const plugins = [
    {
      id: "annotatedPoint",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      afterDraw: (chart: any) => {
        const ctx = chart.ctx
        // Find the highest point (this would be hardcoded in a real app)
        const highestPointIndex = 7 // example index for the peak
        const meta = chart.getDatasetMeta(0)
        const { x, y } = meta.data[highestPointIndex].getCenterPoint()

        // Draw a blue dot
        ctx.save()
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, 2 * Math.PI)
        ctx.fillStyle = "rgb(59, 130, 246)"
        ctx.fill()
        ctx.closePath()

        // Draw a tooltip with the price
        ctx.fillStyle = "rgb(59, 130, 246)"
        ctx.textAlign = "center"
        ctx.font = "bold 12px Arial"
        ctx.fillText("$4,858.77", x, y - 15)
        ctx.restore()
      },
    },
  ]

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (value) => `${value}%`,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        callbacks: {
          label: (context) => `Sales: ${context.parsed.y}%`,
        },
      },
    },
  }

  return (
    <div className="h-64 w-full">
      <Line data={data} options={options} plugins={plugins} />
    </div>
  )
}
