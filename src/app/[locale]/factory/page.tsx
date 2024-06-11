"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";

export default function About() {
  const t = useTranslations("factory");
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
        <div className="absolute top-0 left-0 w-full h-full opacity-100 bg-[url('/image/factory-hero-bg.jpg')] bg-cover bg-repeat bg-cli" />
        <div className="absolute bg-transparent container flex flex-col-reverse gap-20 max-w-screen-xl mx-auto pt-[4em] lg:min-h-screen lg:items-center lg:flex-row left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-6 content-center items-center lg:h-100 lg:w-1/2 bg-white rounded-3xl md:p-5 xl:p-8">
            <h1 className="text-3xl text-[#00A44E] font-bold  mx-auto lg:mx-0 text-center load-hidden animate-fade-in uppercase">
              {locale === "vi" ? <>NHÀ MÁY ĐÔNG NAM</> : <>DONG NAM FACTORY</>}
            </h1>
            <p className="load-hidden animate-fade-in animate-delay-200 text-slate-950 text-2xl leading-10 text-justify">
              {locale === "vi" ? (
                <>
                  Hơn 20 năm sản xuất đa dạng theo nhu cầu khách hàng với cam
                  kết chất lượng cao
                </>
              ) : (
                <>
                  Over 20 years of diverse production tailored to customer needs
                  with a commitment to high- quality
                </>
              )}
            </p>
          </div>
        </div>
      </section>
      <section className="hidden md:block bg-base-200 pt-[2em]">
        <div className="container max-w-screen-xl mx-auto">
          <p className="md:text-[18px] xl:text-[24px] text-justify md:leading-10">
            {" "}
            {locale === "vi" ? (
              <>
                Thành lập từ năm 2001, Nhà máy Dược Phẩm Đông Nam đã trở thành
                một trong những cơ sở sản xuất dược phẩm đáng tin cậy nhất tại
                Việt Nam. Tự hào về khả năng quản trị sản xuất hàng đầu, nhà máy
                Đông Nam tập trung vào việc cung cấp các sản phẩm chất lượng và
                đa dạng.
              </>
            ) : (
              <>
                Established in 2001, Đông Nam Pharmaceutical Factory has become
                one of the most reliable pharmaceutical manufacturing facilities
                in Vietnam. Proud of our top-notch manufacturing management,
                Đông Nam Factory focuses on providing quality and diverse
                products.
              </>
            )}
          </p>
        </div>
      </section>
      <section className="flex flex-col md:hidden w-full">
        <img src="/image/factory-hero-bg.jpg" className="pb-4" />
        <div className="flex flex-col w-full md:container px-7">
          <p className="text-[18px] text-[#00A44E] font-bold pb-2 uppercase text-center">
            {t("title1")}
          </p>
          <p className="text-justify leading-[20px] text-[16px]">
            {locale === "vi" ? (
              <>
                Thành lập từ năm 2001, Nhà máy Dược Phẩm Đông Nam đã trở thành{" "}
                <strong>
                  một trong những cơ sở sản xuất dược phẩm đáng tin cậy nhất tại
                  Việt Nam
                </strong>
                . Tự hào về khả năng quản trị sản xuất hàng đầu, nhà máy Đông
                Nam tập trung vào việc cung cấp các{" "}
                <strong>sản phẩm chất lượng và đa dạng</strong>.
              </>
            ) : (
              <>
                Established in 2001, Đông Nam Pharmaceutical Factory has become{" "}
                <strong>
                  one of the most reliable pharmaceutical manufacturing
                  facilities in Vietnam.
                </strong>{" "}
                Proud of our top-notch manufacturing management, Đông Nam
                Factory focuses on providing{" "}
                <strong>quality and diverse products.</strong>
              </>
            )}
          </p>
        </div>
      </section>
      <section className="hidden md:block bg-base-200 py-[3em] md:py-[2em]">
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-6 pt-6">
          <img
            src="/image/factory-1.jpg"
            className="w-full h-full xl:max-h-[47vh] 2xl:max-h-[39vh] rounded-lg object-cover"
          />
          <div className="flex flex-col gap-4">
            <h1 className="md:text-2xl xl:text-3xl uppercase font-bold text-[#00A44E]">
              {t("title2")}
            </h1>
            <p className="md:text-[18px] xl:text-[24px] lg:max-xl:leading-8 text-justify">
              {locale === "vi" ? (
                <>
                  Nhà máy sản xuất dược phẩm Đông Nam đã và đang tuân thủ nghiêm
                  ngặt các nguyên tắc trong tiêu chuẩn WHO-GMP, GLP, GSP.
                </>
              ) : (
                <>
                  Our manufacturing plant has been and continues to strictly
                  adhere to the principles outlined in WHO-GMP, GLP, GSP
                  standards.
                </>
              )}
            </p>
          </div>
        </div>
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-6 pt-[66px]">
          <div className="flex flex-col gap-4">
            <h1 className="md:text-2xl xl:text-3xl uppercase font-bold text-[#00A44E]">
              {t("title3")}
            </h1>
            <p
              className={`md:text-[18px] xl:text-[24px] lg:max-xl:leading-8 ${
                locale === "en" ? "xl:leading-7" : ""
              } text-justify`}
            >
              {locale === "vi" ? (
                <>
                  Chúng tôi chuyên sản xuất các loại sản phẩm dạng viên nang
                  cứng, viên nang mềm, viên nén (viên nén, viên nén bao phim),
                  dạng bào chế rắn khác (thuốc bột, thuốc cốm).
                  <br />
                  <br /> Chúng tôi đảm bảo nguồn nguyên liệu đầu vào được kiểm
                  soát và bảo quản theo tiêu chuẩn GSP. Mỗi nguyên liệu sử dụng
                  đều được qua quá trình kiểm tra chất lượng nghiêm ngặt bởi
                  phòng kiểm nghiệm đạt tiêu chuẩn GLP.
                </>
              ) : (
                <>
                  We specialize in manufacturing various types of pharmaceutical
                  products including hard capsules, soft capsules, tablets
                  (film-coated tablets, sugar-coated tablets), and other solid
                  forms (powders, granules).
                  <br />
                  <br /> We always ensure that the input materials are
                  controlled and stored according to GSP standards. Each raw
                  material undergoes rigorous quality testing by a GLP-compliant
                  laboratory.
                </>
              )}
            </p>
          </div>
          <img
            src="/image/factory-2.jpg"
            className="w-full h-full rounded-lg xl:max-h-[58vh] 2xl:max-h-[47vh] object-cover"
          />
        </div>
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-6 pt-[66px]">
          <img
            src="/image/factory-3.jpg"
            className="w-full h-full rounded-lg
            xl:max-h-[44vh] 2xl:max-h-[36vh] object-fill"
          />
          <div className="flex flex-col gap-4">
            <h1 className="md:text-2xl xl:text-3xl uppercase font-bold text-[#00A44E]">
              {t("title4")}
            </h1>
            <p className="md:text-[18px] xl:text-[24px] lg:max-xl:leading-8 xl:leading-10  text-justify">
              {locale === "vi" ? (
                <>
                  Nhờ vào sự đầu tư mạnh mẽ vào nghiên cứu và phát triển, các
                  sản phẩm của chúng tôi luôn đạt được hiệu quả vượt trội và
                  được các đại lý phân phối thuốc uy tín trên toàn quốc tin
                  tưởng.
                </>
              ) : (
                <>
                  Thanks to strong investment in research and development, our
                  products consistently achieve superior effectiveness and are
                  trusted by reputable global pharmaceutical distributors to
                  place orders.
                </>
              )}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:hidden w-full">
        <div className="container">
          <img src="/image/factory-1.jpg" className="my-4  rounded-xl" />
        </div>
        <div className="flex flex-col w-full md:container px-7">
          <p className="text-[18px] text-center text-[#F18200] font-bold pb-2 uppercase">
            {t("title2")}
          </p>
          <p className="text-justify leading-[20px] text-[16px]">
            {locale === "vi" ? (
              <>
                Nhà máy sản xuất dược phẩm Đông Nam đã tuân thủ nghiêm ngặt các
                nguyên tắc trong <strong>tiêu chuẩn GMP – WHO.</strong> Chúng
                tôi đã đầu tư mạnh mẽ vào cơ sở hạ tầng với diện tích lên đến
                hơn <strong>13,000 m2</strong> với đầy đủ các chức năng, bao gồm
                các khu vực quan trọng như kho bảo quản, khu vực xử lý, và hệ
                thống{" "}
                <strong>dây chuyền sản xuất theo công nghệ tự động</strong> tiên
                tiến nhất.
              </>
            ) : (
              <>
                To continuously improve product quality and market position
                worldwide, Đông Nam Pharmaceutical Factory strictly adheres to
                principles in <strong>GMP-WHO standards</strong>. We have
                heavily invested in infrastructure with an area of over{" "}
                <strong>13,000 m2</strong>, including essential areas such as
                storage warehouses, processing zones, and the most{" "}
                <strong>advanced automated production lines</strong>.
              </>
            )}
          </p>
        </div>
      </section>
      <section className="flex flex-col md:hidden w-full ">
        <div className="container">
          <img src="/image/factory-2.jpg" className="my-4  rounded-xl" />
        </div>
        <div className="flex flex-col w-full md:container px-7">
          <p className="text-[18px] text-center text-[#00A44E] font-bold pb-2 uppercase">
            {t("title3")}
          </p>
          <p className="text-justify leading-[20px] text-[16px]">
            {locale === "vi" ? (
              <>
                Chúng tôi chuyên sản xuất các loại sản phẩm dạng{" "}
                <strong>
                  viên nén, viên nang cứng, viên nang mềm, viên nén bao phim và
                  thuốc bột
                </strong>
                . <br />
                <br />
                Chúng tôi đảm bảo nguồn nguyên liệu đầu vào được lựa chọn và
                kiểm soát nghiêm ngặt theo các{" "}
                <strong>tiêu chuẩn quốc tế CACP, GCP, GSP.</strong> Mỗi nguyên
                liệu sử dụng đều được qua quá trình kiểm tra chất lượng nghiêm
                ngặt bởi phòng kiểm nghiệm đạt{" "}
                <strong>tiêu chuẩn GLP của Bộ Y tế</strong>.
              </>
            ) : (
              <>
                We specialize in manufacturing various types of products such as{" "}
                <strong>
                  tablets, hard capsules, soft capsules, film-coated tablets,
                  and powdered medicines
                </strong>
                .
                <br />
                <br /> We ensure that our raw materials are carefully selected
                and strictly controlled according to{" "}
                <strong>
                  international standards such as GACP, GCP, and GSP
                </strong>
                . Each raw material undergoes rigorous quality testing by{" "}
                <strong>
                  GLP-standard laboratories of the Ministry of Health
                </strong>{" "}
                to ensure safety for health.
              </>
            )}
          </p>
        </div>
      </section>
      <section className="flex flex-col md:hidden w-full mb-8 ">
        <div className="container">
          <img src="/image/factory-3.jpg" className="my-4  rounded-xl" />
        </div>
        <div className="flex flex-col w-full md:container px-7">
          <p className="text-[18px] text-center text-[#F18200] font-bold pb-2 uppercase">
            {t("title4")}
          </p>
          <p className="text-justify leading-[20px] text-[16px]">
            {locale === "vi" ? (
              <>
                Nhờ vào sự đầu tư mạnh mẽ vào nghiên cứu và phát triển, các sản
                phẩm của chúng tôi luôn đạt được hiệu quả vượt trội và được các{" "}
                <strong>
                  đại lý phân phối thuốc uy tín trên toàn quốc tin tưởng đặt
                  hàng
                </strong>
                .
              </>
            ) : (
              <>
                Thanks to strong investment in research and development, our
                products consistently achieve superior effectiveness and are
                trusted by{" "}
                <strong>
                  reputable pharmaceutical distributors nationwide to place
                  orders
                </strong>
                .
              </>
            )}
          </p>
        </div>
      </section>
    </main>
  );
}
