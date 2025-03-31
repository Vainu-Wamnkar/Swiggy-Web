import React, { useState } from 'react'
import { IoArrowForward } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import AddToCartBtn from '../AddToCartBtn';
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';



function Dishes({dishes,mdPopUp,setMdPopUp}) {

  // let a=singleDish?.card?.card?.restaurant?.info?.name 
  // let a=singleDish?.card?.card?.restaurant?.info?.sla?.slaString
  // let a=singleDish?.card?.card?.restaurant?.info?.cloudinaryImageId
  
 
  const [dishData,setDishData]=useState()
  const {card}=dishData || {} ;
  const {card:pdishCard}=card || {};
  const {info,restaurant}=pdishCard || {};
  const {cloudinaryImageId}=restaurant?.info|| {};
  const {name,price,description}=info || {};

  function handleSearchPop(singleDish){
    setMdPopUp((prev)=>!prev)
    setDishData(singleDish)
  }
  

  // console.log(dishes);
 
  
    
  return (
    <>

    <div className='reletive'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4  '>
          { 
            dishes?.map((singleDish,i)=>{
              const {card}=singleDish || {};
              const {card:dishCard}=card || {};
              const {info,restaurant}=dishCard || {};
              const {name,avgRating,sla,cloudinaryImageId}=restaurant?.info || {};
              const dishInfo=dishCard?.info || {}
              console.log(singleDish);
              return(
    
                name &&
                <div className=' dark:bg-white/80  bg-white px-1 sm:px-4 md:px-6 py-8 rounded-md  h-auto flex flex-col gap-10 ' key={i}>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='font-bold text-gray-700/80'>{name}</p>
                            <p className='flex items-center gap-1'><IoStar className='font-bold text-gray-700/80'/><span className='text-gray-600 text-sm'>{avgRating}   {sla?.slaString}</span></p>
                        </div>
                        <Link to={`/restaurantMenu/${restaurant?.info?.id}`}>
                        <IoArrowForward className='text-xl' />
                        </Link>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <div className='mt-1 w-4 h-4 border-2 border-emerald-600 flex items-center justify-center'><div className='h-2 w-2 rounded-full bg-emerald-600'></div></div>
                            <p className='mt-1 font-bold text-black/80 w-44 t line-clamp-1'>{dishInfo?.name}</p>
                            <p className=' font-semibold text-black/80'>₹{(dishInfo?.price)/100}</p>
                            <button className='mt-4 flex items-center gap-1 border-2 px-2 py-1 rounded-2xl' onClick={()=>handleSearchPop(singleDish)}>more details <IoChevronForward  className='mt-[2px]'/></button>
                        </div>
                        <div className='relative'>
                            <img className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] sm:w-[100px] sm:h-[100px]  border-2 rounded-md' src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`} alt="" />
                            <AddToCartBtn ekDish={card} resInfo={restaurant}/>
                        </div>
                    </div>
  
                </div>
              )
            })
          }

      </div>  
      {
        mdPopUp && 
        <div className={`w-screen h-screen  absolute left-0 top-0 z-40   `} >
            <div className='w-[100%] h-[100%]  bg-black/60' onClick={handleSearchPop}>
            </div>
            <div className='w-[35%] bg-white h-[550px] rounded-xl z-50 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                <div className='h-[350px] overflow-hidden object-cover relative '>
                  <img className='rounded-lg' src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`} alt="" />
                  <p className='w-8 h-8 top-1 right-1 rounded-full flex items-center justify-center  bg-white absolute ' onClick={handleSearchPop}>
                    <RxCross1 className='text-xl font-bold cursor-pointer  text-black rounded-full'/>
                  </p>
                </div>
                <div className='flex justify-between items-center p-6'>
                  <div>
                    <p className='w-4 h-4 border-green-600 border-2 flex justify-center items-center'><p className='w-2 h-2 bg-green-500 rounded-full'></p></p>
                    <p className='font-bold text-black/70 w-96 line-clamp-1'>{name}</p>
                    <p className='font-bold text-black/70'>₹{(price)/100}</p>
                  </div>
                  <div className='relative mr-10'>
                    <AddToCartBtn ekDish={card} resInfo={restaurant}/>
                  </div>
                  
                </div>
                <p className='px-6  text-black/65 font-semibold'>{description}</p>
            </div>
        </div>
      }

    </div>   
    
    </>
  
  )
}

export default Dishes