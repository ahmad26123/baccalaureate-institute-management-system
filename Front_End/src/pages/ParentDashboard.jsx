import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');

    // 1. إذا لم يكن مسجلاً للدخول، قم بتحويله إلى صفحة تسجيل الدخول
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // 2. إذا كان مسجلاً، لكن دوره ليس من ضمن الأدوار المسموح لها بهذه الصفحة
    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to="/unauthorized" replace />; // أو تحويله لوحة تحكمه الخاصة
    }

    // 3. إذا كان كل شيء سليم، اسمح له برؤية الصفحة
    return <Outlet />;
};

export default ProtectedRoute;