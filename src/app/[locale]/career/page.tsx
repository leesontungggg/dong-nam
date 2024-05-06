"use client";

import Skeleton from "@/components/skeleton";
import { Context } from "@/services/context";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useContext, useState, useTransition } from "react";
import { SlArrowRight } from "react-icons/sl";

export default function Root() {
  const data = useContext(Context);
  const t = useTranslations("Index");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  const careers = data?.blogs?.filter((item: any) => item.isCareer);

  console.log("careers", careers);

  if (careers && careers.length === 0) {
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

  return (
    // <div
    //   className="container mx-auto w-full h-screen bg-white text-black
    //  flex flex-col justify-center items-center"
    // >
    //   <div className="p-4 pb-10">
    //     <div className="grid grid-cols-2 gap-8">
    //       {careers?.map((blog: any) => (
    //         <div className="py-6 flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-center justify-between">
    //           <a href={`/blog/${blog.id}`} className="shrink-0 ">
    //             <img
    //               src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
    //               alt="DONG-NAM"
    //               className="rounded bg-base-200 object-cover w-auto h-40"
    //             />
    //           </a>
    //           <div className="flex flex-col gap-4">
    //             <h2 className="text-2xl font-bold text-center md:text-left">
    //               <a
    //                 className="hover:underline text-black"
    //                 href={`/blog/${blog.id}`}
    //               >
    //                 {locale === "vi" ? blog.title : blog.title_en}
    //               </a>
    //             </h2>
    //             <p className="text-sm text-base-content/70 text-center md:text-left">
    //               {locale === "vi" ? blog.description : blog.description_en}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <section className="flex flex-col w-full my-6">
      <div className="container max-w-screen-xl mx-auto">
        <p className="text-lg md:text-xl leading-6 text-justify">
          {" "}
          {locale === "vi" ? (
            <>
              Hãy đồng hành cùng chúng tôi trên hành trình bảo vệ sức khoẻ cộng
              đồng.
            </>
          ) : (
            <>Join us on the journey to protect community health.</>
          )}
        </p>
        <input
          className="mt-4 w-full md:w-1/2  rounded-2xl border-2 p-2 pl-12 border-black bg-no-repeat bg-contain bg-[5px]"
          style={{ backgroundImage: "url(/icon-search.png)" }}
          placeholder={`${
            locale === "vi" ? "Tìm kiếm công việc" : "Search jobs"
          }`}
          // @ts-ignore
          onChange={(e) => setSearchText(e.target.value)}
        />
        <h6 className="mt-4 md:mt-8 text-left text-xl font-bold uppercase text-[#00A44E]">
          {locale === "vi" ? "Vị trí đang tuyển dụng" : "Jobs opening"}
        </h6>
        <div className="mt-6 flex flex-col md:flex-row h-full mb-4 gap-6">
          {careers?.map((blog: any) => (
            <div className="flex flex-row border border-black w-full md:w-1/3">
              <div className="flex flex-col w-full h-full ">
                <a
                  className="hover:underline text-black p-4 leading-4 font-bold w-full text-[16px] md:text-2xl"
                  href={`/blog/${blog.id}`}
                >
                  <div className="line-clamp-2">
                    {locale === "vi" ? blog.title : blog.title_en}
                  </div>
                </a>
                <div className="flex text-sm md:text-base px-4 text-base-content/70 text-justify leading-5">
                  <p className="line-clamp-4">
                    {locale === "vi" ? blog.description : blog.description_en}
                  </p>
                </div>
                <a
                  href={`/blog/${blog.id}`}
                  className="flex p-4 items-center md:justify-center font-bold text-[16px]"
                >
                  <SlArrowRight className="pr-1" size="20" />
                  {locale === "vi" ? "Xem Thêm" : "See job"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
