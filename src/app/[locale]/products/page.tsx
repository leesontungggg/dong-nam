"use client";

import Skeleton from "@/components/skeleton";
import { Context } from "@/services/context";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useContext, useState, useTransition } from "react";
import * as _ from "lodash";
import { CATEGORY } from "@/services/category";
import { _formatString } from "@/lib/utils";

export default function Root() {
  const data = useContext(Context);
  const t = useTranslations("Index");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  if (data.products.length === 0) {
    return (
      <div
        className="w-full h-screen bg-white text-black 
 flex flex-col justify-center items-center"
      >
        <div className="p-4 pb-10">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 w-fit min-w-screen mt-40 pt-40">
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const groupCategory = _.groupBy(data.products, (item: any) =>
    locale === "vi" ? item.categories : item.categories_en
  );

  const groupType = _.groupBy(data.products, (item: any) =>
    locale === "vi" ? item.type : item.type_en
  );

  console.log(Object.keys(groupType));

  return (
    <main className="!font-sans">
      <div className="w-full h-fit min-h-screen bg-white text-black flex flex-col justify-start items-center md:px-4 md:pt-4">
        <div className="md:p-2 md:pt-6 xl:pt-10 xl:p-4 pb-10">
          <div className="md:grid md:grid-cols-4">
            <div className="container md:mx-0 md:px-0 col-span-1 flex flex-col gap-4 lg:max-xl:pr-[20px]">
              <input
                className="w-full lg:max-xl:text-[14px] rounded-2xl border-2 p-2 pl-12 lg:max-xl:pl-10 border-black bg-no-repeat font-normal bg-contain bg-[5px] lg:max-xl:bg-[1px]"
                style={{ backgroundImage: "url(/icon-search.png)" }}
                placeholder={`${
                  locale === "vi" ? "Nhập tên thuốc" : "Insert product name"
                }`}
                // @ts-ignore
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div className="flex flex-col gap-4 md:gap-4">
                <h6 className="text-center md:text-left text-[18px] md:text-[20px] font-bold uppercase text-[#00A44E] md:text-black">
                  {locale === "vi" ? "Danh mục" : "Category"}
                </h6>
                <div className="grid grid-cols-3 md:flex md:flex-col text-[16px]  leading-4 md:leading-5 xl:leading-6 gap-x-2 md:gap-x-0 gap-y-2 md:gap-y-4 xl:gap-y-6">
                  {Object.keys(groupCategory).map((key) => (
                    <p
                      className={`cursor-pointer ${
                        categoryFilter === key ? "font-bold" : "font-normal"
                      } border md:border-0 border-black md:border-none rounded-3xl md:rounded-none py-1 px-[5px] md:py-0 md:px-0 flex items-center justify-center md:items-normal md:justify-normal text-center md:text-left ${
                        locale === "vi" ? "text-[13px]" : "text-[12px]"
                      } md:text-[18px]`}
                      onClick={() =>
                        categoryFilter === key
                          ? setCategoryFilter("")
                          : setCategoryFilter(key)
                      }
                    >
                      {key}
                    </p>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex flex-col gap-4">
                <h6 className="text-[18px] md:text-[20px] font-bold uppercase mt-4">
                  {locale === "vi" ? "Dạng bào chế" : "Formulation"}
                </h6>
                <div className="flex flex-col text-[16px] md:text-[18px] leading-6 gap-y-6">
                  {Object.keys(groupType).map((key) => (
                    <p
                      className={`cursor-pointer ${
                        typeFilter === key ? "font-bold" : "font-normal"
                      }`}
                      onClick={() =>
                        typeFilter === key
                          ? setTypeFilter("")
                          : setTypeFilter(key)
                      }
                    >
                      {key}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <h6 className="md:hidden text-center md:text-left text-[18px] md:text-[20px] font-bold uppercase text-[#00A44E] md:text-black mt-4">
              {locale === "vi" ? "sản phẩm" : "products"}
            </h6>
            <div className="col-span-3 grid grid-cols-3 mx-4 md:ml-4 gap-x-4 md:gap-x-4 xl:gap-x-8 2xl:gap-x-12">
              {data.products

                .filter((product: any) =>
                  locale === "vi"
                    ? _formatString(product.name)
                        .toLowerCase()
                        .includes(searchText) &&
                      product.categories.includes(categoryFilter) &&
                      product.type.includes(typeFilter)
                    : _formatString(product.name_en)
                        .toLowerCase()
                        .includes(searchText) &&
                      product.categories_en.includes(categoryFilter) &&
                      product.type_en.includes(typeFilter)
                )
                .map((product: any) => (
                  <div className="md:pb-6 flex flex-col md:gap-2 items-center w-full h-full">
                    <a
                      href={`/products/${product.id}`}
                      className="shrink-0 flex w-full "
                    >
                      <img
                        src={`https://dongnam.up.railway.app/assets/${product.galleries[0]?.directus_files_id}`}
                        alt="DONG-NAM"
                        className="rounded bg-base-200 object-cover md:object-cover w-full h-[12vh] md:h-[22vh] 2xl:h-[24vh]"
                      />
                    </a>
                    <div className="flex flex-col gap-0">
                      <h2 className="text-[16px] md:text-[18px] md:max-w-[21vw] ">
                        <a
                          className="hover:underline text-black"
                          href={`/products/${product.id}`}
                        >
                          {locale === "vi" ? product.name : product.name_en}
                        </a>
                      </h2>
                      {/* <h2 className="text-lg text-center md:text-left">
                        <a
                          className="hover:underline text-black"
                          href={`/products/${product.id}`}
                        >
                          {locale === "vi"
                            ? product.categories
                            : product.categories_en}
                        </a>
                      </h2> */}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
