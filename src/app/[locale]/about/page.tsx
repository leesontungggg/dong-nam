"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";

export default function Root() {
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
    <div
      className="w-full bg-white  
 flex flex-col justify-center items-center"
    >
      <div className=" content-center w-full max-w-6xl">
        <h1 className="text-black text-4xl mt-16 font-bold md:px-0 px-4 text-left block">
          {t("title")}
        </h1>
        <div className="w-full md:px-0 px-4 ">
          <p className="mt-8 text-black">{t("description")}</p>
          <h3 className="text-black mt-8 font-bold text-xl">
            {t("pros.article1.title")}
          </h3>
          <p className="mt-2 text-black">{t("pros.article1.description")}</p>
          <h3 className="text-black mt-8 font-bold text-xl">
            {t("pros.article2.title")}
          </h3>
          <p className="mt-2 text-black">{t("pros.article2.description")}</p>
        </div>
      </div>
    </div>
  );
}
