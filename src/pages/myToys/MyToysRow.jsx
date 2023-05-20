import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyToysRow = ({ myToys, handleDelete }) => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div>loadinggggggg</div>
    }
    const { imgUrl, toyName, category, price, rating, quantity, sellerName } = myToys
    console.log(myToys.sellerName)
    return (

        <tr className='text-center'>
            
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
                    <Link to={`update/${myToys._id}`}> <button className='btn '>Update</button> </Link>
                    <button onClick={() => handleDelete(myToys._id)} className='btn bg-red-600'>Delete</button>
                </div>
            </td>
        </tr>

    );
};

export default MyToysRow;

