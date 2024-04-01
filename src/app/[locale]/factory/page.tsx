"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";

export default function About() {
  const t = useTranslations("hero");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  return (
    <main className="!font-sans">
      <section className="relative bg-white min-h-screen ">
        <div className="absolute top-0 left-0 w-full h-full opacity-100 bg-[url('/image/factory-hero-bg.jpg')] bg-cover bg-repeat bg-cli" />
        <div className="absolute bg-transparent container flex flex-col-reverse gap-20 max-w-screen-xl mx-auto pt-[4em] lg:min-h-screen lg:items-center lg:flex-row left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-6 content-center items-center lg:h-100 lg:w-1/2 xl:w-2/5 bg-white rounded-3xl p-8">
            <h1 className="text-xl md:text-2xl text-[#00A44E] font-bold text-center mx-auto lg:mx-0 load-hidden animate-fade-in">
              {locale === "vi" ? <>NHÀ MÁY ĐÔNG NAM</> : <>DONG NAM FACTORY</>}
            </h1>
            <p className="text-center load-hidden animate-fade-in animate-delay-200 text-slate-950">
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
      <section className="bg-base-200 py-[3em] px-[2em] md:py-[4em] lg:p-[5em] container">
        {locale === "vi" ? (
          <>
            Thành lập từ năm 2001, Nhà máy Dược Phẩm Đông Nam đã trở thành{" "}
            <strong>
              một trong những cơ sở sản xuất dược phẩm đáng tin cậy nhất tại
              Việt Nam.
            </strong>{" "}
            Tự hào về khả năng quản trị sản xuất hàng đầu, nhà máy Đông Nam tập
            trung vào việc cung cấp các{" "}
            <strong>sản phẩm chất lượng và đa dạng.</strong>
          </>
        ) : (
          <>
            Established in 2001, Đông Nam Pharmaceutical Factory has become{" "}
            <strong>
              one of the most reliable pharmaceutical manufacturing facilities
              in Vietnam.
            </strong>{" "}
            Proud of our top-notch manufacturing management, Đông Nam Factory
            focuses on providing <strong>quality and diverse products.</strong>
          </>
        )}
      </section>
      <section className="bg-base-200 py-[3em] px-[2em] md:py-[4em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-8">
          <img
            src="/image/factory-1.jpg"
            className="w-full h-full rounded-lg max-h-80 object-cover"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl uppercase font-bold text-[#F18200]">
              {locale === "vi"
                ? "Quy mô và cơ sở hạ tầng"
                : "Scale and Infrastructure"}
            </h1>
            <p>
              {locale === "vi" ? (
                <>
                  Nhà máy sản xuất dược phẩm Đông Nam đã tuân thủ nghiêm ngặt
                  các nguyên tắc trong <strong>tiêu chuẩn GMP – WHO.</strong>{" "}
                  Chúng tôi đã đầu tư mạnh mẽ vào cơ sở hạ tầng với diện tích
                  lên đến hơn <strong>13,000 m2</strong> với đầy đủ các chức
                  năng, bao gồm các khu vực quan trọng như kho bảo quản, khu vực
                  xử lý, và hệ thống{" "}
                  <strong>dây chuyền sản xuất theo công nghệ tự động</strong>{" "}
                  tiên tiến nhất.
                </>
              ) : (
                <>
                  To continuously improve product quality and market position
                  worldwide, Đông Nam Pharmaceutical Factory strictly adheres to
                  principles in GMP-WHO standards. We have heavily invested in
                  infrastructure with an area of over 13,000 m2, including
                  essential areas such as storage warehouses, processing zones,
                  and the most advanced automated production lines.
                </>
              )}
            </p>
          </div>
        </div>
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-8 mt-32">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl uppercase font-bold text-[#00A44E]">
              {locale === "vi" ? "Chất lượng sản xuất" : "Product Quality"}
            </h1>
            <p>
              {locale === "vi" ? (
                <>
                  Chúng tôi chuyên sản xuất các loại sản phẩm dạng{" "}
                  <strong>
                    viên nén, viên nang cứng, viên nang mềm, viên nén bao phim
                    và thuốc bột
                  </strong>{" "}
                  <br />
                  <br />
                  Chúng tôi đảm bảo nguồn nguyên liệu đầu vào được lựa chọn và
                  kiểm soát nghiêm ngặt theo các{" "}
                  <strong>tiêu chuẩn quốc tế CACP, GCP, GSP.</strong> Mỗi nguyên
                  liệu sử dụng đều được qua quá trình kiểm tra chất lượng nghiêm
                  ngặt bởi phòng kiểm nghiệm đạt{" "}
                  <strong>tiêu chuẩn GLP của Bộ Y tế.</strong>
                </>
              ) : (
                <>
                  We specialize in manufacturing various types of products such
                  as{" "}
                  <strong>
                    tablets, hard capsules, soft capsules, film-coated tablets,
                    and powdered medicines.
                  </strong>
                  <br />
                  <br /> We ensure that our raw materials are carefully selected
                  and strictly controlled according to{" "}
                  <strong>
                    international standards such as GACP, GCP, and GSP.
                  </strong>{" "}
                  Each raw material undergoes rigorous quality testing by
                  <strong>
                    GLP-standard laboratories of the Ministry of Health
                  </strong>{" "}
                  to ensure safety for health.
                </>
              )}
            </p>
          </div>
          <img
            src="/image/factory-2.jpg"
            className="w-full h-full rounded-lg max-h-80 object-cover"
          />
        </div>
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-8 mt-32">
          <img
            src="/image/factory-3.jpg"
            className="w-full h-full rounded-lg max-h-80 object-cover"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl uppercase font-bold text-[#F18200]">
              {locale === "vi"
                ? "Hiệu quả vượt trội"
                : "Superior Effectiveness"}
            </h1>
            <p>
              {locale === "vi" ? (
                <>
                  Nhờ vào sự đầu tư mạnh mẽ vào nghiên cứu và phát triển, các
                  sản phẩm của chúng tôi luôn đạt được hiệu quả vượt trội và
                  được các{" "}
                  <strong>
                    đại lý phân phối thuốc uy tín trên toàn quốc tin tưởng đặt
                    hàng.
                  </strong>
                </>
              ) : (
                <>
                  Thanks to strong investment in research and development, our
                  products consistently achieve superior effectiveness and are
                  trusted by{" "}
                  <strong>
                    reputable pharmaceutical distributors nationwide to place
                    orders.
                  </strong>
                </>
              )}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
