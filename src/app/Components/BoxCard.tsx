import React from "react";



export default function  BoxCard({post}){
  return (
    
    <div className="group relative overflow-hidden mb-5 ">
      {/* Image */}
      <img
        src={post.featuredImage.url}
        alt="Church"
        className="w-full h-[200px] object-top  object-cover  shadow-lg  cursor-pointer 
         transform transition-transform duration-1000 ease-in-out group-hover:scale-105"
      />
    
      {/* Text content */}
      <div className="absolute bottom-0  flex flex-col  p-4">
        {/* Badge */}
        <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-md self-start">
        {post.category.map((p)=>p.name)}
        </span>
        {/* Headline */}
        <p className="text-white text-sm   ">
          {post.excerpt.slice(0,80)}
        </p>
      </div>
    </div>
  );
};

