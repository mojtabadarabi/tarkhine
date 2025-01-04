import { Metadata } from 'next'
import Image from 'next/image'
import aboutImg from 'public/images/about_page/header.png'
import sideImg from 'public/images/about_page/side.png'
import UiContainer from '../_components/UiContainer'
import { aboutIcons } from '../_components/mainPage/About'

export const metadata: Metadata = {
    title: "درباره ما",
    description: "صفحه درباره ما"
}

export default function page() {
    return (
        <div className='flex flex-col gap-4'>
            <div className='relative w-full max-h-[400px] aspect-[16/5]'>
                <Image src={aboutImg} fill alt='Abou page' />
            </div>
            <UiContainer>
                <h1 className='text-3xl font-medium'>درباره ما</h1>
            </UiContainer>
            <UiContainer className='flex md:flex-row flex-col gap-2 my-4'>
                <p className='text-xl  font-medium md:w-1/2 w-full leading-10'>
                    رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند.
                    چشم انداز: در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.
                </p>
                <div className='relative md:w-1/2 w-full  max-h-[500px] aspect-[1/1]'>
                    <Image src={sideImg} alt='Aside image' fill />
                </div>
            </UiContainer>
            <div className='bg-[#ededed]'>
                <UiContainer className='flex flex-row justify-between my-14'>
                    {
                        aboutIcons('#000').map((icon, index) => (
                            <div key={index} className='flex flex-col gap-4 items-center justify-center'>
                                {icon.icon}
                                <h4 className='text-sm font-medium text-gray-600'>{icon.label}</h4>
                            </div>
                        ))
                    }
                </UiContainer>
            </div>
        </div>
    )
}
