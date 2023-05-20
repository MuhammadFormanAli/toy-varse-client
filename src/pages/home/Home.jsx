import React from 'react';
import Banner from './homeComponents/banner/Banner';
import Gallery from './homeComponents/gallery/Gallery';
import Category from './homeComponents/category/category';
import useTitle from '../../useTitle';

const Home = () => {
    useTitle("HOME")
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;