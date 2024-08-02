import type React from 'react'

interface LayoutProps {
  maxWidth?: string
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  maxWidth = 'max-w-[1535px]',
  children,
}) => {
  return <div className={`${maxWidth} mx-auto p-4`}>{children}</div>
}
