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
    <div className="w-full min-h-screen bg-white text-black flex flex-col justify-start pt-4 items-center">
      <div className=" pb-10">
        <div className="mx-auto">
          {!!blog && (
            <div className="flex flex-col items-center gap-4 w-full  h-full">
              <img
                src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
                alt="DONG-NAM"
                className=" bg-base-200 object-cover w-screen h-screen rounded-lg max-h-screen"
              />
              <div className="container max-w-full lg:px-8 xl:px-12 2xl:max-w-[58vw] pt-6">
                <h1 className="text-[#0aa652] leading-[43px] font-bold text-[38px] pb-6">
                  {locale === "vi" ? blog.title : blog.title_en}
                </h1>
                <div className="flex flex-row w-full justify-between pb-6 text-[22.6px]">
                  <p className="">Jacy Huynh</p>
                  <p className="justify-end">12.03.2024</p>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      locale === "vi" ? blog.description : blog.description_en,
                  }}
                  className="!text-black pb-6 text-[22.6px] font-bold text-justify"
                ></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: locale === "vi" ? blog.content : blog.content_en,
                  }}
                  className="!text-black  text-[22.6px] text-justify lg:leading-[34px] xl:leading-[40px]"
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
