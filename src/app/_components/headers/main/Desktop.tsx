import Link from 'next/link'
import { ReactComponent as SearchSvg } from 'public/icons/search/search-normal.svg'
import { ReactComponent as CartSvg } from 'public/icons/shop/shopping-cart.svg'
import { ReactComponent as UserSvg } from 'public/icons/users/user.svg'
import { ReactComponent as Logo } from 'public/svg/logo_with_title.svg'
import NavLink from '../../links/NavLink'
import UiContainer from '../../UiContainer'

export default function DesktopHeader() {
  return (
    <UiContainer className='bg-white p-6 px-32 flex justify-between items-center'>
      <Link href="/"><Logo className='w-[130px]' /></Link>
      <div className='flex items-center justify-center gap-8 text-md font-medium'>
        <NavLink href={'/'}>صفحه اصلی</NavLink>
        <NavLink href={'/blogs'}>شعبه</NavLink>
        <NavLink href={'/about-us'}>منو</NavLink>
        <NavLink href={'/about-us'}>اعطای نمایندگی</NavLink>
        <NavLink href={'/about-us'}>درباره ما</NavLink>
        <NavLink href={'/about-us'}>تماس با ما</NavLink>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <Link href={'/auth'} className='text-primary bg-primary-50 p-2 rounded-md '>
          <SearchSvg className='fill-primary' width={25} hanging={25}  />
        </Link>
        <Link href={'/auth'} className='text-primary bg-primary-50 p-2 rounded-md '>
          <CartSvg className='fill-primary' width={25} hanging={25} />
        </Link>
        <Link href={'/auth'} className='text-primary bg-primary-50 p-2 rounded-md '>
          <UserSvg className='fill-primary' width={25} hanging={25}/>
        </Link>
      </div>
    </UiContainer>
  )
}
