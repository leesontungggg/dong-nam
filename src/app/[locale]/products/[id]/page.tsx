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

  return (
    <div
      className="w-full min-h-screen bg-white text-black 
 flex flex-col justify-center items-center"
    >
      <div className="p-4 pb-10 w-full">
        <div className="container mx-auto w-full">
          {!!product && (
            <div className="flex flex-col gap-4">
              <h1 className="text-black font-bold text-[22.6px] text-justify sm:text-left sm:mb-6 leading-[22px]  ">
                {locale === "vi" ? product.name : product.name_en}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-16  w-full justify-center">
                <img
                  src={`https://dongnam.up.railway.app/assets/${product.galleries[0]?.directus_files_id}`}
                  alt="DONG-NAM"
                  className="rounded bg-base-200 object-cover w-auto sm:w-1/2 h-80 sm:h-full "
                />
                <img
                  src={`https://dongnam.up.railway.app/assets/${product.galleries[1]?.directus_files_id}`}
                  alt="DONG-NAM"
                  className="rounded bg-base-200 object-cover w-auto sm:w-1/2 h-80 sm:h-full"
                />
              </div>
              <Accordion
                type="single"
                collapsible
                className="w-full max-w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {locale === "vi" ? "Công Dụng" : "Description"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.short_description
                      : product.short_description_en}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    {locale === "vi" ? "Dạng Bào Chế" : "Type"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi" ? product.type : product.type_en}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    {locale === "vi" ? "Cách Dùng" : "Administration"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.administration
                      : product.administration_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    {locale === "vi" ? "Danh Mục" : "Category"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.categories
                      : product.categories_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    {locale === "vi" ? "Thành phần" : "Ingredients"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.ingredients
                      : product.ingredients_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    {locale === "vi" ? "Dược Lực Học" : "Pharmacodynamic"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.pharmacodynamic
                      : product.pharmacodynamic_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    {locale === "vi" ? "Dược Động Học" : "Pharmacokinetic"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.pharmacokinetic
                      : product.pharmacokinetic_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>
                    {locale === "vi" ? "Thận Trọng Khi Sử Dụng" : "Caution"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.precaution
                      : product.precaution_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>
                    {locale === "vi" ? "Chống Chỉ Định" : "Contraindication"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.contraindication
                      : product.contraindication_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger>
                    {locale === "vi" ? "Tác Dụng Phụ" : "Side Effect"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.side_effect
                      : product.side_effect_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                  <AccordionTrigger>
                    {locale === "vi" ? "Liều Dùng" : "Dosage"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi" ? product.dosage : product.dosage_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                  <AccordionTrigger>
                    {locale === "vi"
                      ? "Tương Tác - Tương Kỵ Của Thuốc"
                      : "Drug Interaction"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.drug_interaction
                      : product.drug_interaction_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-13">
                  <AccordionTrigger>
                    {locale === "vi"
                      ? "Bảo Quản & Hạn Sử Dụng"
                      : "Storage Expiry"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.storage_expiry
                      : product.storage_expiry_en}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                  <AccordionTrigger>
                    {locale === "vi" ? "Quy Cách Đóng Gói" : "Specification"}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line">
                    {locale === "vi"
                      ? product.specification
                      : product.specification_en}
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
