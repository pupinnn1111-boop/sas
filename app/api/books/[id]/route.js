import { db } from "@/lib/db";
import { checkAuth } from "@/lib/checkAuth";

export async function PUT(req, { params }) {
  const user = checkAuth(req);
  if (!user || user.role !== "admin")
    return Response.json({ error: "Unauthorized" }, { status: 403 });

  const { title, author, stock } = await req.json();

  await db.query(
    "UPDATE books SET title=?, author=?, stock=? WHERE id=?",
    [title, author, stock, params.id]
  );

  return Response.json({ message: "Buku diperbarui" });
}

export async function DELETE(req, { params }) {
    const user = checkAuth(req);
    if (!user || user.role !== "admin")
      return Response.json({ error: "Unauthorized" }, { status: 403 });
  
    await db.query("DELETE FROM books WHERE id=?", [params.id]);
  
    return Response.json({ message: "Buku dihapus" });
  }
  