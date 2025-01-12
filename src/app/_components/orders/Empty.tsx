import { ReactComponent as Spider } from 'public/icons/spider.svg';

export default function EmptyOrders() {
    return (
        <div className='relative h-[80svh]'>
            <div className='relative top-0 left-0 w-full h-full flex items-center justify-center'>
                <Spider width={200} />
            </div>
        </div>
    )
}
