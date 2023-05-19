import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyToysRow = ({ myToys,handleDelete }) => {
    const {loading}=useContext(AuthContext)
    if(loading){
        return <div>loadinggggggg</div>
    }
    const { imgUrl, toyName, category, price, rating, quantity, description, sellerName, email } = myToys
    console.log(myToys.sellerName)
    return (

        <tr>
            <th> a{sellerName}</th>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td> <Link to={`update/${myToys._id}`}> <button className='btn '>Update</button> </Link> </td>
            <td>  <button onClick={()=>handleDelete(myToys._id)} className='btn '>Delete</button></td>
        </tr>

    );
};

export default MyToysRow;

