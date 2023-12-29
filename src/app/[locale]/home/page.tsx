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
import Carousel from "@/components/carousel"
import ChatBubble from "@/components/chat-bubble";

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
      className="w-full h-screen bg-orange-500 text-black 
 flex flex-col justify-center items-center"
    >
      {/* <h1 className="text-8xl">{t("title")}</h1> */}
      {/* <Button text={"Bao Hoang"} />
      <div className="text-white">
        <Accordion
          items={[
            { title: "Lele", description: "lelé1" },
            { title: "Lele2", description: "lelé2" },
          ]}
        />
      </div> */}
      {/* <Dropdown title="bao" options={[{ title: "Bao" }, { title: "Bao2" }]} /> */}
      {/* <Swaptext
        handleOn={() => {
          console.log("On");
        }}
        handleOff={() => {
          console.log("Off");
        }}
      /> */}
      {/* <Modal text="Bao" title="bao" description="bao" /> */}
      {/* <Hamburger
        handleOn={() => {
          console.log("On");
        }}
        handleOff={() => {
          console.log("Off");
        }}
      /> */}
      {/* <Avatar
        handleAvatar={() => {
          console.log("Hello");
        }}
      /> */}
      {/* <Badge title="hehe" /> */}
      {/* <Card 
        actions="Fight!" 
        items=
        {[{
          url: "https://ih1.redbubble.net/image.2506552510.6595/st,small,507x507-pad,600x600,f8f8f8.u1.jpg",
          alt: "Eula",
          title: "Eula",
          description: "Eula!",
          handleActionClick: () => console.log("1")
        },
        {
          url: "https://ih1.redbubble.net/image.2506552510.6595/st,small,507x507-pad,600x600,f8f8f8.u1.jpg",
          alt: "Eula",
          title: "Eula",
          description: "Eula!",
          handleActionClick: () => console.log("2")
        }]}/> */}
      {/* <Carousel img={[
        {url: "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg", alt:"1"}
      ,
      {url: "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg", alt: "2"},
      {url:"https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg", alt: "3"},
      {url:"https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg", alt: "4"}, {
        url:"https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg", alt: "5" 
      }]}/> */}
      {/* <ChatBubble       customer={[{
        alt: "bao2 ",
        url: "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
        name: "bao2",
        text: "hehe2"
      }]} staff={[{
        alt: "bao ",
        url: "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
        name: "bao",
        text: "hehe"
      },{
        alt: "bao1 ",
        url: "https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
        name: "bao1",
        text: "hehe1"
      }]}
 /> */}
 
    </div>
  );
}
