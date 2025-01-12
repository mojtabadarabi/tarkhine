import MobilePageHeader from "@/app/_components/MobilePageHeader";
import DropDownLinks from "@/app/_components/links/DropDownLinks";
import MainMenuSwiper from "@/app/_components/mainPage/MainMenuSwiper";
import MainSlider from "@/app/_components/mainPage/MainSlider";
import NonIranianFoodsSlider from "@/app/_components/mainPage/mobile/NonIranianFoodsSlider";
import PopularFoodsSlider from "@/app/_components/mainPage/mobile/PopularFoodsSlider";
import RecommendedFoods from "@/app/_components/mainPage/mobile/RecommendedFoodsSlider";
import { branches } from "@/app/configs";
import { ReactComponent as ArrowBottom } from 'public/icons/arrow-bottom.svg';
import { ReactComponent as Logo } from 'public/svg/logo_with_title.svg';

export default function MainTab() {
    return (
        <>
            <MobilePageHeader className={""}>
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
            <MainSlider isForMobile={true} />
            <MainMenuSwiper />
            <RecommendedFoods />
            <PopularFoodsSlider />
            <NonIranianFoodsSlider />
        </>
    )
}
