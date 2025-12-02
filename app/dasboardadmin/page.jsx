"use client";
import React, { useState } from "react";

export default function DashboardAdmin() {
  const [selected, setSelected] = useState(null);

  const riwayat = [
    { id: 1, nama: "Aulia Rahman", buku: "Matematika Diskrit", tanggalPinjam: "2025-02-10", tanggalKembali: "2025-02-17", status: "Dikembalikan" },
    { id: 2, nama: "Fajar Setiawan", buku: "Pengantar Fisika", tanggalPinjam: "2025-02-12", tanggalKembali: "-", status: "Dipinjam" },
    { id: 3, nama: "Nina Putri", buku: "Biologi Dasar", tanggalPinjam: "2025-02-01", tanggalKembali: "-", status: "Terlambat" },
    { id: 4, nama: "Yoga Pratama", buku: "Algoritma Pemrograman", tanggalPinjam: "2025-01-30", tanggalKembali: "2025-02-05", status: "Dikembalikan" },
    { id: 5, nama: "Santi Marlina", buku: "Dasar-Dasar Basis Data", tanggalPinjam: "2025-02-15", tanggalKembali: "-", status: "Dipinjam" },
    { id: 6, nama: "Rehan Saputra", buku: "Kalkulus 1", tanggalPinjam: "2025-01-28", tanggalKembali: "-", status: "Terlambat" },
    { id: 7, nama: "Lilis Andini", buku: "Pengenalan Jaringan Komputer", tanggalPinjam: "2025-02-05", tanggalKembali: "2025-02-10", status: "Dikembalikan" },
    { id: 8, nama: "Ferry Nugroho", buku: "Pemrograman Web", tanggalPinjam: "2025-02-08", tanggalKembali: "-", status: "Dipinjam" },
    { id: 9, nama: "Mira Julianti", buku: "Akuntansi Dasar", tanggalPinjam: "2025-02-11", tanggalKembali: "-", status: "Dipinjam" },
    { id: 10, nama: "Rizky Dwi", buku: "UI/UX Modern", tanggalPinjam: "2025-01-29", tanggalKembali: "2025-02-03", status: "Dikembalikan" },
  ];

  const getStatusColor = (status) => {
    if (status === "Dikembalikan") return "bg-emerald-600 text-white";
    if (status === "Dipinjam") return "bg-blue-500 text-white";
    if (status === "Terlambat") return "bg-red-600 text-white";
    return "bg-gray-500 text-white";
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      
      {/* SIDEBAR */}
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

      {/* CONTENT */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-6 text-emerald-700">
          Riwayat Peminjaman
        </h2>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="p-3 text-left">Nama Peminjam</th>
                <th className="p-3 text-left">Judul Buku</th>
                <th className="p-3 text-left">Tgl. Pinjam</th>
                <th className="p-3 text-left">Tgl. Kembali</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {riwayat.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{item.nama}</td>
                  <td className="p-3 font-semibold">{item.buku}</td>
                  <td className="p-3">{item.tanggalPinjam}</td>
                  <td className="p-3">{item.tanggalKembali}</td>
                  <td className="p-3">
                    <button
                      onClick={() => setSelected(item)}
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                        item.status
                      )} hover:opacity-80 transition`}
                    >
                      {item.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </main>

      {/* ==== MODAL / POPUP DETAIL ==== */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl w-96">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">
              Detail Peminjaman
            </h3>

            <p><b>Nama:</b> {selected.nama}</p>
            <p><b>Buku:</b> {selected.buku}</p>
            <p><b>Tanggal Pinjam:</b> {selected.tanggalPinjam}</p>
            <p><b>Tanggal Kembali:</b> {selected.tanggalKembali}</p>

            <p className="mt-2">
              <b>Status:</b>{" "}
              <span className={`px-2 py-1 rounded-lg ${getStatusColor(selected.status)}`}>
                {selected.status}
              </span>
            </p>

            <button
              onClick={() => setSelected(null)}
              className="w-full mt-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
