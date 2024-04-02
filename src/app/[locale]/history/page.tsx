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
          src="/image/history-hero-bg.jpg"
          className="w-full h-auto rounded-lg"
        />
      </section>
      <section className="bg-base-200 py-[3em] px-[2em] md:py-[4em] lg:p-[5em] flex flex-col items-center">
        <div className="w-full center flex-col">
          <h1 className="uppercase text-3xl text-[#00A44E] font-semibold">
            {locale === "vi" ? <>LỊCH SỬ HÌNH THÀNH</> : <>OUR STORIES</>}
          </h1>
          <p className="text-2xl leading-9 text-center mt-8">
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
        <h1 className="uppercase text-3xl text-[#F18200] font-semibold mt-10">
          {locale === "vi" ? <>Ban giám đốc</> : <>Board of directors</>}
        </h1>
        <div className="w-full flex flex-row justify-center gap-16 mt-10">
          <div className="flex flex-col items-center">
            <img
              className="w-72 h-72 rounded-full"
              src="/image/director-1.jpg"
            />
            <p className="text-2xl mt-4">Võ Quân Huy</p>
            <p className="text-lg mt-2 text-center">
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
            <p className="text-2xl mt-4">Võ Tấn Lộc</p>
            <p className="text-lg mt-2 text-center capitalize">
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
