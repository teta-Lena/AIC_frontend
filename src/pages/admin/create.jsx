import React, {useState} from "react";
import { Link } from "react-router-dom";
import UpcomingTable from "./upcomingTable";



export default function MyTable(){
    const [showUpcomingTable,setShowUpcomingTable] = useState(false)
    const [showPastTable,setShowPastTable] = useState(false)
    const [clicked,setClicked] = useState(false)

    const handleClick = ()=>{
        setClicked(true)
    }
    
    const handleClickUpcoming = ()=>{
        setShowUpcomingTable(true)
        setShowPastTable(false)
    }
    const handleClickPast = ()=>{
        setShowUpcomingTable(false)
        setShowPastTable(!false)
    }

    const handleBothClicks1 = ()=>{
        handleClick()
        handleClickUpcoming()
    }
    const handleBothClicks2 = ()=>{
        handleClick()
        handleClickPast()
    }
    return(
        <div className="w-full flex flex-col m-20">
            <div className="">
            <span className=" text-xl font-bold mb-5">Streams and recording</span>
            </div>
            <div className=" flex flex-row w-11/12 border-b-2 ">
                <button
                 className="text-black w-2/12 h-10 text-xl items-center text-opacity-80 ${clicked ? 'border-b-2 border-black-700' : ''}"
                 onClick={handleBothClicks}>                 
                    Upcoming
                    </button>
                <button 
                className=" text-center text-black w-2/12 text-xl"
                onClick={handleBothClicks2}>
                    Past
                    </button>
            </div>
            {showUpcomingTable && <UpcomingTable/>}
            
            
        </div>
        
    )
}