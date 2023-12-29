"use client";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";

const Navbar = () => {
  const t = useTranslations("navbar");
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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/home">{t("home")}</a>
            </li>
            <li>
              <a href="/about">{t("about")}</a>
            </li>
            <li>
              <a href="/products">{t("products")}</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog">{t("blog")}</a>
            </li>
            <li>
              <a href="/contacts">{t("contacts")}</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl h-24">
          <img className="w-full h-full" src="/logo.svg" alt="DongNam" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8 2xl:gap-16 text-xl">
          <li>
            <a href="/home">{t("home")}</a>
          </li>
          <li>
            <a href="/about">{t("about")}</a>
          </li>
          <li>
            <a href="/products">{t("products")}</a>
          </li>
          {/* <li>
            <details>
              <summary>{t("products")}</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <a href="/blog">{t("blog")}</a>
          </li>
          <li>
            <a href="/contacts">{t("contacts")}</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <select
          name="language"
          id="language"
          onChange={handleSelect}
          defaultValue={locale}
          className="px-2 py-1 rounded-lg bg-gray-200 btn"
        >
          <option value="en">EN </option>
          <option value="vi">VI </option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
