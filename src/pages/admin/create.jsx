import React, {useState} from "react";
import { Link } from "react-router-dom";
import UpcomingTable from "./upcomingTable";
import PastTable from "./pastTable";



export default function MyTable(){
    const [showUpcomingTable,setShowUpcomingTable] = useState(false)
    const [showPastTable,setShowPastTable] = useState(false)
    const [clicked, setClicked] = useState(null)

    const handleBothUpcomingClicks = () => {
        setClicked(true); // Set the state for "Upcoming" button
        handleClickUpcoming()
      };
      const handleBothPastClicks = () => {
           setClicked(false); // Set the state for "Past" button
             handleClickPast()
      };    
    
    const handleClickUpcoming = ()=>{
        setShowUpcomingTable(true)
        setShowPastTable(false)
    }
    const handleClickPast = ()=>{
        setShowUpcomingTable(false)
        setShowPastTable(!false)
    }

   
    return(
        <div className="w-full flex flex-col m-20">
            <div className="">
            <span className=" text-xl font-bold mb-5">Streams and recording</span>
            </div>

         <div className="flex flex-row w-11/12 border-b-2">
      <button
        className={`text-black w-2/12 h-11 text-xl items-center  text-opacity-40 ${
          clicked===true ? "border-b-2 border-black text-black/80 font-semibold" : ""
        }`}
        onClick={handleBothUpcomingClicks}
      >
        Upcoming
      </button>
      <button
        className={`text-center text-black w-2/12 text-xl font-bold-70 text-opacity-40  ${
          clicked===false ? "border-b-2 border-black text-black/80 font-semibold" : ""
        }`}
        onClick={handleBothPastClicks}
      >
        Past
      </button>
    </div>
           

            <Link to={''} className=" w-28 mt-4 bg-black text-white h-9 rounded-md flex justify-center items-center">+Create</Link>
            {showUpcomingTable && <UpcomingTable/>}
            {showPastTable && <PastTable/>}
            
        </div>
        
    )
}