"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";
import Button from "@/components/button";
import Accordion from "@/components/accordion";
import Dropdown from "@/components/dropdown";
import Swaptext from "@/components/swap-text";
import Modal from "@/components/modal";
import Hamburger from "@/components/hamburger";
import Avatar from "@/components/avatar";
import Badge from "@/components/badge";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import ChatBubble from "@/components/chat-bubble";
import Collapse from "@/components/collapse";
import Diff from "@/components/diff";
import Kbd from "@/components/kbd";
import Stat from "@/components/stat";
import Table from "@/components/table";
import Timeline from "@/components/timeline";

export default function Root() {
  const t = useTranslations("Index");
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
    <main>
      <section className="bg-white min-h-screen px-[2em] bg-hero-mobile bg-[80%_-30vh] bg-cover bg-no-repeat lg:px-[5em] lg:bg-hero-desktop lg:bg-[40vw_-28vh]">
        <div className="container flex flex-col-reverse gap-20 max-w-screen-xl mx-auto pt-[4em] lg:min-h-screen lg:items-center lg:flex-row">
          <div className="flex flex-col gap-6 content-center items-start lg:h-100 lg:w-1/2 xl:w-2/5">
            <h1 className="text-4xl md:text-5xl text-center mx-auto lg:text-left lg:mx-0 load-hidden animate-fade-in">
              Next generation digital banking
            </h1>
            <p className="text-center lg:text-left lg:w-4/5 load-hidden animate-fade-in animate-delay-200">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <a
              href="#"
              className="ds-btn ds-btn-primary mx-auto lg:mx-0 load-hidden animate-fade-in animate-delay-300"
            >
              Request Invite
            </a>
          </div>

          <div className="relative overflow-hidden h-[50vh] md:h-[60vh] lg:static lg:h-auto">
            <div className="absolute grid grid-cols-3 grid-rows-4 gap-5 bottom-0 lg:w-1/2 lg:right-0 lg:bottom-[unset] lg:top-2/4 lg:translate-y-[-40%] lg:translate-x-[7vw] lg:scale-60 xl:max-w-3/5 xl:grid-cols-[repeat(auto-fit,_minmax(150px,1fr))]">
              <img
                className="w-[300px] object-contain row-start-2 row-span-2 load-hidden animate-slide-up"
                src="./src/img/phone-mockup-1.png"
                alt=""
              />
              <img
                className="w-[300px] object-contain col-start-2 row-span-2 load-hidden animate-slide-up animate-delay-200"
                src="./src/img/phone-mockup-2.png"
                alt=""
              />
              <img
                className="w-[300px] object-contain row-start-3 row-span-2 load-hidden animate-slide-up animate-delay-300"
                src="./src/img/phone-mockup-3.png"
                alt=""
              />
              <img
                className="w-[300px] object-contain row-start-2 row-span-2 load-hidden animate-slide-up animate-delay-400"
                src="./src/img/phone-mockup-4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-200 py-[3em] px-[2em] md:py-[4em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto">
          <div className="max-w-screen-sm load-hidden animate-fade-in animate-delay-200">
            <h2 className="w-80 mx-auto mb-4 text-3xl text-center md:w-full md:text-4xl lg:text-left lg:ml-0">
              Why choose Easybank?
            </h2>
            <p className="text-center lg:text-left">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>

          <div className="flex flex-wrap mt-10 md:mt-20">
            <div className="flex flex-col items-center gap-5 p-5 w-full md:p-3 md:w-1/2 lg:w-1/4 lg:items-start load-hidden animate-slide-up">
              <img
                className="aspect-square object-contain w-16"
                src="./src/img/icon-online.svg"
                alt="Online Banking"
              />
              <h3 className="text-[1.25em] md:text-[1.75em] text-center lg:text-left">
                Online Banking
              </h3>
              <p className="text-center lg:text-left">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 p-5 w-full md:p-3 md:w-1/2 lg:w-1/4 lg:items-start load-hidden animate-slide-up animate-delay-200">
              <img
                className="aspect-square object-contain w-16"
                src="./src/img/icon-budgeting.svg"
                alt="Simple Budgeting"
              />
              <h3 className="text-[1.25em] md:text-[1.75em] text-center lg:text-left">
                Simple Budgeting
              </h3>
              <p className="text-center lg:text-left">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 p-5 w-full md:p-3 md:w-1/2 lg:w-1/4 lg:items-start load-hidden animate-slide-up animate-delay-300">
              <img
                className="aspect-square object-contain w-16"
                src="./src/img/icon-onboarding.svg"
                alt="Fast Onboarding"
              />
              <h3 className="text-[1.25em] md:text-[1.75em] text-center lg:text-left">
                Fast Onboarding
              </h3>
              <p className="text-center lg:text-left">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 p-5 w-full md:p-3 md:w-1/2 lg:w-1/4 lg:items-start load-hidden animate-slide-up animate-delay-400">
              <img
                className="aspect-square object-contain w-16"
                src="./src/img/icon-api.svg"
                alt="Open API"
              />
              <h3 className="text-[1.25em] md:text-[1.75em] text-center lg:text-left">
                Open API
              </h3>
              <p className="text-center lg:text-left">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-100 py-[4em] px-[2em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto">
          <h2 className="mx-auto mb-2 text-3xl text-center md:text-4xl lg:text-left lg:mx-0 load-hidden animate-fade-in">
            Latest Articles
          </h2>

          <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-8 mt-8 md:mt-10 md:gap-5">
            <div className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-200">
              <img
                className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="./src/img/image-currency.jpg"
                alt="Article thumbnail"
              />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs">By Claire Robinson</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary">
                  Receive money in any currency with no fees
                </h3>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-300">
              <img
                className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="./src/img/image-restaurant.jpg"
                alt="Article thumbnail"
              />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs">By Wilson Hutton</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary">
                  Treat yourself without worrying about money
                </h3>
                <p>
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-400">
              <img
                className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="./src/img/image-plane.jpg"
                alt="Article thumbnail"
              />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs">By Wilson Hutton</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary">
                  Take your Easybank card wherever you go
                </h3>
                <p>
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                </p>
              </div>
            </div>
            <div className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-500">
              <img
                className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="./src/img/image-confetti.jpg"
                alt="Article thumbnail"
              />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs">By Wilson Hutton</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary">
                  Our invite-only Beta accounts are now live!
                </h3>
                <p>
                  Our invite-only Beta accounts are now live! After a lot of
                  hard work by the whole team, we’re excited to launch our
                  closed beta. It’s easy to request an invite through the site
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
