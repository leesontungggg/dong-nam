import "./globals.css";
import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ContextProvider } from "@/services/context";
import { cn } from "@/lib/utils";
import Floating from "@/components/floating";
// import { headers } from "next/headers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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

  const activePath = children?.props?.childProp;

  return (
    <html lang={locale}>
      <head>
        <meta
          name="title"
          content="Đông Nam Pharma - Nhà máy sản xuất dược phẩm
"
        />
        <meta
          name="description"
          content="Công ty Dược Đông Nam - Với kinh nghiệm hơn 20 năm trong lĩnh vực gia công dược phẩm đạt chuẩn GMP-WHO."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="icon" href="/path/to/favicon.ico"/> */}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ContextProvider>
            <Navbar activePath={activePath} />
            {children}
            <Footer />
            <Floating />
          </ContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
