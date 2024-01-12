"use client";

import Skeleton from "@/components/skeleton";
import { Context } from "@/services/context";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useContext, useState, useTransition } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CustomParagraph = ({ children }: any) => (
  <p className="testClass">{children}</p>
);

export default function Root() {
  const items = useContext(Context);
  const t = useTranslations("Index");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const productId = pathname.split("/")[2];
  console.log("productId", productId);
  console.log("items", items);
  const product =
    items && items.length > 0
      ? items.find((item: any) => item.id == productId)
      : null;

  console.log("product", product);

  return (
    <div
      className="w-full min-h-screen bg-white text-black 
 flex flex-col justify-center items-center"
    >
      <div className="p-4 pb-10">
        <div className="container mx-auto">
          {!!product && (
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-black font-medium text-4xl">
                {product.name}
              </h1>
              <img
                src={`https://dongnam.up.railway.app/assets/${product.galleries[0].directus_files_id}`}
                alt="DONG-NAM"
                className="rounded bg-base-200 object-cover w-auto h-80"
              />
              {/* <Markdown className={`!text-black`} remarkPlugins={[remarkGfm]}>
                {product.description}
              </Markdown> */}
              <div
                dangerouslySetInnerHTML={{ __html: product.description }}
                className="!text-black"
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
