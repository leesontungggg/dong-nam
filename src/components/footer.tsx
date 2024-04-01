"use client";
import { useTranslations, useLocale } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="relative flex flex-col justify-start items-start p-10 bg-[#F18200] text-white">
      <aside className="flex flex-col justify-start items-start">
        <p className="font-bold mt-4 text-white text-center capitalize text-2xl">
          {locale === "vi"
            ? "Công ty cổ phần sản xuất thương mại dược phẩm đông nam"
            : "Dong Nam Pharmaceutical Trading and Production Joint Stock Company"}
        </p>
        <p className="text-white text-center mt-4 text-lg">
          {locale === "vi" ? (
            <>
              <strong>Trụ sở:</strong> Lô 2A Đường 1A, KCN Tân Tạo, Q.Bình Tân,
              TP.HCM
            </>
          ) : (
            <>
              <strong>Headquarters:</strong> Lot 2A, Street 1A, Tan Tao
              Industrial Park, Binh Tan District, Ho Chi Minh City
            </>
          )}
        </p>
        <p className="text-white text-center text-lg">
          {locale === "vi" ? (
            <>
              <strong>Liên hệ:</strong> (+84 283) 7541 748 - (+84 283) 7541 749
            </>
          ) : (
            <>
              <strong>Contact:</strong> (+84 283) 7541 748 - (+84 283) 754 1749
            </>
          )}
        </p>
        <p className="text-white text-center text-lg">
          <strong>Email:</strong> kinhdoanh@dongnampharma.vn
        </p>
      </aside>
      <div className="absolute bottom-0 right-12 flex flex-row items-center">
        <img src="/image/facebook.png" alt="DongNam" className="w-16 h-16" />
        <img
          src="/image/bocongthuong.png"
          alt="DongNam"
          className="w-auto h-32"
        />
      </div>
    </footer>
  );
};

export default Footer;
