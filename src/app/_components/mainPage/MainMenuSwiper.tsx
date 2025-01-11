'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { mainMenu } from './MainCategory'

export default function MainMenuSwiper({ isForMobile = false }: { isForMobile?: boolean }) {

    return (
        <div className='mb-4 py-2 bg-white'>
            <h1 className='bg-[#e5f2e9] my-8 w-fit text-xl font-bold px-10 py-3 rounded-tl-xl rounded-bl-xl text-black'>
                منوی رستوران
            </h1>
            <Swiper
                slidesPerView={2.1}
                spaceBetween={20}
                className=' w-full h-[280px] px-2'
            >
                {
                    mainMenu.map((menuItem, index) => (
                        <SwiperSlide key={index} className='relative flex justify-center'>
                            <Link key={index} href={menuItem.href} className=' p-4 rounded-md w-full flex justify-center'>
                                <Image src={menuItem.image} className='absolute aspect-[1/1] max-w-[190px] z-[100] ' alt={String(index)} />
                            </Link>
                            <div className=' bg-primary absolute rounded-md px-16 h-[130px] w-full bottom-[14%]  shadow-xl'>{menuItem.title}</div>
                            <div className=' bg-white shadow-md absolute rounded-md flex justify-center items-center h-[50px] w-[60%] mx-auto bottom-[5%] text-black'>{menuItem.title}</div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}
