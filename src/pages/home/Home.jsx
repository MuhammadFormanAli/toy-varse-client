import React from 'react';
import Banner from './homeComponents/banner/Banner';
import Gallery from './homeComponents/gallery/Gallery';
import Category from './homeComponents/category/category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;