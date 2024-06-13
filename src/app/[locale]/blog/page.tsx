"use client";

import { PaginationEng } from "@/components/paginationEng";
import { PaginationVie } from "@/components/paginationVie";
import Skeleton from "@/components/skeleton";
import { Context } from "@/services/context";
import _ from "lodash";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useContext, useState, useTransition } from "react";
import PaginationSection from "@/components/PaginationSection";
import { SlArrowRight } from "react-icons/sl";

export default function Root() {
  const data = useContext(Context);
  const t = useTranslations("blog");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data?.blogs
    ?.filter((blog: any) => blog.type === "blog")
    .slice(firstItemIndex, lastItemIndex);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };

  if (currentItems.length === 0) {
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

  // const groupCategory = _.groupBy(data.blog, (item: any) =>
  // locale === "vi" ? item.categories : item.categories_en
  // );

  // console.log(data.blog);

  return (
    <div className="relative flex flex-col w-full">
      <img
        src="/image/blog.jpg"
        alt="DongNam"
        className="w-full h-max max-h-[190px] md:max-h-[520px] xl:max-h-screen object-cover"
      />
      <div
        className={`md:mt-[18em] md:ml-[30em] xl:mt-[18em] xl:ml-[38em] 2xl:mt-[24em] 2xl:ml-[44em] absolute object-cover hidden md:block`}
      >
        <div
          className={`flex flex-col md:w-[50vw] md:h-[180px] xl:h-[230px] bg-white rounded-[60px] px-8 justify-center md:gap-6`}
        >
          <h1
            className={`md:text-2xl xl:text-3xl md:pt-0 xl:pb-2 text-[#00A44E] font-bold text-center mx-auto load-hidden animate-fade-in uppercase`}
          >
            {t("title0")}
          </h1>
          <p
            className="text-justify load-hidden animate-fade-in animate-delay-200 text-slate-950 md:text-[18px] xl:text-[23px] md:leading-6 xl:leading-7"
            // dangerouslySetInnerHTML={{ __html: t("description") }}
          >
            {/* {t("description")} */}
            {locale === "vi" ? (
              <>
                Tại đây, chúng tôi sẽ cập nhật những kiến thức mới nhất về sản
                xuất dược phẩm và thị trường.
              </>
            ) : (
              <>
                Here, we will update the insights on pharmaceutical
                manufacturing and the market.
              </>
            )}
          </p>
        </div>
      </div>
      <div
        className="container mx-auto w-full md:mt-12 mt-8 bg-white text-black 
       flex flex-col justify-center items-center"
      >
        <div className="md:px-4">
          <div className="md:grid md:grid-cols-1 flex flex-col gap-8 pb-6">
            {currentItems.map((blog: any) => (
              <div className="md:py-3 md:px-4 flex flex-row gap-4 md:gap-4 xl:gap-6 md:items-center justify-between md:border md:border-black w-full md:h-[200px] xl:h-[220px]">
                <a
                  href={`/blog/${blog.id}`}
                  className="md:shrink-0 h-full content-center"
                >
                  <img
                    src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
                    alt="DONG-NAM"
                    className="rounded bg-base-200 md:w-auto  max-w-[240px]  min-w-[180px] md:min-h-[160px] w-full h-full md:object-cover xl:object-fill"
                  />
                </a>
                <div className="flex flex-col w-full h-full justify-between">
                  <a
                    className="hover:underline text-black md:text-lg xl:text-2xl md:font-bold md:text-left w-full max-w-full text-[16px]"
                    href={`/blog/${blog.id}`}
                  >
                    <div className="line-clamp-4 md:line-clamp-2 h-full items-start">
                      {locale === "vi" ? blog.title : blog.title_en}
                    </div>
                  </a>
                  <div className="hidden md:block text-[16px] xl:text-[18px] 2xl:text-[20px]  text-base-content/70 text-center md:text-left leading-5 xl:leading-6 2xl:leading-7 md:pt-1 md:h-full">
                    <p className="xl:line-clamp-4 md:line-clamp-4">
                      {locale === "vi" ? blog.description : blog.description_en}
                    </p>
                  </div>
                  <a
                    href={`/blog/${blog.id}`}
                    className="hidden md:flex items-end font-bold pt-8 md:pt-0 xl:pt-0 text-[16px] xl:text-[18px]"
                  >
                    <SlArrowRight className="pr-2" size="25" />
                    {t("navigate")}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <PaginationSection
            totalItems={
              data?.blogs?.filter((blog: any) => blog.type === "blog").length
            }
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
