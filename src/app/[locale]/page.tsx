"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useContext, useTransition } from "react";
import { Context } from "@/services/context";
import { ImArrowRight2 } from "react-icons/im";
import { SlArrowRight } from "react-icons/sl";

export default function Root() {
  const t = useTranslations("hero");
  const data = useContext(Context);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };

  return (
    <main className="!font-sans ">
      <section className="hidden md:flex relative bg-white sm:max-md:container min-h-screen">
        <div
          className="absolute top-[-100px] left-0 w-full h-full opacity-100 bg-[url('/image/hero-bg.jpg')] bg-cover bg-repeat"
          style={{ minHeight: "-webkit-fill-available" }}
        />
        <div
          className={`absolute object-cover md:mt-[10em] md:ml-[4em] xl:mt-[10em] xl:ml-[8em] 2xl:mt-[18em] 2xl:ml-[10em]`}
        >
          <div
            className={`${
              locale === "en"
                ? "md:w-[58vw] md:h-[310px] 2xl:w-[44vw] 2xl:h-[44vh]"
                : "md:w-[50vw] md:h-[330px] 2xl:w-[42vw] 2xl:h-[44vh]"
            } flex flex-col md:gap-4 xl:gap-6 h-fit xl:w-[48vw] xl:h-[46vh] justify-center bg-white rounded-[60px] px-8`}
          >
            <h1
              className={`md:text-3xl xl:text-3xl xl:max-2xl:pt-4 text-[#00A44E] font-bold text-center mx-auto load-hidden animate-fade-in uppercase`}
            >
              {t("title")}
            </h1>
            <p
              className="text-justify load-hidden animate-fade-in animate-delay-200 text-slate-950 md:text-[20px] xl:text-[24px] md:leading-6 xl:leading-7"
              // dangerouslySetInnerHTML={{ __html: t("description") }}
            >
              {/* {t("description")} */}
              {locale === "vi" ? (
                <>
                  Chúng tôi là nhà sản xuất duợc phẩm đạt tiêu chuẩn WHO-GMP,
                  GLP, GSP với tiêu chí "Chất lượng - Hiệu quả - An toàn". Hơn
                  20 năm trong lĩnh vực sản xuất dược phẩm, chúng tôi đã và đang
                  cung cấp cho các nhà phân phối giải pháp y tế tốt nhất vì sức
                  khoẻ của bệnh nhân.
                </>
              ) : (
                <>
                  We are a pharmaceutical manufacturer that meets WHO-GMP, GLP,
                  and GSP standards with the motto "Quality - Efficiency -
                  Safety." With over 20 years in the pharmaceutical
                  manufacturing field, we have been and continue to provide the
                  best medical solutions to distributors for the health of
                  patients.
                </>
              )}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:hidden w-full ">
        <img src="/image/hero-bg.jpg" className="pb-4" />
        <div className="flex flex-col w-full md:container px-7">
          <p className="text-[18px] text-[#00A44E] font-bold pb-2 uppercase mx-auto">
            {locale === "vi" ? <>dược phẩm đông nam</> : <>dong nam pharma</>}
          </p>
          <p className="text-justify leading-[20px] text-[16px]">
            {locale === "vi" ? (
              <>
                Chúng tôi là nhà sản xuất duợc phẩm đạt tiêu chuẩn WHO-GMP, GLP,
                GSP với tiêu chí "Chất lượng - Hiệu quả - An toàn". Hơn 20 năm
                trong lĩnh vực sản xuất dược phẩm, chúng tôi đã và đang cung cấp
                cho các nhà phân phối giải pháp y tế tốt nhất vì sức khoẻ của
                bệnh nhân.
              </>
            ) : (
              <>
                We are a pharmaceutical manufacturer that meets WHO-GMP, GLP,
                and GSP standards with the motto "Quality - Efficiency -
                Safety." With over 20 years in the pharmaceutical manufacturing
                field, we have been and continue to provide the best medical
                solutions to distributors for the health of patients.
              </>
            )}
          </p>
        </div>
      </section>
      <section className="bg-base-200 md:pt-[4em] pt-[1em] ">
        <div className="md:container xl:px-[95px] mx-auto grid md:grid-cols-2 md:gap-0 gap-4 w-full">
          <img
            src="/image/sumenh.jpg"
            className="w-full lg:h-full md:pr-4 xl:pr-6 md:pl-20 xl:pl-0 "
          />
          <div className="container flex flex-col md:pl-4 xl:pl-4">
            {/* <h1 className="leading-[22px] md:leading-[33px] text-[18px] md:text-2xl xl:text-3xl uppercase md:font-bold text-[#F18200] ">
              {locale === "vi" ? (
                <span className="inline md:hidden ">
                  <strong>Sứ mệnh</strong>
                  <br />
                  của chúng tôi
                </span>
              ) : (
                <span className="inline md:hidden ">
                  <strong>Our Mission</strong>
                </span>
              )}
              <span className="hidden md:block">{t("mission.title")}</span>
            </h1> */}
            <p className="text-[16px] md:text-xl xl:text-2xl pt-2 leading-[20px] text-justify">
              {locale === "vi" ? (
                <>
                  Chúng tôi cung cấp các biện pháp phòng và điều trị bệnh hiệu
                  quả. Sản phẩm thuốc của chúng tôi là nỗ lực đáp ứng các nhu
                  cầu của bệnh nhân trong các lĩnh vực giảm đau hạ sốt, kháng
                  viêm, kháng sinh, dạ dày - đường ruột, gan - mật, tim mạch, cơ
                  xuơng khớp, vitamin - khoáng chất,...
                </>
              ) : (
                <>
                  We provide effective measures for the prevention and treatment
                  of diseases. Our pharmaceutical products are the result of
                  efforts to meet the needs of patients in the areas of pain
                  relief and fever reduction, anti-inflammatory, antibiotics,
                  gastrointestinal, liver and biliary, cardiovascular,
                  musculoskeletal, vitamins and minerals, and more.
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-base-200 md:pt-[4em] pt-[1em] bg-base-200  px-[2em] lg:pt-[4em] lg:px-[5em]  ">
        <div className="md:container md:max-w-screen-xl md:mx-auto  ">
          <div className="hidden md:block load-hidden animate-fade-in animate-delay-200 md:max-w-[800px] md:w-max ">
            <h2 className="md:w-full  md:mx-auto md:mb-[20px]  text-[#00A44E] lg:w-full md:text-2xl xl:text-3xl text-[18px] leading-[22px] md:max-h-fit md:text-left  md:font-bold uppercase md:max-w-[50vw] xl:max-w-[50vw]  max-w-[250px] w-full text-end">
              {t("reason.title")}
            </h2>
          </div>
          <h1 className="block md:hidden leading-[22px] text-[18px] uppercase font-bold pt-2 -mb-2 text-[#00A44E] ">
            {locale === "vi" ? "chính sách chất lượng" : "quality policy"}
          </h1>
          <div className="mt-10 grid md:grid-cols-2 md:gap-14 xl:gap-20 gap-2">
            <div className="flex flex-col items-center  w-full load-hidden animate-slide-up md:border-[1px] md:border-black border-solid rounded-t-lg animate-delay-200">
              <img
                className="md:object-fill md:h-[34vh] xl:h-[42vh] md:p-3 xl:p-5 w-full md:rounded-3xl"
                src="/image/reason-1.jpg"
                alt="Online Banking"
              />
              <p className="block md:hidden mt-2 py-3 font-bold leading-6 text-[18px]">
                {locale === "vi" ? (
                  <>Nhân sự tiến bộ theo xu huớng phát triển của ngành</>
                ) : (
                  <>Personnel advancing with industry trends</>
                )}
              </p>
              <div className="md:flex hidden w-full">
                <h3
                  className={`md:text-[24px] xl:text-[26px] pt-2 md:px-4 xl:px-6 text-black font-bold leading-7`}
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason1.title1"),
                  }}
                ></h3>
              </div>
              <p className="text-[18px] xl:text-[24px] xl:text-justify text-justify  text-slate-950 md:p-4 md:px-4 xl:px-6 leading-6 md:leading-7">
                {t("reason.reason1.description")}
              </p>
            </div>
            <div className="flex flex-col items-center  w-full load-hidden animate-slide-up md:border-[1px] md:border-black border-solid rounded-t-lg animate-delay-200">
              <img
                className="md:object-fill w-full md:h-[34vh] xl:h-[42vh] pt-4 md:p-3 xl:p-5 md:rounded-3xl "
                src="/image/reason-2.jpg"
                alt="Simple Budgeting"
              />
              <p className="block md:hidden mt-2 py-3 font-bold leading-6 text-[18px]">
                {locale === "vi" ? (
                  <>Chú trọng vào nghiên cứu và cải tiến</>
                ) : (
                  <>Focus on research and improvement</>
                )}
              </p>
              <div className="md:flex hidden w-full">
                <h3
                  className={`md:text-[24px] xl:text-[26px] pt-2 md:px-4 xl:px-6 text-black font-bold leading-7`}
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason2.title1"),
                  }}
                ></h3>
              </div>
              <p className="text-[18px] xl:text-[24px] xl:text-justify text-justify  text-slate-950 md:p-4 md:px-4 xl:px-6 leading-6 md:leading-7">
                {t("reason.reason2.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-base-200 pt-3  md:pt-[4em] lg:pt-[3em] lg:px-[5em]">
        <div className="container max-w-screen-xl mx-auto w-full ">
          <div className="load-hidden animate-fade-in animate-delay-200">
            <h2 className="  uppercase mb-4 leading-[22px] text-[18px] md:text-center text-[#F18200] md:text-2xl xl:text-3xl lg:text-left lg:ml-0 md:font-bold w-12/13 md:w-1/2 ">
              {locale === "vi" ? (
                <p>
                  <span className="font-bold">DƯỢC PHẨM ĐÔNG NAM</span>{" "}
                  <br className="md:hidden" />
                  <span className="md:font-bold">QUA NHỮNG CON SỐ NỔI BẬT</span>
                </p>
              ) : (
                <div>
                  <strong className="inline md:hidden">
                    DONG NAM PHARMACEUTICALS
                  </strong>
                  <p className="hidden md:inline">DONG NAM PHARMACEUTICALS</p>
                  <br /> IN NUMBERS
                </div>
              )}
            </h2>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-2 md:mt-8">
            <div className="rounded-[64px] border-[1px] border-gray-400 md:py-2 md:px-4 py-1 px-2 xl:py-4 xl:px-8 w-full flex-col justify-center items-center flex -mt-2 md:-mt-0 ">
              <h6 className="md:text-[32px] leading-6 text-[24px] xl:text-[41.6px] font-bold text-center">
                {">"}20
              </h6>
              <p className="text-center lg:mt-2 xl:text-2xl md:text-lg text-[16.6px]  leading-[20px]">
                {locale === "vi"
                  ? "năm phát triển tại Việt Nam"
                  : "years of development in Vietnam"}
              </p>
            </div>

            <div className="rounded-[64px] border-[1px] border-gray-400 md:py-2 md:px-8 px-2 xl:py-4 xl:px-8 w-full flex-col justify-center items-center flex -mt-2 md:-mt-0">
              <h6 className="lg:text-[32px] leading-6 text-[24px] xl:text-[41.6px] font-bold text-center">
                {">"}70
              </h6>
              <p className="text-center lg:mt-2 xl:text-2xl md:text-lg text-[16.6px]  leading-[20px]">
                {" "}
                {locale === "vi" ? "sản phẩm" : "products"}
              </p>
            </div>

            <div className="rounded-[64px] border-[1px] border-gray-400 md:py-2 md:px-4 py-1 px-2 xl:py-4 xl:px-8 w-full flex-col justify-center items-center flex h-[94px] md:h-[134px] xl:h-[162.67px]">
              <h6 className="lg:text-[32px] leading-6 text-[24px] xl:text-[41.6px] font-bold text-center ">
                {">"}13,000
              </h6>
              <p className="text-center lg:mt-2 xl:text-2xl md:text-lg text-[16.6px]  leading-[20px]">
                {" "}
                {locale === "vi" ? "m2 diện tích nhà máy" : "m2 factory area"}
              </p>
            </div>

            <div className="rounded-[64px] border-[1px] border-gray-400 md:py-2 md:px-8 px-2 xl:py-4 xl:px-8 w-full flex-col justify-center items-center h-[94px] md:h-[134px] xl:h-[162.67px] flex">
              <h6 className="lg:text-[32px] leading-6 text-[24px] xl:text-[41.6px] font-bold text-center">
                {">"}40
              </h6>
              <p className="text-center lg:mt-2 xl:text-2xl md:text-lg text-[16.6px]  leading-[20px]">
                {" "}
                {locale === "vi" ? "đối tác" : "partners"}
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-base-200 pt-4 md:pt-[4em] lg:pt-[3em] lg:px-[5em] mb-4 md:mb-6 xl:mb-8">
        <div className="container max-w-screen-xl mx-auto w-full flex flex-col justify-center items-center">
          <div className="load-hidden animate-fade-in animate-delay-200 flex self-stretch md:mb-5">
            <h2 className="uppercase mt-1 mb-6 md:mb-0 leading-[22px] text-[18px] md:text-center text-[#00A44E] md:text-2xl xl:text-3xl lg:text-left lg:ml-0 md:font-bold w-11/12 md:w-3/4 font-bold">
              {t("blog.title")}
            </h2>
            <div
              className="hidden md:flex flex-row content-center items-center text-center cursor-pointer"
              onClick={() => router.push(`/blog/`)}
            >
              <div className="cursor-pointer w-[350px] md:text-[22.6px] xl:text-[23.8px] font-bold pl-3 xl:pr-2">
                {`${
                  locale === "vi"
                    ? "Xem tất cả bài viết tại đây"
                    : "Read all articles here"
                }`}
              </div>
              <ImArrowRight2 size="22.6" />
            </div>
          </div>

          <div className="mt-0 md:mt-4 grid md:grid-cols-3 gap-4">
            {data.blogs
              .filter((blog: any) => blog.type === "blog")
              .map((blog: any) => (
                <div
                  className="flex flex-col items-center  w-full load-hidden animate-slide-up md:border-[1px] md:border-black md:border-solid rounded-t-lg animate-delay-200 cursor-pointer"
                  onClick={() => router.push(`/blog/${blog.id}`)}
                >
                  <img
                    className="aspect-square object-cover w-full h-[20vh] md:h-[25vh] xl:h-[33vh] rounded-lg md:p-2"
                    src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
                    alt="Online Banking"
                  />
                  <h3 className=" md:text-left text-black md:font-bold md:px-4 pt-3 xl:pt-5 text-[16px] leading-[20px] md:text-[20px] xl:text-[26px] md:leading-6 xl:leading-8 md:h-[96px] xl:h-[128px]">
                    <div className="line-clamp-2 md:line-clamp-5">
                      {locale === "vi" ? (
                        <p>{blog.title}</p>
                      ) : (
                        <p>{blog.title_en}</p>
                      )}
                    </div>
                  </h3>
                  <p className="hidden md:flex text-slate-950 md:px-4 md:pt-6 xl:pt-10 2xl:pt-10 py-4 2xl:py-0 px-2 xl:px-4 md:text-[18px] xl:text-[24px] text-justify md:leading-6 xl:leading-8 md:h-[32vh] xl:h-[48vh]">
                    <div className="">
                      {locale === "vi" ? (
                        <p>{blog.description}</p>
                      ) : (
                        <p>{blog.description_en}</p>
                      )}{" "}
                    </div>
                  </p>
                  <div className="hidden md:flex">
                    <div className="md:py-3 md:pt-8 xl:py-5 flex flex-row content-center items-end">
                      <SlArrowRight className="pr-2" size="33" />
                      <p className="mt-auto  font-bold md:text-[19.6px] xl:text-[24px]">{`${
                        locale === "vi" ? "Đọc thêm" : "Read more"
                      }`}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div
            className="flex md:hidden cursor-pointer justify-center items-center mt-5 mb-4 text-white bg-[#00A44E] rounded-full py-3 w-[50vw]"
            onClick={() => router.push(`/news/`)}
          >
            <div className="cursor-pointer text-center text-[15px] font-bold w-full px-1">
              {`${
                locale === "vi"
                  ? "Xem tất cả bài viết"
                  : "Read all articles here"
              }`}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-base-200 md:pt-6 lg:px-[5em] mb-4 md:mb-16 xl:mb-8">
        <div className="container max-w-screen-xl mx-auto w-full flex flex-col justify-center items-center">
          <div className="load-hidden animate-fade-in animate-delay-200 flex self-stretch md:mb-5 md:pt-0">
            <h2 className="uppercase mb-4 md:mb-0 leading-[22px] text-[18px] md:text-center text-[#00A44E] md:text-2xl xl:text-3xl lg:text-left lg:ml-0 md:font-bold w-11/12 md:w-3/4 font-bold">
              {t("article.title")}
            </h2>
            <div
              className="hidden md:flex flex-row content-center items-center text-center cursor-pointer"
              onClick={() => router.push(`/news/`)}
            >
              <div className="cursor-pointer w-[350px] md:text-[22.6px] xl:text-[23.8px] font-bold pl-3 xl:pr-2">
                {`${
                  locale === "vi"
                    ? "Xem tất cả bài viết tại đây"
                    : "Read all articles here"
                }`}
              </div>
              <ImArrowRight2 size="22.6" />
            </div>
          </div>

          <div className="mt-0 md:mt-4 grid md:grid-cols-3 gap-4">
            {data.blogs
              .filter((blog: any) => blog.type === "news")
              .map((blog: any) => (
                <div
                  className="flex flex-col items-center  w-full load-hidden animate-slide-up md:border-[1px] md:border-black md:border-solid rounded-t-lg animate-delay-200 cursor-pointer"
                  onClick={() => router.push(`/news/${blog.id}`)}
                >
                  <img
                    className="aspect-square object-cover w-full h-[20vh] md:h-[25vh] xl:h-[33vh] rounded-lg md:p-2"
                    src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
                    alt="Online Banking"
                  />
                  <h3 className=" md:text-left text-black md:font-bold md:px-4 pt-3 xl:pt-5 text-[16px] leading-[20px] md:text-[20px] xl:text-[26px] md:leading-6 xl:leading-8 md:h-[120px] xl:h-[160px]">
                    <div className="line-clamp-2 md:line-clamp-5">
                      {locale === "vi" ? (
                        <p>{blog.title}</p>
                      ) : (
                        <p>{blog.title_en}</p>
                      )}
                    </div>
                  </h3>
                  <p className="hidden md:flex text-slate-950 md:px-4 md:pt-6 xl:pt-10 2xl:pt-10 py-4 2xl:py-0 px-2 xl:px-4 md:text-[18px] xl:text-[24px] text-justify md:leading-6 xl:leading-8 md:h-[50vh] xl:h-[74vh] 2xl:h-[60vh]">
                    <div className="">
                      {locale === "vi" ? (
                        <p>{blog.description}</p>
                      ) : (
                        <p>{blog.description_en}</p>
                      )}
                    </div>
                  </p>
                  <div className="hidden md:flex">
                    <div className="md:py-3 md:pt-8 xl:py-5 flex flex-row content-center items-end">
                      <SlArrowRight className="pr-2" size="33" />
                      <p className="mt-auto  font-bold md:text-[19.6px] xl:text-[24px]">{`${
                        locale === "vi" ? "Đọc thêm" : "Read more"
                      }`}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div
            className="flex md:hidden cursor-pointer justify-center items-center mt-5 mb-2 text-white bg-[#00A44E] rounded-full py-3 w-[50vw]"
            onClick={() => router.push(`/news/`)}
          >
            <div className="cursor-pointer text-center text-[15px] font-bold w-full px-1">
              {`${
                locale === "vi"
                  ? "Xem tất cả bài viết"
                  : "Read all articles here"
              }`}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
