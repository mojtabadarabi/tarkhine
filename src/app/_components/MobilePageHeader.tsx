import React from 'react'

export default function MobilePageHeader({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-primary text-white p-4 w-full sticky top-0 left-0 z-10 ${className}`}>
      {children}
    </div>
  )
}
