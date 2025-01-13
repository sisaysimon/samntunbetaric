"use client"
import { getSearch } from "@/app/Service";
import { useEffect, useState,useCallback } from "react";
import BoxCard from "@/app/Components/BoxCard";
import Skeletel from "@/app/Components/skele/Skeletel";



export default function Page({ params }: { params: { slug: string } }) { 
  const [items, setItems] = useState([]); // Store loaded items
  const [page, setPage] = useState(0); // Current page (start with 0)
  const [loading, setLoading] = useState(false); // Loading state
  const [hasMore, setHasMore] = useState(true); // To check if more data exists
  const itemsPerPage = 10; // Number of items per page
  const decodedSlug = decodeURIComponent(params.slug);
  const fetchData = useCallback(async () => {
     if (loading || !hasMore) return;
     setLoading(true);
     try {
          const data =await getSearch(decodedSlug,itemsPerPage,page*itemsPerPage)
          console.log(data); 
       if (data.length === 0) {
         setHasMore(false); // No more data to load
       } else {
             // Avoid duplicates by checking the slug property
           const newItems = data.filter(
          (newItem) => !items.some((existingItem) => existingItem.slug === newItem.slug)
        );
         setItems((prev) => [...prev,...newItems]); // Append new items
         setPage((prev) => prev + 1); // Increment page number
       }
     } catch (error) {
       console.error("Error fetching data:", error);
     } finally {
       setLoading(false);
     }
   }, [page, hasMore, loading]);
   // Scroll Event Listener
  useEffect(() => {
     const handleScroll = () => {
       const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
       if (scrollTop + clientHeight >= scrollHeight - 10 && hasMore && !loading) {
         fetchData(); // Fetch more data when scrolled to the bottom
       }
     };
 
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, [fetchData, hasMore, loading]);
     // Initial Data Fetch
  useEffect(() => {
     fetchData();
   }, []); // Fetch the first page on component mount
    return (
     <>
        <div className="mx-32 hidden   mb-8 bg-white dark:bg-slate-950 md:grid grid-cols-1 gap-3 md:grid-cols-4">
             {items.length ? items.map((post,index)=><BoxCard key={index} post={post} />):[1,2,3,4,5,6,7,8].map((p)=><Skeletel key={p} variant={"rectangular"} height={200}/>)}
        </div>
        <div className=" mb-8 bg-white dark:bg-slate-950 md:hidden flex-col">
             {items.length ? items.map((post,index)=><BoxCard key={index} post={post} />):[1,2,3].map((p)=><Skeletel key={p} variant={"rectangular"} height={200} />)}
        </div>
        <p className="py-2 text-center font-semibold text-black dark:text-white mx-32">{loading&&"Loading..."}</p>
        </>
    )
  }
