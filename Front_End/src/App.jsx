import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import SecretaryDashboard from './pages/SecretaryDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import ParentDashboard from './pages/ParentDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* صفحة تسجيل الدخول العامة */}
        <Route path="/login" element={<Login />} />

        {/* مسارات خاصة بالمدير (Admin) فقط - من مهامك */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* مسارات خاصة بالسكرتيرة (Secretary) فقط - من مهامك */}
        <Route element={<ProtectedRoute allowedRoles={['secretary']} />}>
          <Route path="/secretary/dashboard" element={<SecretaryDashboard />} />
        </Route>

        {/* مسارات خاصة بالمدرس (Teacher) */}
        <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        </Route>

        {/* مسارات خاصة بالطالب (Student) */}
        <Route element={<ProtectedRoute allowedRoles={['student']} />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
        </Route>

        {/* مسارات خاصة ولي الأمر (Parent) */}
        <Route element={<ProtectedRoute allowedRoles={['parent']} />}>
          <Route path="/parent/dashboard" element={<ParentDashboard />} />
        </Route>

        {/* صفحة في حال عدم وجود الصلاحية */}
        <Route path="/unauthorized" element={<div className="p-6 text-center text-red-600">عذراً، لا تمتلك صلاحية لعرض هذه الصفحة.</div>} />

        {/* توجيه افتراضي لأي رابط غريب */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;