import Image from 'next/image'
import Link from 'next/link'
import { ReactComponent as Diagram } from 'public/icons/diagram.svg'
import { ReactComponent as HomeWifi } from 'public/icons/home-wifi.svg'
import { ReactComponent as Menuboard } from 'public/icons/menu-board.svg'
import { ReactComponent as User } from 'public/icons/users/user.svg'
import aboutImg from 'public/images/about.png'
import UiContainer from '../UiContainer'

export default function MainAbout() {

    const icons = [
        {
            label: 'کیفیت بالای غذاها',
            icon: <Diagram className='fill-[#fff]' width={55} hanging={55}/>
        },
        {
            label: 'محیطی دلنشین و آرام',
            icon: <HomeWifi className='fill-[#fff]' width={55} hanging={55}/>
        },
        {
            label: 'پرسنلی مجرب و حرفه‌ای',
            icon: <User className='fill-[#fff]' width={55} hanging={55}/>
        },
        {
            label: 'منوی متنوع',
            icon: <Menuboard className='fill-[#fff]' width={55} hanging={55} />
        },
    ]

    return (
        <div className='relative aspect-[16/9] max-h-[450px] w-full'>
            <Image src={aboutImg} className='absolute left-0 top-0 ' fill alt='about' />
            <UiContainer className='flex justify-center text-white absolute left-0 top-0 w-full h-full '>
                <div className='flex flex-col items-start gap-10 justify-center w-1/2'>
                    <h1 className='text-3xl font-medium '>رستوران‌های زنجیره‌ای ترخینه</h1>
                    <p className='text-xl  font-medium'>مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.</p>
                    <Link href="/" className='border border-white rounded-md text-white px-8 py-3'>اطلاعات بیشتر</Link>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <div className='grid grid-cols-2 gap-28'>
                        {
                            icons.map((icon,index) => (
                                <div key={index} className='flex flex-col gap-4 items-center justify-center'>
                                    {icon.icon}
                                    <h4 className='text-sm font-medium'>{icon.label}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </UiContainer>
        </div>
    )
}
