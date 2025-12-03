import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;

  const [rows] = await db.query("SELECT * FROM books WHERE id = ?", [id]);

  if (rows.length === 0) {
    return NextResponse.json({ message: "Buku tidak ditemukan" }, { status: 404 });
  }

  return NextResponse.json(rows[0], { status: 200 });
}
