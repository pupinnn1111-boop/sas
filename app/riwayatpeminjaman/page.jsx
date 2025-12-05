"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RiwayatPeminjaman() {
  const router = useRouter();
  const [activePage, setActivePage] = useState("riwayat");

  // Data riwayat dari database
  const [history, setHistory] = useState([]);

  // GET RIWAYAT DARI API
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("/api/borrows");
        const data = await res.json();
        setHistory(data);
      } catch (err) {
        console.error("Error fetching history:", err);
      }
    };

    fetchHistory();
  }, []);

  // NAVIGASI PAKAI useRouter()
  const navigate = (path, id) => {
    router.push(path);

    const pageMap = {
      "/homepage": "home",
      "/koleksibuku": "koleksi",
      "/riwayatpeminjaman": "riwayat",
      "/profil": "profil",
    };

    setActivePage(pageMap[path]);
  };

  const statusColor = (status) => {
    switch (status) {
      case "Dikembalikan":
        return "text-green-600 bg-green-100";
      case "Dipinjam":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
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

      {/* ========== SIDEBAR ========== */}
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

        {/* Menu */}
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

      {/* ========== KONTEN UTAMA ========== */}
      <div className="flex-1 p-8 ml-64">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Riwayat Peminjaman</h2>
          </div>
          <p className="text-gray-600 ml-13">Lihat semua riwayat peminjaman buku Anda</p>
        </div>

        {/* Content */}
        {history.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Belum Ada Riwayat</h3>
            <p className="text-gray-600">Belum ada riwayat peminjaman buku</p>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex justify-between items-start gap-4">
                  
                  {/* Book Info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      
                      {/* Icon */}
                      <div className="w-12 h-12 bg-linear-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>

                      {/* Details */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          oleh <span className="font-semibold">{item.author}</span>
                        </p>

                        {/* Dates */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <p className="text-xs text-gray-500">Dipinjam</p>
                              <p className="text-sm font-semibold text-gray-800">{item.dateBorrowed}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                            <div>
                              <p className="text-xs text-gray-500">Dikembalikan</p>
                              <p className="text-sm font-semibold text-gray-800">
                                {item.dateReturn || "Belum dikembalikan"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 ${statusColor(
                      item.status
                    )}`}
                  >
                    {item.status === "Dikembalikan" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {item.status === "Dipinjam" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    )}
                    {item.status}
                  </span>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
