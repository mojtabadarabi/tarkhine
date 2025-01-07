'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { mainMenu } from './MainCategory'

export default function MainMenuSwiper({ isForMobile = false }: { isForMobile?: boolean }) {

    return (
        <div>
            <h1 className='bg-[#e5f2e9] my-8 w-fit text-xl font-bold px-10 py-3 rounded-tl-xl rounded-bl-xl text-black'>
                منوی اصلی
            </h1>
            <Swiper
                // install Swiper modules
                slidesPerView={2.2}
                className='aspect-[16/9] w-full max-h-[450px]'
                pagination={{ clickable: true, }}
                scrollbar={{ draggable: true }}
            >
                {
                    mainMenu.map((menuItem, index) => (
                        <SwiperSlide key={index} className='relative'>
                            <Link key={index} href={menuItem.href} className=' p-4 rounded-md h-[200px] relative w-full flex justify-center'>
                                <Image src={menuItem.image} className='absolute h-[150px] w-[150px]' alt={String(index)} />
                                <div className=' bg-primary absolute rounded-md px-16 bottom-0 h-[70px] shadow-xl py-2'>{menuItem.title}</div>
                            </Link>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}
