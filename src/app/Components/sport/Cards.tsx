import Link from "next/link"




export  function Vertical({post}) {
  return (
    <Link href={`/post/${post.slug}`}>
    <div className="group relative overflow-hidden mb-5 w-full ">
    {/* Image */}
    <img
      src={post.featuredImage.url}
      alt="Church"
      className="w-full h-[400px] object-top  object-cover  shadow-lg  cursor-pointer 
       transform transition-transform duration-1000 ease-in-out group-hover:scale-105"
    />
  
    {/* Text content */}
  
      <p className="absolute bottom-0 text-white text-sm bg-black/50 mx-2 mb-2 rounded-xl ">
        {post.excerpt}
      </p>
  </div>
  </Link >
  )
}



export  function Horizontal({post}) {
  return (
    <Link href={`/post/${post.slug}`}>
    <div className="group relative overflow-hidden  w-full h-[195px]   ">
    {/* Image */}
    <img
      src={post.featuredImage.url}
      alt="Church"
      className="w-full h-[245px] object-top  object-cover  shadow-lg  cursor-pointer 
       transform transition-transform duration-1000 ease-in-out group-hover:scale-105"
    />
  
    {/* Text content */}
    
      <p className="text-white text-sm bg-black/50 mx-2 mb-2 rounded-xl ">
        {post.excerpt.slice(0,100)}
      </p>
  </div>
  </Link>
  )
}



export  function TextCard({rposts}) {
  return (
    <Link href={`/post/${rposts.slug}`}>
      <div  className="flex items-center w-full bg-slate-300 cursor-pointer">
        <div className="flex  gap-2">
          <div className=' relative overflow-hidden group min-w-44'>
          <img
            alt={rposts.title}
            className="align-middle object-top  object-cover rounded-none min-w-44 h-32  transform 
            transition-transform duration-1000  ease-in-out group-hover:scale-105"
            src={rposts.featuredImage.url}
          />
            </div>
          <div className='flex flex-col '>
          <Link href={`/post/${rposts.slug}`} className="text-md  text-xl text-balance" >{rposts.title}</Link>
          </div>
     </div>
     </div>
     </Link>
  )
}
