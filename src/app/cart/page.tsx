'use client'
import { ReactComponent as TickIcon } from 'public/icons/money/tick_square.svg'
import { ReactComponent as WalletIcon } from 'public/icons/money/wallet.svg'
import { ReactComponent as CartIcon } from 'public/icons/shop/shopping-cart.svg'
import { useState } from 'react'
import EmptyCart from '../_components/cart/Empty'
import UiContainer from '../_components/UiContainer'

export default function page() {
    const [step, setStep] = useState<number>(0)

    return (
        <UiContainer className='flex items-center justify-center gap-2 flex-col pt-4'>
            <div className='flex justify-around items-center  w-3/4'>
                <div onClick={() => setStep(0)} className={`flex w-1/3 whitespace-nowrap items-center gap-2 text-xl cursor-pointer ${step >= 0 ? 'text-primary' : ' text-nav'}`}>
                    <CartIcon className={`${step >= 0 ? 'fill-primary' : 'fill-nav'}`} width={50} />
                    <h6>سبد خرید</h6>
                    <span className={`h-[1px] border border-dashed ${step >= 0 ? 'border-primary' : 'border-nav'} w-full`} />
                </div>
                <div onClick={() => setStep(1)} className={`flex mx-1 w-1/3 whitespace-nowrap items-center gap-2 text-xl cursor-pointer ${step >= 1 ? 'text-primary' : ' text-nav'}`}>
                    <span className={`h-[1px] border border-dashed ${step >= 1 ? 'border-primary' : 'border-nav'} w-full`} />
                    <TickIcon className={`${step >= 1 ? 'fill-primary' : 'fill-nav'}`} width={110} />
                    <h6>تکمیل اطلاعات</h6>
                    <span className={`h-[1px] border border-dashed ${step >= 1 ? 'border-primary' : 'border-nav'} w-full`} />
                </div>
                <div onClick={() => setStep(2)} className={`flex w-1/3 whitespace-nowrap items-center gap-2 text-xl cursor-pointer ${step >= 2 ? 'text-primary' : ' text-nav'}`}>
                    <span className={`h-[1px] border border-dashed ${step >= 2 ? 'border-primary' : 'border-nav'} w-full`} />
                    <WalletIcon className={`${step >= 2 ? 'fill-primary' : 'fill-nav'}`} width={50} />
                    <h6>پرداخت</h6>
                </div>
            </div>
            <EmptyCart />
        </UiContainer>
    )
}
