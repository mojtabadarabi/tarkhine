import aghdasie from 'public/images/branches/aghdasie.png'
import BranchCard from '../BranchCard'
import UiContainer from '../UiContainer'

export default function Branches() {

    const branches = [
        {
            image: aghdasie,
            title: 'شعبه اکباتان',
            address: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
            link: ''
        },
        {
            image: aghdasie,
            title: 'شعبه چالوس',
            address: 'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی',
            link: ''
        },
        {
            image: aghdasie,
            title: 'شعبه اقدسیه',
            address: 'خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸',
            link: ''
        },
        {
            image: aghdasie,
            title: 'شعبه ونک',
            address: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶',
            link: ''
        },
    ]

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
