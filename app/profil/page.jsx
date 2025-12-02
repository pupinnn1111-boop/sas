"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Profil() {
  const route = useRouter();
  const [activePage, setActivePage] = useState("profil");

  const user = {
    name: "vino",
    username: "vino123",
    email: "vino123@gmail.com",
    phone: "08987654321",
    role: "User",
    joined: "12 Januari 2024",
    namalengkap: "Alvian Vino Pratama",
    img: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ================= SIDEBAR ================= */}
      <div className="w-60 bg-white shadow-xl border-r p-6 flex flex-col gap-4 fixed top-0 left-0 h-full">
        <h2 className="text-xl font-bold text-emerald-700 mb-3">Perpustakaan</h2>

        <button
          onClick={() => route.push("/homepage")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${
            activePage === "home"
              ? "bg-emerald-600 text-white"
              : "hover:bg-emerald-100"
          }`}>
          Home
        </button>

        <button
          onClick={() => route.push("/koleksibuku")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${
            activePage === "koleksi"
              ? "bg-emerald-600 text-white"
              : "hover:bg-emerald-100"
          }`}>
          Koleksi Buku
        </button>

        <button
          onClick={() => route.push("/riwayatpeminjaman")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${
            activePage === "riwayat"
              ? "bg-emerald-600 text-white"
              : "hover:bg-emerald-100"
          }`}>
          Riwayat Peminjaman
        </button>

        <button
          onClick={() => route.push("/admin")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${
            activePage === "persetujuan"
              ? "bg-emerald-600 text-white"
              : "hover:bg-emerald-100"
          }`}>
          Persetujuan
        </button>

        <button
          onClick={() => route.push("/profil")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${
            activePage === "profil"
              ? "bg-emerald-600 text-white"
              : "hover:bg-emerald-100"
          }`}>
          Profil
        </button>
      </div>

      {/* ================= HALAMAN PROFIL ================= */}
      <div className="flex-1 p-6 ml-60">
        <h1 className="text-3xl font-bold text-emerald-700 mb-6">Profil Saya</h1>

        {/* Card Profil */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-6 border">
          <img
            src={user.img}
            alt="User Profile"
            className="w-28 h-28 rounded-full object-cover shadow"
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>
            <p className="text-gray-500 mt-2">Bergabung: {user.joined}</p>

            <span className="mt-3 inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
              {user.role}
            </span>
          </div>
        </div>

        {/* ================= DETAIL INFORMASI ================= */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow border">
          <h3 className="text-xl font-semibold mb-4 text-emerald-700">
            Informasi Akun
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between">
              <p className="text-gray-700 font-medium">Nama Lengkap:</p>
              <p className="text-gray-600">{user.namalengkap}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-700 font-medium">Email:</p>
              <p className="text-gray-600">{user.email}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-700 font-medium">No Telepon:</p>
              <p className="text-gray-600">{user.phone}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-700 font-medium">Role:</p>
              <p className="text-gray-600">{user.role}</p>
            </div>

          </div>

          <button className="mt-6 w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
            Edit Profil
          </button>
        </div>
      </div>

    </div>
  );
}
