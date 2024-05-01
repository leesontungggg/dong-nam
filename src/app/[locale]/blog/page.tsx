"use client";

import { PaginationEng } from "@/components/paginationEng";
import { PaginationVie } from "@/components/paginationVie";
import Skeleton from "@/components/skeleton";
import { Context } from "@/services/context";
import _ from "lodash";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useContext, useState, useTransition } from "react";
import { SlArrowRight } from "react-icons/sl";

export default function Root() {
  const data = useContext(Context);
  const t = useTranslations("blog");
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

  // const groupCategory = _.groupBy(data.blog, (item: any) =>
  // locale === "vi" ? item.categories : item.categories_en
  // );

  console.log(data.blog);

  return (
    <div className="flex flex-col w-full">
      <img
        src="/image/blog.jpg"
        alt="DongNam"
        className="w-full h-max max-h-screen"
      />
      <div
        className="container mx-auto w-full md:mt-8 mt-4 bg-white text-black 
       flex flex-col justify-center items-center"
      >
        <div className="md:px-4">
          <div className="grid grid-cols-3 md:grid-cols-5 md:grid-rows-2 grid-flow-row md:grid-flow-col flex-row md:pb-8 pb-4 gap-2 place-items-center	">
            <div
              onClick={() => {
                setCurrentIndex(0);
              }}
              className={`font-bold ${
                currentIndex === 0 && "text-[#00A44E]"
              } flex justify-center items-center
              cursor-pointer border border-black rounded-full  md:px-10 px-2  h-[7vh] md:min-h-[100px] text-center md:w-[17vw] xl:w-[17vw] 2xl:w-[12vw] leading-4 md:leading-6 w-[28vw]  content-center text-[14px] md:text-[16px] `}
            >
              <p className="hidden md:inline">{t("title1")}</p>
              {locale === "vi" ? (
                <p className="inline md:hidden">Hệ Miễn Dịch</p>
              ) : (
                <p className="inline md:hidden">Immune System</p>
              )}
            </div>
            <div
              onClick={() => {
                setCurrentIndex(1);
              }}
              className={`font-bold ${
                currentIndex === 1 && "text-[#00A44E]"
              } flex justify-center items-center
              cursor-pointer border border-black rounded-full  md:px-10 px-2  h-[7vh] md:min-h-[100px] text-center md:w-[17vw] xl:w-[17vw] 2xl:w-[12vw] leading-4 md:leading-6 w-[28vw] content-center text-[14px] md:text-[16px]`}
            >
              <p className="hidden md:inline">{t("title2")}</p>
              {locale === "vi" ? (
                <p className="inline md:hidden">
                  Tiêu Hoá <br /> Gan Mật
                </p>
              ) : (
                <p className="inline md:hidden">
                  Digestion - <br /> Liver & Bite
                </p>
              )}
            </div>
            <div
              onClick={() => {
                setCurrentIndex(2);
              }}
              className={`font-bold ${
                currentIndex === 2 && "text-[#00A44E]"
              } flex justify-center items-center
              cursor-pointer border border-black rounded-full  md:px-10 px-2 h-[7vh] md:min-h-[100px] text-center md:w-[17vw] xl:w-[17vw] 2xl:w-[12vw] leading-4 md:leading-6 w-[28vw]  content-center text-[14px] md:text-[16px]`}
            >
              <p className="hidden md:inline">{t("title3")}</p>
              {locale === "vi" ? (
                <p className="inline md:hidden">Cơ Xương Khớp</p>
              ) : (
                <p className="inline md:hidden">Bones & Joints</p>
              )}
            </div>
            <div
              onClick={() => {
                setCurrentIndex(3);
              }}
              className={`font-bold ${
                currentIndex === 3 && "text-[#00A44E]"
              } flex justify-center items-center
              cursor-pointer border border-black rounded-full  md:px-10 px-2  h-[7vh] md:min-h-[100px] text-center md:w-[17vw] xl:w-[17vw] 2xl:w-[12vw] leading-4 md:leading-6 w-[28vw]  content-center text-[14px] md:text-[16px]`}
            >
              <p className="hidden md:inline">{t("title4")}</p>
              {locale === "vi" ? (
                <p className="inline md:hidden">
                  Bệnh Da & <br /> Chăm Da
                </p>
              ) : (
                <p className="inline md:hidden">
                  Skin Disease &
                  <br />
                  Skin Care
                </p>
              )}
            </div>
            <div
              onClick={() => {
                setCurrentIndex(4);
              }}
              className={`font-bold ${
                currentIndex === 4 && "text-[#00A44E]"
              } flex justify-center items-center
              cursor-pointer border border-black rounded-full  md:px-10 px-2  h-[7vh] md:min-h-[100px] text-center md:w-[17vw] xl:w-[17vw] 2xl:w-[12vw] leading-4 md:leading-6 w-[28vw]  content-center text-[14px] md:text-[16px]`}
            >
              <p className="hidden md:inline">{t("title5")}</p>
              {locale === "vi" ? (
                <p className="inline md:hidden">Tim Mạch</p>
              ) : (
                <p className="inline md:hidden">Heart</p>
              )}
            </div>
            <div
              onClick={() => {
                setCurrentIndex(5);
              }}
              className={`font-bold ${
                currentIndex === 5 && "text-[#00A44E]"
              } flex justify-center items-center
              cursor-pointer border border-black rounded-full  md:px-10 px-2  h-[7vh] md:min-h-[100px] text-center md:w-[17vw] xl:w-[17vw] 2xl:w-[12vw] leading-4 md:leading-6 w-[28vw]  content-center text-[14px] md:text-[16px]`}
            >
              <p className="hidden md:inline">{t("title6")}</p>
              {locale === "vi" ? (
                <p className="inline md:hidden">
                  Tai - Mũi -<br /> Họng
                </p>
              ) : (
                <p className="inline md:hidden">
                  Ear - Nose -<br /> Throat
                </p>
              )}
            </div>
            <div
              onClick={() => {
                setCurrentIndex(6);
              }}
              className={`font-bold ${
                currentIndex === 6 && "text-[#00A44E]"
              } flex justify-center items-center
               cursor-pointer border border-black rounded-full  md:px-10 px-2  h-[7vh] md:min-h-[100px] text-center md:w-[17vw]  2xl:w-[12vw] leading-4 md:leading-6 w-[28vw]  content-center text-[14px] md:text-[16px]`}
            >
              <p className="hidden md:inline">{t("title7")}</p>
              {locale === "vi" ? (
                <p className="inline md:hidden">Ung Bướu</p>
              ) : (
                <p className="inline md:hidden">Cancer</p>
              )}
            </div>
            <div
              onClick={() => {
                setCurrentIndex(7);
              }}
              className={`font-bold ${
                currentIndex === 7 && "text-[#00A44E]"
              } flex justify-center items-center
              cursor-pointer border border-black rounded-full  md:px-10 px-2  h-[7vh] md:min-h-[100px] text-center md:w-[17vw] 2xl:w-[12vw]  leading-4 md:leading-6 w-[28vw] content-center text-[14px] md:text-[16px]`}
            >
              <p className="hidden md:inline">{t("title8")}</p>
              {locale === "vi" ? (
                <p className="inline md:hidden">Thần Kinh</p>
              ) : (
                <p className="inline md:hidden">
                  Nervous <br /> System
                </p>
              )}
            </div>
            <div
              onClick={() => {
                setCurrentIndex(8);
              }}
              className={`font-bold ${
                currentIndex === 8 && "text-[#00A44E]"
              } flex justify-center items-center
              cursor-pointer border border-black rounded-full  md:px-10 px-2  h-[7vh] md:min-h-[100px] text-center md:w-[17vw] 2xl:w-[12vw]  leading-4 md:leading-6 w-[28vw] content-center text-[14px] md:text-[16px]`}
            >
              <p className="hidden md:inline">{t("title9")}</p>
              {locale === "vi" ? (
                <p className="inline md:hidden">Hô Hấp</p>
              ) : (
                <p className="inline md:hidden">
                  Respiratory
                  <br /> Disease
                </p>
              )}
            </div>
            <div
              onClick={() => {
                setCurrentIndex(9);
              }}
              className={`font-bold ${
                currentIndex === 9 && "text-[#00A44E]"
              } flex justify-center items-center
              cursor-pointer border border-black rounded-full  md:px-10 px-2  h-[7vh] md:min-h-[100px] text-center md:w-[17vw] 2xl:w-[12vw] leading-4 md:leading-6 w-[28vw] content-center text-[14px] md:text-[16px]`}
            >
              <p className="hidden md:inline">{t("title10")}</p>
              {locale === "vi" ? (
                <p className="inline md:hidden">Khác</p>
              ) : (
                <p className="inline md:hidden">Other</p>
              )}
            </div>
          </div>
          <div className="md:grid md:grid-cols-1 flex flex-col gap-8 pb-6">
            {data?.blogs
              ?.filter((blog: any) => blog.type === "blog")
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
    // <div>
    //   <img
    //     src="https://i.postimg.cc/WzZfG2yW/yes.jpg"
    //     alt="DongNam"
    //     className="w-full h-max rounded-lg max-h-screen "
    //   />
    //   <div
    //     className="container mx-auto w-full mt-8 bg-white text-black
    //     flex flex-col justify-center items-center"
    //   >
    //     <div className="px-4 w-screen">
    //       <div className=" flex-row content-center  justify-evenly  max-w-[250px] text-center gap-2 grid   grid-rows-2 grid-flow-col min-w-full mb-8 px-10">
    //         <div
    //           onClick={() => {
    //             setCurrentIndex(0);
    //           }}
    //           className={`font-bold ${
    //             currentIndex === 0 && "text-green-400"
    //           } cursor-pointer border border-black rounded-full mr-2 px-4 py-4 mb-2 max-h-[100px] max-w-[250px] text-center content-center `}
    //         >
    //           {t("title1")}
    //         </div>
    //         <div
    //           onClick={() => {
    //             setCurrentIndex(1);
    //           }}
    //           className={`font-bold ${
    //             currentIndex === 1 && "text-green-400"
    //           } cursor-pointer border border-black rounded-full mr-2 px-4 py-4   max-h-[100px]  max-w-[250px] text-center content-center `}
    //         >
    //           {t("title2")}
    //         </div>
    //         <div
    //           onClick={() => {
    //             setCurrentIndex(2);
    //           }}
    //           className={`font-bold ${
    //             currentIndex === 2 && "text-green-400"
    //           } cursor-pointer border border-black rounded-full mr-2 px-4 py-4 mb-2 max-h-[100px] max-w-[250px] text-center content-center `}
    //         >
    //           {t("title3")}
    //         </div>
    //         <div
    //           onClick={() => {
    //             setCurrentIndex(3);
    //           }}
    //           className={`font-bold ${
    //             currentIndex === 3 && "text-green-400"
    //           } cursor-pointer border border-black rounded-full mr-2 px-4 py-4  max-h-[100px] max-w-[250px] text-center content-center `}
    //         >
    //           {t("title4")}
    //         </div>
    //         <div
    //           onClick={() => {
    //             setCurrentIndex(4);
    //           }}
    //           className={`font-bold ${
    //             currentIndex === 4 && "text-green-400"
    //           } cursor-pointer border border-black rounded-full mr-2 px-4 py-4 mb-2 max-h-[100px] max-w-[250px] text-center content-center `}
    //         >
    //           {t("title5")}
    //         </div>

    //         <div
    //           onClick={() => {
    //             setCurrentIndex(5);
    //           }}
    //           className={`font-bold ${
    //             currentIndex === 5 && "text-green-400"
    //           } cursor-pointer border border-black rounded-full mr-2 px-4 py-4  max-h-[100px] max-w-[250px] text-center content-center `}
    //         >
    //           {t("title6")}
    //         </div>
    //         <div
    //           onClick={() => {
    //             setCurrentIndex(6);
    //           }}
    //           className={`font-bold ${
    //             currentIndex === 6 && "text-green-400"
    //           } cursor-pointer border border-black rounded-full mr-2 px-4 py-4 mb-2 max-h-[100px] max-w-[250px] text-center content-center `}
    //         >
    //           {t("title7")}
    //         </div>
    //         <div
    //           onClick={() => {
    //             setCurrentIndex(7);
    //           }}
    //           className={`font-bold ${
    //             currentIndex === 7 && "text-green-400"
    //           } cursor-pointer border border-black rounded-full mr-2 px-4 py-4  max-h-[100px] max-w-[250px] text-center content-center `}
    //         >
    //           {t("title8")}
    //         </div>
    //         <div
    //           onClick={() => {
    //             setCurrentIndex(8);
    //           }}
    //           className={`font-bold ${
    //             currentIndex === 8 && "text-green-400"
    //           } cursor-pointer border border-black rounded-full  px-4 py-4 mb-2 max-h-[100px] max-w-[250px] text-center content-center `}
    //         >
    //           {t("title9")}
    //         </div>
    //         <div
    //           onClick={() => {
    //             setCurrentIndex(9);
    //           }}
    //           className={`font-bold ${
    //             currentIndex === 9 && "text-green-400"
    //           } cursor-pointer border border-black rounded-full  px-4 py-4  max-h-[100px] max-w-[250px] text-center content-center `}
    //         >
    //           {t("title10")}
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-1 gap-8 pb-6 mx-10">
    //         {data?.blogs
    //           ?.filter((blog: any) => blog.type === "blog")
    //           .map((blog: any) => (
    //             <div className="py-3 px-4  flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-between border border-black w-full min-h-[200px] ">
    //               <a href={`/blog/${blog.id}`} className="shrink-0 ">
    //                 <img
    //                   src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
    //                   alt="DONG-NAM"
    //                   className="rounded bg-base-200 object-cover w-auto  max-w-[240px] min-h-[160px]"
    //                 />
    //               </a>
    //               <div className="flex flex-col gap-4 max-h-[156px] w-full ">
    //                 <a
    //                   className="hover:underline text-black max-h-[29px] line-clamp-1 text-2xl font-bold text-center md:text-left w-full max-w-full text-[22.6px] "
    //                   href={`/blog/${blog.id}`}
    //                 >
    //                   {locale === "vi" ? blog.title : blog.title_en}
    //                 </a>
    //                 <p className="text-sm text-[16px]  text-base-content/70 text-center md:text-left line-clamp-2 leading-5  ">
    //                   {locale === "vi" ? blog.description : blog.description_en}
    //                 </p>
    //                 <a
    //                   href={`/blog/${blog.id}`}
    //                   className="flex items-center font-bold pt-8 text-[16px]"
    //                 >
    //                   <SlArrowRight className="pr-2" size="25" />
    //                   {t("navigate")}
    //                 </a>
    //               </div>
    //             </div>
    //           ))}
    //       </div>
    //       {locale === "en" ? (
    //         <PaginationEng className="pb-6" />
    //       ) : (
    //         <PaginationVie className="pb-6" />
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}
