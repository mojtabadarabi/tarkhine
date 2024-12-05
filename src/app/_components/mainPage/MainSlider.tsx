'use client'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Slide1 from 'public/images/slides\/Slider.png'
import Image from 'next/image'
import Link from 'next/link'

export default function MainSlider() {
    
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            className='aspect-[16/9] w-full h-[450px]'
            pagination={{ clickable: true ,}}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className='relative'>
                <Image src={Slide1} fill alt="slide1"/>
                <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center flex-col gap-12'>
                    <span className='text-white text-4xl font-bold'>تجربه غذای سالم و گیاهی به سبک ترخینه</span>
                    <Link href="" className='bg-primary text-white text-sm font-medium rounded-md px-4 py-2'>سفارش آنلاین غذا</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    )
}
