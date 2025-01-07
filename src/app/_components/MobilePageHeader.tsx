import React from 'react'

export default function MobilePageHeader({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-primary text-white p-5 w-full'>
        {children}
    </div>
  )
}
