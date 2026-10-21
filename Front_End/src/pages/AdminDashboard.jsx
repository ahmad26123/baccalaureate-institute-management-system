import Sidebar from "../components/admin/Motherboard/Sidebar.jsx";
import Navbar from "../components/admin/Motherboard/Navbar.jsx";
import StatsCards from "../components/admin/Motherboard/StatsCards.jsx";
import StudentsChart from "../components/admin/Motherboard/StudentsChart.jsx";
import PaymentsPie from "../components/admin/Motherboard/PaymentsPie.jsx";
import RecentStudentsTable from "../components/admin/Motherboard/RecentStudentsTable.jsx";
import RightPanel from "../components/admin/Motherboard/RightPanel.jsx";

export default function AdminDashboard() {
  return (
    <div className="flex bg-[#0f172a]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-6 overflow-y-auto">

          {/* Stats Cards */}
          <StatsCards />

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <StudentsChart />
            <PaymentsPie />
          </div>

          {/* Recent Students Table */}
          <RecentStudentsTable />

        </div>
      </div>

      {/* Right Panel */}
      <RightPanel />

    </div>
  );
}
