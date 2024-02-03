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
        <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-[url('https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23751_16831178817174714.jpg')] bg-cover bg-repeat" />
        <div className="absolute bg-transparent container flex flex-col-reverse gap-20 max-w-screen-xl mx-auto pt-[4em] lg:min-h-screen lg:items-center lg:flex-row left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-6 content-center items-start lg:h-100 lg:w-1/2 xl:w-2/5">
            <h1 className="text-4xl md:text-5xl text-black text-center mx-auto lg:text-left lg:mx-0 load-hidden animate-fade-in">
              {t("title")}
            </h1>
            <p className="text-center lg:text-left lg:w-4/5 load-hidden animate-fade-in animate-delay-200 text-slate-950">
              {t("description")}
            </p>
            <a
              href="#"
              className="ds-btn ds-btn-primary mx-auto lg:mx-0 load-hidden animate-fade-in animate-delay-300 text-white"
            >
              {t("CTA")}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-base-200 py-[3em] px-[2em] md:py-[4em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto">
          <div className="max-w-screen-sm load-hidden animate-fade-in animate-delay-200">
            <h2 className="w-80 mx-auto mb-4 text-3xl text-center md:w-full md:text-4xl lg:text-left lg:ml-0 text-black">
              {t("reason.title")}
            </h2>
            <p className="text-center lg:text-left text-slate-950">
              {t("reason.description")}
            </p>
          </div>

          <div className="flex flex-wrap mt-10 md:mt-20">
            <div className="flex flex-col items-center gap-5 p-5 w-full md:p-3 md:w-1/2 lg:w-1/4 lg:items-start load-hidden animate-slide-up">
              <img
                className="aspect-square object-contain w-full h-[250px] rounded-lg"
                src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23751_16831178817174714.jpg"
                alt="Online Banking"
              />
              <h3 className="text-[1.25em] md:text-[1.75em] text-center lg:text-left text-black">
                {t("reason.reason1.title")}
              </h3>
              <p className="text-center lg:text-left text-slate-950">
                {t("reason.reason1.description")}
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 p-5 w-full md:p-3 md:w-1/2 lg:w-1/4 lg:items-start load-hidden animate-slide-up animate-delay-200">
              <img
                className="aspect-square object-contain w-full h-[250px] rounded-lg"
                src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23751_16831178817174714.jpg"
                alt="Simple Budgeting"
              />
              <h3 className="text-[1.25em] md:text-[1.75em] text-center lg:text-left text-black">
                {t("reason.reason2.title")}
              </h3>
              <p className="text-center lg:text-left text-slate-950">
                {t("reason.reason2.description")}
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 p-5 w-full md:p-3 md:w-1/2 lg:w-1/4 lg:items-start load-hidden animate-slide-up animate-delay-300">
              <img
                className="aspect-square object-contain w-full h-[250px] rounded-lg"
                src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23751_16831178817174714.jpg"
                alt="Fast Onboarding"
              />
              <h3 className="text-[1.25em] md:text-[1.75em] text-center lg:text-left text-black">
                {t("reason.reason3.title")}
              </h3>
              <p className="text-center lg:text-left text-slate-950">
                {t("reason.reason3.description")}
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 p-5 w-full md:p-3 md:w-1/2 lg:w-1/4 lg:items-start load-hidden animate-slide-up animate-delay-400">
              <img
                className="aspect-square object-contain w-full h-[250px] rounded-lg"
                src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23751_16831178817174714.jpg"
                alt="Open API"
              />
              <h3 className="text-[1.25em] md:text-[1.75em] text-center lg:text-left text-black">
                {t("reason.reason4.title")}
              </h3>
              <p className="text-center lg:text-left text-slate-950">
                {t("reason.reason4.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-100 py-[4em] px-[2em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto">
          <h2 className="mx-auto mb-2 text-3xl text-center md:text-4xl lg:text-left lg:mx-0 load-hidden animate-fade-in text-black">
            {t("article.title")}
          </h2>

          <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-8 mt-8 md:mt-10 md:gap-5">
            <div className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-200">
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
            </div>
            <div className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-500">
              <img
                className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23751_16831178817174714.jpg"
                alt="Article thumbnail"
              />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs text-slate-950">By TUNG SON LE</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary text-slate-950">
                  {t("article.article4.title")}
                </h3>
                <p className="text-slate-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
