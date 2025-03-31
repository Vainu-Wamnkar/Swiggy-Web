import React, { useContext, useEffect, useState } from 'react'
import { MdStarRate } from "react-icons/md";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

function EndSection({secThreeData}) {
  
  const [filterVal,setFilterVal]=useState(null)
  const [filteredData,setFilteredData]=useState([])
  let jsonData1=secThreeData
  

 useEffect(()=>{
    let newfilteredData=jsonData1.filter((item)=>{
    if(!filterVal) return true
    switch(filterVal){
      case "Rating 4.3+": return item?.info?.avgRating>4.3
      case "Rs. 300- Rs. 600": return Number(item?.info?.costForTwo.slice(1,4))>=300 && Number(item?.info?.costForTwo.slice(1,4))<=600
      case "Offers": return item?.info?.aggregatedDiscountInfoV2 && Object.keys(item?.info?.aggregatedDiscountInfoV2).length>0 || item?.info?.aggregatedDiscountInfoV3 && Object.keys(item?.info?.aggregatedDiscountInfoV3).length>0
      case "Less than 300": return Number(item?.info?.costForTwo.slice(1,4))<300
      default : return true;
    }
  })
  // console.log(newfilteredData);
  setFilteredData(newfilteredData)
 },[filterVal])

  const ssecThreeData=filterVal? filteredData:jsonData1 

  const filterOptions=[
    {filterName:"Rating 4.3+"},
    {filterName:"Rs. 300- Rs. 600"},
    {filterName:"Offers"},
    {filterName:"Less than 300"},
  ]


   


  const [activeBtn,setActiveBtn]=useState(null)

  const handleFilterBtn=(filterName)=>{
    setActiveBtn(activeBtn===filterName?null:filterName)
    setFilterVal(filterName)
    // console.log(filterName);
    
  }

  function remFilterVal(){
    setFilterVal(()=>setFilterVal(null));
    console.log(filterVal);
    
  }

 

  return (
    
    <div className='w-[95%] md:w-[90%] mt-20    h-screen z-10 sm:ml-8 '> 
       <div className='flex  flex-col gap-5   lg:ml-[80px] '>
            <h1 className='text-2xl ml-2 sm:mt-10 font-bold px-2 xl:ml-10'>Restaurants with online food delivery in Bhopal</h1>
            <div className='flex flex-wrap gap-1 md:gap-3 px-2 xl:ml-10'>
                {
                  filterOptions.map((singleFilter,i)=>(
                    <button className={`filter-Btn flex items-center gap-2 ${activeBtn===singleFilter.filterName?"bg-gray-200":""}`} key={i} onClick={()=>handleFilterBtn(singleFilter.filterName)}>
                      <p>{singleFilter.filterName}</p>
                      <RxCross2 className={`mt-[2px] hover:text-red-600  ${activeBtn===singleFilter.filterName?"":"hidden"}`} onClick={remFilterVal}/>
                    </button>
                  ))
                }
            </div>
            <div className='grid grid-cols-1 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-4 md:px-2 lg:gap-12 xl:ml-8'>
                    {
                    ssecThreeData.map((item,i)=>{
                        return(
                          <Link to={`/restaurantMenu/${secThreeData[i].info.id}`} key={i}>
                            <div className='w-[360px] md:w-[350px]  h-[350px] rounded-lg hover:scale-90 duration-600 transition-all overflow-hidden px-4' key={i}>
                                <img className='w-80 sm:max-w-[270px] md:w-[220px] h-[200px]  rounded-lg mb-4 ' src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.info.cloudinaryImageId}`} alt="abc" />
                                <h2 className='text-xl font-bold'>{item.info.name.length>20?item.info.name.slice(0,20)+"...":item.info.name}</h2>
                                <p className='text-base font-semibold flex items-center gap-1'>{<MdStarRate className='text-white bg-green-700 rounded-[50%] pb-[1px]' />} {item.info.totalRatingsString}{` `}{item.info.sla.slaString}</p>
                                <p className='dark:text-white/60 text-gray-800 w-[250px] overflow-x-hidden line-clamp-1'>{item.info.cuisines.map((singleDishName)=>(singleDishName)+" ")}</p>
                                <p className='dark:text-white/60 text-gray-800'>{item.info.areaName}</p>
                            </div>
                        </Link>
                        )
                    })
                    }
            </div>
        </div>
    </div>
  )
}

export default EndSection