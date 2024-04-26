"use client";
import { useTranslations, useLocale } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="relative flex flex-col justify-start items-start md:p-7 px-7 pt-4 bg-[#F18200] text-white">
      <aside className="flex flex-col justify-start items-start">
        <p className="font-bold mt-4 text-white text-center capitalize md:text-2xl xl:text-3xl">
          {locale === "vi"
            ? "Công ty cổ phần sản xuất thương mại dược phẩm đông nam"
            : "Dong Nam Pharmaceutical Trading and Production Joint Stock Company"}
        </p>
        <p className="text-white text-center mt-4 md:text-2xl xl:text-3xl">
          <img
            src="/image/footer-1.png"
            className="w-10 h-10 inline-block mr-2"
          />
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
        <p className="text-white text-center md:text-2xl xl:text-3xl">
          <img
            src="/image/footer-2.png"
            className="w-10 h-10 inline-block mr-2"
          />
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
        <div className="text-white md:text-2xl xl:text-3xl inline    w-full">
          <>
            <img
              src="/image/footer-3.png"
              className="w-10 h-10 inline-block mr-2 "
            />
            <strong>Email:</strong> kinhdoanh@dongnampharma.vn
          </>
          <div className="absolute hidden md:flex flex-row items-center bottom-0 right-10">
            <a
              href="https://web.facebook.com/dongnampharmaceutical"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/facebook.png"
                alt="Facebook-DongNam"
                className="md:w-16 md:h-16 xl:h-24 xl:w-24 2xl:w-32 2xl:h-32"
              />
            </a>
            <img
              src="/image/bocongthuong.png"
              alt="DongNam"
              className="w-auto md:h-40 xl:h-60 2xl:h-80"
            />
          </div>
        </div>
      </aside>
      <div className="md:hidden flex flex-row items-center w-full justify-center ">
        <a
          href="https://web.facebook.com/dongnampharmaceutical"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/image/facebook.png"
            alt="Facebook-DongNam"
            className="w-16 h-16"
          />
        </a>
        <img
          src="/image/bocongthuong.png"
          alt="DongNam"
          className="w-auto h-40"
        />
      </div>
    </footer>
  );
};

export default Footer;
