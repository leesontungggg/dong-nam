"use client";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";
import { useState } from "react";

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

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className="flex sticky top-0 z-50 w-full h-fit border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto md:container flex max-w-screen-2xl items-center h-14 md:py-2 md:h-fit w-full justify-between   ">
        <div className="mr-4 hidden md:flex flex-1">
          <a className="mr-6 hidden md:flex items-center space-x-2" href="/">
            <img className="w-auto h-20" src="/logo.svg" alt="DongNam" />
          </a>
          <nav className="flex flex-row items-center justify-around text-sm w-full">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground md:text-lg xl:text-2xl"
              href="/"
            >
              {t("home")}
            </a>
            <Menubar className="border-none bg-transparent">
              <MenubarMenu>
                <MenubarTrigger className="font-normal md:text-lg xl:text-2xl">
                  {t("about")}
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <a
                      className="transition-colors hover:text-foreground/80 text-foreground md:text-lg xl:text-2xl"
                      href="/about"
                    >
                      Về Chúng Tôi
                    </a>
                  </MenubarItem>
                  <MenubarItem>
                    <a
                      className="transition-colors hover:text-foreground/80 text-foreground md:text-lg xl:text-2xl"
                      href="/factory"
                    >
                      Nhà Máy Đông Nam
                    </a>
                  </MenubarItem>
                  <MenubarItem>
                    <a
                      className="transition-colors hover:text-foreground/80 text-foreground md:text-lg xl:text-2xl"
                      href="/history"
                    >
                      Lịch Sử Hình Thành
                    </a>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground md:text-lg xl:text-2xl"
              href="/products"
            >
              {t("products")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground md:text-lg xl:text-2xl"
              href="/blog"
            >
              {t("blog")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground md:text-lg xl:text-2xl"
              href="/news"
            >
              {t("news")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground md:text-lg xl:text-2xl"
              href="/career"
            >
              {t("career")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground md:text-lg xl:text-2xl"
              href="/contacts"
            >
              {t("contacts")}
            </a>
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 ml-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden "
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R96la:"
          data-state="closed"
        >
          <div onClick={() => handleToggle()}>
            <svg
              className={`${
                toggle ? "block" : "hidden"
              } swap-off fill-current text-black `}
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
          </div>
          <span className="sr-only">Toggle Menu</span>
        </button>
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
        <div className="flex ml-auto items-center justify-end space-x-2 md:justify-end mr-2">
          <nav className="flex items-center  border-slate-400 border rounded-lg">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>{locale === "vi" ? "VI" : "EN"}</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem onClick={() => handleSelect("vi")}>
                    Tiếng Việt
                  </MenubarItem>
                  <MenubarItem onClick={() => handleSelect("en")}>
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
