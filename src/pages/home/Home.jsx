import React from 'react';
import Banner from './homeComponents/banner/Banner';
import Gallery from './homeComponents/gallery/Gallery';

import useTitle from '../../useTitle';
import ContactUs from './homeComponents/contact/ContactUs';
import Category from './homeComponents/category/Category';
import Review from './homeComponents/customerReview/Review';
import MostLoved from './homeComponents/mostLoved/MostLoved';

const Home = () => {
    useTitle("HOME")
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <MostLoved></MostLoved>
            <Review></Review>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;