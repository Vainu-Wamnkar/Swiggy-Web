
import React from 'react';
import { IoStar } from "react-icons/io5";
import { Link } from 'react-router-dom';

function SearchRestaurantData({restaurant}) {
  
  return (
    <div className='w-full grid-cols-1 grid sm:grid-cols-2 gap-4 sm:gap-2'>
        {
          restaurant?.map((singleRest)=>{
            const {card}=singleRest || {};
            const {card:resCard}=card|| {};
            const {info}=resCard|| {};
            const {cloudinaryImageId,name,avgRating,sla,aggregatedDiscountInfoV3,costForTwoMessage,cuisines}=info|| {};

            return (
            <Link to={`/restaurantMenu/${info.id}`}>  
              <div className=' h-44 dark:bg-white/80 bg-white flex items-center gap-4 sm:gap-2  md:gap-4 p-2 rounded-lg'>
                <div className='relative'>
                  <div className='md:w-24 md:h-24 w-20 h-20 '>
                    <img className='w-full h-full  rounded-md' src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`} alt="" />
                  </div>
                  {
                    aggregatedDiscountInfoV3?.header &&
                    <button className='absolute px-2  bottom-[-25px] border-2 border-orange-600 bg-white rounded-lg w-full  '>
                      <p className='text-orange-600 text-[13px] font-bold '>{aggregatedDiscountInfoV3?.header}</p>
                      <p className='text-orange-600 font-semibold text-[10px] '>{aggregatedDiscountInfoV3?.subHeader}</p>
                    </button>
                  } 
                </div>
                <div className='overflow-hidden'>
                  <h2 className='font-bold '>{name}</h2>
                  <p className='flex items-center gap-1 md:gap-2 text-gray-600 text-[14px] sm:text-[12px] lg:text-base'>
                    <IoStar className='font-bold text-gray-700/80'/>
                    <span>{avgRating}</span>
                    <span>{sla?.slaString}</span>
                    <span>{costForTwoMessage}</span>
                  </p>
                  <p className='text-gray-600 line-clamp-2 sm:text-[12px] lg:text-base lg:mr-2'>{cuisines+" "}</p>

                </div>
              </div>  
            </Link>
            )
          })
        }
    </div>
  )
}

export default SearchRestaurantData