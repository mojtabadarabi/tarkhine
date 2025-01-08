
'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ReactComponent as Bookmark } from 'public/icons/bookmark.svg'
import { ReactComponent as Home } from 'public/icons/home.svg'
import { ReactComponent as Search } from 'public/icons/search/search-normal.svg'
import { ReactComponent as ShoppingCart } from 'public/icons/shop/shopping-cart.svg'
import { ReactComponent as User } from 'public/icons/users/user.svg'

export default function BottomNavigation({ className = '' }: { className?: string }) {
    const tab = useSearchParams()?.get('tab')

    return (
        <div className={`${className} z-50 w-full `}>
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                <Link href={'/?tab=home'} type="button" className="inline-flex flex-col items-center justify-center gap-1 ">
                    <Home width={25} height={25} className={` ${!tab || tab === 'home' ? 'fill-primary' : 'fill-gray-600'}`} />
                    <span className={`text-sm ${!tab || tab === 'home' ? 'text-primary' : 'text-gray-600'}`}>خانه</span>
                </Link>
                <Link href={'/?tab=search'} type="button" className="inline-flex flex-col items-center justify-center gap-1 ">
                    <Search width={25} height={25} className={` ${tab === 'search' ? 'fill-primary' : 'fill-gray-600'}`} />
                    <span className={`text-sm ${!tab || tab === 'search' ? 'text-primary' : 'text-gray-600'}`}>جستجو</span>
                </Link>
                <Link href={'/?tab=cart'} type="button" className="inline-flex flex-col items-center justify-center gap-1 ">
                    <ShoppingCart width={25} height={25} className={` ${tab === 'cart' ? 'fill-primary' : 'fill-gray-600'}`} />
                    <span className={`text-sm ${!tab || tab === 'cart' ? 'text-primary' : 'text-gray-600'}`}>سبد خرید</span>
                </Link>
                <Link href={'/?tab=bookmark'} type="button" className="inline-flex flex-col items-center justify-center gap-1 ">
                    <Bookmark width={25} height={25} className={` ${tab === 'bookmark' ? 'fill-primary' : 'fill-gray-600'}`} />
                    <span className={`text-sm ${!tab || tab === 'bookmark' ? 'text-primary' : 'text-gray-600'}`}>سفارشات</span>
                </Link>
                <Link href={'/?tab=profile'} type="button" className="inline-flex flex-col items-center justify-center gap-1 ">
                    <User width={25} height={25} className={` ${tab === 'profile' ? 'fill-primary' : 'fill-gray-600'}`} />
                    <span className={`text-sm ${!tab || tab === 'profile' ? 'text-primary' : 'text-gray-600'}`}>پروفایل</span>
                </Link>
            </div>
        </div>
    )
}
