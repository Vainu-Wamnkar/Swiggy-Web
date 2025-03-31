
import React, { useContext, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa6"
import TopRestorant from './TopRestorant.jsx';


function Section2({secTwoData}) {
    const [value,setValue]=useState(0);

    // console.log(window.innerWidth);
    const handlePrev=()=>{
      // if(window.innerWidth<400){
      //   value>1690?setValue((prev)=>prev+100):""
      //   console.log(value);
      // }
      // value>1690?"":setValue((prev)=>prev+260)
      if(window.innerWidth<413){
        console.log("less then 400");
        value<=420 ?setValue((prev)=>prev+105):""
        console.log(value);
      }
      else{
        value>1690?"":setValue((prev)=>prev+260)
      }
 
    }
    const handleNext=()=>{
      if(window.innerWidth<413){
        value<105?"":setValue((prev)=>prev-105)
        console.log(value);
      }
      else{
        value==0?"":setValue((prev)=>prev-260)
      }
    }





    return (
      <>
      { secTwoData? secTwoData.length>0 &&
        <div className='w-[90%] md:w-[90%] lg:w-[75%] mx-auto mt-9 overflow-hidden border-b border-gray-300 pb-10 mb-10'>
              <div className='flex justify-between items-center '>
                    <h1 className='text-2xl font-bold '>Top restaurant chains in Bhopal</h1>
                    <div className='flex gap-2'>
                        <div onClick={handlePrev} className={`dark:text-black cursor-pointer  h-[50px] w-[50px] flex items-center justify-center rounded-[50%] ${value>=1680?"bg-gray-100":"bg-gray-300"}  `}>
                            <FaArrowLeft />
                        </div>
                        <div onClick={handleNext} className={`dark:text-black cursor-pointer  h-[50px] w-[50px] flex items-center justify-center rounded-[50%]  ${value==0?"bg-gray-100":"bg-gray-300"}`}>
                            <FaArrowRight />
                        </div>
                    </div>
              </div>
              <div className='flex gap-8  mt-6'>
                  <TopRestorant secTwoData={secTwoData} link={secTwoData[0].cta.link} value={value}/>
              </div>
                  
        </div>
        :""
      }
      </>
    )
}

export default Section2