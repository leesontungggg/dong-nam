import { NextResponse } from "next/server";
export const revalidate = 1; //revalidate api every 1 second

export async function GET(request: Request) {
  let blogsPromise = await fetch(
    `https://dongnam.up.railway.app/items/articles?fields[]=*, galleries.*`,
    {
      method: "GET",
      next: { revalidate: 1 },
    }
  );

  const blogs = await blogsPromise.json();

  if (blogs) {
    return NextResponse.json({
      error: false,
      data: blogs.data,
    });
  }

  return NextResponse.json({ error: true });
}
