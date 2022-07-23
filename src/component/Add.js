import { async } from '@firebase/util';
import React,{useState} from 'react'
import {db,auth} from '../Config';
import {addDoc, collection} from 'firebase/firestore';
import {useNavigate} from 'react-router-dom'

function Add() {

    const [Name, setName] = useState('');
    const [date, setdate] = useState("");
    const [Title, setTitle] = useState("");
    const [Content, setContent] = useState("");
    const [like, setlike] = useState(0);

    const nav=useNavigate();

  


    const Createnew=async()=>{

        const collref=collection(db,"Blog");
        const payload={
            name:Name,
            Date:date,
            title:Title,
            content:Content,
            Like:Number(like),
            
        }
     await addDoc(collref,payload );
     nav('/blog');
       
    }




  return (
    <>

    <div>
    <div className='items-center px-5 py-12 lg:px-20'>
          <div className='flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0'>
          <div className=''>
          <div className=''>
          <div className='space-y-6'>
          <div>
          <h1 className='text-7xl font-bold'>Add data</h1></div>
          
          <div>
           <h1 className='text-2xl '>Enter Name</h1>
           <div className='mt-2'>
           <input type="text" onChange={(e)=>setName(e.target.value)} value={Name} className='bg-gray-300 box px-3 py-2 w-96 rounded-lg text-black' placeholder='enter first name' /></div>
          </div>
          <div>
           <h1 className='text-2xl '>Date</h1>
           <div className='mt-2'>
           <input type="text" onChange={(e)=>setdate(e.target.value)} value={date} className='bg-gray-300 box px-3 py-2 w-96 rounded-lg text-black' placeholder='enter Date' /></div>
          </div>
          <div>
           <h1 className='text-2xl '>Title</h1>
           <div className='mt-2'>
           <input type="text" onChange={(e)=>setTitle(e.target.value)} value={Title} className='bg-gray-300 box px-3 py-2 w-96 rounded-lg text-black' placeholder='enter title' /></div>
          </div>
          <div>
           <h1 className='text-2xl '>Content</h1>
           <div className='mt-2'>
           <textarea type="text" onChange={(e)=>setContent(e.target.value)} value={Content} className='bg-gray-300 box px-3 py-2 w-96 rounded-lg text-black' placeholder='enter Content' /></div>
          </div>
          <div>
           <h1 className='text-2xl '>Likes💌</h1>
           <div className='mt-2'>
           <input type="text" onChange={(e)=>setlike(e.target.value)} value={like} className='bg-gray-300 box px-3 py-2 w-96 rounded-lg text-black' placeholder='enter number of like' /></div>
          </div>


          <div className='flex justify-between '>
          <div>
          <a href="/blog">
          <button type='submit' className='  bg-sky-500 px-10 py-2 rounded-lg text-xl font-medium "flex items-center justify-center transition duration-500 ease-in-out transform  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500' >back</button>
          </a>
          </div>
          <div>
          <button type='submit' className='  bg-sky-500 px-10 py-2 rounded-lg text-xl font-medium "flex items-center justify-center transition duration-500 ease-in-out transform  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500' onClick={Createnew}>add</button>
          </div>
          </div>
          
          </div>
          </div>
          
          </div>
          </div>
    </div>
    </div>
    
    </>
  )
}

export default Add