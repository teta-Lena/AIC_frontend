import MidNav from "@/components/shared/mid-nav"
import React,{useState} from 'react'
import { Link } from "react-router-dom"
import MyTable from "./create"


// const MyTitle=()=>{
//     return(
//     <div className="bg-black text-white sticky">
//     <span>Arielle wayz</span>
// </div>
//     )
// }
export default function MyAdmin() {
    return(
    <div>
        <MidNav/>
        <MyTable/>
        </div>
       
    )
}