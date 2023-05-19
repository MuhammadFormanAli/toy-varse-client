import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    // picture, toy name, seller name, 
    // seller email, price, rating, available 
    // quantity, and detail description
    const toy = useLoaderData()
    const { imgUrl, toyName, category, price, rating, quantity, description, sellerName, email } = toy
    console.log(toy)
    return (
        <div>
            <div className="flex justify-center items-center p-14 bg-gray-100">
                <div className="max-w-3xl bg-white rounded-lg shadow-lg p-8">
                    <div className='w-full bg-slate-100 p-5 flex flex-col gap-6 md:flex-row items-center justify-center'>
                        <img src={imgUrl} alt="Toy" className=" w-full  md:w-1/2  md:m-4" />

                        <div className=' w-1/2 text-left font-bold text-lg'>
                            <p className='text-cyan-500'>Name of Toy :{toyName}</p>
                            <p className='text-slate-500'>Seller Name:{sellerName}</p>
                            <p className='text-slate-500'>Seller Email:{email}</p>
                            <p className='text-lime-600'>Price:${price}</p>
                            <p className='text-red-700'>Available Quantity:{quantity}</p>
                            <p className='text-yellow-700'>Rating:{rating}</p>
                            <button  className="bg-blue-500 disabled: hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className='p-5 text-slate-500'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam architecto sed reprehenderit, qui dolore vero quo temporibus rerum consequatur magnam nobis laudantium debitis ipsa blanditiis vitae tempora nemo numquam esse!{description}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ToyDetails;