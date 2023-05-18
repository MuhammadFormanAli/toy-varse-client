import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const AddToy = () => {
    const {user} = useContext(AuthContext)
    console.log(user)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target
        const imgUrl = form.pictureURL.value
        const toyName = form.toyName.value
        const category = event.target.subCategory.value
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value
        const description = form.description.value
        const sellerName = form.sellerName.value
        const email = form.email.value

        const toy ={imgUrl,toyName,category,price,rating,quantity,description,sellerName,email}
        console.log(toy)
    };
    return (
        <div>
            <div className='bg-slate-100 p-5'>
                <h2>Add Toy</h2>
                <form onSubmit={handleSubmit} >
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    
                    <input type="text" name="pictureURL" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Photo url' required/>
                    
                    <input type="text" name="toyName" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Enter Toy Name' required />             

                    <select name="subCategory" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" >
                        <option value="">Select sub-category</option>
                        <option value="Math Toys">Math Toys</option>
                        <option value="Language Toys">Language Toys</option>
                        <option value="Science Toys">Science Toys</option>
                    </select>

                    <input type="text" name="price" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Enter Toy Price' required />
                   

                    <input type="number"  name="rating" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Enter Rating' required/>
                    
                    <input type="number" name="quantity" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Available Quantity' required/>
                    
                    <textarea name="description" className='w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500' placeholder='Toy Description' required></textarea>
                    
                    <input type="text" name="sellerName" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" value={user?.displayName}  required />         
                    
                    <input type="email" name="email" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" value={user?.email} readOnly required/>
                    </div>
                    
                    <input className='btn max-w-fit block my-4 mx-auto' type="submit" value="Add Toy" />
                
                </form>
            </div>
        </div>
    );
};

export default AddToy;