"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";

export default function About() {
  const t = useTranslations("about");
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
    <main className="!font-sans">
      <section className="hidden md:block relative bg-white min-h-screen ">
        <div className="absolute top-0 left-0 w-full h-full opacity-100 bg-[url('/image/about-hero-bg.jpg')] bg-cover bg-repeat bg-cli" />
        <div className="absolute bg-transparent container flex flex-col-reverse gap-20 max-w-screen-xl mx-auto pt-[4em] lg:min-h-screen lg:items-center lg:flex-row left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-6 content-center items-center lg:h-100 lg:w-1/2 bg-white rounded-3xl md:p-5 xl:p-8">
            <h1 className="text-3xl text-[#00A44E] font-bold  mx-auto lg:mx-0 text-center load-hidden animate-fade-in uppercase">
              {locale === "vi" ? (
                <>Công ty Dược Đông Nam</>
              ) : (
                <>Dong Nam Pharmaceuticals</>
              )}
            </h1>
            <p className="load-hidden animate-fade-in animate-delay-200 text-slate-950 text-2xl leading-10 text-justify">
              {locale === "vi" ? (
                <>
                  Công ty Dược Phẩm Đông Nam được thành lập từ năm 2001, chúng
                  tôi là một trong những đơn vị tiên phong sản xuất dược phẩm
                  đạt tiêu chuẩn WHO-GMP, GLP, GSP tại Việt Nam.{" "}
                </>
              ) : (
                <>
                  Dong Nam Pharmaceuticals was established in 2001. We are one
                  of the pioneering companies in the production of
                  pharmaceuticals that meet WHO-GMP, GLP, and GSP standards in
                  Vietnam.
                </>
              )}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:hidden w-full">
        <img src="/image/about-hero-bg.jpg" className="pb-4" />
        <div className="flex flex-col w-full md:container px-7">
          <p className="text-[18px] text-[#00A44E] font-bold pb-2 uppercase text-center">
            {locale === "vi" ? <>Dược Phẩm Đông Nam</> : <>Dong Nam Pharma</>}
          </p>
          <p className="text-justify leading-[20px] text-[16px]">
            {locale === "vi" ? (
              <>
                Công ty Dược Phẩm Đông Nam được thành lập từ năm 2001, chúng tôi
                là một trong những đơn vị tiên phong sản xuất dược phẩm đạt tiêu
                chuẩn WHO-GMP, GLP, GSP tại Việt Nam.
              </>
            ) : (
              <>
                Dong Nam Pharmaceuticals was established in 2001. We are one of
                the pioneering companies in the production of pharmaceuticals
                that meet WHO-GMP, GLP, and GSP standards in Vietnam.
              </>
            )}
          </p>
        </div>
      </section>
      <section className="hidden md:block bg-base-200 py-[3em] px-[2em] md:px-[4em]">
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl uppercase font-bold text-[#00A44E]">
              {locale === "vi" ? "Tầm nhìn" : "Vision"}
            </h1>
            <p className="text-2xl leading-10 text-justify">
              {locale === "vi" ? (
                <>
                  Tầm nhìn của chúng tôi là trở thành thương hiệu hàng đầu Việt
                  Nam trong lĩnh vực sản xuất dược phẩm, thông qua việc thúc đẩy
                  sự tiến bộ và đổi mới trong ngành, góp phần nâng cao chất
                  lượng cuộc sống cho người dân.
                </>
              ) : (
                <>
                  Our vision is to become the leading brand in Vietnam in the
                  field of pharmaceutical manufacturing by promoting progress
                  and innovation in the industry, thereby contributing to
                  improving the quality of life for the people .
                </>
              )}
            </p>
          </div>
          <img
            src="/image/about-2.jpg"
            className="w-full h-full rounded-lg xl:max-h-80 object-fill"
          />
        </div>
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-12 md:mt-14">
          <img
            src="/image/about-3.jpg"
            className="w-full h-full rounded-lg xl:max-h-80 object-fill"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl uppercase font-bold text-[#00A44E]">
              {locale === "vi" ? "Sứ mệnh" : "Mission"}
            </h1>
            <p className="text-2xl leading-10 text-justify">
              {locale === "vi" ? (
                <>
                  Lấy sức khoẻ cộng đồng làm khởi sự cho mọi hoạt động, chúng
                  tôi không chỉ mang lại sự đổi mới cho lĩnh vực chăm sóc sức
                  khỏe thông qua các giải pháp tiên tiến, mà còn đóng góp tích
                  cực vào việc bảo vệ môi trường và thực hiện các hoạt động xã
                  hội.
                </>
              ) : (
                <>
                  With public health as the foundation of all our activities, we
                  not only bring innovation to the healthcare sector through
                  advanced solutions but also activity contribute to
                  environmental protection and engage in social activities.
                </>
              )}
            </p>
          </div>
        </div>
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-12 md:mt-14">
          <div className="flex flex-col gap-4 h-fit">
            <h1 className="text-3xl uppercase font-bold text-[#00A44E]">
              {locale === "vi" ? "Giá trị cốt lõi" : "Core values"}
            </h1>
            <p className="text-2xl leading-10 text-justify">
              {locale === "vi" ? (
                <>
                  Đuợc thúc đẩy bởi mong muốn cải thiện cuộc sống. Các giá trị
                  cốt lõi của chúng tôi giúp định hướng cho mọi quyết định và
                  hành động mà chúng tôi thực hiện.
                </>
              ) : (
                <>
                  Driven by the desire to improve lives, our core values guide
                  every decision and action we take.
                </>
              )}
            </p>
            <p className="text-2xl leading-10 text-justify md:pl-4">
              {locale === "vi" ? (
                <>
                  ● Đồng cảm: Chúng tôi luôn đặt mình vào vị trí của bệnh nhân
                  và các nhà phân phối để hiểu nhu cầu của họ.
                  <br /> ● Minh bạch: Chúng tôi hành động với sự chính trực và
                  tuân thủ nghiêm ngặt các nguyên tắc đạo đức.
                  <br /> ● Sáng tạo: Chúng tôi không ngừng đổi mới nhằm mang đến
                  những giải pháp tốt hơn trong mọi hoạt động.
                </>
              ) : (
                <>
                  ● Empathy: We always put ourselves in the position of patients
                  and distributors to understand their needs.
                  <br />● Transparency: We act with integrity and strictly
                  adhere to ethical principles.
                  <br />● Innovation: We continually strive to bring better
                  solutions in all our activities.
                </>
              )}
            </p>
          </div>
          <img
            src="/image/about-4.jpg"
            className="w-full h-full rounded-lg  object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col md:hidden w-full h-full ">
        <img
          src="/image/about-2-mobile.jpg"
          className="container py-8 w-full"
        />
        <div className="flex flex-col w-full md:container px-7">
          <p className="text-[18px] text-[#00A44E] font-bold pb-2 uppercase">
            {locale === "vi" ? "Tầm nhìn" : "Vision"}
          </p>
          <p className="text-justify leading-[20px] text-[16px]">
            {locale === "vi" ? (
              <>
                Tầm nhìn của chúng tôi là trở thành thương hiệu hàng đầu Việt
                Nam trong lĩnh vực sản xuất dược phẩm, thông qua việc thúc đẩy
                sự tiến bộ và đổi mới trong ngành, góp phần nâng cao chất lượng
                cuộc sống cho người dân.
              </>
            ) : (
              <>
                Our vision is to become the leading brand in Vietnam in the
                field of pharmaceutical manufacturing by promoting progress and
                innovation in the industry, thereby contributing to improving
                the quality of life for the people .
              </>
            )}
          </p>
        </div>
      </section>
      <section className="flex flex-col md:hidden w-full ">
        <img
          src="/image/about-3-mobile.jpg"
          className="container py-4 my-4 h-[220px]"
        />
        <div className="flex flex-col w-full md:container px-7">
          <p className="text-[18px] text-[#00A44E] font-bold pb-4 uppercase">
            {locale === "vi" ? "sứ mệnh" : "Mission"}
          </p>
          <p className="text-justify leading-[20px] text-[16px] mb-4">
            {locale === "vi" ? (
              <>
                Lấy sức khoẻ cộng đồng làm khởi sự cho mọi hoạt động, chúng tôi
                không chỉ mang lại sự đổi mới cho lĩnh vực chăm sóc sức khỏe
                thông qua các giải pháp tiên tiến, mà còn đóng góp tích cực vào
                việc bảo vệ môi trường và thực hiện các hoạt động xã hội.
              </>
            ) : (
              <>
                With public health as the foundation of all our activities, we
                not only bring innovation to the healthcare sector through
                advanced solutions but also activity contribute to environmental
                protection and engage in social activities.
              </>
            )}
          </p>
        </div>
      </section>
      <section className="flex flex-col md:hidden w-full ">
        <img
          src="/image/about-4-mobile.jpg"
          className="container py-4 object-cover h-[220px]"
        />
        <div className="flex flex-col w-full md:container px-7">
          <p className="text-[18px] text-[#00A44E] font-bold py-4 uppercase">
            {locale === "vi" ? "Giá trị cốt lõi" : "Core values"}{" "}
          </p>

          <p className="text-justify leading-[20px] text-[16px] pb-4">
            {locale === "vi" ? (
              <>
                Đuợc thúc đẩy bởi mong muốn cải thiện cuộc sống. Các giá trị cốt
                lõi của chúng tôi giúp định hướng cho mọi quyết định và hành
                động mà chúng tôi thực hiện.
              </>
            ) : (
              <>
                Driven by the desire to improve lives, our core values guide
                every decision and action we take.
              </>
            )}
          </p>
          <p className="text-justify leading-[20px] text-[16px] pb-4 px-2 mb-8">
            {locale === "vi" ? (
              <>
                ● Đồng cảm: Chúng tôi luôn đặt mình vào vị trí của bệnh nhân và
                các nhà phân phối để hiểu nhu cầu của họ.
                <br />
                <br /> ● Minh bạch: Chúng tôi hành động với sự chính trực và
                tuân thủ nghiêm ngặt các nguyên tắc đạo đức.
                <br />
                <br /> ● Sáng tạo: Chúng tôi không ngừng đổi mới nhằm mang đến
                những giải pháp tốt hơn trong mọi hoạt động.
              </>
            ) : (
              <>
                ● Empathy: We always put ourselves in the position of patients
                and distributors to understand their needs.
                <br />
                <br />● Transparency: We act with integrity and strictly adhere
                to ethical principles.
                <br />
                <br />● Innovation: We continually strive to bring better
                solutions in all our activities.
              </>
            )}
          </p>
        </div>
      </section>
      <h1 className="uppercase text-[18px] md:text-[30px] text-[#00A44E] font-bold text-center w-full h-full">
        {locale === "vi" ? <>Ban giám đốc</> : <>Board of directors</>}
      </h1>
      <div className="w-full flex flex-col justify-center gap-10 md:gap-8 my-6 md:mt-10 md:mb-20">
        <div className="flex flex-col items-center">
          <img
            className="w-36 h-36 md:w-72 md:h-72 rounded-full"
            src="/image/director-2.jpg"
          />
          <p className="text-[16px] md:text-[20.6px] font-bold uppercase mt-4">
            Võ Tấn Lộc
          </p>
          <p className="text-[14px] md:text-[16.6px] mt-2 text-center capitalize">
            {locale === "vi" ? (
              <>
                Chủ tịch hội đồng quản trị <br /> Tổng Giám Đốc
              </>
            ) : (
              <>
                Chairman
                <br />
                Chief Executive Officer
              </>
            )}
          </p>
        </div>
        <div className="flex flex-row items-center w-full place-content-center justify-around md:justify-evenly mb-6 md:mb-0">
          <div className="flex flex-col items-center">
            <img
              className="w-36 h-36 md:w-72 md:h-72 rounded-full object-contain"
              src="/image/director-3.jpg"
            />
            <p className="text-[16px] md:text-[20.6px] font-bold uppercase mt-4">
              Nguyễn Văn Vĩnh
            </p>
            <p className="text-[14px] md:text-[16.6px] mt-2 text-center">
              {locale === "vi" ? (
                <>Giám Đốc Điều Hành</>
              ) : (
                <>Managing Director</>
              )}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-36 h-36 md:w-72 md:h-72 rounded-full object-cover"
              src="/image/director-1.jpg"
            />
            <p className="text-[16px] md:text-[20.6px] font-bold uppercase mt-4">
              Võ Quân Huy
            </p>
            <p className="text-[14px] md:text-[16.6px] mt-2 text-center capitalize">
              {locale === "vi" ? <>Phó Tổng Giám Đốc</> : <>Deputy CEO</>}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
