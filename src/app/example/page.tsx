'use client'
import Dialog, { changeHashHandler } from '@/app/_components/Dialog';
import { useEffect, useState } from 'react';

const modalId = 'modal'

export default function page() {
    const [isOpen, setIsOpen] = useState(false)


    const openModalHandler = () => {
        changeHashHandler(modalId)
        setIsOpen(true)
    }

    return (
        <div>
            <button onClick={openModalHandler}>click</button>
            <Dialog
                open={isOpen}
                onClose={()=>setIsOpen(false)}
                onOpen={()=>setIsOpen(true)}
                modalId={modalId}
            />
        </div>
    )
}
