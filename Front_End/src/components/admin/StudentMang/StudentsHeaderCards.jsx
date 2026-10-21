import { FiUsers, FiLayers } from "react-icons/fi";

export default function StudentsHeaderCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

      {/* Total Students */}
      <div className="bg-[#1e293b] border border-slate-700/40 rounded-xl p-5 shadow-md flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm">عدد الطلاب الإجمالي</p>
          <h3 className="text-slate-100 text-2xl font-bold mt-1">1250</h3>
        </div>
        <div className="text-blue-400 bg-slate-800/40 p-3 rounded-xl text-3xl">
          <FiUsers />
        </div>
      </div>

      {/* Total Classes */}
      <div className="bg-[#1e293b] border border-slate-700/40 rounded-xl p-5 shadow-md flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm">عدد الشعب</p>
          <h3 className="text-slate-100 text-2xl font-bold mt-1">36</h3>
        </div>
        <div className="text-yellow-400 bg-slate-800/40 p-3 rounded-xl text-3xl">
          <FiLayers />
        </div>
      </div>

    </div>
  );
}
