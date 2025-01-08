import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactComponent as ArrowBottom } from 'public/icons/arrow-bottom.svg';
import { ReactComponent as Logo } from 'public/svg/logo_with_title.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MainFooter from "./_components/footers/main";
import MainHeader from "./_components/headers/main";
import DropDownLinks from "./_components/links/DropDownLinks";
import MobilePageHeader from "./_components/MobilePageHeader";
import { getIsDeviceMobile } from "./_utils/ui";
import { branches } from "./configs";
import "./globals.css";
import BottomNavigation from "./_components/BottomNavigation";

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
