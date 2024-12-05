import Image from 'next/image'
import Link from 'next/link'
import desser from 'public/images/image(1).png'
import pishfood from 'public/images/image(2).png'
import food from 'public/images/image(3).png'
import drinks from 'public/images/image.png'
import UiContainer from '../UiContainer'

export default function MainCategory() {
  const categories = [
    {
      image: food,
      href: '',
      title: 'غذای اصلی'
    },
    {
      image: pishfood,
      href: '',
      title: 'پیش غذا'
    },
    {
      image: desser,
      href: '',
      title: 'دسر ها'
    },
    {
      image: drinks,
      href: '',
      title: 'نوشیدنی ها'
    },
  ]
  return (
    <UiContainer>
      <h3 className='text-3xl font-bold text-center'>منوی رستوران</h3>
      <div className='flex items-center w-full justify-center gap-10 pt-40'>
        {
          categories.map((category, index) => (
            <Link key={index} href={category.href} className='bg-primary p-4 rounded-md shadow-md relative w-1/4 h-[180px] flex justify-center'>
              <Image src={category.image} className='absolute top-[-90px] h-[200px]' alt={String(index)} />
              <div className='absolute bottom-[-18px] bg-white rounded-md px-16 shadow-xl py-2'>{category.title}</div>
            </Link>
          ))
        }
      </div>
    </UiContainer>
  )
}
