import { useContext, useEffect, useState, useTransition } from "react"
import TopSection from "./HomepageSections/TopSection.jsx"
import MiddleSection from "./HomepageSections/MiddleSection.jsx"
import EndSection from "./HomepageSections/EndSection.jsx"
import "../index.css"
import Simer from "./Simer.jsx"


function Body() {

      const [secOneData,setSecOneData]=useState([])
      const [secTwoData,setSecTwoData]=useState([])
      const [secThreeData,setSecThreeData]=useState([])


      async function fetchHomeData() {
        const data= await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
        const res=await data.json();
        console.log(res);
        
        let sec1=res?.data?.cards?.find(data=>data.card.card.id=="whats_on_your_mind")?.card?.card?.imageGridCards?.info
        setSecOneData(sec1)

        let section2=res?.data?.cards?.find(data=>data?.card?.card?.id=="top_brands_for_you")?.card?.card?.gridElements?.infoWithStyle?.restaurants
        let section22=res?.data?.cards?.find(data=>data?.card?.card?.id=="restaurant_grid_listing_v2")?.card?.card?.gridElements?.infoWithStyle?.restaurants

        setSecTwoData(section2)
        setSecThreeData(section2 || section22)

        
      }
      // console.log(secOneData);

      useEffect(()=>{
        fetchHomeData()
      },[])

 
    return (
      <>
      { 
         secThreeData.length?
        <div className='w-full scrollbar-hide z-10 overflow-x-hidden md:px-4 dark:bg-gray-900 dark:text-white'>
          <TopSection secOneData={secOneData}/>
          <MiddleSection secTwoData={secTwoData}/>
          <EndSection secThreeData={secThreeData}/>   
        </div>
        :<Simer/>
      }
      </>
    )
}

export default Body


// MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/30/458029e2-7658-491c-8e16-407c92c19531_PCHotchocolateday.png
// MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/30/458029e2-7658-491c-8e16-407c92c19531_PCHotchocolateday.png
// https://media-assets.swiggy.com/swiggy/image/upload/




