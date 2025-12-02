"use client";
import React from "react";

export default function LibraryLandingPage() {

  const books = [
    { title: "Laskar Pelangi", author: "Andrea Hirata", image: "laskar pelangi.jpg" },
    { title: "Negeri 5 Menara", author: "Ahmad Fuadi", image: "negri 5.webp" },
    { title: "Filosofi Kopi", author: "Dewi Lestari", image: "kopi.jfif" },
    { title: "Bumi Manusia", author: "Pramoedya Ananta Toer", image: "bumi manusia.jfif" },
  ];

  return (
    <div className="min-h-screen flex flex-col text-gray-800 bg-white">

      <nav className="w-full fixed top-0 bg-white shadow z-50 px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-emerald-700">Perpustakaan</h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#hero" className="hover:text-emerald-600">Beranda</a>
          <a href="#benefit" className="hover:text-emerald-600">Mengapa Kami</a>
          <a href="#koleksi" className="hover:text-emerald-600">Koleksi</a>
          <a href="#kontak" className="hover:text-emerald-600">Kontak</a>
        </div>

        <a
          href="/login"
          className="px-4 py-2 bg-emerald-600 text-white text-sm rounded-md shadow hover:bg-emerald-700"
        >
          Login
        </a>
      </nav>

      <section
        id="hero"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-32 pb-20 bg-gradient-to-r from-emerald-600 to-emerald-400 text-white"
      >
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow">
            Tingkatkan Pengetahuan Anda<br />Dengan Cara yang Lebih Mudah
          </h2>

          <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan pembaca yang sudah memanfaatkan platform perpustakaan digital ini.
            Akses koleksi lengkap buku fisik & e-book kapan pun, di mana pun.
          </p>

          <p className="text-base text-yellow-200 font-semibold mb-8">
            “Satu langkah kecil membaca setiap hari bisa mengubah masa depan Anda.”
          </p>

          <div className="flex gap-4">
            <a
              href="/login"
              className="px-6 py-3 bg-yellow-300 text-emerald-800 text-lg font-bold rounded-lg shadow hover:bg-yellow-200 transition"
            >
              Mulai Membaca Sekarang
            </a>

            <a
              href="#benefit"
              className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-700 transition"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
            alt="Ilustrasi Perpustakaan"
            className="w-72 md:w-96 drop-shadow-xl"
          />
        </div>
      </section>

      <section id="benefit" className="py-20 px-6 md:px-20 bg-gray-50">
        <h3 className="text-3xl font-bold text-center text-emerald-700 mb-6">
          Mengapa Harus Perpustakaan?
        </h3>

        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
          Kami percaya bahwa setiap orang berhak mendapatkan akses mudah terhadap pengetahuan.
          Platform kami dirancang agar setiap pembaca—pelajar, mahasiswa, ataupun umum—dapat berkembang lebih cepat.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-emerald-700 mb-3">
               Akses Ribuan Buku
            </h4>
            <p className="text-gray-600">
              Koleksi buku terus diperbarui, dari novel hingga buku ilmu pengetahuan.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-emerald-700 mb-3">
              Peminjaman Lebih Cepat
            </h4>
            <p className="text-gray-600">
              Sistem digital memudahkan Anda meminjam buku tanpa antre & tanpa ribet.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-emerald-700 mb-3">
              Bisa Diakses 24/7
            </h4>
            <p className="text-gray-600">
              Baca buku kapan saja, di mana saja, cukup dengan satu akun.
            </p>
          </div>
        </div>
      </section>

      <section id="koleksi" className="py-20 px-6 md:px-20">
        <h3 className="text-3xl font-bold text-center text-emerald-700 mb-14">
          Buku Terpopuler Minggu Ini
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {books.map((book, i) => (
            <div
              key={i}
              className="bg-white shadow-lg hover:shadow-xl transition p-4 rounded-xl"
            >
              <img
                src={book.image}
                alt={book.title}
                className="rounded-md mb-4 w-full h-64 object-cover"
              />
              <h4 className="font-bold text-gray-800">{book.title}</h4>
              <p className="text-sm text-gray-500">oleh {book.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/login"
            className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition shadow"
          >
            Lihat Semua Koleksi
          </a>
        </div>
      </section>

      <section className="py-20 bg-emerald-700 text-white text-center px-6">
        <h3 className="text-3xl font-bold mb-4">Bergabunglah dengan Ribuan Pembaca</h3>

        <p className="max-w-2xl mx-auto text-emerald-100 mb-8 leading-relaxed">
          Jadilah bagian dari komunitas pembelajar yang aktif,
          dan mulai perjalanan membaca Anda dengan lebih nyaman & terarah.
        </p>

        <a
          href="/login"
          className="px-10 py-4 bg-yellow-300 text-emerald-900 rounded-lg font-bold text-lg shadow hover:bg-yellow-200 transition"
        >
          Daftar & Mulai Sekarang
        </a>
      </section>

      <footer id="kontak" className="bg-emerald-900 text-white text-center py-12">
        <h4 className="font-semibold text-lg">Hubungi Kami</h4>
        <p className="text-sm text-emerald-200 mt-2">Email: info@perpustakaanku.com</p>
        <p className="text-sm text-emerald-200">Telepon: 0812-3456-7890</p>

        <div className="h-[1px] w-40 bg-emerald-700 mx-auto my-6" />

        <p className="text-xs text-emerald-300">
          © {new Date().getFullYear()} PerpustakaanKu — Semua Hak Dilindungi
        </p>
      </footer>
    </div>
  );
}
