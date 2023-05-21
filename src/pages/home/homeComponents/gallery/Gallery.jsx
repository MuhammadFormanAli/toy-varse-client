import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Gallery = () => {
    AOS.init();

    const images = [
        'https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_US%2F37789C811E6D4811922462DCFAB691BC%2F6fdef104d4fc54b2378902f04eba20568779bd44.jpg&w=3840&q=75',
        'https://images-na.ssl-images-amazon.com/images/I/51XyuwYrlhL.jpg',
        'https://cdn.shopify.com/s/files/1/0064/6679/7632/articles/Genuine-Marvel-Super-Heroes-Avengers-Endgame-Iron-Man-Hulk-Captain-America-Spider-Man-Action-Figure-Model_480x540_crop_center.png?v=1618590731',
        'https://m.media-amazon.com/images/I/91ZSA7qnypL._AC_UF894,1000_QL80_.jpg',
        'https://spy.com/wp-content/uploads/2020/12/Avengers-Toys.jpg',
        'https://momlovesbest.com/wp-content/uploads/2023/01/Playskool-Heroes-Marvel-Super-Hero-Adventures.jpg',



    ];

    return (
        <div>
            
            <section className="pb-10 bg-base-200 my-5">
                <div className="container mx-auto">
                    <div className='bg-[#c9c5bed8] py-5'>
                        <h2 className="text-3xl font-bold  text-center">Gallery</h2>
                        <p className='text-center font-bold text-lg text-[#2d8a94] m-0'>Recent Photos</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-5">
                        {images.map((image, index) => (
                            <div className=' flex items-center justify-center bg-slate-100 rounded' key={index} >
                                <img data-aos="fade-right" src={image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Gallery;