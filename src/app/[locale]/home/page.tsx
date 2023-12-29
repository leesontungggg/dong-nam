"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";
import Button from "@/components/button";
import Accordion from "@/components/accordion";
import Dropdown from "@/components/dropdown";
import Swaptext from "@/components/swap-text";
import Modal from "@/components/modal";
import Hamburger from "@/components/hamburger";
import Avatar from "@/components/avatar";
import Badge from "@/components/badge";

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
      className="w-full min-h-screen bg-orange-500 text-black 
 flex flex-col justify-center items-center"
    >
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.pfizer.com/pfizercom/2023-12/banner_section/SeagenLargeBanner-1920x710.jpg?VersionId=3e_h4jb3kTX2haST4UQ2jApQIiqWMgyi)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">ĐÔNG NAM</h1>
            <p className="mb-5">Công ty sản xuất hàng đầu Việt Nam</p>
            <button className="btn btn-primary !bg-transparent rounded-full border-[#E5873B] border-[2px] hover:border-[#00A259]">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-screen hero flex flex-col justify-center">
        <div className="container flex flex-row w-full gap-8">
          <img
            src="https://media.baodautu.vn/Images/manhcuong/2020/09/10/duoc-ha-tay-dat-cuoc-vao-du-an-nha-may-moi1599749699.jpg"
            alt="Dong Nam"
            className="w-1/2 h-auto rounded-lg"
          />
          <div className="flex flex-col">
            <header className="text-3xl mb-4 height leading-relaxed tracking-wide">
              Luôn thúc đẩy công nghệ tiên tiến nhất
            </header>
            <p className="text-xl leading-relaxed tracking-wide mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <Button
              text="Tìm hiểu thêm"
              className="py-4 px-6 text-xl rounded-full w-fit"
              onClick={() => router.push("/about")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
