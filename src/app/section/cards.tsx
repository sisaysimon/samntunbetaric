"use client"
import React from "react";
import { getCategorypost} from "../Service";
import { useEffect,useState } from "react";
import Link from "next/link";
import Skeletel from "../Components/skele/Skeletel";
import { formatDistanceToNow } from 'date-fns';
import ReloadButton from "../Components/ReloadButton";


type props={
    category:string
}
type PoseProps={
    slug:string
    excerpt:string
    featuredImage:{url:string}

}
export default function  SectionCard({category}:props){
  const [post,setPost]=useState<PoseProps>()
  const [spost,setSpost]=useState([])
  const [wpost,setWpost]=useState([])
  const [reload,setReload]=useState(false)
    useEffect(()=>{
     const Handler=async()=>{
      try {
        const posts =await getCategorypost(category)
        console.log(posts);
        const pos =await posts && posts.shift()
           setPost(pos)
           setSpost(posts.slice(0,2))
           return setWpost(posts.slice(2))  
      } catch (error) {
        console.log();
        return setReload(true)
      }
        
     }
     Handler()
    },[category])
  return (
    <>{reload?<ReloadButton />:(
    <>
    <div className="grid md:grid-cols-12 grid-cols-1 gap-5">
        {post?(
        <div className="md:col-span-8">
      <Link href={`/post/${post.slug}`} >
    <div className="group relative overflow-hidden mb-5  w-full h-[450px]   ">
      {/* Image */}
      <img
        src={post.featuredImage.url}
        alt="Church"
        className="w-full h-[450px] object-top  object-cover  shadow-lg  cursor-pointer 
         transform transition-transform duration-1000 ease-in-out group-hover:scale-105"
      />
    
      {/* Text content */}
      <div className="absolute bottom-0  flex flex-col  p-2">
        {/* Headline */}
        <p className="text-white text-sm bg-black/50 px-1 rounded-xl ">
          {post.excerpt}
        </p>
      </div>
    </div>
    </Link>
    </div>
    ):<Skeletel  height={450} width={700} variant={"rectangular"} />} 
    <div className="md:col-span-4">
    {spost&&spost.map((post)=>{
      return(
        <Link key={post.slug} href={`/post/${post.slug}`} >
          <div className="group relative overflow-hidden mb-5 ">
      {/* Image */}
      <img
        src={post.featuredImage.url}
        alt="img"
        className="w-full h-[215px] object-top  object-cover  shadow-lg  cursor-pointer 
         transform transition-transform duration-1000 ease-in-out group-hover:scale-105"
      />
    
      {/* Text content */}
      <div className="absolute bottom-0  flex flex-col  p-2">
        {/* Headline */}
        <p className="text-white text-sm bg-black/50 px-1 rounded-xl  ">
          {post.excerpt.slice(0,80)}
        </p>
      </div>
    </div>
        </Link>
      )
    })}
    </div>
    </div>
    <div className="bg-white  text-black dark:text-white dark:bg-slate-950 shadow-lg rounded-lg  pb-12 ">
      <div>
      <h3 className="text-xl  font-semibold  w-fit  p-0 m-0"> {"የመረጥንላችሁ"} </h3>
      <hr className='h-2 w-10 rounded-full bg-red-700 mb-2' />
      </div>
   
    {wpost?wpost.map((post, index) => (
      <Link href={`/post/${post.slug}`}  key={index}>
      <div key={index} className="flex items-center w-full mb-4">
        <div className="flex  gap-2">
          <div className=' relative overflow-hidden group '>
          <img
            alt={post.title}
            className="align-middle object-top cursor-pointer  object-cover rounded-none w-72 h-44  transform 
            transition-transform duration-1000  ease-in-out group-hover:scale-105"
            src={post.featuredImage.url}
          />
            </div>
          <div className='flex flex-col gap-3'>
          <p className={` font-xl font-light text-slate-400 dark:text-slate-600  w-fit flex gap-2 items-center`}>{ formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p> 
          <p  className="text-md text-balance" >{  post.title}</p>
          </div>
        </div>
      </div>
      </Link>
    )):[1,2,3,4].map(p=><Skeletel key={p} variant={"rectangular"} width={400} height={300} />)}
  </div>
    </>
    )}</>
  );
};

