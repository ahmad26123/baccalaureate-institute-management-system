import { FiMoreVertical } from "react-icons/fi";

export default function RecentStudentsTable() {
  const students = [
    { name: "أحمد محمد علي", branch: "علمي", class: "A1", status: "نشط", date: "2024-12-10" },
    { name: "سارة خالد", branch: "أدبي", class: "B2", status: "نشط", date: "2024-12-09" },
    { name: "أحمد أيمن", branch: "علمي", class: "A2", status: "نشط", date: "2024-12-08" },
    { name: "لينا حسن", branch: "صناعي", class: "C1", status: "نشط", date: "2024-12-08" },
    { name: "ياسر عمر", branch: "أدبي", class: "B1", status: "نشط", date: "2024-12-08" },
  ];

  return (
    <div className="bg-[#1e293b] border border-slate-700/40 rounded-xl p-6 shadow-md shadow-slate-900/30 mt-6">
      <h3 className="text-slate-100 text-lg font-semibold mb-4">
        آخر الطلاب المسجلين
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-slate-300 text-sm">
          <thead>
            <tr className="text-slate-400 border-b border-slate-700/40">
              <th className="py-3 text-right">اسم الطالب</th>
              <th className="py-3 text-right">الفرع</th>
              <th className="py-3 text-right">الشعبة</th>
              <th className="py-3 text-right">تاريخ التسجيل</th>
              <th className="py-3 text-right">الحالة</th>
              <th className="py-3 text-right">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s, i) => (
              <tr
                key={i}
                className={`border-b border-slate-700/20 ${
                  i % 2 === 0 ? "bg-slate-800/30" : "bg-slate-900/20"
                }`}
              >
                <td className="py-3 px-2">{s.name}</td>
                <td className="py-3 px-2">{s.branch}</td>
                <td className="py-3 px-2">{s.class}</td>
                <td className="py-3 px-2">{s.date}</td>
                <td className="py-3 px-2 text-green-400 font-semibold">{s.status}</td>
                <td className="py-3 px-2">
                  <button className="text-slate-300 hover:text-blue-400 transition">
                    <FiMoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
