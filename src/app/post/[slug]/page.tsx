"use client"
import Details from "@/app/Components/Details"



export default function Page({ params }: { params: { slug: string } }) { 
  const decodedSlug = decodeURIComponent(params.slug);

    return (
        <>
        <div className=" lg:mx-32 md:mx-5   mb-8 bg-white dark:bg-slate-950">
         <Details  slug={decodedSlug} />
        </div>
      </>
    )
  }
