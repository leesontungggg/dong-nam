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
      <div className="  place-items-center mx-auto">
        <div className="mt-8 h-fit px-4 justify-center w-full  flex flex-col">
          <div className="flex flex-col">
            <div className=" mx-auto  w-fit pb-8">
              <div className="text-2xl pb-6  ">{t("description1")}</div>
              <div className="text-2xl pb-6">{t("description2")}</div>
              <h2 className="flex flex-col text-xl p-10 border border-black rounded-full w-fit mx-auto text-left ">
                <div className="font-bold pb-4">{t("contact.title")}</div>
                <div className=" flex-wrap w-[420px]">
                  {t("contact.description")}
                </div>
              </h2>
            </div>
            <div className="flex sm:flex-row flex-col w-full pb-6">
              <div className="flex flex-col sm:w-1/2 w-full sm:pr-8 pr-0  h-max sm:mb-0 mb-3 ">
                <h1 className="text-2xl sm:px-0 px-4 text-left block">
                  {t("description3")}
                </h1>

                <TextArea
                  onChange={(e: any) => console.log(e.target.value)}
                  placeholder="Write your questions"
                  className="mt-4 p-2  text-base h-[100px] resize-none border border-black"
                />
                <TextInput
                  onChange={(e: any) => console.log(e.target.value)}
                  className="mt-8 border-b pl-2 border-black"
                  placeholder="Name"
                />
                <TextInput
                  onChange={(e: any) => console.log(e.target.value)}
                  className="mt-4 border-b pl-2 border-black"
                  placeholder="Phone number"
                />
                <TextInput
                  onChange={(e: any) => console.log(e.target.value)}
                  className="mt-4 border-b pl-2 border-black"
                  placeholder="Email"
                />
                <Button
                  className="text-white font-bold px-4  rounded-lg bg-blue-500 mt-8"
                  text="Submit"
                />
              </div>
              <div className=" sm:w-1/2 w-full">
                <iframe
                  className="mt-4 sm:mt-0 content-center w-full  flex flex-col"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15680.19674298908!2d106.58854878075915!3d10.730689913367156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eeffb47f6e9%3A0xdfb0b5cf3bb6ab62!2sCorporation%20Production%20Trading%20Pharmaceutical%20Southeast!5e0!3m2!1sen!2s!4v1704289046654!5m2!1sen!2s"
                  width="680"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
