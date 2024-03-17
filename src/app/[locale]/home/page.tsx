"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";

export default function Root() {
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

  return (
    <main className="!font-sans">
      <section className="relative bg-white min-h-screen ">
        <div className="absolute top-0 left-0 w-full h-full opacity-100 bg-[url('/image/hero-bg.jpg')] bg-cover bg-repeat" />
        <div className="absolute bg-transparent container flex flex-col-reverse gap-20 max-w-screen-xl mx-auto pt-[4em] lg:min-h-screen lg:items-center lg:flex-row left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-6 content-center items-center lg:h-100 lg:w-1/2 xl:w-2/5 bg-white rounded-3xl p-8">
            <h1 className="text-xl md:text-2xl text-[#00A44E] font-bold text-center mx-auto lg:mx-0 load-hidden animate-fade-in">
              {t("title")}
            </h1>
            <p
              className="text-center load-hidden animate-fade-in animate-delay-200 text-slate-950"
              // dangerouslySetInnerHTML={{ __html: t("description") }}
            >
              {t("description")}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-base-200 py-[3em] px-[2em] md:py-[4em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-8">
          <img src="/image/sumenh.jpg" className="w-full" />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl uppercase font-bold text-[#F18200]">
              {t("mission.title")}
            </h1>
            <p>{t("mission.description")}</p>
          </div>
        </div>
      </section>

      <section className="bg-base-200 py-[3em] px-[2em] md:py-[4em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto">
          <div className="max-w-screen-sm load-hidden animate-fade-in animate-delay-200">
            <h2 className="w-80 mx-auto mb-4 text-2xl text-center text-[#00A44E] md:w-full md:text-3xl lg:text-left lg:ml-0 font-bold">
              {t("reason.title")}
            </h2>
          </div>

          <div className="mt-2 md:mt-4 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-5 w-full load-hidden animate-slide-up border-[1px] border-black border-solid rounded-t-lg animate-delay-200">
              <img
                className="aspect-square object-cover w-full h-[250px] rounded-lg"
                src="/image/reason-1.jpg"
                alt="Online Banking"
              />
              <h3 className="text-xl text-center lg:text-left text-black font-semibold">
                {t("reason.reason1.title")}
              </h3>
              <p className="text-center lg:text-left text-slate-950 p-4">
                {t("reason.reason1.description")}
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 w-full load-hidden animate-slide-up border-[1px] border-black border-solid rounded-t-lg animate-delay-200">
              <img
                className="aspect-square object-cover w-full h-[250px] rounded-lg"
                src="/image/reason-2.jpg"
                alt="Simple Budgeting"
              />
              <h3 className="text-xl text-center lg:text-left text-black font-semibold">
                {t("reason.reason2.title")}
              </h3>
              <p className="text-center lg:text-left text-slate-950 p-4">
                {t("reason.reason2.description")}
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 w-full load-hidden animate-slide-up border-[1px] border-black border-solid rounded-t-lg animate-delay-300">
              <img
                className="aspect-square object-cover w-full h-[250px] rounded-lg"
                src="/image/reason-3.jpg"
                alt="Fast Onboarding"
              />
              <h3 className="text-xl text-center lg:text-left text-black font-semibold">
                {t("reason.reason3.title")}
              </h3>
              <p className="text-center lg:text-left text-slate-950 p-4">
                {t("reason.reason3.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-200 py-[3em] px-[2em] md:py-[4em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto w-full">
          <div className="max-w-screen-sm load-hidden animate-fade-in animate-delay-200 w-full">
            <h2 className="w-80 mx-auto uppercase mb-4 text-2xl text-center text-[#F18200] md:w-full md:text-3xl lg:text-left lg:ml-0 font-bold">
              {t("highlight.title")}
            </h2>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="rounded-[64px] border-[1px] border-gray-400 p-4 w-full flex-col justify-center items-center">
              <h6 className="text-2xl font-bold text-center">20+</h6>
              <p className="text-center">năm phát triển tại Việt Nam</p>
            </div>

            <div className="rounded-[64px] border-[1px] border-gray-400 p-4 w-full flex-col justify-center items-center">
              <h6 className="text-2xl font-bold text-center">70+</h6>
              <p className="text-center">sản phẩm</p>
            </div>

            <div className="rounded-[64px] border-[1px] border-gray-400 p-4 w-full flex-col justify-center items-center">
              <h6 className="text-2xl font-bold text-center">13,000+</h6>
              <p className="text-center">m2 diện tích nhà máy</p>
            </div>

            <div className="rounded-[64px] border-[1px] border-gray-400 p-4 w-full flex-col justify-center items-center">
              <h6 className="text-2xl font-bold text-center">40+</h6>
              <p className="text-center">đối tác</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-100 py-[4em] px-[2em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto">
          <div className="max-w-screen-sm load-hidden animate-fade-in animate-delay-200 w-full">
            <h2 className="w-80 mx-auto uppercase mb-4 text-2xl text-center text-[#00A44E] md:w-full md:text-3xl lg:text-left lg:ml-0 font-bold">
              {t("article.title")}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-8 md:mt-10 md:gap-5">
            {/* <div className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-200">
              <img
                className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23751_16831178817174714.jpg"
                alt="Article thumbnail"
              />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs text-slate-950">By TUNG SON LE</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary text-slate-950">
                  {t("article.article1.title")}
                </h3>
                <p className="text-slate-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-300">
              <img
                className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23751_16831178817174714.jpg"
                alt="Article thumbnail"
              />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs text-slate-950">By Tung Son Le</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary text-slate-950">
                  {t("article.article2.title")}
                </h3>
                <p className="text-slate-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-400">
              <img
                className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23751_16831178817174714.jpg"
                alt="Article thumbnail"
              />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs text-slate-950">By TUNG SON LE</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary text-slate-950">
                  {t("article.article3.title")}
                </h3>
                <p className="text-slate-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="bg-base-100 py-[4em] px-[2em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto">
          <div className="max-w-screen-sm load-hidden animate-fade-in animate-delay-200 w-full">
            <h2 className="w-80 mx-auto uppercase mb-4 text-2xl text-center text-[#00A44E] md:w-full md:text-3xl lg:text-left lg:ml-0 font-bold">
              {t("blog.title")}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-8 md:mt-10 md:gap-5">
            {/* <div className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-200">
              <img
                className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23751_16831178817174714.jpg"
                alt="Article thumbnail"
              />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs text-slate-950">By TUNG SON LE</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary text-slate-950">
                  {t("article.article1.title")}
                </h3>
                <p className="text-slate-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-300">
              <img
                className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23751_16831178817174714.jpg"
                alt="Article thumbnail"
              />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs text-slate-950">By Tung Son Le</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary text-slate-950">
                  {t("article.article2.title")}
                </h3>
                <p className="text-slate-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-400">
              <img
                className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23751_16831178817174714.jpg"
                alt="Article thumbnail"
              />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs text-slate-950">By TUNG SON LE</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary text-slate-950">
                  {t("article.article3.title")}
                </h3>
                <p className="text-slate-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
