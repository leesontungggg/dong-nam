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
      <section className="flex flex-col w-full bg-white">
        <img
          src="/image/history.jpg"
          className="md:rounded-lg w-full h-max max-h-screen"
        />
      </section>
      <section className="bg-base-200 md:py-[3em] py-[1em] flex flex-col items-center">
        <div className="w-full center flex-col container">
          <h1 className="uppercase text-center text-[28px] md:text-[37.4px] text-[#00A44E] font-bold">
            {locale === "vi" ? <>LỊCH SỬ HÌNH THÀNH</> : <>OUR STORIES</>}
          </h1>
          <p className="text-[22.6px] leading-[25px] md:leading-9 text-justify md:text-center md:mt-8 mt-4">
            {locale === "vi" ? (
              <>
                Hơn 20 năm với những{" "}
                <strong className="hidden md:inline">
                  bước tiến khoa học đột phá
                </strong>
                <span className="inline md:hidden">
                  bước tiến khoa học đột phá
                </span>
                , hành trình của chúng tôi vẫn chưa kết thúc. Với mỗi ngày trôi
                qua, chúng tôi tận tâm nghiên cứu những phương pháp cải tiến
                giúp thay đổi bức tranh về lĩnh vực chăm sóc sức khỏe.
              </>
            ) : (
              <>
                With over 20 years of{" "}
                <strong className="hidden md:inline">
                  {" "}
                  groundbreaking scientific advancements
                </strong>
                <span className="inline md:hidden">
                  {" "}
                  groundbreaking scientific advancements
                </span>
                , our journey is far from over. With each passing day, we are
                dedicated to researching innovative methods to change the
                landscape of healthcare.
              </>
            )}
          </p>
        </div>
        <div className="flex flex-row-reverse md:flex-col mt-10 md:mt-0 w-full mx-auto 2xl:px-8">
          <div
            className={`flex flex-col md:flex-row md:mt-20 w-full text-justify leading-[14px] lg:leading-[18px] 2xl:leading-[25px] text-[12px] lg:text-[15px] xl:text-[16.6px] 2xl:text-[18.6px] gap-1 md:gap-4 mr-1 justify-start md:pl-1 xl:max-2xl:pl-5 `}
          >
            <p
              className={`border border-black rounded-3xl md:rounded-3xl text-justify content-center md:self-end px-2 py-1 md:px-4 md:py-2 md:max-w-[16vw] 2xl:mr-4 2xl:px-8 max-w-full`}
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
              className={`border border-black rounded-3xl md:rounded-3xl text-justify content-center md:self-end px-2 py-1 md:px-4 md:py-2 md:max-w-[16vw] 2xl:mr-4 2xl:px-8 max-w-full`}
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
              className={`border border-black rounded-3xl md:rounded-3xl text-justify content-center md:self-end px-2 py-1 md:px-2 md:py-2 md:max-w-[16vw] 2xl:mr-4 2xl:px-8 max-w-full`}
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
              className={`border border-black rounded-3xl md:rounded-3xl text-justify content-center md:self-end px-2 py-1 md:px-4 md:py-2 md:max-w-[16vw] 2xl:mr-4 2xl:px-8 max-w-full`}
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
              className={`border border-black rounded-3xl md:rounded-3xl text-justify content-center md:self-end px-2 py-1 md:px-4 md:py-2 md:max-w-[16vw] 2xl:px-8 max-w-full`}
            >
              {locale === "vi" ? (
                <>
                  Nhà{" "}
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
            src="/image/history-arrow.png"
            alt="DongNam-history"
            className="hidden md:inline w-full mx-auto "
          />
          <img
            src="/image/history-arrow-mobile.png"
            alt="DongNam-history"
            className={`md:hidden w-full mx-auto h-full max-w-[115px] ${
              locale === "en" ? "mt-8" : "mt-11"
            }`}
          />
          <div
            className={`flex flex-col md:flex-row w-full text-justify lg:leading-[18px] 2xl:leading-[25px] lg:pr-[210px] xl:pr-[285px] 2xl:pr-[360px] text-[12px] lg:text-[15px] 2xl:text-[18.6px] xl:text-[16.6px] gap-1 md:gap-4 ${
              locale === "en" ? "leading-[12px]" : "leading-[14px]"
            }
            } pl-1`}
          >
            <p
              className={`border border-black rounded-3xl md:rounded-3xl text-justify content-center px-2 py-1 md:self-start md:px-4 md:py-2 md:max-w-[20vw] 2xl:mr-4 max-w-full`}
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
              className={`border border-black rounded-3xl md:rounded-3xl text-justify content-center px-2 py-1 md:self-start md:px-4 md:py-2 md:max-w-[20vw] 2xl:mr-4 2xl:px-6  max-w-full`}
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
              className={`border border-black rounded-3xl md:rounded-3xl text-justify content-center px-2 py-1 md:self-start md:px-4 md:py-2 md:max-w-[20vw] max-w-full `}
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
              className={`border border-black rounded-3xl md:rounded-3xl text-justify content-center px-2 py-1 md:self-start md:px-4 md:py-2 md:max-w-[20vw] 2xl:ml-4 max-w-full`}
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
        <h1 className="uppercase text-[28px] md:text-[37.4px] text-[#F18200] font-bold mt-10">
          {locale === "vi" ? <>Ban giám đốc</> : <>Board of directors</>}
        </h1>
        <div className="w-full flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-16 my-6 md:mt-10 ">
          <div className="flex flex-col items-center">
            <img
              className="w-72 h-72 rounded-full object-cover"
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
