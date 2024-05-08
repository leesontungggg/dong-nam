"use client";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Hamburger from "./hamburger";

const Navbar = (props: any) => {
  const t = useTranslations("navbar");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const [toggle, setToggle] = useState(true);

  const handleSelect = (lang: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };

  const handleToggle = (e: any) => {
    setToggle(!toggle);
    e.preventDefault();
  };

  return (
    <header className="flex sticky top-0 z-50 w-full h-fit border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto md:container flex max-w-screen-2xl items-center h-14 md:py-2 md:h-fit w-full justify-between">
        <div className="mr-4 hidden md:flex flex-1">
          <a className="mr-6 hidden md:flex items-center space-x-2" href="/">
            <img className="w-auto h-20" src="/logo.svg" alt="DongNam" />
          </a>
          <nav className="flex flex-row items-center md:justify-between xl:justify-around  w-full">
            <a
              className="transition-colors hover:text-foreground/80 text-sm text-foreground md:text-[16px] xl:text-lg"
              href="/"
            >
              {t("home")}
            </a>
            <Menubar className="border-none bg-transparent ">
              <MenubarMenu>
                <MenubarTrigger className="font-normal md:text-[16px] xl:text-lg mx-[-16px]">
                  {t("about")}
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <a
                      className="transition-colors hover:text-foreground/80 text-foreground md:text-[16px] xl:text-lg"
                      href="/about"
                    >
                      {locale === "vi" ? <>Về Chúng Tôi</> : <>About Us</>}
                    </a>
                  </MenubarItem>
                  <MenubarItem>
                    <a
                      className="transition-colors hover:text-foreground/80 text-foreground md:text-[16px] xl:text-lg"
                      href="/factory"
                    >
                      {locale === "vi" ? (
                        <>Nhà Máy Đông Nam</>
                      ) : (
                        <>Dong Nam Factory</>
                      )}
                    </a>
                  </MenubarItem>
                  <MenubarItem>
                    <a
                      className="transition-colors hover:text-foreground/80 text-foreground md:text-[16px] xl:text-lg"
                      href="/history"
                    >
                      {locale === "vi" ? <>Lịch Sử Hình Thành</> : <>History</>}
                    </a>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground md:text-[16px] xl:text-lg"
              href="/products"
            >
              {t("products")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground md:text-[16px] xl:text-lg"
              href="/blog"
            >
              {t("blog")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground md:text-md xl:text-lg"
              href="/news"
            >
              {t("news")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground md:text-md xl:text-lg"
              href="/career"
            >
              {t("career")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground md:text-md xl:text-lg"
              href="/contacts"
            >
              {t("contacts")}
            </a>
          </nav>
        </div>
        <div
          className="md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0  "
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R96la:"
          data-state="closed"
        >
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger onClick={handleToggle}>
                <svg
                  className={`${
                    toggle ? "block" : "hidden"
                  } swap-off fill-current text-black bg-transparent `}
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
                <svg
                  className={`${
                    toggle ? "hidden" : "block"
                  } swap-on fill-current text-black`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </MenubarTrigger>
              <MenubarContent
                className="-translate-y-3"
                // style={{ transform: "translate(0px, -20px)" }}
              >
                <MenubarItem>
                  <a
                    className="transition-colors hover:text-foreground/80 text-foreground md:text-md xl:text-lg"
                    href="/"
                  >
                    {t("home")}
                  </a>
                </MenubarItem>
                {/* <MenubarItem>
                  <a
                    className="transition-colors hover:text-foreground/80 text-foreground md:text-md xl:text-lg"
                    href="/about"
                  >
                    {t("about")}
                  </a>
                </MenubarItem> */}
                <Menubar className="border-none bg-transparent ">
                  <MenubarMenu>
                    <MenubarTrigger className="text-[14px] font-normal">
                      {t("about")}
                    </MenubarTrigger>
                    <MenubarContent className="ml-[12em] -mt-12">
                      <MenubarItem>
                        <a
                          className="transition-colors hover:text-foreground/80 text-foreground md:text-[16px] xl:text-lg"
                          href="/about"
                        >
                          {locale === "vi" ? <>Về Chúng Tôi</> : <>About Us</>}
                        </a>
                      </MenubarItem>
                      <MenubarItem>
                        <a
                          className="transition-colors hover:text-foreground/80 text-foreground md:text-[16px] xl:text-lg"
                          href="/factory"
                        >
                          {locale === "vi" ? (
                            <>Nhà Máy Đông Nam</>
                          ) : (
                            <>Dong Nam Factory</>
                          )}
                        </a>
                      </MenubarItem>
                      <MenubarItem>
                        <a
                          className="transition-colors hover:text-foreground/80 text-foreground md:text-[16px] xl:text-lg"
                          href="/history"
                        >
                          {locale === "vi" ? (
                            <>Lịch Sử Hình Thành</>
                          ) : (
                            <>Our History</>
                          )}
                        </a>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
                <MenubarItem>
                  <a
                    className="transition-colors hover:text-foreground/80 text-foreground md:text-md xl:text-lg"
                    href="/products"
                  >
                    {t("products")}
                  </a>
                </MenubarItem>
                <MenubarItem>
                  <a
                    className="transition-colors hover:text-foreground/80 text-foreground md:text-md xl:text-lg"
                    href="/blog"
                  >
                    {t("blog")}
                  </a>
                </MenubarItem>
                <MenubarItem>
                  <a
                    className="transition-colors hover:text-foreground/80 text-foreground md:text-md xl:text-lg"
                    href="/news"
                  >
                    {t("news")}
                  </a>
                </MenubarItem>
                <MenubarItem>
                  <a
                    className="transition-colors hover:text-foreground/80 text-foreground md:text-md xl:text-lg"
                    href="/career"
                  >
                    {t("career")}
                  </a>
                </MenubarItem>
                <MenubarItem>
                  <a
                    className="transition-colors hover:text-foreground/80 text-foreground md:text-md xl:text-lg"
                    href="/contacts"
                  >
                    {t("contacts")}
                  </a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <span className="sr-only">Toggle Menu</span>
        </div>
        <div className=" md:hidden w-full h-full justify-center items-center flex flex-1 ">
          <a href="/">
            <img
              className=""
              src="/logo.svg"
              alt="DongNam"
              width="50"
              height="50"
            />
          </a>
        </div>
        <div className="flex ml-auto items-center justify-end space-x-2 md:justify-end mr-2 md:mr-0">
          <nav className="flex items-center  border-slate-400 border rounded-lg">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="md:text-[16px] xl:text-lg flex justify-center w-[50px] h-full md:w-[6vw]">
                  <MdLanguage size="35" />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem
                    className="md:text-[16px] xl:text-lg"
                    onClick={() => handleSelect("vi")}
                  >
                    Tiếng Việt
                  </MenubarItem>
                  <MenubarItem
                    className="md:text-[16px] xl:text-lg"
                    onClick={() => handleSelect("en")}
                  >
                    English
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
