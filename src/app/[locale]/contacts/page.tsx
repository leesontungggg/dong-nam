"use client";

import Button from "@/components/button";
import TextArea from "@/components/text-area";
import TextInput from "@/components/text-input";
import MenuDisplay from "@/components/ui/MenuDisplay";
import PaginationDemo from "@/components/ui/PaginationDemo";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  phone: string;
  email: string;
  question: string;
};

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

  const form = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    emailjs
      .send("Test dongnam contact", "template_ieecpoa", data, {
        publicKey: "DyLjAx0uOUZol2onx",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert(`${locale === "en" ? "Sent !" : "Đã gửi !"}`);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <section className="flex flex-col md:hidden w-full my-6">
        <div className="container max-w-screen-xl mx-auto">
          <p className="text-lg leading-6 text-justify">
            {t("description1")} <br />
            <br />
            {t("description2")}
            <br />
            <br />
            <strong>{t("contact.title")}</strong>
            <br />
            <br />
            {t("contact.description")}
            <br />
            <br />
            {t("description3")}
          </p>
          <form
            action=""
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full"
          >
            <textarea
              placeholder={`${
                locale === "en" ? "Write your questions" : "Nhập câu hỏi"
              }`}
              className="mt-4 p-2  text-base h-[100px] resize-none border border-black w-full"
              {...register("question")}
            />
            <input
              className="mt-2 border-b pl-2 border-black w-full"
              placeholder={`${locale === "en" ? "Name" : "Họ và tên"}`}
              required
              {...register("name")}
            />
            <input
              type="text"
              className="mt-4 w-full border-b pl-2 border-black"
              placeholder={`${
                locale === "en" ? "Phone number" : "Số điện thoại"
              }`}
              required
              {...register("phone")}
            />
            <input
              className="mt-4 border-b pl-2 w-full border-black"
              placeholder="Email"
              type="email"
              {...register("email")}
            />
            <input
              className="text-white font-bold px-4 py-2 cursor-pointer rounded-lg bg-blue-500 mt-4 w-full"
              type="submit"
              value={`${locale === "en" ? "Submit" : "Gửi"}`}
            />
          </form>
          <div className="sm:w-1/2 w-full">
            <iframe
              className="mt-4 sm:mt-0 content-center w-full  flex flex-col"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15680.19674298908!2d106.58854878075915!3d10.730689913367156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eeffb47f6e9%3A0xdfb0b5cf3bb6ab62!2sCorporation%20Production%20Trading%20Pharmaceutical%20Southeast!5e0!3m2!1sen!2s!4v1704289046654!5m2!1sen!2s"
              width="680"
              height="390"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <div className="hidden w-full h-fit bg-white md:flex flex-col justify-center items-center md:px-16 xl:px-20">
        <div className="place-items-center mx-auto">
          <div className="mt-8 h-fit px-4 justify-center w-full  flex flex-col">
            <div className="flex flex-col">
              <div className="w-full pb-8 text-left">
                <div className="text-[22.6px] pb-6 w-full text-left">
                  {t("description1")}
                </div>
                <div className="text-[22.6px] pb-6">{t("description2")}</div>
                <h2 className="flex flex-col text-xl mx-auto text-left text-[22.6px] py-6 xl:py-8">
                  <div className="font-bold pb-4 text-[22.6px]">
                    {t("contact.title")}
                  </div>
                  <div className="text-[22.6px] flex-wrap w-[420px]">
                    {t("contact.description")}
                  </div>
                </h2>
              </div>
              <div className="flex sm:flex-row flex-col w-full pb-6">
                <div className="flex flex-col sm:w-1/2 w-full sm:pr-8 pr-0  h-max sm:mb-0 mb-3 ">
                  <h1 className=" text-[22.6px] sm:px-0 px-4 text-left block">
                    {t("description3")}
                  </h1>
                  <form
                    action=""
                    ref={form}
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full"
                  >
                    <textarea
                      placeholder={`${
                        locale === "en"
                          ? "Write your questions"
                          : "Nhập câu hỏi"
                      }`}
                      className="mt-4 p-2 w-full text-base h-[100px] resize-none border border-black"
                      {...register("question")}
                    />
                    <input
                      className="mt-8 border-b pl-2 border-black w-full"
                      placeholder={`${locale === "en" ? "Name" : "Họ và tên"}`}
                      required
                      {...register("name")}
                    />
                    <input
                      type="text"
                      className="mt-4 w-full border-b pl-2 border-black"
                      required
                      placeholder={`${
                        locale === "en" ? "Phone number" : "Số điện thoại"
                      }`}
                      {...register("phone")}
                    />
                    <input
                      type="email"
                      className="mt-4 border-b pl-2 w-full border-black"
                      placeholder="Email"
                      {...register("email")}
                    />
                    <input
                      type="submit"
                      value={`${locale === "en" ? "Submit" : "Gửi"}`}
                      className="text-white font-bold px-4 py-2 cursor-pointer w-full rounded-lg bg-blue-500 mt-8"
                    />
                  </form>
                </div>
                <div className=" sm:w-1/2 w-full">
                  <iframe
                    className="mt-4 sm:mt-0 content-center w-full  flex flex-col"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15680.19674298908!2d106.58854878075915!3d10.730689913367156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eeffb47f6e9%3A0xdfb0b5cf3bb6ab62!2sCorporation%20Production%20Trading%20Pharmaceutical%20Southeast!5e0!3m2!1sen!2s!4v1704289046654!5m2!1sen!2s"
                    width="680"
                    height="390"
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
    </div>
  );
}
