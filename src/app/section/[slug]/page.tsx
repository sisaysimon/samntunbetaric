"use client"
import SectionCard from "../cards";



export default function Page({ params }: { params: { slug: string } }) { 
  const decodedSlug = decodeURIComponent(params.slug);

    return (
        <>
        <div className=" lg:mx-32 md:mx-5  mb-8 bg-white dark:bg-slate-950">
          <SectionCard   category={decodedSlug}  />
        </div>
      </>
    )
  }
