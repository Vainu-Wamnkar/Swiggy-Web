import React from 'react'
import "../index.css"

function Simer() {
  return (
    <div className='mt-20 w-full'> 
        <div className='w-full h-[250px] sm:h-[350px] bg-slate-900 flex flex-col gap-6 items-center justify-center text-white'>
            <div className='relative '>
                <span className='loader '></span>
                <img className='w-12 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa" alt="" />
            </div>
            <h1 className='text-xl'>Looking for great food near you...</h1>
        </div>
        <div className='w-full  md:w-[90%] lg:w-[77%] mx-auto mt-9 overflow-hidden border-b border-gray-300 pb-10 mb-10 flex justify-center items-center sm:gap-14 md:gap-8 gap-10 flex-wrap'>
            {
                Array(12).fill().map((data,i)=>(
                    <div className='w-[85%] sm:w-[250px] h-[200px] bg-gray-200 rounded-lg' key={i}></div>
                ))
            }

        </div>
    </div>
  )
}

export default Simer


export function SimerCart(){

    return(
        <div className='mt-28 md:w-[85%] lg:w-[78%] mx-auto xl:w-[60%]'>
         <div className='flex justify-between'>
            <button className=' rounded-md mb-2 bg-gray-200 px-8 py-4'></button>
            <button className='rounded-md mb-2 bg-gray-200 px-8 py-4'></button>
         </div>
         <div className='flex flex-col gap-4'>
            <div className='bg-gray-200 h-52 mt-4 rounded-md'></div>
            <div className='bg-gray-200 h-52 mt-4 rounded-md'></div>
         </div>
         <div className='flex justify-between mt-4'>
            <button className=' rounded-md mb-2 bg-gray-200 px-16 py-4'></button>
            <button className='rounded-md mb-2 bg-gray-200 px-16 py-4'></button>
         </div>
           
        </div> 
    )
}

export function SimerResMenu(){

    return(
        <div className='mt-28 xl:w-[50%] md:w-[85%] lg:w-[75%] mx-auto relative px-6 '>
            <p className='bg-gray-200 sm:px-10 sm:py-4  w-[30%] rounded-md'></p>
            <br />
            <p className='bg-gray-200 px-6 py-4 w-[20%] rounded-md'></p>

            <div className='bg-gray-200 px-6 py-4  mt-4 h-32 rounded-md'></div>
            <div className='flex justify-between mt-6'>
                <button className=' rounded-md mb-2 bg-gray-200 px-16 py-4'></button>
                <button className='rounded-md mb-2 bg-gray-200 px-16 py-4'></button>
            </div>
            <div className=' absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 '><span className='search-loader'></span></div>
            <div className='bg-gray-100 px-12 py-8 w-full mt-6 rounded-md'></div>
            <div className='mt-8 bg-gray-200 h-44 rounded-md'> </div>
        </div> 
    )
}