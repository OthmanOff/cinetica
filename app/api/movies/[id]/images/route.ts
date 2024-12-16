import { NextResponse } from "next/server";
import { tmdbRequestImages } from "@/lib/tmdb";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const data = await tmdbRequestImages("/movie/" + id + "/images");
  if (data) {
    return NextResponse.json({ message: "success", data }, { status: 200 });
  } else {
    return NextResponse.json({ message: "error", data }, { status: 404 });
  }
}
