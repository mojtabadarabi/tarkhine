import Image from 'next/image'
import { ReactComponent as Telegram } from 'public/icons/telegram.svg'
import { ReactComponent as Instagram } from 'public/icons/instagram.svg'
import { ReactComponent as Twitter } from 'public/icons/twitter.svg'
import footerImg from 'public/images/footer.png'

export default function FooterHeader() {
  return (
    <div className='relative h-[400px]'>
      <Image src={footerImg} className='absolute top-0 left-0 w-full h-full' alt='footer' />
      <div className='absolute top-0 left-0 pt-14 flex items-start justify-center text-white h-full w-full'>
        <div className='w-1/4 flex flex-col gap-6'>
          <h2 className='text-3xl'>دسترسی آسان</h2>
          <h5 className='text-md'>پرسش‌های متداول</h5>
          <h5 className='text-md'>قوانین ترخینه</h5>
          <h5 className='text-md'>حریم خصوصی</h5>
          <div className='flex items-center justify-start gap-8'>
            <Twitter className='fill-white' width={30} hanging={30} />
            <Telegram className='fill-white' width={30} hanging={30} />
            <Instagram className='fill-white' width={30} hanging={30} />
          </div>
        </div>
        <div className='w-1/4 flex flex-col gap-6'>
          <h2 className='text-3xl'>شعبه‌های ترخینه</h2>
          <h5 className='text-md'>شعبه اکباتان</h5>
          <h5 className='text-md'>شعبه چالوس</h5>
          <h5 className='text-md'>شعبه اقدسیه</h5>
          <h5 className='text-md'>شعبه ونک</h5>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl'>پیام به ترخینه</h2>
          <form className='flex flex-col gap-6 justify-center items-start'>
            <div className='flex flex-row gap-6'>
              <div className='flex flex-col h-[190px] gap-6'>
                <input className='bg-transparent border text-sm font-medium text-white px-4 py-3 rounded-md' placeholder='نام و نام خانوادگی' />
                <input className='bg-transparent border text-sm font-medium text-white px-4 py-3 rounded-md' placeholder='شماره تماس' />
                <input className='bg-transparent border text-sm font-medium text-white px-4 py-3 rounded-md' placeholder='آدرس ایمیل (اختیاری)' />
              </div>
              <textarea className='bg-transparent h-full min-h-[187px] max-h-[187px] w-[440px] border text-sm font-medium text-white px-4 py-2 rounded-md' placeholder='پیام شما' />
            </div>
            <button className='border rounded-md border-white px-10 py-3'>ارسال پیام</button>
          </form>
        </div>
      </div>
    </div>
  )
}
