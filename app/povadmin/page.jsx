"use client";
import React, { useState } from "react";

export default function PinjamBukuEmerald() {
  const [search, setSearch] = useState("");

  const books = [
    {
      title: "Matematika Diskrit",
      author: "Dr. Budi Santosa",
      category: "Matematika",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      title: "Pengantar Fisika",
      author: "Prof. Suryanto",
      category: "Fisika",
      img: "https://images.unsplash.com/photo-1517976487492-5750f3195933",
    },
    {
      title: "Biologi Dasar",
      author: "Dr. Lestari",
      category: "Biologi",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      {/* SIDEBAR EMERALD */}
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
        <h2 className="text-3xl font-bold mb-5 text-emerald-700">
          Pinjam Buku
        </h2>

        {/* SEARCH */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari buku..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-lg border border-emerald-300 shadow-sm focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* GRID BUKU */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {filteredBooks.length === 0 ? (
            <p className="text-gray-600">Buku tidak ditemukan.</p>
          ) : (
            filteredBooks.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-full h-44 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                  <p className="text-xs text-emerald-700 font-semibold mb-3">
                    {book.category}
                  </p>

                  <button className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                    Pinjam Buku
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
