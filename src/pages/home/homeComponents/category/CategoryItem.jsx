import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({ item }) => {
    const { _id,imgUrl, toyName, price, rating } =item
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={imgUrl} alt="" /></figure>
            <div className="card-body">
            <h2 className="card-title">{toyName}</h2>
                <div className='flex justify-between'>
                    <span className='font-semibold text-base'>Price: ${price}</span>
                    <span className='pr-4'>Rating:{rating}</span>

                </div>
                <div className="card-actions justify-end">
                    <Link to={`alltoys/toy/${item._id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;