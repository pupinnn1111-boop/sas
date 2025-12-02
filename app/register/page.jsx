"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};

    if (!name.trim()) e.name = "Nama wajib diisi";
    if (!username.trim()) e.username = "Username wajib diisi";

    if (!email.trim()) e.email = "Email wajib diisi";
    else if (!/^\S+@\S+\.\S+$/.test(email))
      e.email = "Format email tidak valid";

    if (!phone.trim()) e.phone = "No Telpon wajib diisi";
    else if (!/^[0-9]{10,15}$/.test(phone))
      e.phone = "No telpon hanya angka (10–15 digit)";

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

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        username,
        email,
        phone,
        password,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      alert(data.message);
      return;
    }

    setSubmitted(true);

    // Redirect ke login setelah sukses
    setTimeout(() => router.push("/login"), 1500);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-50 to-green-100 text-gray-800 p-6">
      <div className="w-full max-w-md bg-white border border-emerald-100 rounded-2xl shadow-lg p-6">

        <header className="mb-4 text-center">
          <h1 className="text-2xl font-semibold text-emerald-700">Register</h1>
          <p className="text-sm text-gray-500">Silakan buat akun baru Anda</p>
        </header>

        {submitted ? (
          <div className="rounded-lg p-4 bg-green-50 border border-green-300 text-green-800">
            <strong>Berhasil!</strong> Akun berhasil dibuat dengan nama{" "}
            <span className="font-medium text-emerald-700">{name}</span>.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama
              </label>
              <input
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                type="text"
                placeholder="Masukkan nama lengkap"
                className={`w-full rounded-xl border px-3 py-2 placeholder-gray-400 outline-none 
                focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition
                ${errors.name ? "border-red-300" : "border-gray-200"}`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                type="text"
                placeholder="Masukkan username Anda"
                className={`w-full rounded-xl border px-3 py-2 placeholder-gray-400 outline-none 
                focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition 
                ${errors.username ? "border-red-300" : "border-gray-200"}`}
              />
              {errors.username && (
                <p className="mt-1 text-xs text-red-500">{errors.username}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                type="email"
                placeholder="Masukkan email Anda"
                className={`w-full rounded-xl border px-3 py-2 placeholder-gray-400 outline-none
                focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition
                ${errors.email ? "border-red-300" : "border-gray-200"}`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
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
                  className={`w-full rounded-xl border px-3 py-2 pr-12 placeholder-gray-400 outline-none
                  focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition
                  ${errors.password ? "border-red-300" : "border-gray-200"}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-emerald-600"
                >
                  {showPassword ? "Sembunyikan" : "Tampilkan"}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                No Telpon
              </label>
              <input
                value={phone}
                onChange={(ev) => setPhone(ev.target.value)}
                type="text"
                placeholder="081234567890"
                className={`w-full rounded-xl border px-3 py-2 placeholder-gray-400 outline-none
                focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition
                ${errors.phone ? "border-red-300" : "border-gray-200"}`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500">
              <p>
                Kekuatan:{" "}
                <span className="font-medium text-emerald-600">
                  {passwordStrength(password)}
                </span>
              </p>
              <p>{password.length} karakter</p>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition font-medium text-white disabled:opacity-70"
              disabled={loading}
            >
              {loading ? "Mendaftarkan..." : "Daftar"}
            </button>

            <div className="pt-2 text-center text-xs text-gray-500">
              Dengan menekan “Daftar”, Anda menyetujui{" "}
              <a href="#" className="text-emerald-600 hover:underline">
                Syarat & Ketentuan
              </a>{" "}
              kami.
            </div>
          </form>
        )}

        <footer className="mt-6 text-center text-sm text-gray-600">
          Sudah punya akun?{" "}
          <a href="login" className="text-emerald-600 hover:underline">
            Login
          </a>
        </footer>

      </div>
    </div>
  );
}
