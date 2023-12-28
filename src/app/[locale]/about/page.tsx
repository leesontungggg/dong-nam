"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";
import Button from "@/components/button";
import Accordion from "@/components/accordion";

export default function Root() {
  const t = useTranslations("Index");
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
      className="w-full h-screen bg-orange-500 text-black 
 flex flex-col justify-center items-center"
    >
      <h1 className="text-8xl">{t("title")}</h1>
      <Button text={"Bao Hoang"} />
      <div className="text-white">
        <Accordion
          items={[
            { title: "Lele", description: "lelé1" },
            { title: "Lele2", description: "lelé2" },
          ]}
        />
      </div>
    </div>
  );
}
