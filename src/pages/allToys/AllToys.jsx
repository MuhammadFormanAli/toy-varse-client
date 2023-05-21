import React, { useEffect, useState } from 'react';
import ToysRow from './ToysRow';
import useTitle from '../../useTitle';


const AllToys = () => {
    const [loading, setLoading] = useState(true)
    const [toys, setToys] = useState([])
    useTitle("All Toys")

    useEffect(() => {
        fetch('https://toy-marketplace-server-side-kohl.vercel.app/toys')
            .then(res => res.json())
            .then(result => {
                setToys(result)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    }


    const handleSearch = (event) => {
        event.preventDefault()
        const searchText = event.target.search.value.toLowerCase()
        const filteredToys = toys.filter(toy => toy.toyName.toLowerCase().includes(searchText))
        setToys(filteredToys)

    }

    return (
        <div className='my-5'>
            <form onSubmit={handleSearch}>
                <input type="text" name='search' onChange={e => setQuery(e.target.value)} placeholder='Search By "Toy Name"' className="w-1/2 mx-auto border block my-4 border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                <input className='btn bg-blue-950 text-center block mx-auto mb-5' type="submit" value="Search" />
            </form>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
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
                            toys?.map(toy => <ToysRow
                                key={toys._id}
                                toy={toy}
                            ></ToysRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;