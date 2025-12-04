"use client";
import React, { useState } from "react";

export default function KoleksiBuku() {
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

  // Mock navigation function
  const navigate = (path) => {
    console.log("Navigate to:", path);
    const pageMap = {
      "/homepage": "home",
      "/koleksibuku": "koleksi",
      "/riwayatpeminjaman": "riwayat",
      "/profil": "profil"
    };
    setActivePage(pageMap[path]);
  };

  const menuItems = [
    {
      id: "home",
      label: "Home",
      path: "/homepage",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: "koleksi",
      label: "Koleksi Buku",
      path: "/koleksibuku",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: "riwayat",
      label: "Riwayat Peminjaman",
      path: "/riwayatpeminjaman",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: "profil",
      label: "Profil",
      path: "/profil",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex min-h-screen bg-linear-to-br from-emerald-50 via-white to-green-50">

      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-xl border-r border-gray-200 p-6 flex flex-col gap-2 fixed left-0 top-0 h-full">
        
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
          <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">Perpustakaan</h2>
            <p className="text-xs text-gray-500">Digital Library</p>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
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

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Koleksi Buku</h1>
          </div>
          <p className="text-gray-600 ml-13">Jelajahi ribuan koleksi buku berkualitas</p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          
          {/* Search */}
          <div className="relative w-full md:w-96">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Cari judul buku..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white shadow-sm border-2 border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="pl-12 pr-8 py-3 rounded-xl bg-white shadow-sm border-2 border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all appearance-none cursor-pointer"
            >
              <option value="Semua">Semua Kategori</option>
              <option value="Pemrograman">Pemrograman</option>
              <option value="Novel">Novel</option>
              <option value="Teknologi">Teknologi</option>
              <option value="Design">Design</option>
              <option value="Motivasi">Motivasi</option>
              <option value="Ekonomi">Ekonomi</option>
              <option value="Sains">Sains</option>
              <option value="Bisnis">Bisnis</option>
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Menampilkan <span className="font-semibold text-emerald-600">{filteredBooks.length}</span> buku
            {category !== "Semua" && <span> dari kategori <span className="font-semibold">{category}</span></span>}
          </p>
        </div>

        {/* Book Grid */}
        {filteredBooks.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Buku Tidak Ditemukan</h3>
            <p className="text-gray-600">Coba kata kunci atau kategori yang berbeda</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={book.img} 
                    alt={book.title} 
                    className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {book.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">oleh {book.author}</p>

                  <button className="w-full py-2.5 bg-linear-to-r from-emerald-600 to-green-700 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all">
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