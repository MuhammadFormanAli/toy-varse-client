import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../useTitle';

const UpdateToy = () => {
    const toy = useLoaderData()
    console.log(toy)
    useTitle('Update Toy')


    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target
        const price = form.price.value
        const quantity = form.quantity.value
        const description = form.description.value
        const updatedToy = { price, quantity, description }

        fetch(`https://toy-marketplace-server-side-kohl.vercel.app/toys/${toy._id}`, {
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
                    // 
                    Swal.fire(
                        'Updated',
                        'Your file has been updated.',
                        'success'  
                    )
                }
            })
    }
    return (
        <div>
            <div className='bg-slate-100 p-5'>

                <div>
                <h2 className='text-center text-3xl my-5'>Update Your Toy</h2>

                <div class="flex items-center justify-center space-x-3 w-96 mx-auto mb-5">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={toy.imgUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold"> Name of your toy: {toy.toyName}</div>
                        <div class="text-sm opacity-50"> Toy category: {toy.category}</div>
                    </div>
                </div>

                </div>


                <label htmlFor="my-modal-6" className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn">Yay!</label>
    </div>
  </div>
</div>



                <form onSubmit={handleUpdate} >

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div>
                            <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                            <input type="text" id='price' name="price" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" defaultValue={toy.price} required />
                        </div>

                        <div>
                            <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
                            <input type="text" id='quantity' name="quantity" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" defaultValue={toy.quantity} required />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                            <textarea id='description' name="description" className='w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500' defaultValue={toy.description} required></textarea>
                        </div>

                    </div>
                    <input className='btn max-w-fit block my-4 mx-auto' type="submit" value="Update Toy" />

                </form>
            </div>
        </div>
    );
};

export default UpdateToy;