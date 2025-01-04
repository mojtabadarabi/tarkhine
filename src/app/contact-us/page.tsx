import { Metadata } from 'next'
import Image from 'next/image'
import aghdasieImg from 'public/images/branches/aghdasie.png'
import chaloosImg from 'public/images/branches/chaloos.png'
import ekbatanImg from 'public/images/branches/ekbatan.png'
import vanakImg from 'public/images/branches/vanak.png'
import headerImg from 'public/images/contact_us/Slider.png'
import UiContainer from '../_components/UiContainer'

export const metadata: Metadata = {
    title: "تماس با ما",
    description: "صفحه تماس با ما"
}

export const branches = [
    {
        image: ekbatanImg,
        title: 'شعبه اکباتان',
        address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
        phone: '۰۲۱-۵۴۸۹۱۲۵۰-۵۱',
        time: "همه روزه از ساعت 12 تا 23 بجز روز های تعظیل"
    },
    {
        image: vanakImg,
        title: 'شعبه ونک',
        address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
        phone: '۰۲۱-۵۴۸۹۱۲۵۲-۵۳',
        time: "همه روزه از ساعت 12 تا 23 بجز روز های تعظیل"
    },
    {
        image: aghdasieImg,
        title: 'شعبه اقدسیه',
        address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
        phone: '۰۲۱-۵۴۸۹۱۲۵۴-۵۵',
        time: "همه روزه از ساعت 12 تا 23 بجز روز های تعظیل"
    },
    {
        image: chaloosImg,
        title: 'شعبه چالوس',
        address: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
        phone: '۰۲۱-۵۴۸۹۱۲۵۲-۵۳',
        time: "همه روزه از ساعت 12 تا 23 بجز روز های تعظیل"
    },
]


export default function page() {
    return (
        <div className='flex flex-col gap-4'>
            <div className='relative w-full max-h-[400px] aspect-[16/5]'>
                <Image src={headerImg} fill alt='Contact us page' />
            </div>
            <UiContainer className='flex flex-col gap-8 my-4'>
                {
                    branches.map((branch, index) => (
                        <div key={index} className='flex gap-4 flex-row transition ease-in-out duration-100 delay-100 border border-transparent hover:border-gray-400 rounded-md group'>
                            <div className='relative w-2/5 rounded-md h-[350px] overflow-hidden'>
                                <Image src={branch.image} fill alt={branch.title} />
                            </div>
                            <div className='flex justify-center text-center flex-col w-3/5 gap-7'>
                                <h1 className='text-3xl font-medium my-4 w-full'>{branch.title}</h1>
                                <h2 className='text-xl font-medium text-gray-500'>آدرس : {branch.address}</h2>
                                <h2 className='text-xl font-medium text-gray-500'>شماره تماس : {branch.time}</h2>
                                <h2 className='text-xl font-medium text-gray-500'>ساعت کاری  : {branch.phone}</h2>
                                <div className=' justify-center gap-4 transition ease-in-out duration-100 delay-100 opacity-0 group-hover:opacity-100 flex'>
                                    <button className='bg-transparent  text-primary border-primary border py-4 px-6 rounded-md text-md font-medium'>صفحه شعبه</button>
                                    <button className='bg-primary text-white py-4 px-6 rounded-md text-md font-medium'>دیدن در نقشه</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </UiContainer>
        </div>
    )
}
