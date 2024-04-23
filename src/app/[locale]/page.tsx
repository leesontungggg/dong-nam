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
    <main className="!font-sans">
      <section className=" relative bg-white  min-h-screen">
        <div
          className="absolute top-[-100px] left-0 w-full h-full opacity-100 bg-[url('/image/hero-bg.jpg')] bg-cover bg-repeat "
          style={{ minHeight: "-webkit-fill-available" }}
        />
        <div className="absolute   object-cover lg:mt-[19em] lg:ml-[8em] 2xl:mt-[32em] 2xl:ml-[12em] ">
          <div className=" flex flex-col gap-6 h-[20vh]   lg:h-100 lg:w-1/2 2xl:w-2/5 bg-white rounded-[60px] px-8  min-w-[700px]  justify-center   min-h-[350px] max-h-[300px]">
            <h1 className="text-[37.4px] pt-6 leading-[33px]  text-[#00A44E] font-bold text-center  mx-auto load-hidden animate-fade-in uppercase  w-fit min-w-max  ">
              {t("title")}
            </h1>
            <p
              className="text-justify load-hidden animate-fade-in animate-delay-200 text-slate-950 text-[22.6px] leading-[30px] pb-6"
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
      <section className="bg-base-200 pt-[4em] ">
        <div className="container xl:px-[95px]  mx-auto grid grid-cols-2 gap-8">
          <img src="/image/sumenh.jpg" className="w-full lg:h-full" />
          <div className="flex flex-col xl:gap-4">
            <h1 className=" xl:text-[38px] lg:text-[32px] uppercase font-bold text-[#F18200] ">
              {t("mission.title")}
            </h1>
            <p className="text-[22.6px] lg:max-w-[19.5em]   pt-2  xl:max-w-[23em] lg:leading-[28px] xl:leading-[30px]  text-justify">
              {locale === "vi" ? (
                <>
                  Với sứ mệnh{" "}
                  <strong>
                    'Đồng hành cùng người tiêu dùng trên hành trình sức khỏe
                    toàn diện'
                  </strong>
                  , chúng tôi có đa dạng danh mục sản phẩm thuốc đáp ứng các nhu
                  cầu của bệnh nhân trong các lĩnh vực giảm đau hạ sốt, dạ dày -
                  đường ruột, gan - mật, tim mạch... Điểm mạnh của chúng tôi
                  không chỉ nằm ở việc phát triển các sản phẩm thuốc mới, mà còn
                  ở khả năng{" "}
                  <strong>
                    {" "}
                    nghiên cứu và chế tạo sản phẩm độc quyền theo yêu cầu của
                    các Quý đối tác.
                  </strong>
                </>
              ) : (
                <>
                  With a mission to{" "}
                  <strong>
                    "accompany consumers on the journey to comprehensive
                    health,"
                  </strong>{" "}
                  we offer a diverse portfolio of medicines to meet patient
                  needs across various areas, such as pain relief, digestive
                  health, liver function, cardiovascular health, and more. Our
                  strength lies not only in developing new drug products but
                  also in our ability to
                  <strong>
                    {" "}
                    research products tailored to the specific requirements of
                    our esteemed partners.
                  </strong>
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-base-200 pt-[3em] px-[2em] md:pt-[4em] lg:pt-[4em] lg:px-[5em]">
        <div className="container max-w-screen-xl mx-auto ">
          <div className=" load-hidden animate-fade-in animate-delay-200 max-w-[800px] w-max ">
            <h2 className="w-80 mx-auto mb-[40px]  text-[#00A44E] lg:w-full lg:text-[38px] leading-10 max-h-fit text-left  font-bold uppercase  ">
              {t("reason.title")}
            </h2>
          </div>

          <div className="mt-2 md:mt-4 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center  w-full load-hidden animate-slide-up border-[1px] border-black border-solid rounded-t-lg animate-delay-200">
              <img
                className="aspect-square object-cover w-full h-[250px] rounded-lg "
                src="/image/reason-1.jpg"
                alt="Online Banking"
              />
              <div className="flex flex-col lg:px-4  ">
                <h3
                  className={`text-[24.6px] text-left pt-4  ${
                    locale === "en" ? "pr-16" : "pr-8"
                  } text-black font-semibold capitalize`}
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason1.title1"),
                  }}
                ></h3>
                <h3
                  className="text-[24.6px] text-right  text-black font-semibold  capitalize"
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason1.title2"),
                  }}
                ></h3>
              </div>
              <p className="text-center text-[22.6px] lg:text-left text-slate-950 p-4 leading-[36px]">
                {t("reason.reason1.description")}
              </p>
            </div>

            <div className="flex flex-col items-center  w-full load-hidden animate-slide-up border-[1px] border-black border-solid rounded-t-lg animate-delay-200">
              <img
                className="aspect-square object-cover w-full h-[250px] rounded-lg"
                src="/image/reason-2.jpg"
                alt="Simple Budgeting"
              />
              <div className="flex flex-col lg:px-4">
                <h3
                  className={`text-[24.6px] text-left pt-4 ${
                    locale === "en" ? "pr-16" : "pr-8"
                  }
                   text-black font-semibold capitalize`}
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason2.title1"),
                  }}
                ></h3>
                <h3
                  className="text-[24.6px] text-right  text-black font-semibold  capitalize"
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason2.title2"),
                  }}
                ></h3>
              </div>
              <p className="text-center text-[22.6px] lg:text-left text-slate-950 p-4 leading-[36px]">
                {t("reason.reason2.description")}
              </p>
            </div>

            <div className="flex flex-col items-center  w-full load-hidden animate-slide-up border-[1px] border-black border-solid rounded-t-lg animate-delay-200">
              <img
                className="aspect-square object-cover w-full h-[250px] rounded-lg"
                src="/image/reason-3.jpg"
                alt="Fast Onboarding"
              />
              <div className="flex flex-col lg:px-4">
                <h3
                  className={`text-[24.6px] text-left pt-4 ${
                    locale === "en" ? "" : ""
                  } pr-16 
                   text-black font-semibold capitalize`}
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason3.title1"),
                  }}
                ></h3>
                <h3
                  className={`text-[24.6px] text-right  text-black font-semibold ${
                    locale === "en" ? "pl-6" : ""
                  } capitalize`}
                  dangerouslySetInnerHTML={{
                    __html: t("reason.reason3.title2"),
                  }}
                ></h3>
              </div>
              <p className="text-center text-[22.6px] lg:text-left text-slate-950 p-4 leading-[36px]">
                {t("reason.reason3.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-200 pt-[3em] px-[2em] md:pt-[4em] lg:pt-[3em] lg:px-[5em]">
        <div className="container max-w-screen-xl mx-auto w-full">
          <div className=" load-hidden animate-fade-in animate-delay-200 max-w-[800px] w-max ">
            <h2 className="w-80 mx-auto uppercase mb-4 text-2xl text-center text-[#F18200] md:w-full md:text-[38px] leading-[40px] lg:text-left lg:ml-0 font-bold">
              {t("highlight.title")}
            </h2>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="rounded-[64px] border-[1px] border-gray-400 py-2 px-8  w-full flex-col justify-center items-center ">
              <h6 className="text-[41.6px] leading-[45px] font-bold text-center">
                {">"}20
              </h6>
              <p className="text-center text-[22.6px] leading-[32px]">
                {locale === "vi"
                  ? "năm phát triển tại Việt Nam"
                  : "years of development in Vietnam"}
              </p>
            </div>

            <div className="rounded-[64px] border-[1px] border-gray-400 py-4 px-8 w-full flex-col justify-center items-center">
              <h6 className="text-[41.6px] leading-[45px] font-bold text-center">
                {">"}70
              </h6>
              <p className="text-center text-[22.6px] leading-[32px]">
                {locale === "vi" ? "sản phẩm" : "products"}
              </p>
            </div>

            <div className="rounded-[64px] border-[1px] border-gray-400 p-4 w-full flex-col justify-center items-center">
              <h6 className="text-[41.6px] leading-[45px] font-bold text-center">
                {">"}13,000
              </h6>
              <p className="text-center text-[22.6px] leading-[32px]">
                {locale === "vi" ? "m2 diện tích nhà máy" : "m2 factory area"}
              </p>
            </div>

            <div className="rounded-[64px] border-[1px] border-gray-400 p-4 w-full flex-col justify-center items-center">
              <h6 className="text-[41.6px] leading-[45px] font-bold text-center">
                {">"}40
              </h6>
              <p className="text-center text-[22.6px] leading-[32px]">
                {locale === "vi" ? "đối tác" : "partners"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-100 py-[3em] px-[2em] lg:px-[5em] lg:pb-[2em] ">
        <div className="container max-w-screen-xl mx-auto">
          <div className="flex flex-row  load-hidden animate-fade-in animate-delay-200 w-full">
            <h2 className="w-80 mx-auto uppercase mb-4 text-2xl text-center text-[#00A44E] md:w-full md:text-[38px] lg:text-left lg:ml-0 font-bold pb-2 pt-4">
              {t("article.title")}
            </h2>
            <div
              className="flex flex-row content-center items-center text-center cursor-pointer"
              onClick={() => router.push(`/news/`)}
            >
              <div className="cursor-pointer w-[350px] text-[22.6px] font-bold pl-3">
                {`${
                  locale === "vi"
                    ? "Xem tất cả bài viết tại đây"
                    : "Read all articles here"
                }`}
              </div>
              <ImArrowRight2 size="22.6" />
            </div>
          </div>

          <div className="mt-2 md:mt-4 grid grid-cols-3 gap-4">
            {data.blogs
              .filter((blog: any) => blog.type === "news")
              .map((blog: any) => (
                <div
                  className="flex flex-col items-center  w-full load-hidden animate-slide-up border-[1px] border-black border-solid rounded-t-lg animate-delay-200 cursor-pointer"
                  onClick={() => router.push(`/news/${blog.id}`)}
                >
                  <img
                    className="aspect-square object-cover w-full h-[250px] rounded-lg"
                    src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
                    alt="Online Banking"
                  />
                  <h3
                    className=" text-center text-black font-semibold px-4 pt-4  capitalize text-[24.6px] leading-[30px]  "
                    dangerouslySetInnerHTML={{
                      __html: blog.title,
                    }}
                  ></h3>
                  <p className="text-center lg:text-left text-slate-950 p-4 text-[22.6px] h-fit leading-[35px]   ">
                    {blog.description}
                  </p>
                  <div className="mt-auto mb-4 flex flex-row content-center items-center">
                    <SlArrowRight className="pr-2 " size="25" />
                    <p className="mt-auto  font-bold text-[19.6px]">{`${
                      locale === "vi" ? "Đọc thêm" : "Read more"
                    }`}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-base-100 px-[2em] lg:px-[5em] lg:pb-[3em] ">
        <div className="container max-w-screen-xl mx-auto">
          <div className="flex flex-row  load-hidden animate-fade-in animate-delay-200 w-full">
            <h2 className="w-80 mx-auto uppercase mb-4 text-2xl text-center text-[#00A44E] md:w-full md:text-[38px] lg:text-left lg:ml-0 font-bold pb-2 pt-4">
              {t("blog.title")}
            </h2>
            <div
              className="flex flex-row content-center items-center text-center cursor-pointer"
              onClick={() => router.push(`/blog/`)}
            >
              <div className="cursor-pointer w-[350px] text-[22.6px] font-bold pl-3">
                {`${
                  locale === "vi"
                    ? "Xem tất cả bài viết tại đây"
                    : "Read all articles here"
                }`}
              </div>
              <ImArrowRight2 size="22.6" />
            </div>
          </div>

          <div className="mt-2 md:mt-4 grid grid-cols-3 gap-4">
            {data.blogs
              .filter((blog: any) => blog.type === "blog")
              .map((blog: any) => (
                <div
                  className="flex flex-col items-center  w-full load-hidden animate-slide-up border-[1px] border-black border-solid rounded-t-lg animate-delay-200 cursor-pointer"
                  onClick={() => router.push(`/blog/${blog.id}`)}
                >
                  <img
                    className="aspect-square object-cover w-full h-[250px] rounded-lg"
                    src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
                    alt="Online Banking"
                  />
                  <h3
                    className=" text-center text-black font-semibold px-4 pt-4  capitalize text-[24.6px] leading-[30px]  "
                    dangerouslySetInnerHTML={{
                      __html: blog.title,
                    }}
                  ></h3>
                  <p className="text-center lg:text-left text-slate-950 p-4 text-[22.6px] h-fit leading-[35px]   ">
                    {blog.description}
                  </p>
                  <div className="mt-auto mb-4 flex flex-row content-center items-center">
                    <SlArrowRight className="pr-2 " size="25" />
                    <p className="mt-auto  font-bold text-[19.6px]">{`${
                      locale === "vi" ? "Đọc thêm" : "Read more"
                    }`}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
