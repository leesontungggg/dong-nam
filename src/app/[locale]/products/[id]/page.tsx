"use client";

import Skeleton from "@/components/skeleton";
import { Context } from "@/services/context";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useContext, useState, useTransition } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Root() {
  const data = useContext(Context);
  const t = useTranslations("Index");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const productId = pathname.split("/")[2];
  const product =
    data.products && data.products.length > 0
      ? data.products.find((item: any) => item.id == productId)
      : null;

  console.log(product);

  return (
    <div
      className="w-full min-h-screen bg-white text-black 
 flex flex-col justify-center items-center"
    >
      <div className="p-4 pb-10 w-full">
        <div className="container mx-auto w-full">
          {!!product && (
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-black font-medium text-4xl">
                {locale === "vi" ? product.name : product.name_en}
              </h1>
              <img
                src={`https://dongnam.up.railway.app/assets/${product.galleries[0]?.directus_files_id}`}
                alt="DONG-NAM"
                className="rounded bg-base-200 object-cover w-auto h-80"
              />
              <Accordion
                type="single"
                collapsible
                className="w-full max-w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Hướng dẫn sử dụng</AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.administration
                      : product.administration_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Chống chỉ định</AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.contraindication
                      : product.contraindication_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Liều lượng</AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi" ? product.dosage : product.dosage_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Tác dụng phụ</AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.drug_interaction
                      : product.drug_interaction_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Thành phần</AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.ingredients
                      : product.ingredients_en}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* <div
                dangerouslySetInnerHTML={{
                  __html:
                    locale === "vi"
                      ? product.description
                      : product.description_en,
                }}
                className="!text-black"
              ></div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
