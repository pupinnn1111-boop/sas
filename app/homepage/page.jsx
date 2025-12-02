"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const route = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const allBooks = [
    // ======= Buku Lama =======
    {
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
      category: "Novel",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
    },
    {
      title: "Algoritma Pemrograman",
      author: "Sari Mutiara",
      category: "Teknologi",
      img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
    },
    {
      title: "Filosofi Kopi",
      author: "Dewi Lestari",
      category: "Novel",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
    },
    {
      title: "UI/UX Design",
      author: "Adit Prakoso",
      category: "Design",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },

    // ======= Buku Tambahan Baru =======
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Teknologi",
      img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Motivasi",
      img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93"
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Bisnis",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba"
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      category: "Teknologi",
      img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      category: "Novel",
      img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353"
    },
    {
      title: "Kata",
      author: "Rintik Sedu",
      category: "Novel",
      img: "https://images.unsplash.com/photo-1544717305-996b815c338c"
    },

    // ====== 3 Buku yang Ada Error → Sudah Diperbaiki ======
    {
      title: "Matematika Diskrit",
      author: "Susanto Wijaya",
      category: "Sains",
      img: "https://images.unsplash.com/photo-1509223197845-458d87318791"
    },
    {
      title: "Pengantar Fisika",
      author: "Giancoli",
      category: "Sains",
      img: "https://images.unsplash.com/photo-1509228468518-180dd4864904"
    },
    {
      title: "Biologi Dasar",
      author: "Campbell",
      category: "Sains",
      img: "https://images.unsplash.com/photo-1581091012184-5c8af94a6b05"
    },

    {
      title: "Ekonomi Mikro",
      author: "N. Gregory Mankiw",
      category: "Bisnis",
      img: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2"
    },
    {
      title: "Statistika",
      author: "Sugiyono",
      category: "Sains",
      img: "https://images.unsplash.com/photo-1509223197845-458d87318791"
    },
    {
      title: "Psikologi Warna",
      author: "Sarah Johnson",
      category: "Design",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Novel",
      img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93"
    },
    {
      title: "Bumi",
      author: "Tere Liye",
      category: "Novel",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
    }
  ];

  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <header className="bg-emerald-700 text-white py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4">

          <h1 className="text-2xl font-bold">Perpustakaan</h1>

          <div className="flex-1 flex justify-center">
            <input
              type="text"
              placeholder="Cari buku..."
              className="px-4 py-2 rounded-lg w-80 text-black bg-white focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <nav className="flex items-center gap-6 font-medium text-sm">
            <button onClick={() => route.push("/homepage")} className="hover:text-emerald-200 transition">Home</button>
            <button onClick={() => route.push("/koleksibuku")} className="hover:text-emerald-200 transition">Koleksi Buku</button>
            <button onClick={() => route.push("/riwayatpeminjaman")} className="hover:text-emerald-200 transition">Riwayat Peminjaman</button>
            <button onClick={() => route.push("/admin")} className="hover:text-emerald-200 transition">Persetujuan</button>
            <button onClick={() => route.push("/profil")} className="hover:text-emerald-200 transition">Profil</button>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold text-emerald-700">Selamat Datang di Perpustakaan Digital</h2>
        <p className="text-gray-700 mt-2">
          Temukan koleksi buku terbaik untuk menambah wawasan dan ilmu pengetahuan.
        </p>
      </section>

      {/* DAFTAR BUKU */}
      <section className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-5 text-emerald-700">Buku Populer</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={book.img} className="h-48 w-full object-cover" />

              <div className="p-4">
                <h4 className="font-bold text-lg">{book.title}</h4>
                <p className="text-gray-600">{book.author}</p>

                <span className="text-sm bg-emerald-100 text-emerald-700 px-2 py-1 rounded inline-block mt-2">
                  {book.category}
                </span>

                <button className="mt-4 w-full bg-emerald-700 text-white py-2 rounded-lg hover:bg-emerald-800 transition">
                  Pinjam Buku
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
