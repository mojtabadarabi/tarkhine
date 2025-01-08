import React from 'react'

export default function MobilePageHeader({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-primary text-white p-5 w-full ${className}`}>
      {children}
    </div>
  )
}
