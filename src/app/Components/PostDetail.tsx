"use client"
import moment from 'moment';
import React from 'react';
import parse from 'html-react-parser';
import extractHTML from '../Service/ExtractText';


type Props={
  createdAt:string
  slug:string
  title:string
  excerpt:string
  featuredImage:{url:string}
  category:{name:string}[]
  content:{json:object}
}

export default function PostDetail({category,createdAt,title,featuredImage,content}:Props) {
   const cata=category[0].name
  return (
    <>
    <div className="bg-white dark:bg-slate-950 text-black dark:text-white shadow-lg rounded-lg  md:pb-12 ">
       <h1 className='w-fit px-5 py-2 bg-red-700 rounded-xl text-center justify-center '>{cata}</h1>
       <h1 className="md:text-3xl text-lg font-semibold border-b-2 border-slate-300 pb-2 ">{title}</h1>
       <div className="font-medium  flex w-full justify-between">
        <h1>{"ሳምንቱን በታሪክ"}</h1>
        <div className="font-medium  flex w-fit justify-end">
            <p>Published on:</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle">{moment(createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
      <div className="relative overflow-hidden shadow-md mb-6">
        <img src={featuredImage.url} alt="" className="object-top h-auto w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 ">
          </div>
        </div>
        {parse(extractHTML(content.json))}
        </div>
    </div>

  </>
  )
}
