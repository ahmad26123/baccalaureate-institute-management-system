import { FiSearch } from "react-icons/fi";

export default function StudentsFilters() {
  return (
    <div className="bg-[#1e293b] border border-slate-700/40 rounded-xl p-5 shadow-md mb-6">

      <h3 className="text-slate-100 text-lg font-semibold mb-4">فلترة الطلاب</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">

        {/* Filter by Name */}
        <div className="relative">
          <input
            type="text"
            placeholder="حسب الاسم"
            className="bg-slate-800/40 text-slate-200 px-4 py-2 rounded-lg w-full border border-slate-700/40 focus:outline-none"
          />
          <FiSearch className="absolute right-3 top-2.5 text-slate-400" size={18} />
        </div>

        {/* Branch */}
        <select className="bg-slate-800/40 text-slate-200 px-4 py-2 rounded-lg border border-slate-700/40">
          <option>الاختصاص</option>
          <option>علمي</option>
          <option>أدبي</option>
          <option>صناعي</option>
        </select>

        {/* Class */}
        <select className="bg-slate-800/40 text-slate-200 px-4 py-2 rounded-lg border border-slate-700/40">
          <option>الشعبة</option>
          <option>A1</option>
          <option>B2</option>
          <option>C1</option>
        </select>

        {/* Alphabet */}
        <select className="bg-slate-800/40 text-slate-200 px-4 py-2 rounded-lg border border-slate-700/40">
          <option>الأحرف الأبجدية</option>
          <option>أ</option>
          <option>ب</option>
          <option>ت</option>
          <option>ث</option>
        </select>

        {/* Rating */}
        <select className="bg-slate-800/40 text-slate-200 px-4 py-2 rounded-lg border border-slate-700/40">
          <option>حسب التقييم</option>
          <option>90+</option>
          <option>80+</option>
          <option>70+</option>
        </select>

      </div>
    </div>
  );
}
