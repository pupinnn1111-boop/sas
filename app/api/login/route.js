import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    // Cek user berdasarkan username
    const [rows] = await db.query(
      "SELECT * FROM users WHERE username = ? LIMIT 1",
      [username]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, message: "Username tidak ditemukan!" },
        { status: 400 }
      );
    }

    const user = rows[0];

    // Cek password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json(
        { success: false, message: "Password salah!" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Login berhasil!", user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
