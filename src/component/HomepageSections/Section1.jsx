import { FaArrowLeft } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa6"
import React, { useState } from 'react'

function Section1({secOneData}) {
 
    const [value,setValue]=useState(0)
   
    const handlePrev=()=>{
      value==126?"":setValue((prev)=>prev+42)
    //   console.log(value);
 
    }
    const handleNext=()=>{
      value==0?"":setValue((prev)=>prev-42)
    //   console.log(value);
    }

  return (
    <>  
     {  secOneData? secOneData.length &&
        <div className=' w-[90%] lg:w-[75%]  mx-auto flex flex-col mt-24 gap-4 overflow-hidden py-8 border-b-2 border-gray-300 z-10'>

                <div className='flex justify-between items-center '>
                
                    <h1 className='text-2xl font-bold '>What's on your mind?</h1>
                    <div className='flex gap-2'>
                        <div onClick={handlePrev} className={`dark:text-black cursor-pointer  h-[50px] w-[50px] flex items-center justify-center rounded-[50%] ${value==126?"bg-gray-100":"bg-gray-300"}`}>
                            <FaArrowLeft  />
                        </div>
                        <div onClick={handleNext} className={`dark:text-black cursor-pointer  h-[50px] w-[50px] flex items-center justify-center rounded-[50%]  ${value>0?"bg-gray-300":"bg-gray-100"}`}>
                            <FaArrowRight  />
                        </div>
                    </div>
                </div>
                <div style={{translate:`${-value}%`}} className='flex duration-1000 '>
                    {
                        secOneData.map((item,i)=>{
                            return(
                                    <img key={item?.id} className='min-w-32 ' src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.imageId}`} alt="abc" />
                            )
                        })
                    }
                </div>
                
        </div>:
        ""
     }
    </>
  )
}

export default Section1