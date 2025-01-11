"use client"
import { useState,useEffect } from "react"
import { IoMoonOutline } from "react-icons/io5"
import { IoSunnySharp } from "react-icons/io5";


export default function ThemeToggle() {
    const [darkmode,setDarkmode]=useState(true)
    useEffect(()=>{
       const theme=localStorage.getItem("theme")
       if(theme==="dark") setDarkmode(true)  
    },[])
useEffect(()=>{
  if(darkmode){
    document.documentElement.classList.add('dark')
    localStorage.setItem("theme","dark")
  } else{
    document.documentElement.classList.remove('dark')
    localStorage.setItem("theme",'light')
  }
},[darkmode])
  return (
    <div  onClick={()=>setDarkmode(!darkmode)} className="h-8 w-14 flex cursor-pointer  p-2 items-center rounded-r-2xl  rounded-l-2xl bg-slate-300 dark:bg-slate-800">
       {darkmode?<IoSunnySharp className="text-white ml-auto " />:<IoMoonOutline  className="text-white mr-auto"  />}
    </div>
  )
}
