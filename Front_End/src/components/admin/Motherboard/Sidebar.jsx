import { Link } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiBook,
  FiCreditCard,
  FiBarChart2,
  FiArchive,
  FiSettings,
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#0b1220] border-r border-slate-700/40 p-6 flex flex-col justify-between">

      {/* Logo */}
      <div>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
            <span className="text-blue-400 text-xl font-bold">T</span>
          </div>
          <h1 className="text-slate-200 text-lg font-semibold">
            معهد تمام
          </h1>
        </div>

        {/* Menu */}
        <nav className="space-y-3">

          <SidebarItem
            icon={<FiHome />}
            label="لوحة التحكم"
            to="/admin"
          />

          <SidebarItem
            icon={<FiUsers />}
            label="إدارة الطلبة"
            to="/admin/students"
          />

          <SidebarItem
            icon={<FiUsers />}
            label="إدارة المدرسين"
            to="/admin/teachers"
          />

          <SidebarItem
            icon={<FiBook />}
            label="الشعب الدراسية"
            to="/admin/classes"
          />

          <SidebarItem
            icon={<FiCreditCard />}
            label="الفواتير والمدفوعات"
            to="/admin/payments"
          />

          <SidebarItem
            icon={<FiBarChart2 />}
            label="التقييمات والدرجات"
            to="/admin/grades"
          />

          <SidebarItem
            icon={<FiArchive />}
            label="الأرشيف"
            to="/admin/archive"
          />

          <SidebarItem
            icon={<FiSettings />}
            label="الإعدادات"
            to="/admin/settings"
          />

        </nav>
      </div>

      {/* Footer */}
      <div className="text-slate-500 text-sm mt-10">
        مستقبلك الأفضل يبدأ من هنا
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, to }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 text-slate-300 px-3 py-2 rounded-lg cursor-pointer hover:bg-slate-800/40 transition"
    >
      <span className="text-blue-400 text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </Link>
  );
}
