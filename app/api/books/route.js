import { db } from "@/lib/db";
import { checkAuth } from "@/lib/checkAuth";

export async function GET() {
  const [rows] = await db.query("SELECT * FROM books");
  return Response.json(rows);
}


export async function POST(req) {
    const user = checkAuth(req);
    if (!user || user.role !== "admin")
      return Response.json({ error: "Unauthorized" }, { status: 403 });
  
    const { title, author, stock } = await req.json();
  
    await db.query(
      "INSERT INTO books (title, author, stock) VALUES (?, ?, ?)",
      [title, author, stock]
    );
  
    return Response.json({ message: "Buku ditambahkan" });
  }