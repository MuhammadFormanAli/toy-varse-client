import React from 'react';

const Gallery = () => {
    const images = [
        '/33454-6-plush-toy.png',
        '/banner.png',
        '/33454-6-plush-toy.png',
        '/banner.png',
        '/33454-6-plush-toy.png',
        '/banner.png',

    ];
    return (
        <div>
            <section className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
                    <p className='text-center font-bold text-lg text-[#4AD1E1] m-0'>Recent Photos</p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-5">
                        {images.map((image, index) => (
                            <div className=' flex items-center justify-center bg-slate-100 rounded' key={index}>
                                <img src={image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Gallery;