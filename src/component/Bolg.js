import React,{useState,useEffect} from 'react'
import Signout from './Signout'
import {db} from '../Config';
import { collection, getDoc,getDocs, updateDoc,doc, deleteDoc} from 'firebase/firestore'
import { async } from '@firebase/util';

function Bolg() {


const [data, setdata] = useState([]);

const updatelike=async(Like,id)=>{

  const updlike=doc(db,'Blog',id);
  const newlike={Like:Like+1};
  updateDoc(updlike,newlike);

}





useEffect(() => {

  const getdata=async()=>{

     const collref=collection(db,'Blog');
    const dat=await getDocs(collref);
    setdata(dat.docs.map((doc)=>({
     ...doc.data(),id:doc.id
     })))
   
  }

  getdata();
 
  
  
  
}, [])


const deltefile=(id)=>{

  const delref=doc(db,'Blog',id);
  deleteDoc(delref);

}





  return (
    <>
    <section className='mt-20'>
    <div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div class="w-full mx-auto">
                <h1 className='text-8xl font-bold mb-20 '>Annex Blog 📝</h1>
                   
                <div className='flex justify-between items-end'>
                    <div className='mt-7 flex '>
                   <Signout/>  
                   </div>
                   <div >
                   <a href="/add">
                   <button type="submit"  class="flex  px-10 py-1 text-xl font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add data</button>
                   </a>
                   </div>
                   </div>
                <div className='box py-2 border-b-4 border-green-500 mt-5 mb-10'></div>
                


                
           
                {data.map((data)=>{
                  return(
                    <div>

                    <div className='flex justify-start items-end mt-5 '>
                    <div>
                    <span className='text-6xl '>Ⓜ️</span>
                    </div>
                    <div className='ml-5'>
                    <h1 className='text-xl'>{data.name}</h1>
                    <h3>{data.Date}</h3>
                    </div>
                    </div>



                    <h2 className='text-5xl font-semibold mb-10'><br />{data.title}</h2>
                    <p className='text-2xl font-normal'>{data.content}</p>
                     
                <div className='flex justify-between items-center mt-10'>
                <div className='flex justify-center items-center' >
                <div>
                <button type='submit' className='bg-green-500 px-5 py-2 rounded-lg text-xl font-medium "flex items-center justify-center transition duration-500 ease-in-out transform  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black' onClick={()=>{updatelike(data.Like,data.id)}}>Like</button>
                </div>
                <div className='ml-5'>
                <h1 className='text-2xl'>{data.Like}</h1>
                </div>
                </div>
                <div>
                <button type='submit' className='bg-red-500 px-5 py-2 rounded-lg text-xl font-medium "flex items-center justify-center transition duration-500 ease-in-out transform  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black' onClick={()=>{deltefile(data.id)}}>delete</button></div>
                </div>
                <div className=' box py-2 border-b-4 border-sky-500 mt-7'>

                </div>
                    </div>
                  )
                })}

               
               
            </div>
        </div>
    </div>
</section>

</>
  )
}

export default Bolg