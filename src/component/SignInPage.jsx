import { signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../config/firebaseAuth'
import { useDispatch, useSelector } from 'react-redux'
import { addUserData, removeUserData } from '../utils/authSlice'
import { useNavigate } from 'react-router-dom'

function SignInPage() {

    const navigate=useNavigate();

    const dispatch=useDispatch()
    const userData=useSelector((state)=>state.authSlice.userData)

    async function handleAuth(){

       let data= await signInWithPopup(auth,provider)
       console.log(data);
       const userData={
          name:data.user.displayName,
          photo:data.user.photoURL  
       }
       dispatch(addUserData(userData))
       navigate("/")
       
    }

    async function handleLogOut(){
        await signOut(auth)
        dispatch(removeUserData())
        navigate("/")
    }

  return (
    <>
      {
        userData?(<button className='ml-10 md:ml-10 bg-red-500 font-bold text-white w-[330px] py-4' onClick={handleLogOut}>Log out</button>)
        :(<button className='ml-10 md:ml- bg-[#ff5100e2] active:bg-[#f5550b] font-bold   text-white w-[280px] md:w-[330px] py-4' onClick={handleAuth}>Login with Google</button>)
      }
        <p className='ml-10 w-[280px] md:w-[333px] text-sm font-semibold  text-gray-600 '>By clicking on Login,I accept the <span className='text-black'>Terms & Conditions & Privacy Policy</span></p>      
    </>
  )
}

export default SignInPage