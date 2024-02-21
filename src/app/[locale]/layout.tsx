import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ContextProvider } from "@/services/context";
// import { headers } from "next/headers";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Đông Nam",
  description: "Đông Nam",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: any;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const activePath = children?.props?.childProp.segment;

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} font-sans`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ContextProvider>
            <Navbar activePath={activePath} />
            {children}
            <Footer />
          </ContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
