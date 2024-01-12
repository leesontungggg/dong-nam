"use client";

import Skeleton from "@/components/skeleton";
import { Context } from "@/services/context";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useContext, useState, useTransition } from "react";
import { useEffect } from "react";

export default function Root() {
  const items = useContext(Context);
  const t = useTranslations("Index");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  return (
    <div
      className="w-full h-screen bg-white text-black 
 flex flex-col justify-center items-center"
    >
      <div className="p-4 pb-10">
        <div>
          {!!items && items.length > 0 ? (
            items.map((product: any) => (
              <div className="py-6 flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-center justify-between">
                <a href={`/products/${product.id}`} className="shrink-0 ">
                  <img
                    src={`https://dongnam.up.railway.app/assets/${product.galleries[0].directus_files_id}`}
                    alt="I baught a chair and here's what I learned"
                    className="rounded bg-base-200 object-cover w-auto h-40"
                  />
                </a>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-center md:text-left">
                    <a
                      className="hover:underline text-black"
                      href={`/products/${product.id}`}
                    >
                      {product.name}
                    </a>
                  </h2>
                  <p className="text-sm text-base-content/70 text-center md:text-left">
                    {product.short_description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 w-fit min-w-screen mt-40 pt-40">
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
