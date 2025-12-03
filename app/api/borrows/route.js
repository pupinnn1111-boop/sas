import { NextResponse } from "next/server";

let borrows = [
  {
    id: 1,
    title: "Belajar UI/UX",
    author: "Adit Prakoso",
    dateBorrowed: "2024-11-12",
    dateReturn: "2024-11-19",
    status: "Dikembalikan",
  },
  {
    id: 2,
    title: "Algoritma Pemrograman",
    author: "Sari Mutiara",
    dateBorrowed: "2024-11-20",
    dateReturn: "",
    status: "Dipinjam",
  },
];

export async function GET() {
  return NextResponse.json(borrows);
}

export async function POST(request) {
  try {
    const data = await request.json();

    const newBorrow = {
      id: Date.now(),
      ...data,
    };

    borrows.push(newBorrow);

    return NextResponse.json({
      message: "Peminjaman berhasil ditambahkan",
      data: newBorrow,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Gagal memproses data" },
      { status: 400 }
    );
  }
}
