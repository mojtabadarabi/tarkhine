import { ReactComponent as Arrow } from 'public/icons/arrow/arrow_right.svg';
import MobilePageHeader from "./MobilePageHeader";

export default function MobilePagesHeader({ title }: { title: string }) {
    return (
        <MobilePageHeader className='flex items-center justify-between'>
            <Arrow width={25} />
            <h6 className='text-md mb-[1px] text-white'>{title}</h6>
            <Arrow width={25} className='invisible'/>
        </MobilePageHeader>
    )
}
