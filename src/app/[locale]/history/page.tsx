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
      <h1 className="uppercase text-[22px] md:text-[30px] text-[#00A44E] font-bold text-center w-full h-full pt-4 md:pt-12">
        {locale === "vi" ? <>danh hiệu giải thưởng</> : <>awards</>}
      </h1>
      <div className="w-full hidden md:flex flex-col justify-center gap-10 md:gap-16 my-6 md:mt-10 md:mb-20">
        <div className="flex flex-row items-center w-full place-content-center justify-between md:px-[80px] xl:px-[120px]">
          <div className="flex flex-col items-center w-[23vw]">
            <img
              className="w-72 h-72 rounded-full object-cover"
              src="/image/history-4.png"
            />
            <p className="text-[16.6px] text-center h-[75px] pt-2">
              {locale === "vi" ? (
                <>Đạt danh hiệu "Nhãn hiệu nổi tiếng Việt Nam"</>
              ) : (
                <>Attained the title of "Well-known Trademark"</>
              )}
            </p>
          </div>
          <div className="flex flex-col items-center w-[23vw]">
            <img
              className="w-72 h-72 rounded-full object-cover"
              src="/image/history-3.png"
            />
            <p className="text-[16.6px]  text-center h-[75px] pt-2">
              {locale === "vi" ? (
                <>Giải thưởng "Thương hiệu phát triển bền vững"</>
              ) : (
                <>The award "Sustainable Development Brand"</>
              )}
            </p>
          </div>
          <div className="flex flex-col items-center w-[23vw]">
            <img
              className="w-72 h-72 rounded-full object-cover"
              src="/image/history-5.png"
            />
            <p className="text-[16.6px]  text-center h-[75px] pt-2">
              {locale === "vi" ? (
                <>Dấu hiệu "Sản Phẩm Vàng Thương Hiệu Việt Hội Nhập WTO"</>
              ) : (
                <>
                  The emblem "Golden Product of Vietnamese Brands Integrating
                  into the WTO"
                </>
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center w-full place-content-center justify-between md:px-[80px] xl:px-[120px]">
          <div className="flex flex-col items-center w-[23vw]">
            <img
              className="w-72 h-72 rounded-full object-cover"
              src="/image/history-6.png"
            />
            <p className="text-[16.6px] text-center h-[75px] pt-2">
              {locale === "vi" ? (
                <>Cúp Vàng "Vì sự nghiệp Bảo vệ môi trường Việt Nam"</>
              ) : (
                <>
                  The Golden Cup "For the Cause of Environmental Protection in
                  Vietnam"
                </>
              )}
            </p>
          </div>
          <div className="flex flex-col items-center w-[23vw]">
            <img
              className="w-72 h-72 rounded-full object-cover"
              src="/image/history-2.png"
            />
            <p className="text-[16.6px] text-center h-[75px] pt-2">
              {locale === "vi" ? (
                <>Cúp Vàng "Sản Phẩm Uy Tín, Chất Lượng"</>
              ) : (
                <>The Golden Cup "Trustworthy, Quality Product"</>
              )}
            </p>
          </div>
          <div className="flex flex-col items-center w-[23vw]">
            <img
              className="w-72 h-72 rounded-full object-cover"
              src="/image/history-1.png"
            />
            <p className="text-[16.6px] text-center h-[75px] pt-2">
              {locale === "vi" ? (
                <>Cúp Vàng "Sản Phẩm Việt Uy Tín - Chất Lượng"</>
              ) : (
                <>The Golden Cup "Trusted - Quality Vietnamese Product"</>
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center w-full place-content-center justify-between md:px-[80px] xl:px-[120px]">
          <div className="flex flex-col items-center w-[23vw]">
            <img
              className="w-72 h-72 rounded-full object-cover"
              src="/image/history-7.png"
            />
            <p className="text-[16.6px] text-center h-[75px] pt-2">
              {locale === "vi" ? (
                <>Cúp Vàng "Chất lượng hội nhập WTO"</>
              ) : (
                <>The Golden Cup "The Quality of WTO Integration"</>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex md:hidden flex-col justify-center gap-12 md:gap-16 mt-4 mb-8 md:mt-10 md:mb-20">
        <div className="flex flex-row w-full justify-around items-center">
          <div className="flex flex-col items-center w-[42vw]">
            <img
              className="w-40 h-40 rounded-full object-cover"
              src="/image/history-4.png"
            />
            <p className="text-[16.6px] text-center h-[75px] pt-2">
              {locale === "vi" ? (
                <>Đạt danh hiệu "Nhãn hiệu nổi tiếng Việt Nam"</>
              ) : (
                <>Attained the title of "Well-known Trademark"</>
              )}
            </p>
          </div>
          <div className="flex flex-col items-center w-[42vw]">
            <img
              className="w-40 h-40 rounded-full object-cover"
              src="/image/history-3.png"
            />
            <p className="text-[16.6px]  text-center h-[75px] pt-2">
              {locale === "vi" ? (
                <>Giải thưởng "Thương hiệu phát triển bền vững"</>
              ) : (
                <>The award "Sustainable Development Brand"</>
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full justify-around items-center pt-4">
          <div className="flex flex-col items-center w-[42vw]">
            <img
              className="w-40 h-40 rounded-full object-cover"
              src="/image/history-5.png"
            />
            <p className="text-[16.6px]  text-center h-[75px] pt-4">
              {locale === "vi" ? (
                <>Dấu hiệu "Sản Phẩm Vàng Thương Hiệu Việt Hội Nhập WTO"</>
              ) : (
                <>
                  The emblem "Golden Product of Vietnamese Brands Integrating
                  into the WTO"
                </>
              )}
            </p>
          </div>
          <div className="flex flex-col items-center w-[42vw]">
            <img
              className="w-40 h-40 rounded-full object-cover"
              src="/image/history-6.png"
            />
            <p className="text-[16.6px] text-center h-[75px] pt-4">
              {locale === "vi" ? (
                <>Cúp Vàng "Vì sự nghiệp Bảo vệ môi trường Việt Nam"</>
              ) : (
                <>
                  The Golden Cup "For the Cause of Environmental Protection in
                  Vietnam"
                </>
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full justify-around items-center pt-10">
          <div className="flex flex-col items-center w-[42vw]">
            <img
              className="w-40 h-40 rounded-full object-cover"
              src="/image/history-2.png"
            />
            <p className="text-[16.6px] text-center h-[75px] pt-2">
              {locale === "vi" ? (
                <>Cúp Vàng "Sản Phẩm Uy Tín, Chất Lượng"</>
              ) : (
                <>The Golden Cup "Trustworthy, Quality Product"</>
              )}
            </p>
          </div>
          <div className="flex flex-col items-center w-[42vw]">
            <img
              className="w-40 h-40 rounded-full object-cover"
              src="/image/history-1.png"
            />
            <p className="text-[16.6px] text-center h-[75px] pt-2">
              {locale === "vi" ? (
                <>Cúp Vàng "Sản Phẩm Việt Uy Tín - Chất Lượng"</>
              ) : (
                <>The Golden Cup "Trusted - Quality Vietnamese Product"</>
              )}
            </p>
          </div>
        </div>

        <div className="flex flex-row w-full pl-5 items-center">
          <div className="flex flex-col items-center w-[42vw]">
            <img
              className="w-40 h-40 rounded-full object-cover"
              src="/image/history-7.png"
            />
            <p className="text-[16.6px] text-center h-[75px] pt-2">
              {locale === "vi" ? (
                <>Cúp Vàng "Chất lượng hội nhập WTO"</>
              ) : (
                <>The Golden Cup "The Quality of WTO Integration"</>
              )}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
