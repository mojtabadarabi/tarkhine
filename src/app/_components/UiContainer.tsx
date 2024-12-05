
export default function UiContainer({ children, ...props }: { children: React.ReactNode, className?: string }) {
  const { className = '' } = props

  return (
    <div className={`xl:px-40 md:px-10 px-10 ${className}`}>
      {children}
    </div>
  )
}
