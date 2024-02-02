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
  const blogId = pathname.split("/")[2];
  const blog =
    data.blogs && data.blogs.length > 0
      ? data.blogs.find((item: any) => item.id == blogId)
      : null;

  return (
    <div
      className="w-full min-h-screen bg-white text-black 
 flex flex-col justify-center items-center"
    >
      <div className="p-4 pb-10">
        <div className="container mx-auto">
          {!!blog && (
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-black font-medium text-4xl">
                {locale === "vi" ? blog.title : blog.title_en}
              </h1>
              <img
                src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
                alt="DONG-NAM"
                className="rounded bg-base-200 object-cover w-auto h-80"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: locale === "vi" ? blog.content : blog.content_en,
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
