"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DetailPinjam({ params }) {
  const router = useRouter();

  // FIX ERROR PARAMS
  const p = React.use(params);
  const id = p.id;

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [borrowDate, setBorrowDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await fetch(`/api/books/${id}`);
        const data = await res.json();
        setBook(data);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) getBook();
  }, [id]);

  const handlePinjam = async () => {
    if (!borrowDate || !returnDate)
      return alert("Isi tanggal pinjam & tanggal kembali!");
  
    const data = {
      title: book.title,
      author: book.author,
      img: book.img,
      dateBorrowed: borrowDate,
      dateReturn: returnDate,
      status: "Dipinjam",
    };
  
    try {
      const res = await fetch("/api/borrows", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const result = await res.json();
      alert(result.message);
  
      router.push("/riwayatpeminjaman");
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat menyimpan peminjaman");
    }
  };
  
  

  if (!book) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg">
        Buku tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden border">

        <div className="p-6 border-b flex items-center justify-between bg-emerald-700 text-white">
          <h1 className="text-xl font-semibold">📖 Pinjam Buku</h1>

          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-white text-emerald-700 rounded-lg hover:bg-gray-100 transition font-medium"
          >
            ← Kembali
          </button>
        </div>

        <div className="flex flex-col md:flex-row">

          <div className="md:w-1/2 p-6 flex justify-center items-center bg-gray-50">
            <img
              src={book.img}
              alt={book.title}
              className="rounded-2xl shadow-xl w-72 h-96 object-cover border"
            />
          </div>

          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-emerald-700 leading-tight">
              {book.title}
            </h2>

            <p className="mt-2 text-gray-700 text-lg">✍️ {book.author}</p>
            <p className="text-gray-600">📂 {book.category}</p>

            <div className="my-5 h-1 w-20 bg-emerald-600 rounded"></div>

            <p className="text-gray-700 leading-relaxed">
              Buku ini memberikan informasi lengkap dan terstruktur, cocok untuk pelajar, mahasiswa, ataupun pembaca umum.
            </p>

            <div className="mt-6 bg-gray-50 p-5 rounded-2xl border shadow-sm">

              <label className="text-sm text-gray-600">Tanggal Pinjam</label>
              <input
                type="date"
                value={borrowDate}
                onChange={(e) => setBorrowDate(e.target.value)}
                className="mt-1 block w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-emerald-600 outline-none"
              />

              <label className="text-sm text-gray-600 mt-4 block">Tanggal Kembali</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="mt-1 block w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>

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
