import { calculateFoodPrice } from '@/app/_utils'
import Image from 'next/image'
import { ReactComponent as Heart } from 'public/icons/heart.svg'
import { ReactComponent as Star } from 'public/icons/star.svg'

export default function FoodCard({ ...food }) {
    return (
        <div className='w-full bg-white border shadow-md flex flex-col rounded-md overflow-hidden justify-center'>
            <Image alt={food.title} src={food.image} className='h-[200px] w-full object-cover' />
            <div className='p-4 flex flex-col justify-center items-center gap-3'>
                <h1 className='text-xl font-medium text-gray-600'>{food.title}</h1>
                <div className='flex items-center w-full justify-between'>
                    <Heart width={30} height={30} />
                    <div className='flex justify-center gap-6 w-1/2'>
                        {
                            food.discount && food.discount !== 0 ? (
                                <>
                                    <span className='text-md line-through text-gray-400'>{food.price}</span>
                                    <span className='text-red-600 text-md'>{food.discount} %</span>
                                </>
                            ):null
                        }
                    </div>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <span className='flex items-center gap-2'>
                        <Star width={30} height={30} />
                        {food.rate}
                    </span>
                    <span className='text-xl font-medium'>{calculateFoodPrice(food.price, food.discount)} تومان</span>
                </div>
                <button className='w-full mt-2 rounded-md p-4 text-xl text-white bg-primary'>
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
    )
}
