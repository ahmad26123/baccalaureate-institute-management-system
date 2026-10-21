import StudentsHeaderCards from "../components/admin/StudentMang/StudentsHeaderCards.jsx";
import StudentsFilters from "../components/admin/StudentMang/StudentsFilters.jsx";
import StudentsTable from "../components/admin/StudentMang/StudentsTable.jsx";
export default function StudentsManagement() {
  return (
    <div className="p-6">

      {/* الكاردين فوق */}
      <StudentsHeaderCards />

      {/* الفلاتر */}
      <StudentsFilters />

      {/* الجدول */}
      <StudentsTable />

    </div>
  );
}
