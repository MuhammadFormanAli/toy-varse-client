import React, { useEffect, useState } from 'react';

const Review = () => {

    
    const[clients,setClients]=useState([])
    useEffect(()=>{
        fetch('https://chef-recipe-hunter-server-side-amber.vercel.app/clients')
        .then(res=>res.json())
        .then(result=>setClients(result))
    },[])
    return (
        <div>
            <div className="py-5">
  <h1 className="text-center font-bold mb-5">Our Happy Clients</h1>

  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 bg-slate-200 p-5">
    {clients.map((idx) => (
      <div className='bg-slate-100 rounded-lg p-3' key={idx.id}>
        <div className="flex flex-col justify-center items-center ">
          <img data-aos="fade-left" className="text-center rounded-full my-2 w-1/4" src={idx?.clientImg} alt="Client" />
          <div className="text-center">
            <h3 className="text-secondary font-bold">{idx.name}</h3>
            <p className="">{idx.testimonial}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
            
        </div>
    );
};

export default Review;