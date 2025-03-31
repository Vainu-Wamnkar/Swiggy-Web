import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
function ResmenuFooter({resInfo}) {
  return (
    <footer>
        <div className='xl:w-[50%] h-[500px] bg-slate-100 mx-auto relative bottom-0 mt-6 p-6 w-[95%]'>
             <div>
                <div className='flex gap-4 items-center py-6 border-b-2 border-gray-300'>
                    <img className='w-20' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i" alt="" />
                    <p className='mt-2 text-gray-500 text-sm'>License No. 11418010000511</p>
                </div>
                <div className='py-6 border-b-2 border-gray-300'>
                    <h4 className='font-semibold text-gray-600'>{resInfo.name}</h4>
                    <p className='text-gray-500 text-sm'>Outlet:({resInfo.areaName})</p>
                    <p className='text-[12px] text-gray-500 flex gap-2 mt-3 items-center text-sm'><FaLocationDot /> {resInfo.areaName}, Bhopal</p>
                </div>
                <div className='mt-4'>
                    <h4 className='text-center font-bold text-base'>For better experience, download the Swiggy app now</h4>
                    <div className='flex gap-4 justify-center mt-4'>
                        <img className='w-40' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="" />
                        <img className='w-40' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="" />
                    </div>
                </div>
             </div>
        </div>
    </footer>
  )
}

export default ResmenuFooter