import React from 'react'
import Header from '../../components/store/Header';
import {Outlet} from "react-router-dom"
import Footer from '@/components/shared/footer';
export default function storelanding() {
  return (
    <div className='grid grid-flow-row bg-[#390101] text-white min-h-screen'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
