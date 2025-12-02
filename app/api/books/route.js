import { NextResponse } from "next/server";
import { db } from "@/lib/db"; 

export async function GET() {
  try {
    const [rows] = await db.execute(
      "SELECT id, title, author, category, img, stock FROM books"
    );

    return NextResponse.json(rows);
  } catch (err) {
    console.error("ERROR FETCHING BOOKS:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
