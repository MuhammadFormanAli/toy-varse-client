import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const {user}=useContext(AuthContext)
    const [myToys,setMyToys]=useState(null)

    const url = `https://toy-marketplace-server-side-kohl.vercel.app/toys?${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(result=>setMyToys(result))
    },[])


    const handleDelete = _id =>{
        console.log( 'delete', _id);
        fetch(`https://toy-marketplace-server-side-kohl.vercel.app/toys/${_id}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                alert('deleted successfully');
                const remaining = myToys.filter(toy => toy._id !== _id);
                setMyToys(remaining); 
            }
        })
    }
// console.log(myToys)
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available  Quantity</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}

                        {
                            myToys?.map(toy => <MyToysRow
                                key={toy._id}
                                myToys={toy}
                                handleDelete={handleDelete}
                            ></MyToysRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;