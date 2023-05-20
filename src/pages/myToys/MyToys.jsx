import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
import useTitle from '../../useTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState(null)
    useTitle('My Toys')

    const url1 = `https://toy-marketplace-server-side-kohl.vercel.app/toys?${user.email}`
    const url2 = `http://localhost:5000/sort?email=${user.email}&sort=1`
    const url3 = `http://localhost:5000/sort?email=${user.email}&sort=-1`

    const [url, setUrl] = useState(url1)


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => setMyToys(result))
    }, [url])

    const handleAscending = () => {
        setUrl(url2)
        console.log('from url 2')
    }
    const handleDescending = () => {
        setUrl(url3)
        console.log('from url 3')
    }


    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-marketplace-server-side-kohl.vercel.app/toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(toy => toy._id !== _id);
                            setMyToys(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>


            

            <div className="overflow-x-auto my-5">
                <div className='my-5'>
                    <button onClick={handleAscending} className='btn mr-5'>Ascending</button>
                    <button onClick={handleDescending} className='btn'>Descending</button>
                </div>
                <table className="table table-zebra w-full">

                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th className='text-left'>Toy Name and category</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Available  Quantity</th>
                            <th>Rating</th>
                            <th>Action</th>

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