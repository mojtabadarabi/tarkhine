import Link, { LinkProps } from 'next/link'
import { ReactComponent as ArrowBottom } from 'public/icons/arrow-bottom.svg'

interface Props {
    label: String | React.ReactNode
    links: Partial<LinkProps> & { children: React.ReactNode, href: string | URL }[]
    textClassName?: string
    listContainerClassName?: string
}

export default function DropDownLinks(props: Props) {
    const { links, label, textClassName = '',listContainerClassName='' } = props

    return (
        <div className={`group text-sm relative  transition ease-in-out delay-100 `}>
            <span className={`text-sm flex items-center justify-center gap-1 fill-nav text-nav cursor-pointer opacity-60 hover:text-primary font-medium ${textClassName}`}>
                {typeof label === 'string' ? (
                    <>
                        <span>{label}</span>
                        <ArrowBottom height={10} width={14} className='group-hover:fill-primary ' />
                    </>
                ) : label}
            </span>
            <div className={`absolute group-hover:w-[130px] h-[0] w-0 transition all ease-in-out delay-100 duration-100 overflow-hidden group-hover:p-3 border rounded-md group-hover:h-max bg-white shadow-md top-4 left-0 flex flex-col gap-2 z-[100] ${listContainerClassName}`}>
                {
                    links.map((link, index) => (
                        <Link href={link.href} key={index} className='text-sm text-nav hover:text-primary font-medium'>
                            {link.children}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
