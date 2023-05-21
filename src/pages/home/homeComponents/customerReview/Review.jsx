import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const Review = () => {


  const [clients, setClients] = useState([])
  useEffect(() => {
    fetch('https://chef-recipe-hunter-server-side-amber.vercel.app/clients')
      .then(res => res.json())
      .then(result => setClients(result))
  }, [])
  return (
    <div>
      <div className="py-5">
        <h1 className="text-center font-bold text-2xl mb-5">Our Happy Clients</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-200 p-5">
       
     

            {clients.map((idx) => 

            <ReviewItem
              key={idx.id}
              idx={idx}
            ></ReviewItem>
            )}

          

        </div>
      </div>

    </div>
  );
};

export default Review;