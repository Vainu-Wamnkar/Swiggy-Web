import React, { lazy, Suspense, useContext, useEffect, useState } from 'react'
import { CartContext, DataContext } from './dataAPI/DataProvider'
import { Route, Routes } from 'react-router-dom';
import "../src/index.css"

const Head =lazy(()=>import( './component/Head'))
const Search=lazy(()=>import('./component/Search'))
const Body = lazy(()=>import('./component/Body'))
const RestaurantMenu=lazy(()=>import( './component/ResMenu/RestaurantMenu'));
const SearchDishResMenu=lazy(()=> import('./component/ResMenu/SearchDishResMenu'));
const Cart=lazy(()=>import('./component/Cart'))
const SignInPage=lazy(()=>import('./component/SignInPage'));
const ServiceUnrecheble=lazy(()=>import('./component/ServiceUnrecheble'));

function App() {

  const jsonData=useContext(DataContext);
  const [visible,setVisible]=useState(false);
  // const [cartData,setCartData]=useState([])

  // function getDataFromLocalStorage(){
  //   let data=localStorage.getItem("cartlist");
  //   let parseData=data?JSON.parse(data):[]
  //   setCartData(parseData);
  // }

  // useEffect(()=>{
  //   getDataFromLocalStorage()
  // },[])


  return (
        <div className={`${visible?'overflow-hidden max-h-screen':''} w-screen max-w-full overflow-x-hidden min-h-screen overflow-y-auto scrollbar-hide dark:bg-gray-900`}>
            <DataContext.Provider value={jsonData}>
                <Suspense>
                    <Routes>
                        <Route path='/' element={<Head visible={visible} setVisible={setVisible} />}>
                            <Route path='/' element={<Body/>}></Route>
                            <Route path='/restaurantMenu/:id' element={<RestaurantMenu />}></Route>
                            <Route path='/searchdish' element={<SearchDishResMenu/>}></Route>
                            <Route path='/serviceUnrecheble' element={<ServiceUnrecheble/>}></Route>
                            <Route path='/mycart' element={<Cart/>}></Route>
                            <Route path='/search' element={<Search/>}></Route>
                            <Route path='*' element={<h1>Wrong path</h1>}></Route>
                        </Route>
                    </Routes>
                </Suspense>
            </DataContext.Provider>
        </div>
  )

}

export default App