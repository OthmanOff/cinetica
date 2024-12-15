import { NextResponse } from "next/server";
import { tmdbRequestOne } from "@/lib/tmdb";
import { TVShow } from "@/entities/TVShow";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const data: TVShow = await tmdbRequestOne("/tv/" + id);
  if (data) {
    return NextResponse.json({ message: "success", data }, { status: 200 });
  } else {
    return NextResponse.json({ message: "error", data }, { status: 404 });
  }
}
