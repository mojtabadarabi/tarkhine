import { ReactComponent as Spider } from 'public/icons/spider.svg';

export default function EmptyCart() {
    return (
        <div className='relative h-[80svh] flex items-center justify-center'>
            <div className='flex flex-col gap-8 justify-center items-center'>
                <span className='text-md text-gray-600'>
                    شما در حال حاضر هیچ محصولی به سبد خرید اضافه نکرده‌اید!                    </span>
                <button className='text-primary text-sm border w-max px-3 py-2 border-primary rounded-md '>منوی رستوران</button>
            </div>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <Spider width={300} height={500} />
            </div>
        </div>
    )
}
