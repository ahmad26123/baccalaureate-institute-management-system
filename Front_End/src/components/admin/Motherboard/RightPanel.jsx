import { FiBell, FiEdit3 } from "react-icons/fi";

export default function RightPanel() {
  const notifications = [
    { text: "تم تسجيل طالب جديد في الفرع العلمي", time: "منذ 5 دقائق" },
    { text: "تحديث بيانات المدرس أحمد أيمن", time: "منذ ساعة" },
    { text: "إضافة شعبة جديدة للفرع الأدبي", time: "منذ 3 ساعات" },
  ];

  const notes = [
    "اجتماع المدرسين يوم الخميس الساعة 10 صباحاً",
    "مراجعة تقارير الفصل الأول قبل نهاية الأسبوع",
    "التأكد من حالة المدفوعات قبل إصدار الفواتير",
  ];

  return (
    <aside className="w-80 bg-[#0f172a] border-l border-slate-700/40 p-6 h-screen overflow-y-auto">

      {/* Notifications */}
      <div>
        <h3 className="text-slate-100 text-lg font-semibold mb-4 flex items-center gap-2">
          <FiBell className="text-blue-400" /> آخر الإشعارات
        </h3>

        <div className="space-y-4">
          {notifications.map((n, i) => (
            <div
              key={i}
              className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4 shadow-md shadow-slate-900/30"
            >
              <p className="text-slate-200 text-sm">{n.text}</p>
              <span className="text-slate-400 text-xs mt-2 block">{n.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="mt-10">
        <h3 className="text-slate-100 text-lg font-semibold mb-4 flex items-center gap-2">
          <FiEdit3 className="text-blue-400" /> ملاحظات سريعة
        </h3>

        <div className="space-y-4">
          {notes.map((note, i) => (
            <div
              key={i}
              className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4 shadow-md shadow-slate-900/30"
            >
              <p className="text-slate-200 text-sm">{note}</p>
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}
