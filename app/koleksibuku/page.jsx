"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function KoleksiBuku() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");

  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const pageMap = {
    "/homepage": "home",
    "/koleksibuku": "koleksi",
    "/riwayatpeminjaman": "riwayat",
    "/profil": "profil",
  };

  const activePage = pageMap[currentPath] || "koleksi";

  const books = [
    { title: "Belajar UI/UX", author: "Adit Prakoso", category: "Design", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" },
    { title: "Algoritma Pemrograman", author: "Sari Mutiara", category: "Pemrograman", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c" },
    { title: "Filosofi Kopi", author: "Dewi Lestari", category: "Novel", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66" },
    { title: "Laskar Pelangi", author: "Andrea Hirata", category: "Novel", img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70" },
    { title: "Database Modern", author: "Reza Fathur", category: "Pemrograman", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c" },
    { title: "Manajemen Jaringan", author: "Deni Saputra", category: "Teknologi", img: "https://images.unsplash.com/photo-1518770660439-4636190af475" },

    // buku tambahan
    { title: "Clean Code", author: "Robert C. Martin", category: "Pemrograman", img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d" },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Pemrograman", img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935" },
    { title: "Atomic Habits", author: "James Clear", category: "Motivasi", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Bisnis", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
    { title: "Deep Work", author: "Cal Newport", category: "Motivasi", img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29" },
    { title: "Harry Potter", author: "J.K. Rowling", category: "Novel", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353" },
  ];

  const filteredBooks = books.filter((book) => {
    const byTitle = book.title.toLowerCase().includes(search.toLowerCase());
    const byCategory = category === "Semua" || book.category === category;
    return byTitle && byCategory;
  });

  const menuItems = [
    {
      id: "home",
      label: "Home",
      path: "/homepage",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 01-1h2a1 1 01 1 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "koleksi",
      label: "Koleksi Buku",
      path: "/koleksibuku",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "riwayat",
      label: "Riwayat Peminjaman",
      path: "/riwayatpeminjaman",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "profil",
      label: "Profil",
      path: "/profil",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen bg-linear-to-br from-emerald-50 via-white to-green-50">

      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-xl border-r border-gray-200 p-6 flex flex-col gap-2 fixed left-0 top-0 h-full">
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
          <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
            📚
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">Perpustakaan</h2>
            <p className="text-xs text-gray-500">Digital Library</p>
          </div>
        </div>

        {/* MENU */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => router.push(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activePage === item.id
                  ? "bg-linear-to-r from-emerald-600 to-green-700 text-white shadow-lg"
                  : "text-gray-700 hover:bg-emerald-50"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-8 ml-64">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Koleksi Buku</h1>

        {/* SEARCH */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Cari Judul Buku..."
            className="px-4 py-2 rounded-lg border w-96"
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="px-4 py-2 rounded-lg border"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Semua</option>
            <option>Pemrograman</option>
            <option>Novel</option>
            <option>Teknologi</option>
            <option>Motivasi</option>
            <option>Bisnis</option>
            <option>Sains</option>
            <option>Design</option>
          </select>
        </div>

        {/* BOOK GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              <img
                src={book.img}
                alt=""
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h2 className="font-bold text-gray-800">{book.title}</h2>
              <p className="text-gray-600 text-sm">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
