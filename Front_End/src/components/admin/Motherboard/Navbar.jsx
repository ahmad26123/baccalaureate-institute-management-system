import { FiBell, FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="w-full bg-[#0f172a] border-b border-slate-700/40 px-6 py-4 flex items-center justify-between shadow-md shadow-black/20">

      {/* Left Section - Page Title */}
      <div>
        <h2 className="text-slate-100 text-xl font-semibold">لوحة التحكم</h2>
        <p className="text-slate-400 text-sm mt-1">
          الثلاثاء، 10 ديسمبر 2024
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="بحث..."
            className="bg-slate-800/40 text-slate-200 px-4 py-2 rounded-lg w-48 focus:outline-none focus:ring-1 focus:ring-blue-500 border border-slate-700/40"
          />
          <FiSearch className="absolute right-3 top-2.5 text-slate-400" size={18} />
        </div>

        {/* Notification Icon */}
        <button className="relative text-slate-300 hover:text-blue-400 transition">
          <FiBell size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full border border-slate-700/40"
          />
          <div className="text-right">
            <h4 className="text-slate-100 text-sm font-semibold">أحمد الصالح</h4>
            <p className="text-slate-400 text-xs">مدير النظام</p>
          </div>
        </div>

      </div>
    </header>
  );
}
