/* eslint-disable react/prop-types */
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'

const MainLayout = ({children}) => {
  return (
    <div className='flex bg-[#100000] flex-col w-full'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout