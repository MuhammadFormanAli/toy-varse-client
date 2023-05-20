import React  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Gallery = () => {
    AOS.init();

    const images = [
        '/images/blackPanther-1.jpg',
        '/images/groot-1.jpg',
        '/images/hulk-1.jpg',
        '/images/spiderman-1.jpg',
        '/images/transformer-1.jpg',
        '/images/transformer-2.jpg',



    ];

    return (
        <div>
            <section className="pb-10 bg-base-200 my-5" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <div className="container mx-auto">
                    <div className='bg-[#c9c5bed8] py-5'>
                        <h2 className="text-3xl font-bold  text-center">Gallery</h2>
                        <p className='text-center font-bold text-lg text-[#2d8a94] m-0'>Recent Photos</p>
                    </div>
                    <div  className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-5">
                        {images.map((image, index) => (
                            <div  className=' flex items-center justify-center bg-slate-100 rounded' key={index} >
                                <img data-aos="fade-in"  src={image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Gallery;