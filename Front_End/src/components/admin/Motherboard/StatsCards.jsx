import { FiUsers, FiUserCheck, FiBookOpen, FiDollarSign } from "react-icons/fi";

export default function StatsCards() {
  const stats = [
    {
      title: "إجمالي الطلاب",
      value: "1,250",
      change: "+12%",
      icon: <FiUsers />,
      color: "text-blue-400",
    },
    {
      title: "إجمالي المدرسين",
      value: "48",
      change: "+4%",
      icon: <FiUserCheck />,
      color: "text-green-400",
    },
    {
      title: "الشعب الدراسية",
      value: "36",
      change: "+8%",
      icon: <FiBookOpen />,
      color: "text-yellow-400",
    },
    {
      title: "إجمالي الإيرادات",
      value: "$24,860",
      change: "+15%",
      icon: <FiDollarSign />,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-[#1e293b] border border-slate-700/40 rounded-xl p-5 shadow-md shadow-slate-900/30 flex items-center justify-between"
        >
          {/* Left Section */}
          <div>
            <p className="text-slate-400 text-sm">{item.title}</p>
            <h3 className="text-slate-100 text-2xl font-bold mt-1">{item.value}</h3>
            <span className="text-green-400 text-sm font-semibold mt-2 block">
              {item.change}
            </span>
          </div>

          {/* Icon */}
          <div
            className={`text-3xl ${item.color} bg-slate-800/40 p-3 rounded-xl`}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
