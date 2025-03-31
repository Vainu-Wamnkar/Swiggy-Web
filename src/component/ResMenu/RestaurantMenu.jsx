import DeliveryInfo from './DeliveryInfo.jsx';
import DiscountOffer from './DiscountOffer.jsx';
import { DataContext } from '../../dataAPI/DataProvider';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import Recomonded from './RecomondedDish.jsx';
import RecomondedDish from './RecomondedDish.jsx';
import MenuCircle from './MenuCircle';
import ResmenuFooter from './ResmenuFooter.jsx';
import { SimerResMenu } from '../Simer.jsx';



function RestaurantMenu() {

    const secFourData=useContext(DataContext);
    const link=secFourData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants

    
    
    const {id}=useParams();
    
    const [menuData,setMenuData]=useState([])
    const [resInfo,setResInfo]=useState([]); 
    const [discountData,setDiscountData]=useState([])

    async function  fetchResMenuData () {
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2214298&lng=77.41264&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const res= await data.json();

        const rresInfo=res?.data?.cards?.find(data=>data?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card?.card?.info
        setResInfo(rresInfo);

        const ddiscountData=(res?.data?.cards?.find(data=>data?.card?.card?.["@type"]==="type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"))?.card?.card?.gridElements?.infoWithStyle?.offers
        setDiscountData(ddiscountData)

        let actualMenu=(res?.data?.cards.find(data=>data?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((data)=>data?.card?.card?.itemCards))
        setMenuData(actualMenu )
    
    }
    useEffect(()=>{
        fetchResMenuData();
    },[])

 
        

    return (
        <> 
        {
            menuData.length?
            <div className='w-full mx-auto mt-20 sm:px-8 lg:px-32 dark:bg-gray-900 dark:text-white'>
                
                <DeliveryInfo resInfo={resInfo} />
                <DiscountOffer  discountData={discountData} />
                <MenuCircle/>
                <RecomondedDish menuData={menuData} resInfo={resInfo}/>
                <ResmenuFooter resInfo={resInfo}/>

            </div>
            :<SimerResMenu/>
        }
        </>
    )
}

export default RestaurantMenu