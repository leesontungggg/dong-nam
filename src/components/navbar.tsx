"use client";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = (props: any) => {
  const t = useTranslations("navbar");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  const handleSelect = (lang: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full h-fit border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex max-w-screen-2xl items-center h-14 md:py-2 md:h-fit">
        <div className="mr-4 hidden md:flex flex-1">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <img className="w-auto h-20" src="/logo.svg" alt="DongNam" />
          </a>
          <nav className="flex flex-row items-center justify-around text-sm w-full">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground text-lg"
              href="/home"
            >
              {t("home")}
            </a>
            <Menubar className="border-none bg-transparent">
              <MenubarMenu>
                <MenubarTrigger className="font-normal text-lg">
                  {t("about")}
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <a
                      className="transition-colors hover:text-foreground/80 text-foreground text-lg"
                      href="/about"
                    >
                      Về Chúng Tôi
                    </a>
                  </MenubarItem>
                  <MenubarItem>
                    <a
                      className="transition-colors hover:text-foreground/80 text-foreground text-lg"
                      href="/factory"
                    >
                      Nhà Máy Đông Nam
                    </a>
                  </MenubarItem>
                  <MenubarItem>
                    <a
                      className="transition-colors hover:text-foreground/80 text-foreground text-lg"
                      href="/history"
                    >
                      Lịch Sử Hình Thành
                    </a>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground text-lg"
              href="/products"
            >
              {t("products")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground text-lg"
              href="/blog"
            >
              {t("blog")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground text-lg"
              href="/news"
            >
              {t("news")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground text-lg"
              href="/career"
            >
              {t("career")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground text-lg"
              href="/contacts"
            >
              {t("contacts")}
            </a>
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R96la:"
          data-state="closed"
        >
          <svg
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="flex ml-auto items-center justify-end space-x-2 md:justify-end">
          <nav className="flex items-center">
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
      </div>
    </header>
  );
};

export default Navbar;
