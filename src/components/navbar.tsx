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
    // <div className="navbar bg-base-100 text-">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-6"
    //       >
    //         <li>
    //           <a href="/" className="text-xl">
    //             {t("home")}
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/about" className="text-xl">
    //             {t("about")}
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/products" className="text-xl">
    //             {t("products")}
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/blog" className="text-xl">
    //             {t("blog")}
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/career" className="text-xl">
    //             {t("career")}
    //           </a>
    //         </li>
    //         <li>
    //           <a href="/contacts" className="text-xl">
    //             {t("contacts")}
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <a className="btn btn-ghost text-xl h-36 hover:bg-transparent">
    //       <img className="w-full h-full" src="/logo.svg" alt="DongNam" />
    //     </a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1 gap-8 2xl:gap-16 text-2xl !text-black">
    //       <li>
    //         <a
    //           href="/"
    //           className="block px-3 py-5 relative font-primary text-black after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-black hover:after:w-full hover:bg-transparent"
    //         >
    //           {t("home")}
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="/about"
    //           className="block px-3 py-5 relative font-primary text-black after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-black hover:after:w-full hover:bg-transparent"
    //         >
    //           {t("about")}
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="/products"
    //           className="block px-3 py-5 relative font-primary text-black after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-black hover:after:w-full hover:bg-transparent"
    //         >
    //           {t("products")}
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="/blog"
    //           className="block px-3 py-5 relative font-primary text-black after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-black hover:after:w-full hover:bg-transparent"
    //         >
    //           {t("blog")}
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="/career"
    //           className="block px-3 py-5 relative font-primary text-black after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-black hover:after:w-full hover:bg-transparent"
    //         >
    //           {t("career")}
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="/contacts"
    //           className="block px-3 py-5 relative font-primary text-black after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-black hover:after:w-full hover:bg-transparent"
    //         >
    //           {t("contacts")}
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <select
    //       name="language"
    //       id="language"
    //       onChange={handleSelect}
    //       defaultValue={locale}
    //       className="px-2 py-1 rounded-lg bg-gray-200 btn"
    //     >
    //       <option value="en">EN </option>
    //       <option value="vi">VI </option>
    //     </select>
    //   </div>
    // </div>
    <header className="sticky top-0 z-50 w-full h-fit border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex max-w-screen-2xl items-center h-14 md:py-2 md:h-fit">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <img className="w-auto h-20" src="/logo.svg" alt="DongNam" />
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/home"
            >
              {t("home")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/about"
            >
              {t("about")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/products"
            >
              {t("products")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/blog"
            >
              {t("blog")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/news"
            >
              {t("news")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
              href="/career"
            >
              {t("career")}
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground"
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
        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
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
