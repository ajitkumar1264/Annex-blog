import React from 'react'
import {auth} from '../Config';
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

function Signout() {

const nav=useNavigate();

const signoutg=async()=>{

    signOut(auth).then(()=>
    {
        alert("succesfully signout");
        nav('/')
    }).catch((error)=>console.log(error))
}



  return (
    <>
    
    <button type="submit" onClick={signoutg} class="flex  px-10 py-1 text-xl font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign out</button>
    </>
  )
}

export default Signout