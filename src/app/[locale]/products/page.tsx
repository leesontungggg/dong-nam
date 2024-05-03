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

  return (
    <main className="!font-sans">
      <section className="hidden md:block relative bg-white min-h-screen ">
        <div className="absolute top-0 left-0 w-full h-full opacity-100 bg-[url('/image/factory-hero-bg.jpg')] bg-cover bg-repeat bg-cli" />
        <div className="absolute bg-transparent container flex flex-col-reverse gap-20 max-w-screen-xl mx-auto pt-[4em] lg:min-h-screen lg:items-center lg:flex-row left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-6 content-center items-center lg:h-100 lg:w-1/2 xl:w-2/5 bg-white rounded-3xl p-8">
            <h1 className="text-xl md:text-3xl text-[#00A44E] font-bold text-center mx-auto lg:mx-0 load-hidden animate-fade-in">
              {locale === "vi" ? <>SẢN PHẨM</> : <>PRODUCT LIST</>}
            </h1>
            <p className="text-center load-hidden animate-fade-in animate-delay-200 text-slate-950 text-2xl">
              {locale === "vi" ? (
                <>
                  Trang web của chúng tôi hiện trưng bày cả các sản phẩm đã được
                  đăng ký độc quyền bởi các đại lý thuốc lẫn các sản phẩm chưa
                  được đăng ký.{" "}
                  <strong>
                    Quý khách hàng có thể liên hệ trực tiếp với chúng tôi để
                    được tư vấn và nghiên cứu sản phẩm theo yêu cầu riêng của
                    Công ty.
                  </strong>
                </>
              ) : (
                <>
                  Our website currently showcases both exclusive products
                  registered by pharmaceutical agents and products that have not
                  been registered.{" "}
                  <strong>
                    Customers can contact us directly for advice and research on
                    products tailored to the company's specific requirements.
                  </strong>
                </>
              )}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:hidden w-full mb-6">
        <img src="/image/factory-hero-bg.jpg" className="pb-4" />
        <div className="container max-w-screen-xl mx-auto">
          <p className="text-lg leading-6 text-justify">
            {" "}
            {locale === "vi" ? (
              <>
                Trang web của chúng tôi hiện trưng bày cả các sản phẩm đã được
                đăng ký độc quyền bởi các đại lý thuốc lẫn các sản phẩm chưa
                được đăng ký.{" "}
                <strong>
                  Quý khách hàng có thể liên hệ trực tiếp với chúng tôi để được
                  tư vấn và nghiên cứu sản phẩm theo yêu cầu riêng của Công ty
                </strong>
                .
              </>
            ) : (
              <>
                Our website currently showcases both exclusive products
                registered by pharmaceutical agents and products that have not
                been registered.{" "}
                <strong>
                  Customers can contact us directly for advice and research on
                  products tailored to the company's specific requirements.
                </strong>
              </>
            )}
          </p>
        </div>
      </section>
      <div className="w-full h-fit min-h-screen bg-white text-black flex flex-col justify-start items-center  md:px-0 md:mx-0 lg:max-xl:pr-[25px]">
        <div className="md:p-10 xl:p-20 pb-10">
          <div className="md:grid md:grid-cols-5">
            <div className="container md:mx-0 md:px-0 col-span-1 flex flex-col gap-4 lg:max-xl:pr-[20px]">
              <input
                className="w-full lg:max-xl:text-[14px] rounded-2xl border-2 p-2 pl-12 lg:max-xl:pl-8 border-black bg-no-repeat bg-contain bg-[5px] lg:max-xl:bg-[1px]"
                style={{ backgroundImage: "url(/icon-search.png)" }}
                placeholder={`${
                  locale === "vi" ? "Nhập tên thuốc" : "Name of product"
                }`}
                // @ts-ignore
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div className="flex flex-col gap-4 md:gap-4">
                <h6 className="text-center md:text-left text-xl font-bold uppercase text-[#00A44E] md:text-black">
                  {locale === "vi" ? "Danh mục" : "Category"}
                </h6>
                <div className="grid grid-cols-3 md:flex md:flex-col text-[16px] xl:text-[18px] leading-4 xl:leading-6 gap-x-6 md:gap-x-0 gap-y-4 md:gap-y-4 xl:gap-y-6">
                  {Object.keys(groupCategory).map((key) => (
                    <p
                      className={`cursor-pointer ${
                        categoryFilter === key ? "font-bold" : "font-normal"
                      }`}
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
                <h6 className="text-xl font-bold uppercase mt-4">
                  {locale === "vi" ? "Dạng bào chế" : "Formulation"}
                </h6>
                <div className="flex flex-col text-[18px] leading-6 gap-y-6">
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
            <h6 className="md:hidden text-center md:text-left text-xl font-bold uppercase text-[#00A44E] md:text-black mt-4">
              {locale === "vi" ? "sản phẩm" : "products"}
            </h6>
            <div className="col-span-4 grid grid-cols-3 mx-4 md:mx-0 gap-x-4 md:gap-x-0">
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
                  <div className="md:py-6 flex flex-col md:gap-2 items-center">
                    <a href={`/products/${product.id}`} className="shrink-0">
                      <img
                        src={`https://dongnam.up.railway.app/assets/${product.galleries[0]?.directus_files_id}`}
                        alt="DONG-NAM"
                        className="rounded bg-base-200 object-fill md:object-cover w-auto h-40"
                      />
                    </a>
                    <div className="flex flex-col gap-0">
                      <h2 className="text-[16px] md:text-lg ">
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
