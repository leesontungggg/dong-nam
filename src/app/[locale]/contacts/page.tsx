"use client";

import Button from "@/components/button";
import TextArea from "@/components/text-area";
import TextInput from "@/components/text-input";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";

export default function Root() {
  const t = useTranslations("contacts");
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
    <div className="w-full h-fit bg-white flex flex-col justify-center items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 place-items-center mx-auto">
        <div className="mt-16 h-fit px-4 justify-center w-full  flex flex-col">
          <h1 className="text-black text-4xl font-bold md:px-0 px-4 text-left block">
            {t("title")}
          </h1>
          <div className="w-full md:px-0 px-4">
            <p className="text-black mt-12">{t("description")}</p>
          </div>
          <TextInput
            onChange={(e: any) => console.log(e.target.value)}
            placeholder="Email"
            className="py-4 w-full"
          />
          <TextArea
            onChange={(e: any) => console.log(e.target.value)}
            placeholder="More thoughts"
            className="px-4 py-4 text-base"
          />
          <Button
            className="text-white font-bold px-4 py-2 rounded-lg bg-blue-500 mt-4"
            text="Submit"
          />
        </div>
        <iframe
          className="mt-4 md:mt-0 content-center w-full flex flex-col"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15680.19674298908!2d106.58854878075915!3d10.730689913367156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eeffb47f6e9%3A0xdfb0b5cf3bb6ab62!2sCorporation%20Production%20Trading%20Pharmaceutical%20Southeast!5e0!3m2!1sen!2s!4v1704289046654!5m2!1sen!2s"
          width="680"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
