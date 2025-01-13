"use client"
import React, { useState, useEffect } from 'react';
import { MdMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image';
import Link from "next/link"
import ThemeToggle from './Themetoggle';
import moment from "moment-timezone";
import logo from "../../public/logo.jpg"
import { FaTwitter, FaFacebookF,FaYoutube ,FaInstagram , FaTelegramPlane,FaWhatsapp } from "react-icons/fa";
 const icon=[<FaTwitter  key={1} className='text-white'  />, <FaFacebookF  key={1}  className='text-white' />,<FaYoutube  key={1}  className='text-white' /> ,<FaInstagram   key={1}  className='text-white' />, <FaTelegramPlane  key={1}  className='text-white' />,<FaWhatsapp  key={1}  className='text-white' />]

export default function Header() {
  const [currentTime, setCurrentTime] = useState("");
  const [openSearch,setOpensearch]=useState(false)
  const [searchValue,setSearchvalue]=useState("")
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // Set the current time when the component mounts
    const interval = setInterval(() => {
      setCurrentTime(moment().format("YYYY/M/D HH:mm EAT"));
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={` sticky z-50 top-0 bg-white dark:bg-slate-950   mb-8  shadow-md shadow-gray-100 dark:shadow-slate-900
    transition-transform duration-500  ${
        isScrolled ? "md:-translate-y-28  -translate-y-20 " : "translate-y-0"
      } `}>
      <div className='bg-slate-900  hidden md:flex  w-full h-8 overflow-y-hidden' >
        <div className=' md:mx-3  w-full flex justify-between items-center'>
             <div className='flex gap-3 text-white items-center'>
                  <p >{currentTime}</p>
                  <hr className='h-8 w-[1px] bg-slate-300 ' />
                  <div className='flex items-center gap-3'>{["English","አማረኛ","العربية","Oromia","Afar"].map(p=><p key={p} className='text-white cursor-pointer'>{p}</p>) }</div>
              </div>
              <div className='flex gap-5'>
                    {icon.map((i,index)=><p className='cursor-pointer' key={index}>{i}</p>)}
              </div>
        </div>
      </div>
        <div className="flex justify-between md:justify-between h-20 items-center  md:mx-32 mx-3  border-b  border-blue-400">
           <div className='md:hidden flex w-fit'  >
                <MdMenu onClick={()=>setOpen(!open)} className='text-black dark:text-white h-10 w-10 cursor-pointer '  />
                <div
        className={`${
          open ? "block opacity-100" : "hidden opacity-0"
        }    transition-opacity duration-1000 ease-in-out md:hidden bg-white dark:bg-slate-950 text-black  dark:text-white  w-full absolute left-0 top-32`}
      >
        <div className="flex flex-col py-4 ">
        <div className=' text-black dark:text-white'>
                  <p >{currentTime}</p>
                  <div className='flex  justify-between py-2 text-lg mx-2 '><p>Dark Mode</p> <ThemeToggle  /></div>
                  <p className='py-2 text-lg mx-2'>Languages</p>
                  <div className='w-full mt-2 bg-slate-100 dark:bg-slate-900'>{["English","አማረኛ","العربية","Oromia","Afar"].map(p=><p key={p} className='w-full pl-2 py-2 border-b-2 border-slate-300  cursor-pointer '>{p}</p>) }</div>
              </div>
  
        </div>
      </div>
         </div>
          <Link href="/">
           <Image src={logo}  alt='logo'  className='w-20 h-12  rounded-full object-center  object-cover   cursor-pointer ' />
            {/* <span className="cursor-pointer font-bold text-4xl text-black dark:text-white">Graph CMS</span> */}
          </Link>
          <div className='flex justify-between items-center gap-5'>
            <div className="md:flex hidden" >
          <ThemeToggle />
          </div>
         <IoIosSearch onClick={()=>setOpensearch(!openSearch)} className={` ${openSearch?"hidden":"block"} text-black dark:text-white h-8 w-8 cursor-pointer `} />
          <div className={`${openSearch?"block":"hidden"} flex gap-2`}>
          <input type="text" onChange={(e)=>setSearchvalue(e.target.value)} autoFocus={true}  className={` h-10 w-56 text-black rounded-lg focu border-2 border-black dark:border-white `} />
         <Link href={`/search/${searchValue}`}  className='w-fit bg-white text-center p-2  border-2 border-black dark:border-white rounded-lg'>{"ፈልግ"}</Link>
          </div>
          </div>
        </div>
        <div className=" flex gap-8 py-2 justify-center md:justify-end md:mx-32  text-black dark:text-white">
        {[{name:"ቀዳሚ ገፅ",path:"/"},{name:"ስፖርት",path:"/section/ስፖርት"},{name:"ፖለቲካ",path:"/section/ፖለቲካ"},{name:"ዜና",path:"/section/ዜና"}].map((category, index) => (
            <Link key={index} href={`${category.path}`}><span className="text-2xl   font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
        
    </div>
  )
}


