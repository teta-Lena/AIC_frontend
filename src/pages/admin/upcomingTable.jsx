import React,{useState} from 'react'
import Wayz from '@/assets/pic7.jpg'

export default function UpcomingTable(){
    return(
        <table className="w-96">
  <thead>
    <tr>
      <th>Title</th>
      <th>Created</th>
      <th>Scheduled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src={Wayz} alt="arielle's upcoming events" className='rounded w-8 '/>
        <span></span>
      </td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
  </tbody>
</table>
    )
}