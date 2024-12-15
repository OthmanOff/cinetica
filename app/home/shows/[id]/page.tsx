"use server";

import TVShowPage from "./ShowsData";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <TVShowPage id={id} />;
}
