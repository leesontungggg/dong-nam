"use client";
import { SlArrowRight } from "react-icons/sl";
import Skeleton from "@/components/skeleton";
import { Context } from "@/services/context";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useContext, useState, useTransition } from "react";
import { PaginationEng } from "@/components/paginationEng";
import { PaginationVie } from "@/components/paginationVie";

export default function Root() {
  const data = useContext(Context);
  const t = useTranslations("news");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };

  if (data?.blogs?.length === 0) {
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
    <div>
      <img
        src="https://i.postimg.cc/zfwDkngH/2abb5eaf-9b49-4fd4-9b71-0cfed12c17a9.jpg"
        alt="DongNam"
        className="w-full h-max rounded-lg max-h-screen"
      />
      <div
        className="container mx-auto w-full md:mt-8 mt-4 bg-white text-black 
       flex flex-col justify-center items-center"
      >
        <div className="md:px-4">
          <div className="flex flex-row md:pb-8 pb-4 gap-4">
            <div
              onClick={() => {
                setCurrentIndex(0);
              }}
              className={`font-bold ${
                currentIndex === 0 && "text-green-400"
              } cursor-pointer border border-black rounded-full  md:px-10 px-2 max-h-[100px] text-center md:w-[22vw] ${
                locale === "en" ? "w-[30vw]" : "w-[29vw]"
              }  content-center text-[16px] `}
            >
              <p className="hidden md:inline">{t("title1")}</p>
              {locale === "vi" ? (
                <p className="inline md:hidden">
                  Tin Tức <br /> Sự Kiện
                </p>
              ) : (
                <p className="inline md:hidden">
                  News- <br /> Events
                </p>
              )}
            </div>
            <div
              onClick={() => {
                setCurrentIndex(1);
              }}
              className={`font-bold ${
                currentIndex === 1 && "text-green-400"
              } cursor-pointer border border-black rounded-full  md:px-10 px-2 py-8 md:w-[22vw] max-h-[100px] content-center text-center  ${
                locale === "en" ? "w-[30vw]" : "w-[29vw]"
              } text-[16px]`}
            >
              {/* <p className="hidden md:inline">{t("title2")}</p> */}
              {locale === "vi" ? (
                <p className="">
                  Trách Nhiệm <br /> Xã Hội
                </p>
              ) : (
                <p className="">
                  Sustainable <br /> Development
                </p>
              )}
            </div>
            <div
              onClick={() => {
                setCurrentIndex(2);
              }}
              className={`font-bold ${
                currentIndex === 2 && "text-green-400"
              } cursor-pointer border border-black rounded-full  md:px-10 px-2 py-8  text-center max-h-[100px] content-center md:w-[22vw] ${
                locale === "en" ? "w-[30vw]" : "w-[29vw]"
              } text-[16px]`}
            >
              {/* <p className="hidden md:inline">{t("title3")}</p> */}
              {locale === "vi" ? (
                <p className="">
                  Môi Trường <br /> Làm Việc
                </p>
              ) : (
                <p className="">
                  Work <br /> Environment
                </p>
              )}
            </div>
          </div>
          <div className="md:grid md:grid-cols-1 flex flex-col gap-8 pb-6">
            {data?.blogs
              ?.filter((blog: any) => blog.type === "news")
              .map((blog: any) => (
                <div className="md:py-3 md:px-4 flex flex-row gap-4 md:gap-10 md:items-center justify-between md:border md:border-black w-full md:min-h-[200px] ">
                  <a href={`/blog/${blog.id}`} className="md:shrink-0 ">
                    <img
                      src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
                      alt="DONG-NAM"
                      className="rounded bg-base-200 w-3/4 object-cover md:w-auto  max-w-[240px] h-[15vh] min-w-[180px] md:min-h-[160px]"
                    />
                  </a>
                  <div className="flex flex-col  md:max-h-[156px] w-full ">
                    <a
                      className="hover:underline text-black max-h-[29px] md:line-clamp-1 md:text-2xl md:font-bold  md:text-left w-full max-w-full text-[16px]   "
                      href={`/blog/${blog.id}`}
                    >
                      {locale === "vi" ? blog.title : blog.title_en}
                    </a>
                    <div className="hidden md:block text-sm text-[16px]  text-base-content/70 text-center md:text-left  leading-5 md:pt-3">
                      <p className="xl:line-clamp-2 md:line-clamp-3">
                        {locale === "vi"
                          ? blog.description
                          : blog.description_en}
                      </p>
                    </div>
                    <a
                      href={`/blog/${blog.id}`}
                      className="hidden md:flex items-center font-bold pt-8 text-[16px]"
                    >
                      <SlArrowRight className="pr-2" size="25" />
                      {t("navigate")}
                    </a>
                  </div>
                </div>
              ))}
          </div>
          {locale === "en" ? (
            <PaginationEng className="pb-6" />
          ) : (
            <PaginationVie className="pb-6" />
          )}
        </div>
      </div>
    </div>
  );
}
