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
import Breadcrumbs from "@/components/breadcrumbs";
import Link from "@/components/link";
import Menu from "@/components/menu";
import Pagination from "@/components/pagination";
import Alert from "@/components/alert";
import Loading from "@/components/loading";
import Skeleton from "@/components/skeleton";
import Toast from "@/components/toast";
import Select from "@/components/select";
import TextInput from "@/components/text-input";
import TextArea from "@/components/text-area";

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
    <div
      className="w-full h-screen   
 flex flex-col justify-center items-center bg-white"
    >
      {/* <h1 className="text-8xl">{t("title")}</h1> */}
      {/* <Button text={"Bao Hoang"} /> */}

      {/* <Accordion
        className=""
        classNameTitle=""
        classNameDescription=""
        items={[
          { title: "baobao", description: "lelé1" },
          { title: "Lele2", description: "lelé2" },
        ]}
      /> */}

      {/* <Dropdown
        className=""
        title="bao"
        options={[
          { href: "/Bao", text: "Bao" },
          { href: "/Bao2", text: "Bao2" },
        ]}
      /> */}
      {/* <Swaptext
        className=""
        classNameLabel=""
        classNameText=""
        handleOn={() => {
          console.log("On");
        }}
        handleOff={() => {
          console.log("Off");
        }}
      /> */}
      {/* <Modal className="" text="Bao" title="bao" description="bao" /> */}
      {/* <Hamburger
        className="mix-blend-multiply	"
        classNameIcon="mix-blend-difference"
        handleOn={() => {
          console.log("On");
        }}
        handleOff={() => {
          console.log("Off");
        }}
      /> */}
      {/* <Avatar
        className=""
        classNameImg=""
        handleAvatar={() => {
          console.log("Hello");
        }}
      /> */}
      {/* <Badge className="" title="hehe" /> */}
      {/* <Card
        className=""
        actions="Fight!"
        items={[
          {
            url: "https://ih1.redbubble.net/image.2506552510.6595/st,small,507x507-pad,600x600,f8f8f8.u1.jpg",
            alt: "Eula",
            title: "Eula",
            description: "Eula!",
            handleActionClick: () => console.log("1"),
          },
          {
            url: "https://ih1.redbubble.net/image.2506552510.6595/st,small,507x507-pad,600x600,f8f8f8.u1.jpg",
            alt: "Eula",
            title: "Eula",
            description: "Eula!",
            handleActionClick: () => console.log("2"),
          },
        ]}
      /> */}
      {/* <Carousel
        img={[
          {
            url: "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
            alt: "1",
          },
          {
            url: "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
            alt: "2",
          },
          {
            url: "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
            alt: "3",
          },
          {
            url: "https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
            alt: "4",
          },
          {
            url: "https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
            alt: "5",
          },
        ]}
      /> */}
      {/* <ChatBubble
        customer={[
          {
            alt: "bao2 ",
            url: "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
            name: "bao2",
            text: "hehe2",
          },
        ]}
        staff={[
          {
            alt: "bao ",
            url: "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
            name: "bao",
            text: "hehe",
          },
          {
            alt: "bao1 ",
            url: "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
            name: "bao1",
            text: "hehe1",
          },
        ]}
      /> */}
      {/* <Collapse
        className=""
        items={[
          {
            title: "bao",
            description: "bao!",
          },
          {
            title: "bao1",
            description: "bao1!",
          },
        ]}
      /> */}
      {/* <Diff
        items={[
          {
            alt1: "Bao",
            url1: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/Image-Files-Blog-Vector.jpg",
            alt2: "Bao1",
            url2: "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
          },
        ]}
      /> */}
      {/* <Kbd items={["Ctrl", "Alt", "Delete"]} /> */}
      {/* <Stat
        result={{
          title: "Total Page View",
          total: 9000,
          percentage: "200% more than last month",
        }}
      /> */}
      {/* <Table
        head={{ title1: "pro", title2: 20, title3: "hehe" }}
        body={[
          { number: 1, title: "name", description: 2000, note: "bao" },
          { number: 2, title: "name", description: 100, note: "bao" },
          { number: 3, title: "name", description: 100, note: "bao" },
        ]}
      /> */}
      {/* <Timeline
        items={[
          {
            year: 1999,
            description: "Bao",
          },
          {
            year: 2000,
            description: "hehe",
          },
          {
            year: 2004,
            description: "hehe",
          },
          {
            year: 2015,
            description: "hehe",
          },
        ]}
      /> */}
      {/* <Breadcrumbs
        className=""
        items={[
          { name: "bao", href: "/bao" },
          { name: "pao", href: "/pao" },
          { name: "sao", href: "/sao" },
        ]}
      /> */}
      {/* <Link
        className=""
        text="Uida"
        href="/home"
      /> */}
      {/* <Menu
        className=""
        items={[
          { name: "Home", href: "/home" },
          { name: "About", href: "/about" },
          { name: "Contacts", href: "/contacts" },
        ]}
      /> */}
      {/* <Pagination pages={8} /> */}
      {/* <Alert isSuccess={false} text="Bao" /> */}
      {/* <Loading /> */}
      {/* <Skeleton /> */}
      {/* <Toast text="hehe" variant="" /> */}
      {/* <Select
        className=""
        title="what is this?"
        options={["baobao", "wa0wa0", "dwdwdw"]}
        onSelect={(data: any) => console.log(data)}
      /> */}

      {/* <TextInput onChange={(e: any) => console.log(e.target.value)} /> */}
      {/* <TextArea /> */}
    </div>
  );
}
