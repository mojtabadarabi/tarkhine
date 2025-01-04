import aghdasie from 'public/images/branches/aghdasie.png'
import BranchCard from '../BranchCard'
import UiContainer from '../UiContainer'
import { branches } from '@/app/configs'

export default function Branches() {

    return (
        <UiContainer>
            <h1 className='text-3xl font-bold text-center mb-8'>ترخینه گردی</h1>
            <div className="flex items-center justify-center gap-6">
                {
                    branches.map((branch, index) => <BranchCard key={index} {...branch} id={index} />)
                }
            </div>
        </UiContainer>
    )
}
