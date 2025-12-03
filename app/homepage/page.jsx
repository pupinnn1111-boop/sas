"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // ====== FETCH DATA DARI DATABASE ======
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("/api/books");
        const data = await res.json();
        setAllBooks(data);
      } catch (err) {
        console.error("Gagal fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Filter pencarian
  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mock navigation functions (keep original functionality)
  const navigate = (path) => {
    console.log("Navigate to:", path);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-green-50">

      {/* HEADER */}
      <header className="bg-linear-to-r from-emerald-600 to-green-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold">Perpustakaan</h1>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Cari buku..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl text-gray-800 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              <button 
                onClick={() => router.push("/homepage")} 
                className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => router.push("/koleksibuku")} 
                className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all font-medium"
              >
                Koleksi Buku
              </button>
              <button 
                onClick={() => router.push("/riwayatpeminjaman")} 
                className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all font-medium"
              >
                Riwayat Peminjaman
              </button>
              <button 
                onClick={() => router.push("/profil")} 
                className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all font-medium"
              >
                Profil
              </button>
            </nav>

          </div>

          {/* Search Bar - Mobile */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Cari buku..."
                className="w-full pl-12 pr-4 py-3 rounded-xl text-gray-800 bg-white/95 focus:outline-none focus:ring-2 focus:ring-white/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-block bg-linear-to-r from-emerald-100 to-green-100 px-4 py-2 rounded-full text-emerald-700 font-semibold text-sm mb-6">
          ✨ Platform Perpustakaan Digital Terpercaya
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent mb-4">
          Selamat Datang di Perpustakaan Digital
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Temukan koleksi buku terbaik untuk menambah wawasan dan ilmu pengetahuan.
        </p>
      </section>

      {/* DAFTAR BUKU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">Buku Populer</h3>
            <p className="text-gray-600 mt-1">Koleksi terbaik untuk Anda</p>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">Loading data buku...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div 
                key={book.id} 
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={book.img} 
                    alt={book.title}
                    className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-5">
                  <h4 className="font-bold text-lg text-gray-800 mb-1">{book.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{book.author}</p>

                  <span className="inline-block text-xs bg-linear-to-r from-emerald-100 to-green-100 text-emerald-700 px-3 py-1.5 rounded-full font-semibold mb-4">
                    {book.category}
                  </span>

                  <button
                    onClick={() => navigate(`/pinjambuku/${book.id}`)}
                    className="w-full bg-linear-to-r from-emerald-600 to-green-700 text-white py-3 rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all font-semibold"
                  >
                    Pinjam Buku
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredBooks.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Buku tidak ditemukan</h3>
            <p className="text-gray-600">Coba kata kunci pencarian yang berbeda</p>
          </div>
        )}
      </section>

    </div>
  );
}