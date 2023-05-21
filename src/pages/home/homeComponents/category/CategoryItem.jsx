import React from 'react';
import { FaDollarSign, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const CategoryItem = ({ item }) => {
    const { _id, imgUrl, toyName, price, rating } = item


    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl" data-aos="zoom-in" data-aos-duration="400">
            <figure><img src={imgUrl} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl"> Name ot toy:{toyName}</h2>
                <div className='flex justify-between'>
                    <p className=' flex items-center font-bold text-lg'>Price:< FaDollarSign className='font-bold text-2xl'/>{price}</p>
                    <span className='pr-4'>Rating : {rating}</span>
                    <span>
                        <Rating
                        className='text-yellow-500'
                        placeholderRating={rating}
                        emptySymbol={ <FaRegStar/>}
                        placeholderSymbol={<FaStar/>}
                        fullSymbol={<FaStar/>}
                    /></span>

                </div>
                <div className="card-actions justify-center">
                    <Link to={`alltoys/toy/${_id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;