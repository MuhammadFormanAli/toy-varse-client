import React, { useEffect, useState } from 'react';
import CategoryItem from './categoryItem';




const Category = () => {
    const [categoryItems, setCategoryItems] = useState([])

    const [active, setActive] = useState(1)
    const [categoryName, setCategoryName] = useState('marvel')

    useEffect(() => {
        fetch(`http://localhost:5000/toys?category=${categoryName}`)
            .then(res => res.json())
            .then(result => setCategoryItems(result))
    }, [categoryName])

    const handleCategoryDataLoad = (category, index) => {

        setActive(index)
        setCategoryName(category)
    }

    console.log(categoryItems, active)

    return (
        <div className='bg-[#F2F2F2] p-8 my-5'>
            <h1 className='text-5xl font-bold text-center'>Shop by Category</h1>
            <div className='flex gap-[1px] items-center justify-center my-8'>
                <button className={active === 1 ? 'active' : "in-active"} onClick={() => handleCategoryDataLoad("marvel", 1)} >Marvel </button>
                <button className={active === 2 ? 'active' : "in-active"} onClick={() => handleCategoryDataLoad("avengers", 2)} >Avengers </button>
                <button className={active === 3 ? 'active' : "in-active"} onClick={() => handleCategoryDataLoad("transformer", 3)} >Transformer </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 md:grid-cols-3'>
                {
                    categoryItems && categoryItems.map(item =>
                        <CategoryItem
                            key={item._id}
                            item={item}
                        ></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default Category;