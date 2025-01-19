
'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ReactComponent as Home } from 'public/icons/building/home.svg'
import { ReactComponent as HomeBold } from 'public/icons/building/home_bold.svg'
import { ReactComponent as Bookmark } from 'public/icons/money/receipt.svg'
import { ReactComponent as BookmarkBold } from 'public/icons/money/receipt_bold.svg'
import { ReactComponent as Search } from 'public/icons/search/search-normal.svg'
import { ReactComponent as SearchBold } from 'public/icons/search/search_bold.svg'
import { ReactComponent as ShoppingCart } from 'public/icons/shop/shopping-cart.svg'
import { ReactComponent as ShoppingCartBold } from 'public/icons/shop/shopping_cart_bold.svg'
import { ReactComponent as User } from 'public/icons/users/user.svg'
import { ReactComponent as UserBold } from 'public/icons/users/user_bold.svg'

export default function BottomNavigation({ className = '' }: { className?: string }) {
    const tab = useSearchParams()?.get('tab')

    const icons = [
        {
            id: 1,
            icon: !tab || tab !== 'home' ? (
                <Home width={25} height={25} className={`fill-gray-600`} />
            ) : (
                <HomeBold width={25} height={25} className={` fill-primary`} />
            ),
            link: '/?tab=home',
            title: 'خانه',
            isActive:!tab || tab === 'home'
        },
        {
            id: 2,
            icon: tab !== 'search' ? (
                <Search width={25} height={25} className={`fill-gray-600`} />
            ) : (
                <SearchBold width={25} height={25} className={`fill-primary`} />
            ),
            link: '/?tab=search',
            title: 'جستجو',
            isActive:tab === 'search'
        },
        {
            id: 3,
            icon: tab !== 'cart' ? (
                <ShoppingCart width={25} height={25} className={`fill-gray-600`} />
            ) : (
                <ShoppingCartBold width={25} height={25} className={`fill-primary`} />
            ),
            link: '/?tab=cart',
            title: 'سبد خرید',
            isActive:tab === 'cart'
        },
        {
            id: 4,
            icon: tab !== 'orders' ? (
                <Bookmark width={25} height={25} className={`fill-gray-600`} />
            ) : (
                <BookmarkBold width={25} height={25} className={`fill-primary`} />
            ),
            link: '/?tab=orders',
            title: 'سفارشات',
            isActive:tab === 'orders'
        },
        {
            id: 5,
            icon: tab !== 'profile' ? (
                <User width={25} height={25} className={`fill-gray-600`} />
            ) : (
                <UserBold width={25} height={25} className={`fill-primary`} />
            ),
            link: '/?tab=profile',
            title: 'پروفایل',
            isActive:tab === 'profile'
        },
    ]

    return (
        <div className={`${className} z-50 w-full `}>
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                {
                    icons.map((icon) => (
                        <Link href={icon.link} key={icon.id} type="button" className="inline-flex flex-col items-center justify-center gap-1 ">
                            {icon.icon}
                            <span className={`text-sm ${icon.isActive ? 'text-primary' : 'text-gray-600'}`}>{icon.title}</span>
                        </Link>

                    ))
                }
                {/* <Link href={'/?tab=search'} type="button" className="inline-flex flex-col items-center justify-center gap-1 ">
                    <Search width={25} height={25} className={` ${tab === 'search' ? 'fill-primary' : 'fill-gray-600'}`} />
                    <span className={`text-sm ${!tab || tab === 'search' ? 'text-primary' : 'text-gray-600'}`}>جستجو</span>
                </Link>
                <Link href={'/?tab=cart'} type="button" className="inline-flex flex-col items-center justify-center gap-1 ">
                    <ShoppingCart width={25} height={25} className={` ${tab === 'cart' ? 'fill-primary' : 'fill-gray-600'}`} />
                    <span className={`text-sm ${!tab || tab === 'cart' ? 'text-primary' : 'text-gray-600'}`}>سبد خرید</span>
                </Link>
                <Link href={'/?tab=orders'} type="button" className="inline-flex flex-col items-center justify-center gap-1 ">
                    <Bookmark width={25} height={25} className={` ${tab === 'orders' ? 'fill-primary' : 'fill-gray-600'}`} />
                    <span className={`text-sm ${!tab || tab === 'orders' ? 'text-primary' : 'text-gray-600'}`}>سفارشات</span>
                </Link>
                <Link href={'/?tab=profile'} type="button" className="inline-flex flex-col items-center justify-center gap-1 ">
                    <User width={25} height={25} className={` ${tab === 'profile' ? 'fill-primary' : 'fill-gray-600'}`} />
                    <span className={`text-sm ${!tab || tab === 'profile' ? 'text-primary' : 'text-gray-600'}`}>پروفایل</span>
                </Link> */}
            </div>
        </div>
    )
}
