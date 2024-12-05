import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ReactComponent as Gallery } from 'public/icons/gallery.svg'

interface Props {
    id:number
    image: StaticImageData
    title: string
    address: string
    link?: string
}

export default function BranchCard(props: Props) {
    const { id,image, title, address, link = '' } = props

    return (
        <div key={id} className='rounded-md relative h-[400px] flex flex-col group border border-gray-300 hover:border-primary duration-100 delay-100 ease-in-out gap-4 justify-center items-center overflow-hidden w-full'>
            <Image src={image} className='absolute h-[280px] top-0 left-0 object-cover w-full' alt={'branch'} />
            <div className='absolute h-[280px] top-0 left-0 object-cover w-full backdrop-blur-sm group-hover:visible invisible ease-in-out duration-100 delay-100 bg-white/10' />
            <div className='absolute top-20 bg-white/20 p-4 rounded-full group-hover:visible invisible ease-in-out duration-100 delay-100'><div className='bg-white/40 rounded-full p-2'><Gallery width={40} height={40} className='fill-white' /><div /></div></div>
            <div className='absolute bottom-[-50px] pt-5 bg-white group-hover:bottom-0 ease-in-out duration-100 delay-100 left-0 w-full flex items-center pb-4 gap-2 justify-center flex-col'>
                <h5 className='text-md font-medium select-none'>{title}</h5>
                <span className='text-xs h-[40px] font-medium select-none text-center opacity-60'>{address}</span>
                <Link href={link} className='border h-fit border-primary rounded-md px-4 py-2 text-primary text-xs font-medium '>صفحه شعبه</Link>
            </div>
        </div>
    )
}
