"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPeminjaman() {
const route = useRouter();
const [activePage, setActivePage] = useState("admin");

  const [requests, setRequests] = useState([
    {
      id: 1,
      user: "Budi Santoso",
      book: "Algoritma Pemrograman",
      date: "25 Nov 2024",
      status: "Menunggu",
    },
    {
      id: 2,
      user: "Adit Wijaya",
      book: "Belajar UI/UX",
      date: "24 Nov 2024",
      status: "Menunggu",
    },
  ]);

  const handleApprove = (id) => {
    setRequests((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Disetujui" } : item
      )
    );
  };

  const handleReject = (id) => {
    setRequests((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Ditolak" } : item
      )
    );
  };

  const statusColor = (status) => {
    switch (status) {
      case "Disetujui":
        return "text-green-700 bg-green-100";
      case "Ditolak":
        return "text-red-700 bg-red-100";
      default:
        return "text-yellow-700 bg-yellow-100";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* =========== LEFT SIDEBAR =========== */}
      <div className="w-60 bg-white shadow-xl border-r p-6 flex flex-col gap-4 fixed left-0 top-0 h-full">
        <h2 className="text-xl font-bold text-emerald-700 mb-3">Perpustakaan</h2>

        <button
          onClick={() => route.push("/homepage")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${
            activePage === "home"
              ? "bg-emerald-600 text-white"
              : "hover:bg-emerald-100"
          }`}
        >
          Home
        </button>

        <button
          onClick={() => route.push("/koleksibuku")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${
            activePage === "koleksi"
              ? "bg-emerald-600 text-white"
              : "hover:bg-emerald-100"
          }`}
        >
          Koleksi Buku
        </button>

        <button
          onClick={() => route.push("/riwayatpeminjaman")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${
            activePage === "riwayat"
              ? "bg-emerald-600 text-white"
              : "hover:bg-emerald-100"
          }`}
        >
          Riwayat Peminjaman
        </button>

        <button
          onClick={() => route.push("/admin")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${
            activePage === "admin"
              ? "bg-emerald-600 text-white"
              : "hover:bg-emerald-100"
          }`}
        >
          Persetujuan
        </button>

        <button
          onClick={() => route.push("/profil")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${
            activePage === "profil"
              ? "bg-emerald-600 text-white"
              : "hover:bg-emerald-100"
          }`}
        >
          Profil
        </button>
      </div>

      {/* =========== CONTENT =========== */}
      <div className="flex-1 p-6 ml-60">
        <h1 className="text-3xl font-bold text-emerald-700 mb-4">
          Persetujuan Peminjaman
        </h1>

        <div className="space-y-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-white p-4 shadow rounded-xl border flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{req.book}</h2>
                <p className="text-gray-600 text-sm">
                  Peminjam: <span className="font-medium">{req.user}</span>
                </p>
                <p className="text-gray-600 text-sm">
                  Tanggal: <span className="font-medium">{req.date}</span>
                </p>

                <span
                  className={`px-3 py-1 mt-2 inline-block rounded-full text-sm font-semibold ${statusColor(
                    req.status
                  )}`}
                >
                  {req.status}
                </span>
              </div>

              {req.status === "Menunggu" && (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleApprove(req.id)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition"
                  >
                    Setujui
                  </button>
                  <button
                    onClick={() => handleReject(req.id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
                  >
                    Tolak
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
