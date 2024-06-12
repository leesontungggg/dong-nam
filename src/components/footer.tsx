"use client";
import { useTranslations, useLocale } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="relative flex flex-col justify-start items-start md:py-4 md:px-8 px-4 pt-4 bg-[#F18200] text-white">
      <aside className="flex flex-col justify-start items-start">
        <p className="font-extrabold md:mt-4 text-white  md:text-center capitalize text-[18px] leading-5 md:leading-[22px] md:text-[24px] xl:text-2xl md:pl-2 pb-3">
          {locale === "vi"
            ? "Công ty cổ phần sản xuất thương mại dược phẩm đông nam"
            : "Dong Nam Manufacturing Trading Pharmaceutical Corporation"}
        </p>
        <div
          className={`text-white text-justify md:items-center md:text-center md:mt-2 text-[13px] -ml-2 mb-2 md:mb-0 ${
            locale === "vi" ? "md:text-xl" : "md:text-xl lg:max-2xl:pb-0"
          } xl:text-2xl flex flex-row`}
        >
          <img
            src="/image/footer-1.png"
            className="w-10 h-10 md:w-14 md:h-14 xl:h-16 xl:w-16 inline-block md:pr-1"
          />
          <p>
            {locale === "vi" ? (
              <>
                <span className="font-bold hidden md:inline">Trụ sở: </span>
                Lô 2A Đường 1A, KCN Tân Tạo, Q.Bình Tân, TP.HCM
              </>
            ) : (
              <>
                <span className="font-bold hidden md:inline">
                  Headquarters:{" "}
                </span>{" "}
                Lot 2A, Street 1A, Tan Tao Industrial Park, Binh Tan District,
                Ho Chi Minh City
              </>
            )}
          </p>
        </div>
        <div
          className={`text-white md:text-center text-[13px] -ml-2 mb-2  md:items-center ${
            locale === "vi" ? "md:text-xl" : "md:text-xl lg:max-2xl:pb-0"
          } xl:text-2xl flex flex-row`}
        >
          <img
            src="/image/footer-2.png"
            className="w-10 h-10 md:w-14 md:h-14 xl:h-16 xl:w-16 inline-block md:pr-1"
          />
          <p>
            {locale === "vi" ? (
              <>
                <strong className="hidden md:inline">Hotline:</strong> 0902 327
                775 - (+84 283) 7541 748 -<br className="block md:hidden" />{" "}
                (+84 283) 7541 749
              </>
            ) : (
              <>
                <strong className="hidden md:inline">Hotline:</strong> 0902 327
                775 - (+84 283) 7541 748 -<br className="block md:hidden" />{" "}
                (+84 283) 754 1749
              </>
            )}
          </p>
        </div>
        <p className="block md:hidden text-white text-justify md:text-center items-center text-[13px] md:text-2xl xl:text-3xl -ml-2 mb-6">
          <img
            src="/image/footer-3.png"
            className="w-8 h-8 inline-block ml-1 md:mr-1"
          />{" "}
          kinhdoanh@dongnampharma.vn
        </p>
        <div
          className={`text-white ${
            locale === "vi" ? "md:text-xl" : "md:text-xl"
          } xl:text-2xl inline w-full`}
        >
          <div className="hidden md:block xl:h-[10vh] 2xl:h-[12vh]">
            <img
              src="/image/footer-3.png"
              className="w-10 h-10 xl:h-12 xl:w-12 inline-block lg:max-xl lg:max-xl:mr-2 xl:mr-2"
            />
            <strong>Email:</strong> kinhdoanh@dongnampharma.vn
          </div>
          <div className="absolute flex flex-row items-center bottom-1 md:bottom-0 right-2 md:right-4 xl:right-16 2xl:right-30">
            <a
              href="https://web.facebook.com/dongnampharmaceutical"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <img
                src="/image/facebook.png"
                alt="Facebook-DongNam"
                className="md:w-14 md:h-14 xl:h-16 xl:w-16 "
              />
            </a>
            <img
              src="/image/bocongthuong.png"
              alt="DongNam"
              className="w-[85px] h-[85px] md:w-[120px] md:h-[120px] xl:w-[160px] xl:h-[160px]"
            />
          </div>
        </div>
      </aside>
      {/* <div className="mx-auto md:hidden flex flex-row items-center justify-center">
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
      </div> */}
    </footer>
  );
};

export default Footer;
