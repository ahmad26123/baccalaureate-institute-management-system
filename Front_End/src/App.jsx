import { BrowserRouter, Routes, Route } from "react-router-dom.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import StudentsManagement from "./pages/StudentsManagement.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* صفحة لوحة التحكم */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* صفحة إدارة الطلبة */}
        <Route path="/admin/students" element={<StudentsManagement />} />
      </Routes>
    </BrowserRouter>
  );
}
