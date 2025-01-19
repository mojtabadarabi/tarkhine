import { ReactComponent as SearchSvg } from 'public/icons/search/search-normal.svg'
import { ReactComponent as HeartSvg } from 'public/icons/heart.svg'
import MobilePagesHeader from '../MobilePagesHeader'

export default function SearchTab() {
    return (
        <>
            <MobilePagesHeader title='جستجو' />
            <div className='flex flex-col gap-6 p-4'>
                <div className='flex items-center justify-start gap-2 w-full  border-gray-400
                        border
                        rounded-xl 
                        px-2 py-2'>
                    <SearchSvg width={25} className='fill-gray-500' />
                    <input
                        placeholder='حستحو'
                        type='search'
                        className='focus:outline-none
                     
                        bg-transparent
                  '
                    />
                </div>
                <div>
                    <span className='flex justify-start gap-3'>
                        <HeartSvg width={25} className='fill-gray-500'/>
                        <h1 className='text-md '>جستجوهای پرطرفدار</h1>
                    </span>
                </div>
            </div>
        </>
    )
}
