import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PaymentsPie() {
  const data = {
    labels: ["مدفوع بالكامل", "مدفوع جزئياً", "غير مدفوع"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ["#3b82f6", "#fbbf24", "#ef4444"],
        borderColor: "#1e293b",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#cbd5e1",
          font: { size: 14 },
        },
      },
    },
  };

  return (
    <div className="bg-[#1e293b] border border-slate-700/40 rounded-xl p-6 shadow-md shadow-slate-900/30 mt-6">
      <h3 className="text-slate-100 text-lg font-semibold mb-4">
        حالة المدفوعات
      </h3>

      <Pie data={data} options={options} />

      <div className="mt-6 text-slate-300 text-sm">
        <p className="flex justify-between">
          <span>إجمالي الإيرادات:</span>
          <span className="text-blue-400 font-semibold">$24,860</span>
        </p>
      </div>
    </div>
  );
}
