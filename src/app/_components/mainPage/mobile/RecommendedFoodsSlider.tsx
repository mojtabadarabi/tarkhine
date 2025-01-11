'use client'
import { recommendedFoods } from '@/app/configs'
import { Swiper, SwiperSlide } from 'swiper/react'
import FoodCard from '../../Food/FoodCard'

export default function RecommendedFoods({ isForMobile = false }: { isForMobile?: boolean }) {

  return (
    <div className='mb-8 py-2 bg-[#e5f2e9]'>
      <h1 className='bg-white my-8 w-fit text-xl font-bold px-10 py-3 rounded-tl-xl rounded-bl-xl text-black'>
        پیشنهاد ویژه
      </h1>
      <Swiper
        slidesPerView={1.4}
        spaceBetween={20}
        className=' w-full px-2'
      >
        {
          recommendedFoods.map((food, index) => (
            <SwiperSlide key={index}>
              <FoodCard
                {...food}
              />
            </SwiperSlide>

          ))
        }
      </Swiper>
    </div>
  )
}
