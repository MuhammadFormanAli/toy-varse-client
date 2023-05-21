import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ReviewItem = ({idx}) => {
    return (
        <div className='bg-slate-100  p-3 rounded-br-[50px] rounded-tl-[50px]' key={idx.id}>
        <div className='flex items-center ml-5 '>
          <img data-aos="fade-left" className="text-center rounded-full my-2 w-1/4" src={idx?.clientImg} alt="Client" />
          <div className='ml-5'>
            <h3 className="text-xl font-bold">{idx.name}</h3>
            <span>
              <Rating
                className='text-yellow-500'
                placeholderRating={5}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              /></span>
          </div>
        </div>

        <div className='ml-5'>
          <p className="">{idx.testimonial.split('.')[1]}</p>
        </div>
      </div>
    );
};

export default ReviewItem;