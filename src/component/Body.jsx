import { useContext, useEffect, useState, useTransition } from "react"
import Section1 from "./HomePageSections/Section1"
import Section2 from "./HomePageSections/Section2"
import Section3 from "./HomepageSections/Section3"
import "../index.css"
import Simer from "./Simer"


function Body() {

      const [secOneData,setSecOneData]=useState([])
      const [secTwoData,setSecTwoData]=useState([])
      const [secThreeData,setSecThreeData]=useState([])


      async function fetchHomeData() {
        const data= await fetch(`${import.meta.env.VITE_BASE_URL}/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
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
          <Section1 secOneData={secOneData}/>
          <Section2 secTwoData={secTwoData}/>
          <Section3 secThreeData={secThreeData}/>   
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




