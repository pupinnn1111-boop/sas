import { db } from "@/lib/db";
import { checkAuth } from "@/lib/checkAuth";

export async function POST(req) {
  const user = checkAuth(req);
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 403 });

  const { bookId } = await req.json();

  await db.query(
    "INSERT INTO borrows (user_id, book_id) VALUES (?, ?)",
    [user.id, bookId]
  );

  return Response.json({ message: "Berhasil meminjam buku" });
}

export async function GET(req) {
    const user = checkAuth(req);
    if (!user) return Response.json({ error: "Unauthorized" }, { status: 403 });
  
    const [rows] = await db.query(
      `SELECT borrows.*, books.title 
       FROM borrows 
       JOIN books ON books.id = borrows.book_id
       WHERE user_id = ?`,
      [user.id]
    );
  
    return Response.json(rows);
  }
  