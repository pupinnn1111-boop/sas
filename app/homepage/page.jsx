"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const route = useRouter();
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

        {loading ? (
          <p className="text-center text-gray-600">Loading data buku...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
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
        )}
      </section>

    </div>
  );
}
