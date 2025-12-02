"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
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

  async function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);

    if (Object.keys(v).length) return;

    setLoading(true);

    // 🔥 Kirim ke API Login
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

    // 1 detik lalu masuk homepage
    setTimeout(() => {
      router.push("/homepage");
    }, 1000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-50 to-green-100 p-6">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm border border-emerald-100 rounded-2xl shadow-lg p-6">
        <header className="mb-4 text-center">
          <h1 className="text-2xl font-semibold text-emerald-700">Login</h1>
          <p className="text-sm text-gray-500">
            Silakan masukkan username dan password Anda
          </p>
        </header>

        {submitted ? (
          <div className="rounded-lg p-4 bg-green-50 border border-green-300 text-green-800">
            <strong>Berhasil!</strong> Anda telah login sebagai{" "}
            <span className="font-medium text-emerald-700">{username}</span>.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {errors.server && (
              <p className="text-center text-sm text-red-600">{errors.server}</p>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                type="text"
                placeholder="Masukkan username Anda"
                className={`w-full rounded-xl border px-3 py-2 placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition ${
                  errors.username ? "border-red-300" : "border-gray-200"
                }`}
              />
              {errors.username && (
                <p className="mt-1 text-xs text-red-500">{errors.username}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  className={`w-full rounded-xl border px-3 py-2 pr-12 placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition ${
                    errors.password ? "border-red-300" : "border-gray-200"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-emerald-600"
                >
                  {showPassword ? "Sembunyikan" : "Tampilkan"}
                </button>
              </div>

              <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                <p>
                  Kekuatan:{" "}
                  <span className="font-medium text-emerald-600">
                    {passwordStrength(password)}
                  </span>
                </p>
                <p>{password.length} karakter</p>
              </div>

              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-2">Ingat saya</span>
              </label>
              <a href="#" className="text-sm text-emerald-600 hover:underline">
                Lupa password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition font-medium text-white disabled:opacity-70"
                disabled={loading}
              >
                {loading ? "Memeriksa..." : "Masuk"}
              </button>
            </div>

            <div className="pt-2 text-center text-xs text-gray-500">
              Dengan menekan “Masuk”, Anda setuju dengan{" "}
              <a href="#" className="text-emerald-600 hover:underline">
                Syarat & Ketentuan
              </a>{" "}
              kami.
            </div>
          </form>
        )}

        <footer className="mt-6 text-center text-sm text-gray-600">
          Belum punya akun?{" "}
          <a href="register" className="text-emerald-600 hover:underline">
            Daftar
          </a>
        </footer>
      </div>
    </div>
  );
}
