import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";

const Banner = () => {
    return (
        <div  className=' bg-base-200'>


            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper h-[700px] md:h-96"
                autoplay={{ delay: 5000 }}
            >

                <SwiperSlide className='max-h-full'>
                    <div className="h-full ">

                        <div className="flex p-6 items-center justify-center flex-col-reverse md:flex-row gap-5">
                            <div>
                                <h1 className='bg-[#FF6799] text-white font-bold text-[25px] p-3 text-center'> Big Discount!!</h1>
                                <h1 className='text-6xl font-bold'>KIDS OFFER</h1>
                                <h1 className='font-bold text-3xl'>10% off</h1>
                                <button className='p-3 border-none btn rounded-full bg-[#4ACDD5]'>Shop Now</button>
                            </div>
                            <div>
                            <img  className='h-[300px] w-[400px]' src='/banner-1.png' alt=""/>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='max-h-full'>
                    <div className="h-full ">

                        <div className="flex p-6 items-center justify-center flex-col-reverse md:flex-row gap-5">
                            <div>
                                <h1 className='bg-[#FF6799] text-white font-bold text-[25px] p-3 text-center'> Big Discount!!</h1>
                                <h1 className='text-6xl font-bold'>KIDS OFFER</h1>
                                <h1 className='font-bold text-3xl'>10% off</h1>
                                <button className='p-3 border-none btn rounded-full bg-[#4ACDD5]'>Shop Now</button>
                            </div>
                            <div>
                            <img  className='h-[300px] w-[400px]' src='/banner-2.png' alt="" />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='max-h-full'>
                    <div className="h-full ">

                        <div className="flex p-6 items-center justify-center flex-col-reverse md:flex-row gap-5">
                            <div>
                                <h1 className='bg-[#FF6799] text-white font-bold text-[25px] p-3 text-center'> Big Discount!!</h1>
                                <h1 className='text-6xl font-bold'>KIDS OFFER</h1>
                                <h1 className='font-bold text-3xl'>10% off</h1>
                                <button className='p-3 border-none btn rounded-full bg-[#4ACDD5]'>Shop Now</button>
                            </div>
                            <div>
                            <img  className='h-[300px] w-[400px]' src='/banner-3.png' alt="" />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Banner;