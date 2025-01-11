import type { Metadata } from "next";
import localFont from "next/font/local";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MainFooter from "./_components/footers/main";
import MainHeader from "./_components/headers/main";
import { getIsDeviceMobile } from "./_utils/ui";
import "./globals.css";

const estedad = localFont({
  src: "./fonts/Estedad-Bold.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ترخینه",
  description: "رستوران ترخینه",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = await getIsDeviceMobile()
  return (
    <html lang="fa" dir="rtl" className="bg-slate-100">
      <body
        className={`${estedad.variable} antialiased`}
      >
        {
          isMobile ? (
            <>


              {children}

            </>
          ) : (
            <>
              <MainHeader />
              {children}
              <MainFooter />
            </>
          )
        }
      </body>
    </html>
  );
}
