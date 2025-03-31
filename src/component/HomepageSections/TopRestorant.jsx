import React from 'react'
import { MdStarRate } from "react-icons/md";
import { Link } from 'react-router-dom';

function TopRestorant({secTwoData,value,link}) {
  // console.log(secTwoData[0].info.id);
  // console.log(secTwoData[0].cta.link);
  return (
    <>
      {
        secTwoData.map((item,i)=>{
            return(
              <Link to={`/restaurantMenu/${secTwoData[i]?.info?.id}`} key={i}>
                  <div style={{translate:`${-value}%`}} className=' w-80 h-[350px] rounded-lg hover:scale-90 duration-1000 transition-all' key={i}>
                      <img className='w-[300px] h-[200px] rounded-lg mb-4 ' src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.info?.cloudinaryImageId}`} alt="abc" />
                      <h2 className='text-xl font-bold'>{item?.info?.name?.length>20?item?.info?.name?.slice(0,20)+"...":item.info.name}</h2>
                      <p className='text-base font-semibold flex items-center gap-1'>{<MdStarRate className='text-white bg-green-700 rounded-[50%] pb-[1px]' />} {item?.info?.totalRatingsString}{` `}{item?.info?.sla?.slaString}</p>
                      <p className='text-gray-800 w-[250px] overflow-x-hidden line-clamp-1 dark:text-white/60'>{item?.info?.cuisines?.map((singleDishName)=>(singleDishName)+" ")}</p>
                      <p className='text-gray-800 dark:text-white/60'>{item?.info?.areaName}</p>
                  </div>
              </Link>
            )
        })
      }
    </>
  )
}

export default TopRestorant