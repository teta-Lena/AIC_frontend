import Wayz from '@/assets/pic7.jpg'
import { Link } from 'react-router-dom'

export default function UpcomingTable(){
    return(
        <table className=' w-5/6 border-2 mt-5'>
  <thead className='border bg-gray-100'>
    <tr>
      <th>Title</th>
      <th className=''>Created</th>
      <th>Scheduled</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr className='items-center  '>
      <td className='flex flex-row gap-x-4 w-5/6 h-20 items-center justify-center  '>
        <img src={Wayz} alt="arielle's upcoming events" className='rounded-full w-8 '/>
        <p className='flex flex-col'>
          Dancing with the stars 
          <span className=' w-1/2 rounded-lg bg-sky text-1'>Scheduled</span>
        </p>
      </td>
      <td className=' w-1/6 text-black text-center item-center '>12:13 PM</td>
      <td className='text-center'>02:12 PM</td>
      <td className='flex flex-row gap-x-5 justify-center items-center h-20'>
        <Link to={''} className='flex content-center '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>
<span>Share</span>
</Link>
<button className='w-40 h-10 rounded-md bg-black text-white'>Enter stream</button>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

      </td>
    </tr>
   
  </tbody>
</table>
    )
}