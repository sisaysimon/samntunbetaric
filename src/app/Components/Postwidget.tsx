
import Link from 'next/link';
import WidgetSkeletel from './skele/widget';




export default function Postwidget({rposts}) {
  return (
    <div className="bg-white  text-black dark:text-white dark:bg-slate-950 shadow-lg rounded-lg  pb-12 ">
      <div>
      <h3 className="text-xl  font-semibold  w-fit  p-0 m-0"> {"የመረጥንላችሁ"} </h3>
      <hr className='h-2 w-10 rounded-full bg-red-700 mb-2' />
      </div>
   
    {rposts?rposts.map((post, index) => (
      <Link href={`/post/${post.slug}`}  key={index}>
      <div key={index} className="flex items-center w-full mb-4">
        <div className="flex  gap-2">
          <div className=' relative overflow-hidden group min-w-44'>
          <img
            alt={post.title}
            className="align-middle object-top cursor-pointer  object-cover rounded-none min-w-44 h-32  transform 
            transition-transform duration-1000  ease-in-out group-hover:scale-105"
            src={post.featuredImage.url}
          />
            </div>
          <div className='flex flex-col gap-3'>
            <div className='flex'>
            <hr className='h-10 w-2 rounded-full bg-red-700' />
          <p className={` font-xl font-semibold  w-fit flex gap-2 items-center`}>{post.category[0].name }</p> 
          </div>
          <p  className="text-md text-balance" >{  post.title}</p>
          </div>
        </div>
      </div>
      </Link>
    )):[1,2,3,4].map(p=><WidgetSkeletel key={p} />)}
  </div>
  )
}
