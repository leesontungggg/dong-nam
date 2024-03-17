"use client";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="flex flex-col justify-start items-start p-10 bg-[#F18200] text-white">
      <aside className="flex flex-col justify-start items-start">
        {/* <img className="w-32 h-32" src="/logo.svg" alt="DongNam" /> */}
        <p className="font-bold mt-4 text-white text-center">{t("company")}</p>
        <p className="text-white text-center">{t("address")}</p>
        <p className="text-white text-center">
          Liên hệ: (+84 283) 7541 748 - (+84 283) 7541 749
        </p>
        <p className="text-white text-center">
          Email: kinhdoanh@dongnampharma.vn
        </p>
        {/* <p className="text-white text-center">
          Copyright © 2023 - All right reserved
        </p> */}
      </aside>
    </footer>
  );
};

export default Footer;
