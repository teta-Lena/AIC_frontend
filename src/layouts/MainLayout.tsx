import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <div className='flex bg-[#100000] flex-col w-full'>

      {children}
      <Footer />
    </div>
  )
}

export default MainLayout