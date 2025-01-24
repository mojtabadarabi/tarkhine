import Link from 'next/link'
import { ReactComponent as SearchSvg } from 'public/icons/search/search-normal.svg'
import { ReactComponent as CartSvg } from 'public/icons/shop/shopping-cart.svg'
import { ReactComponent as UserSvg } from 'public/icons/users/user.svg'
import { ReactComponent as Logo } from 'public/svg/logo_with_title.svg'
import DropDownLinks from '../../links/DropDownLinks'
import NavLink from '../../links/NavLink'
import NavLinkActive from '../../links/NavLinkActive'
import UiContainer from '../../UiContainer'

export default async function DesktopHeader() {

  return (
    <UiContainer className='bg-white p-6 px-32 flex justify-between items-center'>
      <Link href="/"><Logo className='w-[130px] fill-primary' /></Link>
      <div className='flex items-center justify-center gap-8 text-md font-medium'>
        <NavLink href={'/'}>صفحه اصلی</NavLink>
        <DropDownLinks label={'شعبه'} links={[
          {
            href: '/branch/ekbatan',
            children: <span>اکباتان</span>
          },
          {
            href: '/branch/chaloos',
            children: <span>چالوس</span>
          },
          {
            href: '/branch/aghdasie',
            children: <span>اقدسیه</span>
          },
          {
            href: '/branch/vanak',
            children: <span>ونک</span>
          },
        ]} />
        <DropDownLinks label={'منو'} links={[
          {
            href: 'main_ghaza',
            children: <span>غذای اصلی</span>
          },
          {
            href: 'pish_ghaza',
            children: <span>پیش غذا</span>
          },
          {
            href: 'desserts',
            children: <span>دسر</span>
          },
          {
            href: 'drinks',
            children: <span>نوشیدنی</span>
          },
        ]} />
        <NavLink href={'/representation'}>اعطای نمایندگی</NavLink>
        <NavLink href={'/about-us'}>درباره ما</NavLink>
        <NavLink href={'/contact-us'}>تماس با ما</NavLink>

      </div>
      <div className='flex items-center justify-center gap-2'>
        <Link href={'/auth'} className='text-primary bg-primary-50 p-2 rounded-md '>
          <SearchSvg className='fill-primary' width={25} hanging={25} />
        </Link>
        <NavLinkActive
          href='/cart'
          className='p-2 rounded-md'
          activeClassName='bg-primary fill-white'
          nonActiveClassName='bg-primary-50 fill-primary'
        >
          <CartSvg width={25} hanging={25} />
        </NavLinkActive>
        <Link href={'/auth'} className='text-primary bg-primary-50 p-2 rounded-md '>
          <UserSvg className='fill-primary' width={25} hanging={25} />
        </Link>
      </div>
    </UiContainer>
  )
}
