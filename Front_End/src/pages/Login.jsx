import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios"; // سنتركه معلقاً لحين جاهزية الباك إند

export default function Login() {
  // ربط المدخلات بحالات React State
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // استدعاء useNavigate داخل المكون
  const navigate = useNavigate();

  // دالة التوجيه بناءً على دور المستخدم (Role)
  const handleLoginSuccess = (userData) => {
    localStorage.setItem("token", userData.token);
    localStorage.setItem("role", userData.user.role);

    // التوجيه الديناميكي حسب الـ Role الوارد
    switch (userData.user.role) {
      case "admin":
        navigate("/admin/dashboard");
        break;
      case "secretary":
        navigate("/secretary/dashboard");
        break;
      case "teacher":
        navigate("/teacher/dashboard");
        break;
      case "student":
        navigate("/student/dashboard");
        break;
      case "parent":
        navigate("/parent/dashboard");
        break;
      default:
        navigate("/login");
    }
  };

  // معالجة تسجيل الدخول (محاكاة مؤقتة للاختبار بدون باك إند)
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // محاكاة وقت استجابة السيرفر لمدة ثانية واحدة
    setTimeout(() => {
      let simulatedRole = "student"; // الدور الافتراضي

      // تحديد الدور بناءً على الكلمة الموجودة في اسم المستخدم للتجربة
      const lowerInput = identifier.toLowerCase();
      if (lowerInput.includes("admin")) {
        simulatedRole = "admin";
      } else if (lowerInput.includes("secretary")) {
        simulatedRole = "secretary";
      } else if (lowerInput.includes("teacher")) {
        simulatedRole = "teacher";
      } else if (lowerInput.includes("parent")) {
        simulatedRole = "parent";
      } else {
        simulatedRole = "student";
      }

      // بناء استجابة وهمية مطابقة لما سيرسله الباك إند مستقبلاً
      const mockResponse = {
        token: "mock-jwt-token-123456789",
        user: {
          username: identifier,
          role: simulatedRole,
        },
      };

      handleLoginSuccess(mockResponse);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-slate-950">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center px-8 md:px-16 w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-slate-50 mb-2">تسجيل الدخول</h1>
        <p className="text-slate-400 mb-8">
          أدخل بيانات حسابك للمتابعة إلى لوحة التحكم
        </p>

        {error && (
          <div className="mb-4 bg-red-500/10 border border-red-500/40 text-red-400 px-4 py-2 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username / Email */}
          <div>
            <label className="text-slate-200 mb-2 block">
              اسم المستخدم أو البريد الإلكتروني
            </label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-700 text-slate-100 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-slate-200 mb-2 block">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-700 text-slate-100 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 text-slate-50 font-semibold py-3 rounded-md transition disabled:opacity-50"
          >
            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </button>

          <div className="text-right">
            <button
              type="button"
              className="text-slate-400 hover:text-blue-400 transition text-sm"
            >
              نسيت كلمة المرور؟
            </button>
          </div>
        </form>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 items-center justify-center">
        <div className="text-center">
          <div className="w-28 h-28 rounded-full bg-blue-500/10 border border-blue-500/40 flex items-center justify-center mx-auto mb-6">
            <span className="text-blue-500 text-4xl font-bold">T</span>
          </div>
          <h2 className="text-2xl text-slate-100 font-semibold mb-2">
            معهد تمام للتعليم والتطوير
          </h2>
          <p className="text-slate-400 text-sm">
            مستقبلك الأفضل يبدأ من هنا
          </p>
        </div>
      </div>
    </div>
  );
}