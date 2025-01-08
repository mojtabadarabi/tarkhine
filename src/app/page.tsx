import MainCategory from "@/app/_components/mainPage/MainCategory";
import { ReactComponent as ArrowBottom } from 'public/icons/arrow-bottom.svg';
import { ReactComponent as Logo } from 'public/svg/logo_with_title.svg';
import MobilePageHeader from "./_components/MobilePageHeader";
import DropDownLinks from "./_components/links/DropDownLinks";
import MainAbout from "./_components/mainPage/About";
import Branches from "./_components/mainPage/Branches";
import MainMenuSwiper from "./_components/mainPage/MainMenuSwiper";
import MainSlider from "./_components/mainPage/MainSlider";
import { getIsDeviceMobile } from "./_utils/ui";
import { branches } from "./configs";
import BottomNavigation from "./_components/BottomNavigation";

export default async function Home({ searchParams }: { searchParams: Promise<{ tab: string }> }) {
  const { tab } = await searchParams

  const isMobile = await getIsDeviceMobile()

  const getMAinComponent = () => {
    switch (tab) {
      case 'home':
        return <>
          <MainSlider isForMobile={true} />
          <MainMenuSwiper />
        </>
      case 'bookmark':
        return <>
          bookmark
        </>
      case 'profile':
        return <>
          profile
        </>
      case 'user':
        return <>
          user
        </>
      case 'search':
        return <>
          search
        </>
      case 'cart':
        return <>
          cart
        </>

      default:
        return <>
          <MainSlider isForMobile={true} />
          <MainMenuSwiper />
        </>
    }
  }

  if (isMobile) {
    return <main>
      <MobilePageHeader className={"h-[70px]"}>
        <div className="flex w-full items-center justify-between">
          <Logo className="w-[110px] fill-white " />
          <DropDownLinks
            textClassName="!text-white !opacity-100 !text-sm px-4 bg-gray-900 text-xl py-1 rounded-md "
            label={
              <div className="text-white flex items-center gap-1 ">
                <span>شعبه</span>
                <ArrowBottom height={10} width={14} className='fill-white ' />
              </div>
            }
            listContainerClassName="!bg-gray-900 !border-none !gap-6"
            links={branches.map((branch) => {
              return {
                children: <div className="w-full text-white">{branch.title}</div>,
                href: ''
              }
            })} />
        </div>
      </MobilePageHeader>
      <div className="h-[calc(100vh-130px)] overflow-auto">
      {getMAinComponent()}

      </div>
      <BottomNavigation className={"h-[60px]"} />
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
