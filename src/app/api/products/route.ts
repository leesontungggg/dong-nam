import { NextResponse } from "next/server";
export const revalidate = 1; //revalidate api every 1 second

export async function GET(request: Request) {
  let productsPromise = await fetch(
    `https://dongnam.up.railway.app/items/products?limit=-1&fields[]=*, galleries.*`,
    {
      method: "GET",
      next: { revalidate: 3600 },
    }
  );

  const products = await productsPromise.json();

  if (products) {
    return NextResponse.json({
      error: false,
      data: products.data,
    });
  }

  return NextResponse.json({ error: true });
}
