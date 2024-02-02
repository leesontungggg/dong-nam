"use client";

import Skeleton from "@/components/skeleton";
import { Context } from "@/services/context";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useContext, useState, useTransition } from "react";
import * as _ from "lodash";
import { CATEGORY } from "@/services/category";

export default function Root() {
  const data = useContext(Context);
  const t = useTranslations("Index");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  if (data.products.length === 0) {
    return (
      <div
        className="w-full h-screen bg-white text-black 
 flex flex-col justify-center items-center"
      >
        <div className="p-4 pb-10">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 w-fit min-w-screen mt-40 pt-40">
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const groupCategory = _.groupBy(data.products, (item: any) =>
    locale === "vi" ? item.categories : item.categories_en
  );

  return (
    <div
      className="w-full h-screen bg-white text-black 
 flex flex-col justify-center items-center"
    >
      <div className="p-4 pb-10">
        <div>
          {Object.keys(groupCategory).map((item: string) => (
            <div>
              <h2 className="text-black text-3xl text-center">
                {CATEGORY[item]}
              </h2>
              {groupCategory[item].map((product: any) => (
                <div className="py-6 flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-center justify-between">
                  <a href={`/products/${product.id}`} className="shrink-0 ">
                    <img
                      src={`https://dongnam.up.railway.app/assets/${product.galleries[0].directus_files_id}`}
                      alt="DONG-NAM"
                      className="rounded bg-base-200 object-cover w-auto h-40"
                    />
                  </a>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-center md:text-left">
                      <a
                        className="hover:underline text-black"
                        href={`/products/${product.id}`}
                      >
                        {locale === "vi" ? product.name : product.name_en}
                      </a>
                    </h2>
                    <p className="text-sm text-base-content/70 text-center md:text-left">
                      {locale === "vi"
                        ? product.short_description
                        : product.short_description_en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
