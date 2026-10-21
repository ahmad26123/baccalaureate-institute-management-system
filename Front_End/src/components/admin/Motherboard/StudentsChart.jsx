import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function StudentsChart() {
  const labels = [
    "كانون الثاني",
    "شباط",
    "آذار",
    "نيسان",
    "أيار",
    "حزيران",
    "تموز",
    "آب",
    "أيلول",
    "تشرين الأول",
    "تشرين الثاني",
    "كانون الأول",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "عدد الطلاب",
        data: [80, 95, 110, 142, 120, 130, 150, 160, 140, 170, 180, 200],
        backgroundColor: "#3b82f6",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#cbd5e1",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#cbd5e1" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#cbd5e1" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
  };

  return (
    <div className="bg-[#1e293b] border border-slate-700/40 rounded-xl p-6 shadow-md shadow-slate-900/30 mt-6">
      <h3 className="text-slate-100 text-lg font-semibold mb-4">
        تسجيل الطلاب خلال السنة
      </h3>

      <Bar data={data} options={options} />
    </div>
  );
}
