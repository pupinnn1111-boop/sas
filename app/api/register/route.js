import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, username, email, phone, password } = await req.json();

    // Cek email sudah ada
    const [exist] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (exist.length > 0) {
      return NextResponse.json(
        { message: "Email sudah terdaftar!" },
        { status: 400 }
      );
    }

    // Hash password
    const hash = await bcrypt.hash(password, 10);

    // Simpan user
    await db.query(
      `INSERT INTO users (name, username, email, phone, password, role) 
       VALUES (?, ?, ?, ?, ?, "user")`,
      [name, username, email, phone, hash]
    );

    return NextResponse.json(
      { message: "Register berhasil!" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
