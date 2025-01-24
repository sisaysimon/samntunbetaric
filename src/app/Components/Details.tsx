"use client"
import { Postwidget,PostDetail} from '../../app/Components';
import {getPostDetails,getSimilarPosts,getRecentPosts, } from "../Service"
import { useEffect,useState} from 'react';
import {PostProps} from "../types"
import Link from 'next/link';
import Skeletel from './skele/Skeletel';
import Skeleton from '@mui/material/Skeleton';
import WidgetSkeletel from './skele/widget';
import ReloadButton from './ReloadButton';



type Props={
    slug:string
}


export default function Details({slug}:Props) {
    const [post,setPost]=useState<PostProps>();
    const [rpost,setRpost]=useState([])
    const  [sposts,setSposts]=useState([])
    const [reload,setReload]=useState(false)
  useEffect(() => {
    const handler=async()=>{
      try {
      const posts=await  getPostDetails(slug)
      if(posts.error) {
       return setReload(true)
      }else{
        setPost(posts) 
        posts &&  getRecentPosts().then((rposts)=>{
          const fill =(value)=>{
            return value.slug !== posts.slug
          }
             const pp=rposts.filter(fill)
             setRpost(pp)
              })
        posts &&  getSimilarPosts(posts.category,posts.slug,4).then((sposts)=>{
              setSposts(sposts)
        })
      }
      
      } catch (error) {
        console.log(error); 
        return setReload(true)
      }
    }
   handler() 
  }, []);
 
 
  return (
    <>{reload?<ReloadButton />:(
    <>
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-5  text-black dark:text-white">
          <div className="col-span-1 lg:col-span-8">
            {post?<PostDetail title={post.title} category={post.category} slug={post.slug} featuredImage={post.featuredImage} createdAt={post.createdAt}  content={post.content} excerpt={post.excerpt} />:(<>
              <Skeletel variant={"rectangular"} height={50} width={80} />
              <Skeleton variant={"text"} sx={{ fontSize: '1rem' }} width={460}  />
              <Skeleton variant={"text"} sx={{ fontSize: '1rem' }} width={260}  />
            <Skeletel variant={"rectangular"} height={500}  />
            <Skeleton variant={"text"} sx={{ fontSize: '1rem' }} width={460}  />
              <Skeleton variant={"text"} sx={{ fontSize: '1rem' }} width={260}  />
              <Skeleton variant={"text"} sx={{ fontSize: '1rem' }} width={460}  />
              <Skeleton variant={"text"} sx={{ fontSize: '1rem' }} width={260}  /> </>)}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              {post?<>
                {rpost &&<Postwidget  rposts={rpost}   />}
                
              </>:(<>{[1,2,3,4].map(p=><WidgetSkeletel key={p} />)}</>)}
            </div>
          </div>
          
        </div>
        <div className='text-black dark:text-white pt-10'>
          <p className='text-2xl font-semibold   p-0 m-0'>{"ተዛማጅ ወሬ" }</p>
          <hr className='text-red-700 bg-red-700 w-14 h-2 mb-2 rounded-xl border-none' />
        <div className='grid grid-cols-1  md:grid-cols-4 gap-3 '> 
    {sposts[0]?(
      <>{sposts.map((spost)=>{
        return (
    <Link key={spost.slug} href={`/post/${spost.slug}`}>
    <div className="group relative overflow-hidden  w-full h-[full]   ">
    {/* Image */}
    <img
      src={spost.featuredImage.url}
      alt="Img"
      className="w-full h-[200px] object-top  object-cover  shadow-lg  cursor-pointer 
       transform transition-transform duration-1000 ease-in-out group-hover:scale-105"
    />
  
    {/* Text content */}
    
      <p className=" leading-relaxed w-full px-2 md:px-0">
        {spost.excerpt.slice(0,100)}
      </p>
  </div>
  </Link>
      
    )
  })}</>
  ):(<>{[1,2,3,4].map((p)=>{
    return(
      <div key={p} className="group relative overflow-hidden  w-full h-[full]   ">
        <Skeletel  variant={"rectangular"} height={200} />
        <Skeleton variant={"text"} sx={{ fontSize: '1rem' }} width={150}  />
        <Skeleton variant={"text"} sx={{ fontSize: '1rem' }} width={100}  />
        
      </div>
    )
  })}</>)} </div>
  <hr className='w-full h-2 my-2 border-none bg-slate-400 dark:bg-slate-700 rounded-2xl' />
  </div> 
    </>
    )}</>
  )
}
