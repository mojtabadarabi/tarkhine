'use clinet'
import { useEffect, useState } from 'react'

export default function useIsDeviceMobile() {

    const [isDeviceMobiel, setIsDeviceMobile] = useState(false)

    useEffect(() => {
        setIsDeviceMobile(true)
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                setIsDeviceMobile(false)
                return
            }
            setIsDeviceMobile(true)
        })
        return () => {
            window.removeEventListener('resize', () => { })
        }
    }, [])

    return isDeviceMobiel
}
