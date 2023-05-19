import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
    const toy = useLoaderData()
    console.log(toy)


    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target
        const price = form.price.value
        const quantity = form.quantity.value
        const description = form.description.value
        const updatedToy = { price, quantity, description }

        fetch(`http://localhost:5000/toys/${toy._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('toy updated successfully')
                }
            })
    }
    return (
        <div>
            <div className='bg-slate-100 p-5'>
                <h2 className='text-center'>Update Toy</h2>
                <form onSubmit={handleUpdate} >

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <input type="text" name="price" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" defaultValue={toy.price}  required />
                        <input type="number" name="quantity" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" defaultValue={toy.quantity}  required />
                        <textarea name="description" className='w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500' defaultValue={toy.description} required></textarea>
                    </div>
                    <input className='btn max-w-fit block my-4 mx-auto' type="submit" value="Update Toy" />

                </form>
            </div>
        </div>
    );
};

export default UpdateToy;