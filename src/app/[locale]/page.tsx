"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";

export default function Root() {
  const t = useTranslations("hero");
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
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl text-black px-8">
      <div className="container mx-auto flex flex-col">
        <p>
          Hệ thống của chúng tôi đang được nâng cấp. Quý khách vui lòng quay lại
          sau.
          <br />
          <br /> Chúc quý khách năm mới an khang thịnh vượng, vạn sự như ý!
          <br />
          <br />
          <p className="text-right">Đông Nam Pharma</p>
        </p>
      </div>
    </div>
  );
}
