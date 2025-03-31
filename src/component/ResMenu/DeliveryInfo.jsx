import { Link, useParams } from 'react-router-dom'
import { MdStarRate } from "react-icons/md";

function DeliveryInfo({resInfo}) {


    return (
    <div>
        <div className='xl:w-[50%] mx-auto pt-10'>
                <p className='text-sm text-gray-500  cursor-pointer ml-6 dark:text-white/80'><Link to={'/'}><span className='hover:text-gray-700 '>Home </span></Link> /<span className='hover:text-gray-700 '>{resInfo.city}</span> / <span className='text-gray-700 dark:text-white/70'>{resInfo.name}</span></p>
                <h1 className='text-2xl font-bold mt-5 ml-6'>{resInfo.name}</h1>
                <div className='w-full   h-[206px] mt-6 rounded-[30px] bg-gradient-to-t  from-slate-200 p-4'>
                       <div className='h-full w-full bg-white rounded-3xl shadow-xl border border-t-gray-400 p-4'>
                           <p className='flex items-center gap-1 font-semibold dark:text-black'>
                                 <MdStarRate className='text-white bg-green-700 rounded-[50%] pb-[1px]' /> 
                                 <span>{resInfo.avgRating} ({resInfo.totalRatingsString}) .</span>
                                 <span>{resInfo.costForTwoMessage}</span>
                           </p>
                           <p className='underline text-orange-500 font-bold'>{resInfo?.cuisines?.join(",")}</p>

                           <div className='flex items-center gap-4 mt-4'>
                                <div className='flex flex-col w-2 items-center mt-[2px]'>
                                    <div className='h-2 w-2 bg-gray-400 rounded-full'></div>
                                    <div className='h-6 bg-gray-400 w-[2px]'></div>
                                    <div className='h-2 w-2 bg-gray-400 rounded-full'></div>
                                </div>
                                <div>
                                    <div className='font-semibold dark:text-black'>
                                        <span>Outlet</span>
                                        <span className='text-gray-500 ml-2'>{resInfo.areaName}</span>
                                    </div>
                                    <p className='mt-[4px] font-semibold dark:text-black'>{resInfo?.sla?.slaString.toLowerCase()}</p>
                                </div>
                           </div>
                       </div>
                </div>
        </div>
    </div>
  )
}

export default DeliveryInfo