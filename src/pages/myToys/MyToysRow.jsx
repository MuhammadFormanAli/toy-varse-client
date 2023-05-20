import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyToysRow = ({ myToys, handleDelete }) => {
    const { loading } = useContext(AuthContext)

    const { imgUrl, toyName, category, price, rating, quantity, sellerName } = myToys

    return (

        <tr className='text-center'>
            
            <th>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imgUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </th>
            <td>{sellerName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{rating}</td>
            <td>
                <div>
                    <Link to={`update/${myToys._id}`}> <button className='btn '>Update</button> </Link>
                    <button onClick={() => handleDelete(myToys._id)} className='btn bg-red-600'>Delete</button>
                </div>
            </td>
        </tr>

    );
};

export default MyToysRow;

