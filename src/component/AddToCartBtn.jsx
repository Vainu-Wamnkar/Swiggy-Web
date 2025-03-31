import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import toast from 'react-hot-toast';
import { addToCart } from '../utils/cartSlice';

function AddToCartBtn({ekDish,resInfo,handleIsDiffRes}) {

  const cartData=useSelector((state)=>state.cartSlice.cartItems)
  const getResInfoFromLocalStore=useSelector((state)=>state.cartSlice.resInfo)
  const dispatch=useDispatch();
  
  function handleAddToCart(ekDish){
    const isAdded=cartData.find((data)=>data.id===ekDish.card.info.id)
    if(isAdded){
      toast.error("Item Already Added")
    }else{
      if(getResInfoFromLocalStore.name===resInfo.name || getResInfoFromLocalStore.length===0){
        let info=ekDish.card.info;
        dispatch(addToCart({info,resInfo}))
        toast.success("Item Added Successfuly to cart ")
      }
      else{
        toast.error("Diffrent restourent item",{duration:1000})
        handleIsDiffRes();
      }
    }
  }

  return (
    <button className='sm:px-6 sm:bottom-[-1px] sm:text-base lg:px-8 lg:text-xl lg:bottom-[-20px]  absolute bottom-[-20px] left-1/2 -translate-x-1/2 font-bold text-emerald-600 text-xl bg-[#fff] px-10 py-2 rounded-lg   border border-gray-300 hover:bg-slate-300' onClick={()=>handleAddToCart(ekDish)} >ADD</button>
  )
}

export default AddToCartBtn