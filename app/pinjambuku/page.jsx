"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function PinjamBuku({ searchParams }) {
  const route = useRouter();

  const book = {
    title: searchParams.title || "Judul Buku",
    author: searchParams.author || "Penulis",
    category: searchParams.category || "Kategori",
    img:
      searchParams.img ||
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    desc:
      "Buku ini memberikan informasi lengkap dan terstruktur, cocok untuk pelajar, mahasiswa, ataupun pembaca umum."
  };

  const handlePinjam = () => {
    alert("Permintaan peminjaman dikirim!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      {/* CARD BESAR */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden border">

        {/* HEADER */}
        <div className="p-6 border-b flex items-center justify-between bg-emerald-700 text-white">
          <h1 className="text-xl font-semibold">📖 Pinjam Buku</h1>

          <button
            onClick={() => route.back()}
            className="px-4 py-2 bg-white text-emerald-700 rounded-lg hover:bg-gray-100 transition font-medium"
          >
            ← Kembali
          </button>
        </div>

        {/* KONTEN */}
        <div className="flex flex-col md:flex-row">

          {/* COVER BUKU (KIRI) */}
          <div className="md:w-1/2 p-6 flex justify-center items-center bg-gray-50">
            <img
              src={book.img}
              alt={book.title}
              className="rounded-2xl shadow-xl w-72 h-96 object-cover border"
            />
          </div>

          {/* DETAIL BUKU (KANAN) */}
          <div className="md:w-1/2 p-8">

            <h2 className="text-3xl font-bold text-emerald-700 leading-tight">
              {book.title}
            </h2>

            <p className="mt-2 text-gray-700 text-lg">✍️ {book.author}</p>
            <p className="text-gray-600">📂 {book.category}</p>

            {/* GARIS */}
            <div className="my-5 h-1 w-20 bg-emerald-600 rounded"></div>

            <p className="text-gray-700 leading-relaxed">
              {book.desc}
            </p>

            {/* FORM PINJAM */}
            <div className="mt-6 bg-gray-50 p-5 rounded-2xl border shadow-sm">

              <label className="text-sm text-gray-600">Tanggal Pinjam</label>
              <input
                type="date"
                className="mt-1 block w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-emerald-600 outline-none"
              />

              <label className="text-sm text-gray-600 mt-4 block">Tanggal Kembali</label>
              <input
                type="date"
                className="mt-1 block w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>

            {/* TOMBOL PINJAM */}
            <button
              onClick={handlePinjam}
              className="mt-6 w-full bg-emerald-700 text-white py-3 rounded-xl text-lg font-semibold hover:bg-emerald-800 shadow-md transition"
            >
              Pinjam Buku Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
