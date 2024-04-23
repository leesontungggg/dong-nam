"use client";

import Skeleton from "@/components/skeleton";
import { Context } from "@/services/context";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useContext, useState, useTransition } from "react";
import * as _ from "lodash";
import { CATEGORY } from "@/services/category";

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
      <section className="relative bg-white min-h-screen ">
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
      <div className="w-full h-fit min-h-screen bg-white text-black flex flex-col justify-start items-center">
        <div className="md:p-10 lg:p-20 pb-10">
          <div className="grid grid-cols-5">
            <div className="col-span-1 flex flex-col gap-4">
              <input
                className="w-full rounded-2xl border-2 p-2 border-black"
                placeholder="Nhập tên thuốc"
                // @ts-ignore
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div className="flex flex-col gap-2">
                <h6 className="text-xl font-bold">
                  {locale === "vi" ? "Danh mục" : "Category"}
                </h6>
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
              <div className="flex flex-col gap-2">
                <h6 className="text-xl font-bold">
                  {locale === "vi" ? "Dạng bào chế" : "Formulation"}
                </h6>
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
            <div className="col-span-4 grid grid-cols-3">
              {data.products

                .filter((product: any) =>
                  locale === "vi"
                    ? product.name.toLowerCase().includes(searchText) &&
                      product.categories.includes(categoryFilter) &&
                      product.type.includes(typeFilter)
                    : product.name_en.toLowerCase().includes(searchText) &&
                      product.categories_en.includes(categoryFilter) &&
                      product.type_en.includes(typeFilter)
                )
                .map((product: any) => (
                  <div className="py-6 flex flex-col gap-2 items-center">
                    <a href={`/products/${product.id}`} className="shrink-0 ">
                      <img
                        src={`https://dongnam.up.railway.app/assets/${product.galleries[0]?.directus_files_id}`}
                        alt="DONG-NAM"
                        className="rounded bg-base-200 object-cover w-auto h-40"
                      />
                    </a>
                    <div className="flex flex-col gap-0">
                      <h2 className="text-lg text-center md:text-left">
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
