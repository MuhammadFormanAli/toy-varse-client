import React from 'react';
import { Link } from 'react-router-dom';

const ToysRow = ({toy}) => {
    const { toyName, category, price, quantity, sellerName } = toy
//   console.log(toy)
    return (
        <tr>
            <th>{sellerName}</th>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td> <Link to={`toy/${toy._id}`}> <button className='btn '>Details</button> </Link> </td>
        </tr>

    );
};

export default ToysRow;