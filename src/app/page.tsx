"use client"
import { NewsCard,Postwidget } from "./Components";
import { getRecentPosts } from "./Service";
import { useEffect,useState } from "react";
import Skeletel from "./Components/skele/Skeletel";
import Sport from "./Components/sport/Sport";


export default function Home () {
  const [post,setPost]=useState()
  const [recentpost,setRecentpost]=useState()
  useEffect(()=>{
   const Handler=async()=>{
      const posts =await getRecentPosts()
      console.log(posts);
      
      const pos =await posts.shift()
       setPost(pos)
     return  setRecentpost(posts)
       
   }
   Handler()
  },[])
  
  return (
    <>
    <div className="md:mx-32 " >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5  " >
           <div className="md:col-span-7 col-span-1  "> 
              {post?<NewsCard post={post}  />:<Skeletel  height={450} width={700} variant={"rectangular"} />} 
           </div>
           <div className="md:col-span-5 col-span-1 " >
             <Postwidget rposts={recentpost} />    
           </div>
      </div>
    </div>
    <div className="sport">
        <h1 className="w-full text-center text-2xl text-white py-5 ">ስፖርት</h1>
             <Sport />
       </div>
    </>
  );
}


