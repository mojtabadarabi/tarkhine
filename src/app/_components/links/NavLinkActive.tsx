'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
    href: string
    activeClassName: string
    nonActiveClassName: string
    className?: string
    children: React.ReactNode
}

export default function NavLinkActive(props: Props) {
    const pathname = usePathname()

    return (
        <Link href={props.href} className={`${props.className} ${pathname === props.href ? props.activeClassName : props.nonActiveClassName}`}>
            {props.children}
        </Link>
    )
}
