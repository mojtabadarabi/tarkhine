import MainCategory from "@/app/_components/mainPage/MainCategory";
import MainAbout from "./_components/mainPage/About";
import Branches from "./_components/mainPage/Branches";
import MainSlider from "./_components/mainPage/MainSlider";
import { getIsDeviceMobile } from "./_utils/ui";

export default async function Home() {
  const isMobile = await getIsDeviceMobile()

  if (isMobile) {
    return <main>
      mobile layout
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
