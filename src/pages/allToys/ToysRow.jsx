import React from 'react';
import { Link } from 'react-router-dom';

const ToysRow = ({ toy }) => {
    const { imgUrl, toyName, category, price, rating, quantity, sellerName } = toy
    //   console.log(toy)
    return (
        <tr>

            <th>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={imgUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{toyName}</div>
                        <div class="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </th>
            <td>{sellerName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{rating}</td>
            <td>
                <div>
                    <td> <Link to={`toy/${toy._id}`}> <button className='btn '>Details</button> </Link> </td>

                </div>
            </td>
        </tr>

    );
};

export default ToysRow;