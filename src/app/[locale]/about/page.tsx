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

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };

  console.log("locale", locale);
  return (
    <main className="!font-sans">
      <section className="relative bg-white min-h-screen ">
        <div className="absolute top-0 left-0 w-full h-full opacity-100 bg-[url('/image/about-hero-bg.jpg')] bg-cover bg-repeat bg-cli" />
        <div className="absolute bg-transparent container flex flex-col-reverse gap-20 max-w-screen-xl mx-auto pt-[4em] lg:min-h-screen lg:items-center lg:flex-row left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-6 content-center items-center lg:h-100 lg:w-1/2 xl:w-2/5 bg-white rounded-3xl p-8">
            <h1 className="text-xl md:text-2xl text-[#00A44E] font-bold text-center mx-auto lg:mx-0 load-hidden animate-fade-in">
              {t("title")}
            </h1>
            <p
              className="text-center load-hidden animate-fade-in animate-delay-200 text-slate-950"
              // dangerouslySetInnerHTML={{ __html: t("description") }}
            >
              {/* {t("description")} */}
              {locale === "vi" ? (
                <>
                  Công ty Dược Phẩm Đông Nam được thành lập từ năm 2001, là đơn
                  vị <strong>tiên phong</strong> sản xuất dược phẩm đạt{" "}
                  <strong>tiêu chuẩn GMP-WHO</strong> tại Việt Nam.
                </>
              ) : (
                <>
                  Dong Nam Pharmaceutical Company was established in 2001 and is
                  a <strong>pioneering</strong> unit in manufacturing
                  pharmaceuticals <strong>meeting GMP- WHO standards</strong> in
                  Vietnam.
                </>
              )}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-base-200 py-[3em] px-[2em] md:py-[4em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-8">
          <img
            src="/image/about-1.jpg"
            className="w-full h-full rounded-lg max-h-80 object-cover"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl uppercase font-bold text-[#F18200]">
              {locale === "vi" ? "Về chúng tôi" : "About us"}
            </h1>
            <p>
              {locale === "vi" ? (
                <>
                  Với{" "}
                  <strong>
                    đội ngũ nhân viên dày dặn kinh nghiệm, chuỗi nhà máy hiện
                    đại có diện tích hơn 13,000 m2
                  </strong>
                  . chúng tôi là một nhà sản xuất dược phẩm không ngừng đầu tư
                  vào công nghệ và quản lý chất lượng để đảm bảo rằng mỗi sản
                  phẩm mang thương hiệu Đông Nam đều đáp ứng được các tiêu chuẩn
                  cao nhất.
                </>
              ) : (
                <>
                  With a team of <strong>experienced staff</strong> and a{" "}
                  <strong>modern factory chain</strong>
                  spanning over <strong>13,000 m2</strong>, we are a leading
                  pharmaceutical manufacturer, continuously investing in
                  technology and quality management to ensure that every Dong
                  Nam branded product meets the highest standards.
                </>
              )}
            </p>
          </div>
        </div>
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-8 mt-32">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl uppercase font-bold text-[#00A44E]">
              {locale === "vi" ? "Tầm nhìn" : "Our vision"}
            </h1>
            <p>
              {locale === "vi" ? (
                <>
                  Tầm nhìn của chúng tôi là{" "}
                  <strong>trở thành thương hiệu hàng đầu Việt Nam</strong> trong
                  lĩnh vực sản xuất dược phẩm, thông qua việc{" "}
                  <strong>thúc đẩy sự tiến bộ và đổi mới trong ngành,</strong>{" "}
                  góp phần nâng cao chất lượng cuộc sống cho người dân trên toàn
                  cầu.
                </>
              ) : (
                <>
                  Our vision is to become <strong>a top brand</strong> in
                  Vietnam's pharmaceutical manufacturing sector, by{" "}
                  <strong>
                    promoting progress and innovation in the industry,
                  </strong>{" "}
                  contributing to improving the quality of life for people
                  globally
                </>
              )}
            </p>
          </div>
          <img
            src="/image/about-2.jpg"
            className="w-full h-full rounded-lg max-h-80 object-cover"
          />
        </div>
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-8 mt-32">
          <img
            src="/image/about-3.jpg"
            className="w-full h-full rounded-lg max-h-80 object-cover"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl uppercase font-bold text-[#F18200]">
              {locale === "vi" ? "Sứ mệnh" : "Our mission"}
            </h1>
            <p>
              {locale === "vi" ? (
                <>
                  Sứ mệnh của chúng tôi không chỉ là{" "}
                  <strong>
                    cung cấp sản phẩm chất lượng với giá cả phải chăng vì sức
                    khỏe người Việt,
                  </strong>{" "}
                  mà còn mở rộng phạm vi tác động để cải thiện sức khỏe và cuộc
                  sống của cộng đồng quốc tế. Chúng tôi tự hào khi được tin
                  tưởng để đồng hành cùng nhiều{" "}
                  <strong>Quý khách hàng từ các quốc gia trong khu vực.</strong>
                </>
              ) : (
                <>
                  Our mission is not only to{" "}
                  <strong>
                    provide quality products at affordable prices for consumers
                    in Vietnam
                  </strong>{" "}
                  but also to expand our impact to improve the health and lives
                  of the international community. We take pride in being trusted
                  to accompany many{" "}
                  <strong>
                    esteemed customers from countries in the region.
                  </strong>
                </>
              )}
            </p>
          </div>
        </div>
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-8 mt-32">
          <div className="flex flex-col gap-4 h-fit">
            <h1 className="text-2xl uppercase font-bold text-[#00A44E]">
              {locale === "vi" ? "Chiến lược" : "Strategy"}
            </h1>
            <p>
              {locale === "vi" ? (
                <>
                  Điểm mạnh của chúng tôi không chỉ nằm ở việc phát triển các
                  sản phẩm thuốc mới, mà còn ở khả năng{" "}
                  <strong>
                    nghiên cứu và chế tạo sản phẩm theo yêu cầu của các Quý đối
                    tác.
                  </strong>{" "}
                  Chúng tôi tự tin về khả năng sản xuất các sản phẩm chất lượng,
                  từ loại viên nén, viên nang cứng, viên nang mềm và viên nén
                  bao phim, đáp ứng mọi nhu cầu trong điều trị và bảo vệ sức
                  khỏe,
                </>
              ) : (
                <>
                  Our strength lies not only in developing new drug products but
                  also in our ability to research and manufacture products
                  <strong>
                    according to the customized requirements of our valued
                    partners.
                  </strong>{" "}
                  We are confident in our ability to produce quality products,
                  from tablets, hard capsules, and soft capsules to film-coated
                  tablets, meeting all needs in treatment and health protection.
                </>
              )}
            </p>
          </div>
          <img
            src="/image/about-4.jpg"
            className="w-full h-full rounded-lg max-h-80 object-cover"
          />
        </div>
      </section>
    </main>
  );
}
