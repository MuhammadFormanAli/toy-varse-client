import React, { useContext } from 'react';
import { AuthContext, } from '../../contexts/AuthProvider';
import useTitle from '../../useTitle';
import Swal from 'sweetalert2';


const AddToy = () => {
  const { user, loading } = useContext(AuthContext)
  useTitle('Add Toy')


  if (loading) {
    return <div>loading...</div>
  }
  console.log(user)



  // const handleAddUser = event => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const user = { name, email };
  //   console.log(user);

  //   fetch('https://toy-marketplace-server-side-kohl.vercel.app/toys', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(toy)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       if (data.insertedId) {
          // Swal.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // );
  //         form.reset();
  //       }
  //     })
  // }




  const handleAddToy = event => {
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
    const toy = { imgUrl, toyName, category, price, rating, quantity, description, sellerName, email }

    fetch('https://toy-marketplace-server-side-kohl.vercel.app/toys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(toy)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            'Added',
            'Your file has been Added.',
            'success'
          );
          form.reset();
        }
      })
    console.log(toy)
  };
  return (
    <div>
      <div className='bg-slate-100 p-5'>
        <h2>Add Toy</h2>
        <form onSubmit={handleAddToy} >

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            <input type="text" name="pictureURL" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Photo url' required />

            <input type="text" name="toyName" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Enter Toy Name' required />

            <select name="subCategory" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" required >
              <option value="">Select sub-category</option>
              <option value="marvel">Marvel</option>
              <option value="avengers">Avengers</option>
              <option value="transformer">Transformer</option>
            </select>

            <input type="text" name="price" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Enter Toy Price' required />


            <input type="number" name="rating" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Enter Rating' required />

            <input type="number" name="quantity" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" placeholder='Available Quantity' required />

            <textarea name="description" className='w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500' placeholder='Toy Description' required></textarea>

            <input type="text" name="sellerName" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" defaultValue={user?.displayName} required />

            <input type="email" name="email" className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500" value={user?.email} readOnly required />
          </div>

          <input className='btn max-w-fit block my-4 mx-auto' type="submit" value="Add Toy" />

        </form>
      </div>
    </div>
  );
};

export default AddToy;