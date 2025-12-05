"use client";
import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!username.trim()) e.username = "Username wajib diisi";
    if (!password) e.password = "Password wajib diisi";
    else if (password.length < 6) e.password = "Minimal 6 karakter";
    return e;
  }

  function passwordStrength(pw) {
    if (pw.length === 0) return "";
    if (pw.length < 6) return "Lemah";
    if (/([A-Z])/.test(pw) && /([0-9])/.test(pw) && pw.length >= 8) return "Kuat";
    return "Sedang";
  }

  function getStrengthColor(strength) {
    if (strength === "Kuat") return "text-green-600";
    if (strength === "Sedang") return "text-yellow-600";
    if (strength === "Lemah") return "text-red-500";
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);

    if (Object.keys(v).length) return;

    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!data.success) {
      setErrors({ server: data.message });
      return;
    }

    setSubmitted(true);

    setTimeout(() => {
      window.location.href = "/homepage"; // 🔥 Redirect ke homepage
    }, 1000);
  }

  const strength = passwordStrength(password);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 via-white to-green-50 text-gray-800 px-4 py-8">
      <div className="w-full max-w-md">
        
        {/* Logo/Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-emerald-500 to-green-600 rounded-2xl shadow-lg mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Selamat Datang</h1>
          <p className="text-gray-600">Masuk ke akun perpustakaan Anda</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">

          {submitted ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Login Berhasil!</h3>
              <p className="text-gray-600">
                Selamat datang kembali,{" "}
                <span className="font-semibold text-emerald-600">{username}</span>
              </p>
              <p className="text-sm text-gray-500 mt-4">Mengarahkan ke homepage...</p>
            </div>
          ) : (
            
            /* 🔥 FORM DIBUNGKUS DI SINI */
            <form className="space-y-5" onSubmit={handleSubmit}>
              
              {/* Server Error */}
              {errors.server && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <p className="text-sm text-red-600 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {errors.server}
                  </p>
                </div>
              )}

              {/* Username */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Username
                </label>
                <input
                  value={username}
                  onChange={(ev) => setUsername(ev.target.value)}
                  type="text"
                  placeholder="Masukkan username Anda"
                  className={`w-full rounded-xl border-2 px-4 py-3 placeholder-gray-400 outline-none transition-all
                  ${errors.username 
                    ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100" 
                    : "border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  }`}
                />
                {errors.username && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {errors.username}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password"
                    className={`w-full rounded-xl border-2 px-4 py-3 pr-12 placeholder-gray-400 outline-none transition-all
                    ${errors.password 
                      ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100" 
                      : "border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Password Strength Indicator */}
                {password && (
                  <div className="mt-2 space-y-2">
                    <div className="flex gap-1">
                      <div className={`h-1 flex-1 rounded-full transition-all ${password.length >= 1 ? 'bg-red-500' : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full transition-all ${password.length >= 6 ? 'bg-yellow-500' : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full transition-all ${strength === 'Kuat' ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className={`font-semibold ${getStrengthColor(strength)}`}>
                        {strength && `Kekuatan: ${strength}`}
                      </span>
                      <span className="text-gray-500">{password.length} karakter</span>
                    </div>
                  </div>
                )}

                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 focus:ring-2 border-gray-300"
                  />
                  <span className="ml-2">Ingat saya</span>
                </label>
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700 font-semibold hover:underline">
                  Lupa password?
                </a>
              </div>

              {/* 🔥 BUTTON SUBMIT SUDAH FIX */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-linear-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 transition-all font-semibold text-white shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Memeriksa...
                  </span>
                ) : (
                  "Masuk"
                )}
              </button>

              {/* Terms */}
              <p className="text-center text-xs text-gray-500 pt-2">
                Dengan masuk, Anda menyetujui{" "}
                <a href="#" className="text-emerald-600 hover:underline font-medium">
                  Syarat & Ketentuan
                </a>{" "}
                kami
              </p>

            </form>
          )}

        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Belum punya akun?{" "}
            <a href="register" className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline">
              Daftar di sini
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}
