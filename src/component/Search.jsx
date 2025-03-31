import React, { useEffect, useRef, useState } from 'react'
import Dishes from './SearchComponent/Dishes.jsx';
import SearchRestaurantData from './SearchComponent/SearchRestaurantData.jsx';
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "../index.css"

function Search() {

  const [searchQuery,setSearchQuery]=useState("");
  const [activeBtn,setActiveBtn]=useState("Dishes");
  const [dishes,setDishes]=useState([])
  const [restaurant,setRestaurant]=useState()
  const [mdPopUp,setMdPopUp]=useState(false)
  const [searchString,setSearchString]=useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  
    const filterOptions=[
        {filterName:"Restourant"},
        {filterName:"Dishes"},
    ]

    const handleFilterBtn=(filterName)=>{
      setActiveBtn(activeBtn===filterName?activeBtn:filterName)
      // console.log(filterName);
      
    }

    async function fetchDishData(){
        let data= await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.2214298&lng=77.41264&str=${searchQuery}&trackingId=f8ce79f0-7ecf-a508-82a5-e7599611a3a7&submitAction=ENTER&queryUniqueId=478adf29-39c7-a167-458a-423bb8f77d43`)
        let res=await data.json()
        setDishes(res?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);
        setIsLoading(false)
    
    }   

    async function fetchRestourantData(){
        let data= await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.2214298&lng=77.41264&str=${searchQuery}&trackingId=undefined&submitAction=ENTER&queryUniqueId=4eb555bb-afc2-8aed-fcd6-e2a00c9fbc90&selectedPLTab=RESTAURANT`)
        let res=await data.json()
        setRestaurant(res?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
    }   

    useEffect(()=>{
      fetchDishData()
      fetchRestourantData()
    },[searchQuery]) 
    

    
    function handleSearch(e) {
      if(e.key==="Enter"){ 
        setSearchQuery(searchString)
        setIsLoading(true)
      }
      else{
        if(e.keyCode>=65 && e.keyCode<=90){
          setSearchString((prev)=>prev+e.key)
        }
      }
    }

    function handleSearchBtn(){
      setSearchQuery(searchString)
      setIsLoading(true)
    }
    
      
    function clearSearch(){
      setSearchString("")
      setSearchQuery("")

    }


      
  return (
    <> 
        <div className={` w-[95%]  md:w-[90%] lg:w-[80%] xl:w-[70%] min-h-screen mx-auto ${mdPopUp?"overflow-hidden max-h-screen":"mt-28"} `}>
            <div className='border-2 dark:border-white/50 px-2 md:px-10 py-4 flex items-center rounded-md w-full'>
              <input onKeyDown={handleSearch} value={searchString}   type="text" placeholder='Search for restourant and food' className=' outline-none w-full mx-auto font-bold dark:bg-gray-900 dark:text-white' />
              {searchQuery===""?<FaSearch className='cursor-pointer dark:text-white' onClick={handleSearchBtn}/>:<RxCross1 className='text-xl font-bold cursor-pointer dark:text-white' onClick={clearSearch}/>}

            </div>
            <div className='flex flex-wrap gap-1 md:gap-3 px-2 my-4 '>
                {
                    filterOptions.map((singleFilter,i)=>(
                    <button className={`dark:text-white filter-Btn flex items-center gap-2 font-bold ${activeBtn===singleFilter.filterName?"bg-black/70  text-white":""}`} key={i} onClick={()=>handleFilterBtn(singleFilter.filterName)}>
                        <p>{singleFilter.filterName}</p>
                    </button>
                    ))
                }
            </div> 
            {
              isLoading?(<div className=' mt-16 flex justify-center items-center'><span className='search-loader '></span></div>):
              
              <div className={` w-full sm:p-1 md:p-4 p-2`}>
                    {
                        activeBtn==="Dishes"?<Dishes dishes={dishes} mdPopUp={mdPopUp} setMdPopUp={setMdPopUp}/>:<SearchRestaurantData restaurant={restaurant}/>
                    }
              </div>
            } 
    
        </div>
      
    </>
    
  )
}

export default Search