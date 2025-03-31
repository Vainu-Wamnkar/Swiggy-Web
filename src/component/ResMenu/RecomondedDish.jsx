import React, { useContext, useRef, useState } from 'react'
import { SiCodesignal } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,clearCart} from '../../utils/cartSlice';
import toast from 'react-hot-toast';
import AddToCartBtn from '../AddToCartBtn.jsx';


function RecomondedDish({menuData,resInfo}) {


    const myDifRef=useRef(null)
    const [hideDiv,setHidDiv]=useState(0);
    const dispatch=useDispatch();



    const [isDiffRes,setIsDiffRes]=useState(false)
   



    //This function is Open and Close div
    const openDiv=(idx)=>{
      setHidDiv(hideDiv===idx?null:idx)
    }


    const handleIsDiffRes=()=>{
      setIsDiffRes((prev)=>!prev)
    }

    function handleClearCart(){    
      dispatch(clearCart([]))
      toast.success("Cart is Clear")
      handleIsDiffRes();
     
    }

   


  return (
    <div className={`xl:w-[60%] mx-auto relative ${isDiffRes===true?onclick={handleIsDiffRes}:""}`} >
        <div className='w-full   px-4'>
            <div className='dark:text-black'>
                <h1 className='text-lg text-center  font-semibold text-gray-700 tracking-[2px] flex items-center justify-center gap-2'>{<SiCodesignal className='mt-[4px] text-blue-600' />} MENU {<SiCodesignal className='mt-[4px] text-blue-600' />}</h1>  
                <Link to={'/search'}>
                    <div className=' cursor-pointer flex  items-center py-4  xl:gap-[270px] px-4 justify-between bg-slate-200 rounded-xl mt-5'>
                        
                        <p className='font-semibold text-gray-600 '>Search for dishes</p>
                        <FaSearch />
                    </div>
                </Link>
            </div>               
        </div>
        <div>
            {
              menuData.map((singleDishContainer,idx)=>(
               <div className='h-auto dark:text-black' key={idx}>
                      <div className='flex justify-between pr-6 pl-8 mx-4 mt-6 bg-slate-100 py-6 rounded-lg'>
                         <p className='text-lg font-bold  '>{singleDishContainer?.card?.card?.title}({singleDishContainer.card.card.itemCards.length})</p>
                           {
                            hideDiv===idx?<IoIosArrowUp className='text-2xl cursor-pointer'  onClick={()=>openDiv(idx)}/>: <IoIosArrowDown className='text-2xl cursor-pointer'  onClick={()=>openDiv(idx)}/> 
                           
                           }
                          
                      </div>
                      {
                        hideDiv===idx &&   
                        singleDishContainer.card.card.itemCards.map((ekDish,idx)=>(
                           
                            <div ref={myDifRef} className='flex items-start   sm:justify-between sm:flex-row flex-col flex-col-reverse    rounded-md px-4 py-2  border-b border-gray-400 mt-6 sm:h-[230px] md:h-[260px] gap-4' key={idx}>
                                <div>
                
                                      <div className='w-4 h-4 border-2 rounded-sm border-green-600 flex items-center justify-center'>
                                        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                      </div>
                                      <h2 className='font-bold text-gray-800 text-lg dark:text-white'>{ekDish.card.info.name}</h2>
                                      <p className='font-bold text-gray-800 text-lg dark:text-white'>₹{ekDish?.card?.info?.defaultPrice?(ekDish.card.info.defaultPrice)/100:(ekDish.card.info.price)/100}</p>
                                      <div className='text-gray-700 font-semibold mt-4 flex gap-1 items-center dark:text-white'>
                                        {
                                          ekDish?.card?.info?.ratings?.aggregatedRating?.rating?
                                           <p className='flex gap-1 items-center'>
                                               {<IoStarSharp className='text-emerald-600'/>} 
                                               <span className='text-emerald-800 '>{ekDish?.card?.info?.ratings?.aggregatedRating?.rating}</span>
                                               <span>({ekDish?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span>
                                           </p>:""
                                        }
                                      </div>
                                      <h4 className='md:w-[400px] sm:w-[300px] mt-2 text-gray-500 line-clamp-2 dark:text-white/80' >{ekDish.card.info.description}</h4>
                                      
                                </div>
                                <div className=' sm:relative flex  gap-20 items-center'>
                                    <img className='w-52 sm:w-48 h-44 rounded-lg border  p-[2px] mx-auto' src={`https://media-assets.swiggy.com/swiggy/image/upload/${ekDish.card.info.imageId}`} alt="No Available" />
                                    <div className='flex flex-col items-center justify-center sm:absolute  bottom-[-1px] left-1/2 -translate-x-1/2  md:top-44 '>
                                        <AddToCartBtn ekDish={ekDish} resInfo={resInfo} handleIsDiffRes={handleIsDiffRes} />
                                        <p className=' text-sm text-gray-500  hidden md:flex mt-6'>Customisable</p>
                                    </div>
                                </div>
                            </div>
                          )
                        )
                        
                      }
               </div>
              
                
              ))
            }
        </div>
        {
          isDiffRes && 
          <div className={`w-[520px] bg-[#ffffff] border-2 h-[220px] px-6 py-8 shadow-lg bottom-8 fixed left-[33%] z-50  `}>
              <div>
                  <h1 className='text-2xl font-bold '>Items already in cart</h1>
                  <p className='text-gray-500 text-base mt-4'>Your cart contains items from another restourent. Would you like to reset your cart for adding  items for this restaurent?</p>
              </div>
              <div className='flex justify-between mt-4 '>
                 <button onClick={handleIsDiffRes} className='py-3 w-[200px] font-semibold text-emerald-600 border-2 border-emerald-600'>NO</button>
                 <button onClick={handleClearCart} className='py-3 w-[200px] font-semibold text-white bg-emerald-600 border-2 border-emerald-600'>YES, START AFRESH</button>
              </div>
          </div>
        }
    </div>
  
  )
}

export default RecomondedDish
