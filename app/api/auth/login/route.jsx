import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";

export async function POST(req) {
  const { email, password } = await req.json();

  const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  const user = rows[0];
  if (!user) return Response.json({ error: "User tidak ditemukan" }, { status: 404 });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return Response.json({ error: "Password salah" }, { status: 401 });

  const token = createToken({ id: user.id, role: user.role });

  return Response.json({ 
    message: "Login berhasil", 
    token,
    role: user.role
  });
}
