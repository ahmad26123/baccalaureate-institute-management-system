import { useState } from "react";

export default function Login() {
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("بيانات تسجيل الدخول غير صحيحة");
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
          {/* Username */}
          <div>
            <label className="text-slate-200 mb-2 block">
              اسم المستخدم أو البريد الإلكتروني
            </label>
            <input
              type="text"
              className="w-full bg-slate-900 border border-slate-700 text-slate-100 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-slate-200 mb-2 block">كلمة المرور</label>
            <input
              type="password"
              className="w-full bg-slate-900 border border-slate-700 text-slate-100 px-4 py-3 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-slate-50 font-semibold py-3 rounded-md transition"
          >
            تسجيل الدخول
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
