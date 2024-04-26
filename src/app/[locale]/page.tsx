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

  console.log(data);

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
          className={`${
            locale === "en" ? "md:mt-[14em]" : "md:mt-[16em]"
          } absolute object-cover  md:ml-[6em] xl:mt-[14em] xl:ml-[12em] 2xl:mt-[22em] 2xl:ml-[18em]`}
        >
          <div
            className={`${
              locale === "en" ? "md:h-full" : "md:h-[20vh]"
            } flex flex-col gap-6 h-fit  xl:h-[60vh] 2xl:h-[50vh] md:w-[60vw] xl:h-100 xl:w-[50vw] 2xl:w-[35vw] bg-white rounded-[60px] px-8 justify-center md:min-h-[320px] xl:min-h-[410px]`}
          >
            <h1
              className={`md:text-[33px] xl:text-[38px] md:pt-6 xl:pt-4 leading-[33px]  text-[#00A44E] font-bold text-center mx-auto load-hidden animate-fade-in uppercase`}
            >
              {t("title")}
            </h1>
            <p
              className="text-justify load-hidden animate-fade-in animate-delay-200 text-slate-950 md:text-[22.6px] xl:text-[28.6px] md:leading-[30px] xl:leading-[35px] pb-6"
              // dangerouslySetInnerHTML={{ __html: t("description") }}
            >
              {/* {t("description")} */}
              {locale === "vi" ? (
                <>
                  Với hơn 20 năm cung cấp dược phẩm đạt tiêu chuẩn quốc tế
                  CMP-WHO, Dược phẩm Đông Nam{" "}
                  <strong>
                    sản xuất và phân phối độc quyền thuốc kê đơn và không kê đơn
                  </strong>{" "}
                  chất lượng cao với giá thành tốt cho các đại lý phân phối, cửa
                  hàng bản lẻ lớn tại Việt Nam và các quốc gia lân cận.
                </>
              ) : (
                <>
                  With over two decades of providing internationally
                  standardized pharmaceuticals, Dong Nam Pharmaceuticals{" "}
                  <strong>
                    manufactures high-quality prescription and over-the- counter
                    medications
                  </strong>{" "}
                  at competitive prices for distributors and major retail
                  outlets in Vietnam and around the world.
                </>
              )}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:hidden w-full ">
        <img src="/image/hero-bg.jpg" className="pb-4" />
        <div className="flex flex-col w-full md:container px-7">
          <p className="text-[18px] text-[#00A44E] font-bold pb-2 uppercase">
            {t("title")}
          </p>
          <p className="text-justify leading-[20px] text-[16px]">
            {locale === "vi" ? (
              <>
                Với hơn 20 năm cung cấp dược phẩm đạt tiêu chuẩn quốc tế
                CMP-WHO, Dược phẩm Đông Nam{" "}
                <strong>
                  sản xuất và phân phối độc quyền thuốc kê đơn và không kê đơn
                </strong>{" "}
                chất lượng cao với giá thành tốt cho các đại lý phân phối, cửa
                hàng bản lẻ lớn tại Việt Nam và các quốc gia lân cận.
              </>
            ) : (
              <>
                With over two decades of providing internationally standardized
                pharmaceuticals, Dong Nam Pharmaceuticals{" "}
                <strong>
                  manufactures high-quality prescription and over-the- counter
                  medications
                </strong>{" "}
                at competitive prices for distributors and major retail outlets
                in Vietnam and{" "}
                <span className="hidden md:inline">around the world.</span>
                <span className="inline md:hidden">global.</span>
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
          <div className="container flex flex-col xl:gap-4 md:pl-4 xl:pl-6 md:pr-20 xl:pr-0">
            <h1 className="leading-[22px] md:leading-[33px] md:text-[38px] xl:text-[38px] text-[18px] uppercase md:font-bold text-[#F18200] ">
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
            </h1>
            <p className="text-[16px] md:text-[22.6px] xl:text-[28.6px] md:leading-[30px] xl:leading-[35px] lg:max-w-[19.5em] pt-2 leading-[20px] text-justify">
              {locale === "vi" ? (
                <>
                  Với sứ mệnh{" "}
                  <strong>
                    "Đồng hành cùng người tiêu dùng trên hành trình sức khỏe
                    toàn diện"
                  </strong>
                  <span className="hidden md:inline">
                    , chúng tôi có đa dạng danh mục sản phẩm thuốc đáp ứng các
                    nhu cầu của bệnh nhân trong các lĩnh vực giảm đau hạ sốt, dạ
                    dày - đường ruột, gan - mật, tim mạch... Điểm mạnh của chúng
                    tôi không chỉ nằm ở việc phát triển các sản phẩm thuốc mới,
                    mà còn ở khả năng{" "}
                    <strong>
                      {" "}
                      nghiên cứu và chế tạo sản phẩm độc quyền theo yêu cầu của
                      các Quý đối tác.
                    </strong>
                  </span>
                  <span className="inline md:hidden">
                    , chúng tôi sẽ nghiên cứu sản phẩm độc quyền theo yêu cầu
                    của Quý đối tác với đa dạng danh mục đáp ứng các yêu cầu của
                    bệnh nhân.
                  </span>
                </>
              ) : (
                <>
                  With a mission to{" "}
                  <strong>
                    "accompany consumers on the journey to comprehensive health"
                  </strong>
                  <span className="hidden md:inline">
                    , we offer a diverse portfolio of medicines to meet patient
                    needs across various areas, such as pain relief, digestive
                    health, liver function, cardiovascular health, and more. Our
                    strength lies not only in developing new drug products but
                    also in our ability to
                    <strong>
                      {" "}
                      research products tailored to the specific requirements of
                      our esteemed partners.
                    </strong>
                  </span>
                  <span className="inline md:hidden">
                    , we will research exclusive products according to the
                    requests of our valued partners, with a diverse portfolio to
                    meet the needs of patients
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-base-200 md:pt-[4em] pt-[1em] bg-base-200  px-[2em] lg:pt-[4em] lg:px-[5em]  ">
        <div className="md:container md:max-w-screen-xl md:mx-auto  ">
          <div className="hidden md:block load-hidden animate-fade-in animate-delay-200 md:max-w-[800px] md:w-max ">
            <h2 className="md:w-full  md:mx-auto md:mb-[40px]  text-[#00A44E] lg:w-full md:text-[38px] text-[18px] md:leading-10 leading-[22px] md:max-h-fit md:text-left  md:font-bold uppercase md:max-w-[78vw] xl:max-w-[50vw]  max-w-[250px] w-full text-end">
              {t("reason.title")}
            </h2>
          </div>
          <h1 className="block md:hidden leading-[22px] text-[18px] uppercase  text-[#00A44E] ">
            {locale === "vi" ? (
              <span className="block md:hidden">
                VÌ SAO CÔNG TY DƯỢC
                <br /> ĐÔNG NAM ĐƯỢC NHIỀU
                <br />
                <strong>ĐỐI TÁC LỚN TIN TƯỞNG?</strong>
              </span>
            ) : (
              <span className="block md:hidden">
                <strong>WHY OUR PARTNERS</strong>
                <br />
                PLACE TRUST ON US?
              </span>
            )}
          </h1>
          <div className="mt-4 grid md:grid-cols-3 md:gap-4 gap-2">
            <div className="flex flex-col items-center  w-full load-hidden animate-slide-up md:border-[1px] md:border-black border-solid rounded-t-lg animate-delay-200">
              <img
                className="aspect-square md:object-cover  w-full md:h-[250px] h-[220px] md:rounded-lg "
                src="/image/reason-1.jpg"
                alt="Online Banking"
              />
              <p className="block md:hidden mt-2 text-center">
                {locale === "vi" ? (
                  <>
                    Sản Phẩm Chất Lượng GMP-WHO
                    <br /> Giá Cả Cạnh Tranh
                  </>
                ) : (
                  <>Quality Products - Competitive Prices</>
                )}
              </p>
              <div className="md:flex flex-col lg:px-4 hidden">
                <h3
                  className={`md:text-[24.6px] xl:text-[26.6px] text-left pt-4  ${
                    locale === "en" ? "pr-16" : "pr-8"
                  } text-black font-semibold capitalize`}
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason1.title1"),
                  }}
                ></h3>
                <h3
                  className="text-[24.6px] xl:text-[26.6px] text-right  text-black font-semibold  capitalize"
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason1.title2"),
                  }}
                ></h3>
              </div>
              <p className="hidden md:block text-center text-[22.6px] xl:text-[24.6px] xl:text-justify md:text-left  text-slate-950 p-4 leading-[36px]">
                {t("reason.reason1.description")}
              </p>
            </div>
            <div className="flex flex-col items-center  w-full load-hidden animate-slide-up md:border-[1px] md:border-black border-solid rounded-t-lg animate-delay-200">
              <img
                className="aspect-square md:object-cover  w-full md:h-[250px] h-[220px] md:rounded-lg "
                src="/image/reason-2.jpg"
                alt="Simple Budgeting"
              />
              <p className="block md:hidden mt-2 text-center capitalize">
                {locale === "vi" ? (
                  <>
                    sản xuất nhanh chóng
                    <br /> chất lượng đồng bộ
                  </>
                ) : (
                  <>Fast Production - Consistent Quality</>
                )}
              </p>
              <div className="md:flex flex-col lg:px-4 hidden ">
                <h3
                  className={`md:text-[24.6px] xl:text-[26.6px] text-left pt-4  ${
                    locale === "en" ? "pr-16" : "pr-8"
                  } text-black font-semibold capitalize`}
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason2.title1"),
                  }}
                ></h3>
                <h3
                  className="md:text-[24.6px] xl:text-[26.6px] text-right  text-black font-semibold  capitalize"
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason2.title2"),
                  }}
                ></h3>
              </div>
              <p className="hidden md:block text-center text-[22.6px] xl:text-[24.6px] xl:text-justify md:text-left text-slate-950 p-4 leading-[36px]">
                {t("reason.reason2.description")}
              </p>
            </div>
            <div className="flex flex-col items-center  w-full load-hidden animate-slide-up md:border-[1px] md:border-black border-solid rounded-t-lg animate-delay-200">
              <img
                className="aspect-square md:object-cover  w-full md:h-[250px] h-[220px] md:rounded-lg "
                src="/image/reason-3.jpg"
                alt="Fast Onboarding"
              />
              <p className="block md:hidden mt-2 text-center capitalize">
                {locale === "vi" ? (
                  <>
                    đa dạng danh mục
                    <br /> sản xuất độc quyền
                  </>
                ) : (
                  <>Diverse Portfolio - Exclusive Manufacturing</>
                )}
              </p>
              <div className="md:flex flex-col lg:px-4 hidden ">
                <h3
                  className={`md:text-[24.6px] xl:text-[26.6px] text-left pt-4  ${
                    locale === "en" ? "pr-16" : "pr-10"
                  } text-black font-semibold capitalize`}
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason3.title1"),
                  }}
                ></h3>
                <h3
                  className="md:text-[24.6px] xl:text-[26.6px] text-right  text-black font-semibold  capitalize"
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason3.title2"),
                  }}
                ></h3>
              </div>
              <p className="hidden md:block text-center text-[22.6px] xl:text-[24.6px] xl:text-justify md:text-left text-slate-950 p-4 leading-[36px]">
                {t("reason.reason3.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-200 pt-3  md:pt-[4em] lg:pt-[3em] lg:px-[5em]">
        <div className="container max-w-screen-xl mx-auto w-full ">
          <div className="load-hidden animate-fade-in animate-delay-200">
            <h2 className="  uppercase mb-4 leading-[22px] text-[18px] md:text-center text-[#F18200] md:text-[38px] md:leading-[44px] lg:text-left lg:ml-0 md:font-bold w-12/13 md:w-3/4 ">
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
      </section>

      <section className="bg-base-200 pt-4 md:pt-[4em] lg:pt-[3em] lg:px-[5em]">
        <div className="container max-w-screen-xl mx-auto w-full flex flex-col justify-center items-center">
          <div className="load-hidden animate-fade-in animate-delay-200 flex self-stretch">
            <h2 className="uppercase mb-4 leading-[22px] text-[18px] md:text-center text-[#00A44E] md:text-[38px] md:leading-[44px] lg:text-left lg:ml-0 md:font-bold w-11/12 md:w-3/4 font-bold">
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
                    className="aspect-square object-cover w-full h-[20vh] md:h-[25vh] rounded-lg"
                    src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
                    alt="Online Banking"
                  />
                  <h3 className=" md:text-center text-black md:font-bold md:px-4 pt-2 md:pt-4  capitalize text-[16px] leading-[20px] md:text-[24.6px] xl:text-[26px] md:leading-[30px] line-clamp-2 md:line-clamp-3 xl:line-clamp-3">
                    {locale === "vi" ? (
                      <p>{blog.title}</p>
                    ) : (
                      <p>{blog.title_en}</p>
                    )}
                  </h3>
                  <p
                    className={`${
                      locale === "vi" ? "md:text-[20px]" : "md:text-[18px]"
                    } hidden md:flex text-slate-950 py-4 px-2 xl:px-6 xl:text-[24px] text-justify md:leading-[30px] xl:leading-[35px] md:h-[22vh] xl:max-h-[21vh] 2xl:max-h-[23vh]`}
                  >
                    <div className="md:line-clamp-5 xl:line-clamp-4 2xl:line-clamp-5">
                      {locale === "vi" ? (
                        <p>{blog.description}</p>
                      ) : (
                        <p>{blog.description_en}</p>
                      )}
                    </div>
                  </p>
                  <div className="hidden md:flex">
                    <div className="md:py-3 xl:py-5 flex flex-row content-center items-center">
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
            className="flex md:hidden cursor-pointer justify-center items-center mt-3 text-white bg-orange-500 rounded-full py-3 w-1/2"
            onClick={() => router.push(`/news/`)}
          >
            <div className="cursor-pointer text-center text-[15px] font-bold w-full px-1">
              {`${
                locale === "vi" ? "Xem tất cả bài viết" : "See all articles"
              }`}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-200 pt-4 md:pt-[4em] lg:pt-[3em] lg:px-[5em] mb-4 md:mb-6 xl:mb-8">
        <div className="container max-w-screen-xl mx-auto w-full flex flex-col justify-center items-center">
          <div className="load-hidden animate-fade-in animate-delay-200 flex self-stretch">
            <h2 className="uppercase mb-4 leading-[22px] text-[18px] md:text-center text-[#00A44E] md:text-[38px] md:leading-[44px] lg:text-left lg:ml-0 md:font-bold w-11/12 md:w-3/4 font-bold">
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
                    className="aspect-square object-cover w-full h-[20vh] md:h-[25vh] rounded-lg"
                    src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
                    alt="Online Banking"
                  />
                  <h3 className=" md:text-center text-black md:font-bold md:px-4 pt-2 md:pt-4  capitalize text-[16px] leading-[20px] md:text-[24.6px] xl:text-[26px] md:leading-[30px] line-clamp-2 md:line-clamp-3 xl:line-clamp-2 ">
                    {locale === "vi" ? (
                      <p>{blog.title}</p>
                    ) : (
                      <p>{blog.title_en}</p>
                    )}
                  </h3>
                  <p className="hidden md:flex text-slate-950 py-4 px-2 xl:px-6 md:text-[20px] xl:text-[24px] text-justify md:leading-[30px] xl:leading-[35px] md:h-[22vh] xl:max-h-[21vh] 2xl:max-h-[23vh]">
                    <div className="md:line-clamp-5 xl:line-clamp-4 2xl:line-clamp-5">
                      {locale === "vi" ? (
                        <p>{blog.description}</p>
                      ) : (
                        <p>{blog.description_en}</p>
                      )}{" "}
                    </div>
                  </p>
                  <div className="hidden md:flex">
                    <div className="md:py-3 xl:py-5 flex flex-row content-center items-end">
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
            className="flex md:hidden cursor-pointer justify-center items-center mt-3 text-white bg-orange-500 rounded-full py-3 w-1/2"
            onClick={() => router.push(`/news/`)}
          >
            <div className="cursor-pointer text-center text-[15px] font-bold w-full px-1">
              {`${
                locale === "vi" ? "Xem tất cả bài viết" : "See all articles"
              }`}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
