"useClient"
import React from 'react'
import { Horizontal,Vertical,TextCard } from './Cards'
import { getSportPosts } from '@/app/Service'
import { useEffect,useState } from 'react'
import Skeletel from '../skele/Skeletel'
import ReloadButton from '../ReloadButton'


export default function Sport() {
  const [allpost,setallPost]=useState([])
   const [spost,setSpost]=useState()
   const [hpost,setHpost]=useState([])
   const [textpost,setTextpost]=useState([])
   const [reload,setReload]=useState(false)
      useEffect(()=>{
       const Handler=async()=>{
        try {
          const posts =await getSportPosts()
          setallPost(posts)
         setSpost(posts.shift()) 
        setHpost(posts.slice(1,3))
        setTextpost(posts.slice(3))
        } catch (error) {
          console.log(error);
          return  setReload(true)
          
        }
       }
       Handler()
      },[])
  return (
    <>
    {reload?<ReloadButton />:(
    <>
         <div className=' hidden md:grid md:grid-cols-3 lg:mx-32 md:mx-5 gap-3'>
              <div>
                {spost?<Vertical  post={spost}  />:<Skeletel variant={"rectangular"} height={500}  /> }
              </div>
              <div className='flex flex-col gap-3'>
                  {hpost ? hpost.map((p)=>     <Horizontal post={p} key={p}  />):<Skeletel variant={"rectangular"} height={200}  />} 
              </div>
              <div className='my-2 md:my-0'>
                {textpost? textpost.map((p)=><TextCard  rposts={p}  key={p}/>):<Skeletel variant={"rectangular"} height={32}  />}
              </div>
         </div>
         <div className='md:hidden flex'>
         {allpost?allpost.map((p)=><TextCard  rposts={p}  key={p}/>):<Skeletel variant={"rectangular"} height={32}  />}
         </div>
    </>
    )} </>
  )
}
