import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MostLoved = () => {

    const [trending, setTrending] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/trending')
            .then(res => res.json())
            .then(result => setTrending(result))
    }, [])

console.log(trending)
    return (
        <div className='bg-gray-200 p-5'>
            <h1 className='text-center font-bold text-3xl'>Costumer Favorite</h1>
            <p className='text-center font-semibold text-xl'>We love trending</p>




            <div className='w-full gridgrid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-1 my-5'>
                {
                    trending?.map(item =>

                        <div key={item._id} className="w-full bg-base-100 shadow-xl ">
                            <figure><img src={item.imgUrl} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {item.toyName}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>Life is beautiful!!</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline"><Link to={`alltoys/toy/${item._id}`}>Details</Link></div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MostLoved;
