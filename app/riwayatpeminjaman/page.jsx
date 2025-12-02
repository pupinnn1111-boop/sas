"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RiwayatPeminjaman() {
  const route = useRouter();
  const [activePage, setActivePage] = useState("riwayat");

  const history = [
    {
      title: "Belajar UI/UX",
      author: "Adit Prakoso",
      dateBorrowed: "12 Nov 2024",
      dateReturn: "19 Nov 2024",
      status: "Dikembalikan",
    },
    {
      title: "Algoritma Pemrograman",
      author: "Sari Mutiara",
      dateBorrowed: "20 Nov 2024",
      dateReturn: "Belum dikembalikan",
      status: "Dipinjam",
    },
    {
      title: "Dasar Jaringan",
      author: "Rizky Purnama",
      dateBorrowed: "10 Okt 2024",
      dateReturn: "20 Okt 2024",
      status: "Dikembalikan",
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Dikembalikan":
        return "text-green-600 bg-green-100";
      case "Dipinjam":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ========== SIDEBAR KIRI ========== */}
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

      {/* ========== KONTEN UTAMA ========== */}
      <div className="flex-1 p-6 ml-60">
        <h2 className="text-2xl font-bold mb-4 text-emerald-700">
          Riwayat Peminjaman
        </h2>

        <div className="space-y-4">
          {history.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center border"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Penulis: {item.author}
                </p>

                <p className="text-sm text-gray-600">
                  Dipinjam:{" "}
                  <span className="font-semibold">{item.dateBorrowed}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Dikembalikan:{" "}
                  <span className="font-semibold">{item.dateReturn}</span>
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
