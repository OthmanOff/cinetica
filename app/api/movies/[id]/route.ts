import { NextResponse } from "next/server";
import { tmdbRequestOne } from "@/lib/tmdb";
import { Movie } from "@/entities/Movie";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const data: Movie = await tmdbRequestOne("/movie/" + id);
  if (data) {
    return NextResponse.json({ message: "success", data }, { status: 200 });
  } else {
    return NextResponse.json({ message: "error", data }, { status: 404 });
  }
}
