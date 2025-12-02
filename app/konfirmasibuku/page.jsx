"use client";

import React, { useState } from "react";

export default function KonfirmasiBuku() {
  const [requests, setRequests] = useState([
    { id: 1, user: "Budi Santoso", book: "Algoritma Pemrograman", date: "25 Nov 2024", status: "Menunggu" },
    { id: 2, user: "Adit Wijaya", book: "Belajar UI/UX", date: "24 Nov 2024", status: "Menunggu" },
    { id: 3, user: "Sari Oktaviani", book: "Matematika Diskrit", date: "23 Nov 2024", status: "Menunggu" },
  ]);

  const handleApprove = (id) => {
    setRequests(prev => prev.map(item => item.id === id ? { ...item, status: "Disetujui" } : item));
  };

  const handleReject = (id) => {
    setRequests(prev => prev.map(item => item.id === id ? { ...item, status: "Ditolak" } : item));
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
    <div className="flex min-h-screen bg-gray-100 text-gray-800">

      {/* ======== SIDEBAR (SAMA PERSIS DASHBOARD) ======== */}
      <aside className="w-64 bg-emerald-600 text-white p-6 shadow-2xl flex flex-col gap-6">
        <h1 className="text-2xl font-bold tracking-wide">Admin Panel</h1>

        <nav className="flex flex-col gap-3">
          <button className="w-full py-2 px-4 bg-emerald-500 rounded-lg text-left hover:bg-emerald-400 transition">
            Dashboard
          </button>

          <button className="w-full py-2 px-4 bg-emerald-500 rounded-lg text-left hover:bg-emerald-400 transition">
            Konfirmasi Buku
          </button>
        </nav>
      </aside>

      {/* ========== CONTENT AREA ========== */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-emerald-700 mb-6">Konfirmasi Buku</h1>

        <div className="space-y-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-white p-5 rounded-xl shadow border flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{req.book}</h2>
                <p className="text-gray-600 text-sm">
                  Peminjam: <span className="font-semibold">{req.user}</span>
                </p>
                <p className="text-gray-600 text-sm">
                  Tanggal: <span className="font-semibold">{req.date}</span>
                </p>

                <span
                  className={`px-3 py-1 text-sm rounded-full inline-block mt-2 font-semibold ${statusColor(req.status)}`}
                >
                  {req.status}
                </span>
              </div>

              {req.status === "Menunggu" && (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleApprove(req.id)}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
                  >
                    Setujui
                  </button>

                  <button
                    onClick={() => handleReject(req.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Tolak
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
