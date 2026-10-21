export default function StudentsTable() {
  const students = [
    {
      name: "أحمد محمد",
      gender: "ذكر",
      branch: "علمي",
      class: "A1",
      rating: 92,
      img: "https://i.pravatar.cc/50?img=3",
    },
    {
      name: "سارة خالد",
      gender: "أنثى",
      branch: "أدبي",
      class: "B2",
      rating: 88,
      img: "https://i.pravatar.cc/50?img=5",
    },
    {
      name: "لينا حسن",
      gender: "أنثى",
      branch: "صناعي",
      class: "C1",
      rating: 79,
      img: "https://i.pravatar.cc/50?img=8",
    },
  ];

  return (
    <div className="bg-[#1e293b] border border-slate-700/40 rounded-xl p-6 shadow-md">

      <table className="w-full text-slate-300 text-sm">
        <thead>
          <tr className="text-slate-400 border-b border-slate-700/40">
            <th className="py-3 text-right">الصورة</th>
            <th className="py-3 text-right">اسم الطالب</th>
            <th className="py-3 text-right">الجنس</th>
            <th className="py-3 text-right">الاختصاص</th>
            <th className="py-3 text-right">التقييم العام</th>
            <th className="py-3 text-right">الشعبة</th>
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
              <td className="py-3 px-2">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-10 h-10 rounded-full border border-slate-700/40"
                />
              </td>

              <td className="py-3 px-2">{s.name}</td>
              <td className="py-3 px-2">{s.gender}</td>
              <td className="py-3 px-2">{s.branch}</td>
              <td className="py-3 px-2 text-blue-400 font-semibold">{s.rating}</td>
              <td className="py-3 px-2">{s.class}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
