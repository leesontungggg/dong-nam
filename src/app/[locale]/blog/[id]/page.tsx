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
            <div className="flex flex-col items-center gap-4 w-full md:px-4 xl:px-12 2xl:px-0 h-full">
              <div className="container max-w-full md:max-w-[88vw] xl:max-w-[82vw] 2xl:max-w-[76vw] lg:px-8 pt-2 md:pt-6">
                <h1 className=" text-[#0aa652] leading-[43px] font-bold text-[38px] mb-2 md:pb-6 lg:mb-0">
                  {locale === "vi" ? blog.title : blog.title_en}
                </h1>
                <div className=" flex flex-row w-full justify-between pb-6 md:text-[22.6px]">
                  <p className="hidden md:inline">Jacy Huynh</p>
                  <p className="text-[24px] inline md:hidden">12.03.2024</p>
                  <p className="hidden md:inline justify-end">12.03.2024</p>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      locale === "vi" ? blog.description : blog.description_en,
                  }}
                  className=" !text-black pb-8 md:text-[22.6px] text-[24px] md:font-bold italic md:not-italic text-justify leading-7"
                ></div>
                <div className="flex w-full h-full pb-5 ">
                  <img
                    src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
                    alt="DONG-NAM"
                    className="h-full w-full"
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: locale === "vi" ? blog.content : blog.content_en,
                  }}
                  className=" !text-black  md:text-[22.6px] text-[24px] text-justify leading-7 md:leading-[34px] lg:leading-[40px]"
                ></div>
                <p className="flex md:hidden flex-row w-full justify-end pt-9 text-[24px] md:text-[22.6px]">
                  Jacy Huynh
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
