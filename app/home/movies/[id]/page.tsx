"use server";

import MovieDetails from "./MovieData";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <MovieDetails id={id} />;
}
