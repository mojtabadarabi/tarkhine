'use client'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ ...props }: LinkProps & { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <Link {...props} className={`group text-sm relative hover:text-primary  transition ease-in-out delay-100 ${pathname === props.href ? 'text-primary' : 'text-nav opacity-60'}`}>
      {props.children}
      <span className='ease absolute mb-[-8px] bottom-0 right-0 h-0 w-0 border-b-2 border-[var(--sub-color-plate)] transition-all duration-300 group-hover:w-full' />
    </Link>
  )
}
