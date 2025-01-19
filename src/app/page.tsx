import MainCategory from "@/app/_components/mainPage/MainCategory";
import BottomNavigation from "./_components/BottomNavigation";
import CartTab from "./_components/cart/Tab";
import MainAbout from "./_components/mainPage/About";
import Branches from "./_components/mainPage/Branches";
import MainSlider from "./_components/mainPage/MainSlider";
import MainTab from "./_components/mainPage/Tab";
import OrdersTab from "./_components/orders/Tab";
import ProfileTab from "./_components/profile/Tab";
import SearchTab from "./_components/search/Tab";
import { getIsDeviceMobile } from "./_utils/ui";

export default async function Home({ searchParams }: { searchParams: Promise<{ tab: string }> }) {
  const { tab } = await searchParams

  const isMobile = await getIsDeviceMobile()

  const getMAinComponent = () => {
    switch (tab) {
      case 'home':
        return <MainTab />
      case 'orders':
        return <OrdersTab />
      case 'profile':
        return <ProfileTab />
      case 'search':
        return <>
          <SearchTab />
        </>
      case 'cart':
        return <CartTab />

      default:
        return <MainTab />
    }
  }

  if (isMobile) {
    return <main className="flex flex-col h-[100svh]">
      <div className="flex-1 overflow-y-auto">
        {getMAinComponent()}
      </div>
      <BottomNavigation className={""} />
    </main>
  }

  return (
    <main className="flex flex-col gap-32 pb-14">
      <MainSlider />
      <MainCategory />
      <MainAbout />
      <Branches />
    </main>
  );
}
