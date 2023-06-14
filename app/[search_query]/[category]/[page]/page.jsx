"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "@/app/components/Loading";
import MangaDetails from "@/app/components/MangaDetails";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";
// import styles from "../styles/paginate.css"
const OrderBy = ({ params }) => {
  const category = params.category;
  const page = params.page;
  const searchQuery=params.search_query
  const [orderedManga, setOrderedManga] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  console.log("order by", page, category,searchQuery);
 
  useEffect(() => {
    async function fetchOrderedManga() {
      setLoading(true);
      const response = await fetch(
        `https://api.jikan.moe/v4/manga?${searchQuery}=${category}&min_score=1&limit=24&page=${page}`
        
      );
      const data = await response.json();
      console.log("order", data);
      setOrderedManga(data.data);
      setLoading(false);
    }
    fetchOrderedManga();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
     
        <MangaDetails mangas={orderedManga} setMangas={setOrderedManga} />


        
        <ReactPaginate
    pageCount={20} 
    pageRangeDisplayed={3} 
    marginPagesDisplayed={0}
    // breakLabel="..."
    nextLabel="Next"
    previousLabel="Previous "
    onPageChange={(data) => {
      console.log(data.selected+1, "data.selected");
      router.push(`/allManga/${data.selected + 1}`);
    }} // Handle page change event
    containerClassName={"pagination"} // Set CSS class for container
    activeClassName={"active"} // Set CSS class for active page
  />
    </div>
  );
};

export default OrderBy;
