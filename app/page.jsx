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

      {/* NAVBAR */}
      <nav className="w-full fixed top-0 bg-white/95 backdrop-blur-md shadow-sm z-50 px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Perpustakaan</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#hero" className="text-gray-600 hover:text-emerald-600 transition-colors">Beranda</a>
            <a href="#benefit" className="text-gray-600 hover:text-emerald-600 transition-colors">Mengapa Kami</a>
            <a href="#koleksi" className="text-gray-600 hover:text-emerald-600 transition-colors">Koleksi</a>
            <a href="#kontak" className="text-gray-600 hover:text-emerald-600 transition-colors">Kontak</a>
          </div>

          {/* Login Button */}
          <a
            href="/login"
            className="px-5 py-2.5 bg-linear-to-r from-emerald-600 to-green-700 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            Login
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 pt-32 pb-20 bg-linear-to-br from-emerald-600 via-emerald-500 to-green-600 text-white relative overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Platform Perpustakaan Digital Terpercaya
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Tingkatkan Pengetahuan Anda
              <span className="block text-yellow-300">Dengan Cara yang Lebih Mudah</span>
            </h2>

            <p className="text-lg text-emerald-50 leading-relaxed">
              Bergabunglah dengan ribuan pembaca yang sudah memanfaatkan platform perpustakaan digital ini.
              Akses koleksi lengkap buku fisik & e-book kapan pun, di mana pun.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-4">
              <p className="text-yellow-200 font-semibold italic">
                💡 "Satu langkah kecil membaca setiap hari bisa mengubah masa depan Anda."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/login"
                className="px-8 py-4 bg-white text-emerald-700 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
              >
                Mulai Membaca Sekarang
              </a>

              <a
                href="#benefit"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-700 transition-all"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
                alt="Ilustrasi Perpustakaan"
                className="relative w-72 md:w-96 drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFIT SECTION */}
      <section id="benefit" className="py-20 px-6 lg:px-12 bg-linear-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Mengapa Harus <span className="text-emerald-600">Perpustakaan</span>?
            </h3>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Kami percaya bahwa setiap orang berhak mendapatkan akses mudah terhadap pengetahuan.
              Platform kami dirancang agar setiap pembaca—pelajar, mahasiswa, ataupun umum—dapat berkembang lebih cepat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Akses Ribuan Buku
              </h4>
              <p className="text-gray-600">
                Koleksi buku terus diperbarui, dari novel hingga buku ilmu pengetahuan.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Peminjaman Lebih Cepat
              </h4>
              <p className="text-gray-600">
                Sistem digital memudahkan Anda meminjam buku tanpa antre & tanpa ribet.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Bisa Diakses 24/7
              </h4>
              <p className="text-gray-600">
                Baca buku kapan saja, di mana saja, cukup dengan satu akun.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* KOLEKSI SECTION */}
      <section id="koleksi" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Buku Terpopuler <span className="text-emerald-600">Minggu Ini</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg text-gray-800 mb-1">{book.title}</h4>
                  <p className="text-sm text-gray-500">oleh {book.author}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/login"
              className="inline-block px-8 py-4 bg-linear-to-r from-emerald-600 to-green-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Lihat Semua Koleksi
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-linear-to-br from-emerald-600 to-green-700 text-white text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h3 className="text-4xl font-bold mb-6">Bergabunglah dengan Ribuan Pembaca</h3>

          <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
            Jadilah bagian dari komunitas pembelajar yang aktif,
            dan mulai perjalanan membaca Anda dengan lebih nyaman & terarah.
          </p>

          <a
            href="/login"
            className="inline-block px-10 py-4 bg-white text-emerald-700 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            Daftar & Mulai Sekarang
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="kontak" className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-xl font-bold">Perpustakaan</span>
            </div>
            <h4 className="font-semibold text-lg mb-3">Hubungi Kami</h4>
            <div className="space-y-1">
              <p className="text-sm text-gray-400">Email: info@perpustakaanku.com</p>
              <p className="text-sm text-gray-400">Telepon: 0812-3456-7890</p>
            </div>
          </div>

          <div className="h-px w-full max-w-md bg-gray-700 mx-auto my-6"></div>

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} PerpustakaanKu — Semua Hak Dilindungi
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}