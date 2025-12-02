"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function KoleksiBuku() {
  const route = useRouter();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [activePage, setActivePage] = useState("koleksi");

  const books = [
    // ===== Buku Lama =====
    {
      title: "Belajar UI/UX",
      author: "Adit Prakoso",
      category: "Design",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      title: "Algoritma Pemrograman",
      author: "Sari Mutiara",
      category: "Pemrograman",
      img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    },
    {
      title: "Filosofi Kopi",
      author: "Dewi Lestari",
      category: "Novel",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    },
    {
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
      category: "Novel",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    },
    {
      title: "Database Modern",
      author: "Reza Fathur",
      category: "Pemrograman",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
      title: "Manajemen Jaringan",
      author: "Deni Saputra",
      category: "Teknologi",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },

    // ===== Buku Tambahan Baru =====

    {
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Pemrograman",
      img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      category: "Pemrograman",
      img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Motivasi",
      img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Bisnis",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      category: "Motivasi",
      img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      category: "Novel",
      img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    },
    {
      title: "Matematika Diskrit",
      author: "Susanto Wijaya",
      category: "Teknologi",
      img: "https://images.unsplash.com/photo-1509223197845-458d87318791",
    },
    {
      title: "Pengantar Fisika",
      author: "Giancoli",
      category: "Sains",
      img: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
    },
    {
      title: "Biologi Dasar",
      author: "Campbell",
      category: "Sains",
      img: "https://images.unsplash.com/photo-1581091012184-5c8af94a6b05",
    },
    {
      title: "Ekonomi Mikro",
      author: "N. Gregory Mankiw",
      category: "Ekonomi",
      img: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2",
    },
    {
      title: "Statistika Dasar",
      author: "Sugiyono",
      category: "Sains",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      title: "Pemrograman Python",
      author: "Rahmat Muslim",
      category: "Pemrograman",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Kecerdasan Buatan",
      author: "Andika Pratama",
      category: "Teknologi",
      img: "https://images.unsplash.com/photo-1581091870627-3b6a1a0bb1cd",
    },
    {
      title: "Desain Grafis Modern",
      author: "Sarah Johnson",
      category: "Design",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Bumi",
      author: "Tere Liye",
      category: "Novel",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    },
    {
      title: "Senja & Pagi",
      author: "Rintik Sedu",
      category: "Novel",
      img: "https://images.unsplash.com/photo-1544717305-996b815c338c",
    },
    {
      title: "Sistem Operasi",
      author: "Agus Setiawan",
      category: "Teknologi",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
      title: "Jaringan Komputer",
      author: "Susilo Adi",
      category: "Teknologi",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Dasar-Dasar HTML & CSS",
      author: "Putra Tama",
      category: "Pemrograman",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
  ];

  const filteredBooks = books.filter((book) => {
    const byTitle = book.title.toLowerCase().includes(search.toLowerCase());
    const byCategory = category === "Semua" || book.category === category;
    return byTitle && byCategory;
  });

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-60 bg-white shadow-xl border-r p-6 flex flex-col gap-4 fixed left-0 top-0 h-full">
        <h2 className="text-xl font-bold text-emerald-700 mb-3">Perpustakaan</h2>

        <button
          onClick={() => route.push("/homepage")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${activePage === "home" ? "bg-emerald-600 text-white" : "hover:bg-emerald-100"}`}
        >
          Home
        </button>

        <button
          onClick={() => route.push("/koleksibuku")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${activePage === "koleksi" ? "bg-emerald-600 text-white" : "hover:bg-emerald-100"}`}
        >
          Koleksi Buku
        </button>

        <button
          onClick={() => route.push("/riwayatpeminjaman")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${activePage === "riwayat" ? "bg-emerald-600 text-white" : "hover:bg-emerald-100"}`}
        >
          Riwayat Peminjaman
        </button>

        <button
          onClick={() => route.push("/profil")}
          className={`text-left px-3 py-2 rounded-lg font-medium transition ${activePage === "profil" ? "bg-emerald-600 text-white" : "hover:bg-emerald-100"}`}
        >
          Profil
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6 ml-60">

        <h1 className="text-3xl font-bold text-emerald-700 mb-6">Koleksi Buku</h1>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Cari judul buku..."
            className="px-4 py-2 w-full md:w-80 rounded-lg bg-white shadow border focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white shadow border focus:outline-none"
          >
            <option value="Semua">Semua</option>
            <option value="Pemrograman">Pemrograman</option>
            <option value="Novel">Novel</option>
            <option value="Teknologi">Teknologi</option>
            <option value="Design">Design</option>
            <option value="Motivasi">Motivasi</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Sains">Sains</option>
          </select>
        </div>

        {/* Book List */}
        {filteredBooks.length === 0 ? (
          <p className="text-center text-gray-600 mt-10">
            Buku tidak ditemukan...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book, index) => (
              <div key={index} className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
                <img src={book.img} alt={book.title} className="h-48 w-full object-cover" />

                <div className="p-4">
                  <h3 className="text-lg font-bold text-emerald-700">{book.title}</h3>
                  <p className="text-gray-600 text-sm">{book.author}</p>
                  <p className="text-xs text-emerald-600 mt-1">{book.category}</p>

                  <button className="mt-4 w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                    Detail Buku
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
