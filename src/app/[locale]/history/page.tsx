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
      <section className="relative bg-white h-fit w-full">
        <img
          src="https://i.postimg.cc/kD3xwk4M/oie-ub-Jk-IMNAaes-Z.jpg"
          className="w-screen h-max  rounded-lg max-h-screen  "
        />
      </section>
      <section className="bg-base-200 py-[3em] px-[2em] md:py-[4em] lg:p-[5em] flex flex-col items-center">
        <div className="w-full center flex-col">
          <h1 className="uppercase text-[37.4px] text-[#00A44E] font-semibold">
            {locale === "vi" ? <>LỊCH SỬ HÌNH THÀNH</> : <>OUR STORIES</>}
          </h1>
          <p className="text-[22.6px] leading-9 text-center mt-8">
            {locale === "vi" ? (
              <>
                Hơn 20 năm với những <strong>bước tiến khoa học đột phá</strong>
                , hành trình của chúng tôi vẫn chưa kết thúc. Với mỗi ngày trôi
                qua, chúng tôi tận tâm nghiên cứu những phương pháp cải tiến
                giúp thay đổi bức tranh về lĩnh vực chăm sóc sức khỏe.
              </>
            ) : (
              <>
                With over 20 years of{" "}
                <strong> groundbreaking scientific advancements</strong>, our
                journey is far from over. With each passing day, we are
                dedicated to researching innovative methods to change the
                landscape of healthcare.
              </>
            )}
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row mt-20 w-full mx-auto text-justify leading-5  items-end justify-evenly">
            <p
              className={`border border-black rounded-full px-5 py-4  text-[16.6px]    ${
                locale === "vi" ? "max-w-[230px]" : "max-w-[240px]"
              }`}
            >
              {locale === "vi" ? (
                <>
                  <strong>Thành lập</strong> Công Ty Cổ Phần Sản Xuất Thương Mại
                  Dược Phẩm Đông Nam.{" "}
                </>
              ) : (
                <>
                  {" "}
                  <strong>Establishment</strong> of Đông Nam Pharmaceutical
                  Company.
                </>
              )}
            </p>

            <p
              className={`border border-black rounded-full px-5 py-4  text-[16.6px] text-justify   ${
                locale === "vi" ? "max-w-[240px]" : "max-w-[258px]"
              }`}
            >
              {locale === "vi" ? (
                <>
                  Nhận{" "}
                  <strong>
                    Cúp Vàng "Thương Hiệu Việt Uy Tín, Chất Lượng"
                  </strong>{" "}
                  do Tạp chí Thương hiệu Việt trao tăng.
                </>
              ) : (
                <>
                  {" "}
                  Received{" "}
                  <strong>
                    the Gold Cup "Prestigious Vietnamese Brand, Quality"
                  </strong>{" "}
                  from Thuong Hieu Viet Magazine.
                </>
              )}
            </p>
            <p
              className={`border border-black rounded-full px-6 py-4  text-[16.6px] text-justify    ${
                locale === "vi" ? "max-w-[300px]" : "max-w-[340px]"
              }`}
            >
              {locale === "vi" ? (
                <>
                  Được trao dấu hiệu{" "}
                  <strong>
                    "Sản Phẩm Vàng Thương Hiệu Việt Hội Nhập WTO"{" "}
                  </strong>{" "}
                  do Liên hiệp các Hội Khoa học & Kỹ thuật Việt Nam và Bộ Khoa
                  học & Công nghệ trao tặng.
                </>
              ) : (
                <>
                  {" "}
                  Awarded the{" "}
                  <strong>
                    "Vietnamese Brand Gold Product entering WTO"
                  </strong>{" "}
                  symbol by the Vietnam Union of Science and Technology
                  Associations and the Ministry of Science and Technology.
                </>
              )}
            </p>
            <p
              className={`border border-black rounded-full px-5 py-4  text-[16.6px] text-justify    ${
                locale === "vi" ? "max-w-[240px]" : "max-w-[240px]"
              }`}
            >
              {locale === "vi" ? (
                <>
                  <strong>Mở rộng quy mô</strong> và thành lập Công Ty Cổ Phần
                  Sản Xuất Thương Mại Dược Phẩm Đông Nam II.
                </>
              ) : (
                <>
                  <strong>Expansion of scale</strong> and establishment of Đông
                  Nam II Pharmaceutical Company.
                </>
              )}
            </p>
            <p
              className={`border border-black rounded-full px-6 py-4  text-[16.6px] text-justify    ${
                locale === "vi" ? "max-w-[260px]" : "max-w-[300px]"
              }`}
            >
              {locale === "vi" ? (
                <>
                  Nhà
                  <strong>
                    Tài trợ cho chương trình chạy bộ thiện nguyện “Run to
                    Future”
                  </strong>{" "}
                  do Liên đoàn Lãnh đạo và Doanh nhân trẻ thế giới tại Việt Nam
                  tổ chức.
                </>
              ) : (
                <>
                  <strong>
                    Sponsor of the Run to Future volunteer running program
                  </strong>{" "}
                  organized by the Junior Chamber International Vietnam.
                </>
              )}
            </p>
          </div>
          <img
            src="https://i.postimg.cc/x0dj1N74/oie-Qt-Lv-Qq-Cnthd-A.png"
            alt="DongNam-history"
            className="w-full mx-auto "
          />
          <div className="flex flex-row w-full mx-auto text-justify leading-5  items-start justify-around   ">
            <p
              className={`border border-black rounded-full px-6 py-4  text-[16.6px] text-justify    ${
                locale === "vi" ? "max-w-[285px]" : "max-w-[300px]"
              }`}
            >
              {locale === "vi" ? (
                <>
                  Nhận{" "}
                  <strong>Cúp Vàng "Sản Phẩm Việt Uy Tín, Chất Lượng"</strong>{" "}
                  do Hội Sở hữu trí tuệ VN Hiệp hội Doanh nghiệp nhỏ và vừa VN
                  trao tặng.
                </>
              ) : (
                <>
                  Received the{" "}
                  <strong>
                    Gold Cup "Prestigious Vietnamese Product, Quality"
                  </strong>{" "}
                  by the Vietnam Intellectual Property Association of Small and
                  Medium Enterprises.
                </>
              )}
            </p>
            <p
              className={`border border-black rounded-full px-7 py-5  text-[16.6px] text-justify    ${
                locale === "vi" ? "max-w-[290px]" : "max-w-[301px]"
              }`}
            >
              {locale === "vi" ? (
                <>
                  Nhận{" "}
                  <strong>
                    Cúp Vàng "Vì sự nghiệp Bảo vệ môi trường Việt Nam"
                  </strong>{" "}
                  do Hội Bảo vệ Thiên nhiên và Môi trường Việt Nam và Bộ Tài
                  nguyên và Môi trường trao tặng.
                </>
              ) : (
                <>
                  <strong>
                    Gold Cup "For the Cause of Environmental Protection in
                    Vietnam"
                  </strong>{" "}
                  from the Ministry of Natural Resources and Environment.
                </>
              )}
            </p>
            <p
              className={`border border-black rounded-full px-6 py-4  text-[16.6px] text-justify     ${
                locale === "vi" ? "max-w-[285px]" : "max-w-[250px]"
              }`}
            >
              {locale === "vi" ? (
                <>
                  Đạt danh hiệu <strong>"Sản phẩm Chất Lượng Cao"</strong> do
                  Tạp chí Thương hiệu & Công Luận trao tặng.
                </>
              ) : (
                <>
                  Awarded the title <strong>"High-Quality Product"</strong> by
                  Thuong Hieu & Cong Luan Magazine.
                </>
              )}
            </p>
            <p
              className={`border border-black rounded-full px-6 py-4  text-[16.6px] text-justify  mr-[190px]  ${
                locale === "vi" ? "max-w-[280px]" : "max-w-[300px]"
              }`}
            >
              {locale === "vi" ? (
                <>
                  Đạt danh hiệu <strong>"Nhãn hiệu nổi tiếng Việt Nam"</strong>{" "}
                  (Well-known Trademark) do Hội Sở Hữu Trí Tuệ Việt Nam trao
                  tặng.
                </>
              ) : (
                <>
                  Awarded the title <strong>"Well-known Trademark"</strong> by
                  the Vietnam Intellectual Property Association.
                </>
              )}
            </p>
          </div>
        </div>
        <h1 className="uppercase text-[37.4px] text-[#F18200] font-semibold mt-10">
          {locale === "vi" ? <>Ban giám đốc</> : <>Board of directors</>}
        </h1>
        <div className="w-full flex flex-row justify-center gap-16 mt-10">
          <div className="flex flex-col items-center">
            <img
              className="w-72 h-72 rounded-full"
              src="/image/director-1.jpg"
            />
            <p className="text-[20.6px] font-bold uppercase mt-4">
              Võ Quân Huy
            </p>
            <p className="text-[16.6px] mt-2 text-center">
              {locale === "vi" ? (
                <>Phó Tổng Giám Đốc</>
              ) : (
                <>Deputy General Director</>
              )}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-72 h-72 rounded-full"
              src="/image/director-2.jpg"
            />
            <p className="text-[20.6px] font-bold uppercase mt-4">Võ Tấn Lộc</p>
            <p className="text-[16.6px] mt-2 text-center capitalize">
              {locale === "vi" ? (
                <>
                  Chủ tịch hội đồng quản trị <br /> Tổng Giám Đốc
                </>
              ) : (
                <>
                  Chairman of the BOD
                  <br />
                  CEO
                </>
              )}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
