"use client";
import { useTranslations, useLocale } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="relative flex flex-col justify-start items-start md:py-4 md:px-8 px-4 pt-4 bg-[#F18200] text-white">
      <aside className="flex flex-col justify-start items-start">
        <p className="font-bold md:mt-4 text-white text-justify md:text-center capitalize text-[20px] leading-[22px] md:text-2xl xl:text-3xl md:pl-2">
          {locale === "vi"
            ? "Công ty cổ phần sản xuất thương mại dược phẩm đông nam"
            : "Dong Nam Pharmaceutical Trading and Production Joint Stock Company"}
        </p>
        <p
          className={`text-white text-justify md:text-center md:mt-4 text-[14px] ${
            locale === "vi" ? "md:text-2xl" : "md:text-xl lg:max-2xl:pb-3"
          } xl:text-3xl xl:text-[29px]`}
        >
          <img
            src="/image/footer-1.png"
            className="w-8 h-8 xl:h-12 xl:w-12 inline-block md:mr-2"
          />
          {locale === "vi" ? (
            <>
              <strong className="hidden md:inline">Trụ sở:</strong> Lô 2A Đường
              1A, KCN Tân Tạo, Q.Bình Tân, TP.HCM
            </>
          ) : (
            <>
              <strong className="hidden md:inline">Headquarters:</strong> Lot
              2A, Street 1A, Tan Tao Industrial Park, Binh Tan District, Ho Chi
              Minh City
            </>
          )}
        </p>
        <p
          className={`text-white text-justify md:text-center text-[14px]  ${
            locale === "vi" ? "md:text-2xl" : "md:text-xl lg:max-2xl:pb-3"
          } xl:text-3xl xl:text-[29px]`}
        >
          <img
            src="/image/footer-2.png"
            className="w-8 h-8 xl:h-12 xl:w-12 inline-block md:mr-2"
          />
          {locale === "vi" ? (
            <>
              <strong className="hidden md:inline">Liên hệ:</strong> (+84 283)
              7541 748 - (+84 283) 7541 749
            </>
          ) : (
            <>
              <strong className="hidden md:inline">Contact:</strong> (+84 283)
              7541 748 - (+84 283) 754 1749
            </>
          )}
        </p>
        <p className="block md:hidden text-white text-justify md:text-center text-[14px] md:text-2xl xl:text-3xl">
          <img
            src="/image/footer-3.png"
            className="w-8 h-8 inline-block md:mr-2"
          />{" "}
          kinhdoanh@dongnampharma.vn
        </p>
        <div
          className={`text-white ${
            locale === "vi" ? "md:text-2xl" : "md:text-xl"
          } xl:text-3xl xl:text-[29px] inline    w-full`}
        >
          <div className="hidden md:block xl:h-[10vh] 2xl:h-[12vh]">
            <img
              src="/image/footer-3.png"
              className="w-8 h-8 xl:h-12 xl:w-12 inline-block mr-2"
            />
            <strong>Email:</strong> kinhdoanh@dongnampharma.vn
          </div>
          <div className="absolute hidden md:flex flex-row items-center bottom-0 md:right-4 xl:right-16 2xl:right-30">
            <a
              href="https://web.facebook.com/dongnampharmaceutical"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/facebook.png"
                alt="Facebook-DongNam"
                className="md:w-16 md:h-16 xl:h-24 xl:w-24 "
              />
            </a>
            <img
              src="/image/bocongthuong.png"
              alt="DongNam"
              className="w-auto md:h-40 xl:h-60 "
            />
          </div>
        </div>
      </aside>
      <div className="mx-auto md:hidden flex flex-row items-center justify-center">
        <a
          href="https://web.facebook.com/dongnampharmaceutical"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/image/facebook.png"
            alt="Facebook-DongNam"
            className="w-10 h-10"
          />
        </a>
        <img
          src="/image/bocongthuong.png"
          alt="DongNam"
          className="w-20 h-20"
        />
      </div>
    </footer>
  );
};

export default Footer;
