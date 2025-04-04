import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../dataAPI/DataProvider'
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeToCart } from '../utils/cartSlice';
import toast from 'react-hot-toast';
import { SimerCart } from './Simer.jsx';

function Cart() {
    // const {cartData,setCartData}=useContext(CartContext)
    const cartData=useSelector((state)=>state.cartSlice.cartItems)
    const userData=useSelector((state)=>state.authSlice.userData)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [value,setValue]=useState(false);
    const resInfo=JSON.parse(localStorage.getItem("resInfo")) || ""
    
    // console.log(cartData); 
    
    // console.log(cartData);
    
    let totalPrice=0;
    for(let i=0; i<cartData.length; i++){
      totalPrice=totalPrice+(cartData[i]?.price )/100 || (cartData[i]?.defaultPrice)/100
    }

    function handleRemoveCart(i){
        if(cartData.length>1){
          let newArr=[...cartData]
          newArr.splice(i,1)
          dispatch(removeToCart(newArr))
          toast.success("One Item Removed")
          // setCartData(newArr)
        }else{
          handleClearCart();
        }      
    }

    function handleClearCart(){
        
        dispatch(clearCart([]))
        toast.success("Cart is Clear")
        // setCartData([])
       

    }

    function handlePlaceOrder(){
      if(!userData){
        toast.error("Please Login")
        // navigate("/signin")
        return
      }
      toast.success("Order Placed")
    }


    function handleBack(){
      if(resInfo){
        navigate(`/restaurantMenu/${resInfo.id}`)
      }else{
        navigate("/")
      }
    }
    
  return (
    <>
   {
    cartData.length?
    <div className='mt-28 md:w-[85%] dark:min-h-screen lg:w-[78%] mx-auto xl:w-[60%]'>
        
        <div className='flex justify-between px-6 '>
           <button className='border-2 px-4 py-1 rounded-md mb-2 bg-slate-100 active:bg-slate-300' onClick={handleBack}>back</button>
           {
            cartData.length>0? <button onClick={handleClearCart} className='border-2 px-4 py-1 text-white rounded-md mb-2 bg-green-400 active:bg-green-600'>Clear Cart</button>:""
           }
        </div> 
        <div className='flex items-start my-4 px-6 gap-4'>
          <img className='w-64 h-64 rounded-sm' src={`https://media-assets.swiggy.com/swiggy/image/upload/${resInfo?.cloudinaryImageId} `} alt="" />
          <p className='dark:text-white text-4xl border-b-4 border-white pb-2'>{resInfo?.name}</p>
        </div>

        {
            cartData.length<=0?<h1 className='text-2xl text-center font-bold mt-20 text-gray-600'>Please Do Some Order...</h1>:
            cartData.map((data,i)=>(
                <div className='px-6 sm:mx-6  dark:bg-white/80  bg-slate-100  flex justify-between py-4  sm:items-center flex-col flex-col-reverse sm:flex-row ' key={i}> 
                    <div>
                        <h1 className='text-xl sm:text-2xl '>{data?.name}</h1>
                        <h1 className='text-xl font-bold'>₹{data?.defaultPrice/100 || data?.price/100}</h1>
                        <h1 className='text-base line-clamp-2 sm:w-[350px] lg:w-[500px] text-gray-500'>{data?.description}</h1>
                    </div>
                    <div className='sm:relative flex justify-between  items-center '>
                        <img className='sm:w-44 sm:h-44 w-32  rounded-lg border  md:p-[2px]' src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.imageId}`} alt="No Available" />
                        <button onClick={()=>handleRemoveCart(i)} className='font-bold text-base md:text-xl bg-red-500 px-6 text-white py-2 rounded-lg  active:bg-red-700  sm:absolute bottom-[-15px] sm:left-8 md:left-[25px]'>Remove</button>
                    </div>


                </div>
            ))
        }
        <div className='flex  justify-between px-6  mt-4'>
            {
              cartData.length>0?<h1 className='text-xl font-bold dark:text-white'>Total Price - ₹{totalPrice}</h1>:""
            }
            {
             cartData.length>0? <button className='border-2 px-4 py-1 rounded-md mb-2 text-white bg-green-400 active:bg-green-600 ' onClick={handlePlaceOrder}>Place order</button>:""
            }
        </div>
             
           
    </div>
    :cartData.length>0?(<SimerCart/>):
     <div className='mt-28 md:w-[85%] lg:w-[78%] mx-auto xl:w-[60%] px-6 dark:min-h-screen'>
       <button className='border-2 px-4 py-1 rounded-md mb-2 bg-slate-100 active:bg-slate-300' onClick={handleBack}>back</button>
       <h1 className='text-2xl text-center font-bold text-gray-600 mt-36'>Please Do Some Order...</h1>
     </div>
     
   } 
    </>
  )
}

export default Cart