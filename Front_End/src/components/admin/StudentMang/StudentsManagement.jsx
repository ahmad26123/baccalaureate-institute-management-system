import StudentsHeaderCards from "./StudentsHeaderCards";
import StudentsFilters from "./StudentsFilters";
import StudentsTable from "./StudentsTable";

export default function StudentsManagement() {
  return (
    <div className="p-6">
      <StudentsHeaderCards />
      <StudentsFilters />
      <StudentsTable />
    </div>
  );
}
