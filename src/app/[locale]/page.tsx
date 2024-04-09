"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useContext, useTransition } from "react";
import { Context } from "@/services/context";

export default function Root() {
  const t = useTranslations("hero");
  const data = useContext(Context);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  console.log(data);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };

  return (
    <main className="!font-sans">
      <section className="relative bg-white min-h-screen ">
        <div className="absolute top-0 left-0 w-full h-full opacity-100 bg-[url('/image/hero-bg.jpg')] bg-cover bg-repeat" />
        <div className="absolute bg-transparent container flex flex-col-reverse gap-20 max-w-screen-xl mx-auto pt-[4em] lg:min-h-screen lg:items-center lg:flex-row left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="flex flex-col gap-6 content-center items-center lg:w-1/2 bg-white rounded-3xl p-8">
            <h1 className="text-3xl text-[#00A44E] font-bold text-center mx-auto lg:mx-0 load-hidden animate-fade-in">
              {t("title")}
            </h1>
            <p className="text-center load-hidden animate-fade-in animate-delay-200 text-slate-950 text-2xl leading-10">
              {locale === "vi" ? (
                <>
                  Với hơn 20 năm cung cấp dược phẩm đạt tiêu chuẩn quốc tế
                  CMP-WHO, Dược phẩm Đông Nam{" "}
                  <strong>
                    sản xuất và phân phối độc quyền thuốc kê đơn và không kê đơn
                  </strong>{" "}
                  chất lượng cao với giá thành tốt cho các đại lý phân phối, cửa
                  hàng bản lẻ lớn tại Việt Nam và các quốc gia lân cận.
                </>
              ) : (
                <>
                  With over two decades of providing internationally
                  standardized pharmaceuticals, Dong Nam Pharmaceuticals{" "}
                  <strong>
                    manufactures high-quality prescription and over-the- counter
                    medications
                  </strong>{" "}
                  at competitive prices for distributors and major retail
                  outlets in Vietnam and around the world.
                </>
              )}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-base-200 py-[3em] px-[2em] md:py-[4em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto grid grid-cols-2 gap-8">
          <img src="/image/sumenh.jpg" className="w-full" />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl uppercase font-bold text-[#F18200]">
              {t("mission.title")}
            </h1>
            <p className="text-xl leading-10">
              {locale === "vi" ? (
                <>
                  Với sứ mệnh{" "}
                  <strong>
                    'Đồng hành cùng người tiêu dùng trên hành trình sức khỏe
                    toàn diện'
                  </strong>
                  , chúng tôi có đa dạng danh mục sản phẩm thuốc đáp ứng các nhu
                  cầu của bệnh nhân trong các lĩnh vực giảm đau hạ sốt, dạ dày -
                  đường ruột, gan - mật, tim mạch... Điểm mạnh của chúng tôi
                  không chỉ nằm ở việc phát triển các sản phẩm thuốc mới, mà còn
                  ở khả năng{" "}
                  <strong>
                    {" "}
                    nghiên cứu và chế tạo sản phẩm độc quyền theo yêu cầu của
                    các Quý đối tác.
                  </strong>
                </>
              ) : (
                <>
                  With a mission to{" "}
                  <strong>
                    "accompany consumers on the journey to comprehensive
                    health,"
                  </strong>{" "}
                  we offer a diverse portfolio of medicines to meet patient
                  needs across various areas, such as pain relief, digestive
                  health, liver function, cardiovascular health, and more. Our
                  strength lies not only in developing new drug products but
                  also in our ability to
                  <strong>
                    {" "}
                    research products tailored to the specific requirements of
                    our esteemed partners.
                  </strong>
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-base-200 py-[3em] px-[2em] md:py-[4em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto">
          <div className="max-w-screen-sm load-hidden animate-fade-in animate-delay-200">
            <h2 className="w-80 mx-auto mb-4 text-2xl text-center text-[#00A44E] md:w-full md:text-3xl lg:text-left lg:ml-0 font-bold">
              {t("reason.title")}
            </h2>
          </div>

          <div className="mt-2 md:mt-4 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-5 w-full load-hidden animate-slide-up border-[1px] border-black border-solid rounded-t-lg animate-delay-200">
              <img
                className="aspect-square object-cover w-full h-[250px] rounded-lg"
                src="/image/reason-1.jpg"
                alt="Online Banking"
              />
              <h3
                className="text-center lg:text-left text-black font-semibold px-4 capitalize text-2xl"
                dangerouslySetInnerHTML={{ __html: t("reason.reason1.title") }}
              ></h3>
              <p className="text-center lg:text-left text-slate-950 p-4 text-xl">
                {t("reason.reason1.description")}
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 w-full load-hidden animate-slide-up border-[1px] border-black border-solid rounded-t-lg animate-delay-200">
              <img
                className="aspect-square object-cover w-full h-[250px] rounded-lg"
                src="/image/reason-2.jpg"
                alt="Simple Budgeting"
              />
              <h3
                className="text-2xl text-center lg:text-left text-black font-semibold px-4 capitalize"
                dangerouslySetInnerHTML={{ __html: t("reason.reason2.title") }}
              ></h3>
              <p className="text-center lg:text-left text-slate-950 p-4 text-xl">
                {t("reason.reason2.description")}
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 w-full load-hidden animate-slide-up border-[1px] border-black border-solid rounded-t-lg animate-delay-300">
              <img
                className="aspect-square object-cover w-full h-[250px] rounded-lg"
                src="/image/reason-3.jpg"
                alt="Fast Onboarding"
              />
              <h3
                className="text-2xl text-center lg:text-left text-black font-semibold px-4 capitalize"
                dangerouslySetInnerHTML={{ __html: t("reason.reason3.title") }}
              ></h3>
              <p className="text-center lg:text-left text-slate-950 p-4 text-xl">
                {t("reason.reason3.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-200 py-[3em] px-[2em] md:py-[4em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto w-full">
          <div className="max-w-screen-sm load-hidden animate-fade-in animate-delay-200 w-full">
            <h2 className="w-80 mx-auto uppercase mb-4 text-2xl text-center text-[#F18200] md:w-full md:text-3xl lg:text-left lg:ml-0 font-bold">
              {t("highlight.title")}
            </h2>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="rounded-[64px] border-[1px] border-gray-400 p-4 w-full flex flex-col justify-center items-center">
              <h6 className="text-3xl font-bold text-center">{">"}20</h6>
              <p className="text-center text-xl">
                {locale === "vi"
                  ? "năm phát triển tại Việt Nam"
                  : "years of development in Vietnam"}
              </p>
            </div>

            <div className="rounded-[64px] border-[1px] border-gray-400 p-4 w-full flex flex-col justify-center items-center">
              <h6 className="text-3xl font-bold text-center">{">"}70</h6>
              <p className="text-center text-xl">
                {locale === "vi" ? "sản phẩm" : "products"}
              </p>
            </div>

            <div className="rounded-[64px] border-[1px] border-gray-400 p-4 w-full flex flex-col justify-center items-center">
              <h6 className="text-3xl font-bold text-center">{">"}13,000</h6>
              <p className="text-center text-xl">
                {locale === "vi" ? "m2 diện tích nhà máy" : "m2 factory area"}
              </p>
            </div>

            <div className="rounded-[64px] border-[1px] border-gray-400 p-4 w-full flex flex-col justify-center items-center">
              <h6 className="text-3xl font-bold text-center">{">"}40</h6>
              <p className="text-center text-xl">
                {locale === "vi" ? "đối tác" : "partners"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-100 py-[4em] px-[2em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto">
          <div className="max-w-screen-sm load-hidden animate-fade-in animate-delay-200 w-full">
            <h2 className="w-80 mx-auto uppercase mb-4 text-2xl text-center text-[#00A44E] md:w-full md:text-3xl lg:text-left lg:ml-0 font-bold">
              {t("article.title")}
            </h2>
          </div>

          <div className="mt-2 md:mt-4 grid grid-cols-3 gap-4">
            {data.blogs
              .filter((blog: any) => blog.type === "news")
              .map((blog: any) => (
                <div
                  className="flex flex-col items-center gap-5 w-full load-hidden animate-slide-up border-[1px] border-black border-solid rounded-t-lg animate-delay-200 cursor-pointer"
                  onClick={() => router.push(`/news/${blog.id}`)}
                >
                  <img
                    className="aspect-square object-cover w-full h-[250px] rounded-lg"
                    src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
                    alt="Online Banking"
                  />
                  <h3
                    className="text-center lg:text-left text-black font-semibold px-4 capitalize text-2xl"
                    dangerouslySetInnerHTML={{
                      __html: blog.title,
                    }}
                  ></h3>
                  <p className="text-center lg:text-left text-slate-950 p-4 text-xl">
                    {blog.description}
                  </p>
                  <p className="mt-auto mb-4 font-bold text-xl">Xem thêm</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-base-100 py-[4em] px-[2em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto">
          <div className="max-w-screen-sm load-hidden animate-fade-in animate-delay-200 w-full">
            <h2 className="w-80 mx-auto uppercase mb-4 text-2xl text-center text-[#00A44E] md:w-full md:text-3xl lg:text-left lg:ml-0 font-bold">
              {t("blog.title")}
            </h2>
          </div>

          <div className="mt-2 md:mt-4 grid grid-cols-3 gap-4">
            {data.blogs
              .filter((blog: any) => blog.type === "blog")
              .map((blog: any) => (
                <div
                  className="flex flex-col items-center gap-5 w-full load-hidden animate-slide-up border-[1px] border-black border-solid rounded-t-lg animate-delay-200 cursor-pointer"
                  onClick={() => router.push(`/blog/${blog.id}`)}
                >
                  <img
                    className="aspect-square object-cover w-full h-[250px] rounded-lg"
                    src={`https://dongnam.up.railway.app/assets/${blog.thumbnail}`}
                    alt="Online Banking"
                  />
                  <h3
                    className="text-center lg:text-left text-black font-semibold px-4 capitalize text-2xl"
                    dangerouslySetInnerHTML={{
                      __html: blog.title,
                    }}
                  ></h3>
                  <p className="text-center lg:text-left text-slate-950 p-4 text-xl">
                    {blog.description}
                  </p>
                  <p className="mt-auto mb-4 font-bold text-xl">Xem thêm</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
