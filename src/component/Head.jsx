import React, { useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearch, IoBag } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircle } from "react-icons/io";
import { FaUser, FaCartArrowDown } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import SignInPage from "./SignInPage.jsx";
import DarkMode from "./DarkMode/DarkMode.jsx";

function Head({ visible, setVisible }) {
  const cartData = useSelector((state) => state.cartSlice.cartItems);
  const userData = useSelector((state) => state.authSlice.userData);
  const [loginVisible, setLoginVisible] = useState(false);
  const cText = useRef(null);
  const navigate = useNavigate();

  const handleVisibility = () => setVisible((prev) => !prev);
  const clearText = () => (cText.current.value = "");
  const handleLogin = () => setLoginVisible((prev) => !prev);
  const removeLogin = () => {
    setLoginVisible((prev) => !prev);
    navigate("/");
  };

  return (
    <>
      {/* Location side drawer */}
      <div className="w-full ">
        <div className={`w-full bg-black/30 h-screen fixed z-30 ${ visible ? "visible" : "invisible" }`} onClick={handleVisibility} >
        </div>
        <div className={`bg-white  w-full sm:w-[60%] md:w-[50%] lg:w-[40%] fixed z-40 h-full duration-300 ${ visible ? "left-0" : "left-[-100%]" }`} >
          <RxCross1 className="text-black my-8 ml-[80%] text-2xl cursor-pointer mt-24" onClick={handleVisibility} />
          <div className="mx-auto mb-8 w-[85%] px-4 py-2 border shadow-md rounded-md flex justify-between">
            <input  ref={cText}  type="text"  placeholder="Search area..."  className="outline-none w-full" />
            <p className="text-orange-500 cursor-pointer" onClick={clearText}> Cancel</p>
          </div>
          <div className="border w-[85%] mx-auto rounded-md px-4 py-2 mb-8">
            <div className="flex gap-2 items-center">
              <FaLocationCrosshairs className="text-gray-500" />
              <Link to={"/serviceUnrecheble"} onClick={handleVisibility}>
                <p className="hover:text-orange-500 font-semibold">
                  Get Current Location
                </p>
              </Link>
            </div>
            <p className="mt-1">Using GPS</p>
          </div>
        </div>
      </div>

      {/* Login Drawer */}
      <div className="w-full">
        <div className={`w-full bg-black/30 h-full fixed z-30 ${ loginVisible ? "visible" : "invisible" }`} onClick={removeLogin}>

        </div>
        <div className={`bg-white w-full sm:w-[60%] md:w-[50%] lg:w-[40%] fixed z-40 h-full duration-300 ${ loginVisible ? "right-0" : "right-[-100%]" }`} >
          <RxCross1 className="text-black my-8 ml-10 text-2xl cursor-pointer mt-24" onClick={removeLogin} />
          <div className="flex ml-10 mb-8 gap-10 items-center">
            <div>
              <h1 className="text-3xl font-semibold">Login</h1>
              <p>
                or{" "}
                <span className="text-[#ff5200] font-semibold">
                  create an account
                </span>
              </p>
            </div>
            <img className="w-28" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"  alt="" />
          </div>
          {!userData && (
            <div className="ml-10 border w-[333px] px-4 py-2 mb-8">
              <p className="text-gray-500">Phone number</p>
              <input type="text" className="outline-none py-2 font-bold w-full"/>
            </div>
          )}
          <div className="flex flex-col gap-2 items-start ">
            <SignInPage />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="relative w-full scrollbar-hide ">
        <div className={`w-full shadow-lg h-20 flex items-center fixed bg-white top-0 z-20 dark:bg-gray-900 dark:text-white `}>
          <div className="w-full flex flex-wrap items-center px-4 justify-between sm:px-8 md:px-[68px] lg:px-[140px] xl:px-[165px] ">
            <div className="flex items-center gap-4">
                <Link to={"/"}>
                    <img
                    src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png"
                    alt="swiggylogo"
                    className="sm:w-10 w-8"
                    />
                </Link>
                <div className="flex items-center gap-1 cursor-pointer" onClick={handleVisibility}>
                    <p className="font-bold border-b-2 border-black dark:border-white">Others</p>
                    <MdOutlineKeyboardArrowDown className="text-xl text-orange-600" />
                </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
              <Link to={'/search'} className="flex items-center gap-2 ">
                <IoSearch className="lg:mt-1"/>
                <p className="hidden sm:block font-semibold">Search</p>
              </Link>
              </div>
              <Link to={"https://www.swiggy.com/support"} className="flex items-center gap-2 hover:text-orange-500">
                <IoMdHelpCircle className="lg:mt-1"/>
                <p className="hidden sm:block font-semibold">Help</p>
              </Link>
              <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500" onClick={handleLogin} >
                {
                    userData ? 
                    ( <img src={userData.photo}  alt="User" className="w-8 rounded-full" /> ) :
                    (  <FaUser /> )
                }
                <p className="hidden sm:block font-semibold ">
                  {userData ? (userData.name.split(" ")[0]) : "Sign in"}
                </p>
              </div>
              <Link to={"/mycart"} className="flex items-center gap-2 cursor-pointer hover:text-orange-500" >
                <div className="flex gap-1 items-center"b>
                  <FaCartArrowDown />
                  {
                    cartData.length > 0 && 
                    <span className="text-green-500 sm:hidden">[{cartData.length}]</span>
                  }
                </div>
                <p className="hidden sm:block font-semibold">
                  Cart{" "}
                  {cartData.length > 0 && (
                    <span className="text-green-500">[{cartData.length}]</span>
                  )}
                </p>
              </Link>
              <DarkMode/>
            </div>
          </div>
        </div>
        
        <Outlet />
      </div>
    </>
  );
}

export default Head;
