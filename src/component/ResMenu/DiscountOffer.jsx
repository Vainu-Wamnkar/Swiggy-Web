import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa6"


function DiscountOffer({discountData}) {

    const [value,setValue]=useState(0)

    const handlePrev=()=>{
        discountData.length==5?value==300?"":setValue((prev)=>prev+100):value==87?"":setValue((prev)=>prev+87)
        console.log(value);

    }
    const handleNext=()=>{
        discountData.length==5?value==0?"":setValue((prev)=>prev-100):value==0?"":setValue((prev)=>prev-87)
        console.log(value);
    }
    // console.log(discountData);

    return (
        <div className='xl:w-[50%] mx-auto h-52 mt-7 px-6 '>
            <div className='flex justify-between p-4 items-center'>
                <h2 className='text-xl font-bold'>Deals for you</h2>
                <div className='flex gap-2'>
                    <div onClick={handlePrev} className={`dark:text-black cursor-pointer  h-[50px] w-[50px] flex items-center justify-center rounded-[50%] ${discountData.length==5 ?value==300?"bg-gray-100":"bg-gray-300":value==87?"bg-gray-100":"bg-gray-300"}`}>
                        <FaArrowLeft />
                    </div>
                    <div onClick={handleNext} className={`dark:text-black cursor-pointer  h-[50px] w-[50px] flex items-center justify-center rounded-[50%]  ${value>0?"bg-gray-300":"bg-gray-100"}`}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='flex xl:gap-6 flex-nowrap overflow-hidden xl:px-4 '>
                    {
                        discountData.map((singleDiscount,i)=>(
                            <div key={i} style={{translate:`${-value}%`}} className='duration-500 min-w-80 h-24 border border-gray-300 rounded-xl px-4 py-2 flex gap-2 items-center'>
                                <img className='w-[50px]' src={`https://media-assets.swiggy.com/swiggy/image/upload/${singleDiscount?.info?.logoBottom}`} alt="" />
                                <div>
                                    <h2 className='font-bold text-lg'>{singleDiscount?.info?.header}</h2>
                                    <h2 className='font-bold text-gray-500 text-sm'>{singleDiscount?.info?.couponCode}</h2>
                                </div>
                           </div>
                        ))
                    }
            </div>
        </div>
    )
}

export default DiscountOffer