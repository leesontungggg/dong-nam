"use client";

import Skeleton from "@/components/skeleton";
import { Context } from "@/services/context";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useContext, useState, useTransition } from "react";

export default function Root() {
  const data = useContext(Context);
  const t = useTranslations("Index");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const productId = pathname.split("/")[2];
  const product =
    data.products && data.products.length > 0
      ? data.products.find((item: any) => item.id == productId)
      : null;

  return (
    <div
      className="w-full min-h-screen bg-white text-black 
 flex flex-col justify-center items-center"
    >
      <div className="p-4 pb-10">
        <div className="container mx-auto">
          {!!product && (
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-black font-medium text-4xl">
                {locale === "vi" ? product.name : product.name_en}
              </h1>
              <img
                src={`https://dongnam.up.railway.app/assets/${product.galleries[0]?.directus_files_id}`}
                alt="DONG-NAM"
                className="rounded bg-base-200 object-cover w-auto h-80"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    locale === "vi"
                      ? product.description
                      : product.description_en,
                }}
                className="!text-black"
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
