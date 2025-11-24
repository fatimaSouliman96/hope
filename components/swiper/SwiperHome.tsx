"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { swiperData } from '@/constant/swiperHomeData';



export default function SwiperHome() {

    return (
        <div className='swiperHome'>
            <Swiper
                slidesPerView={3.2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={
                    {
                        delay: 2500,
                        disableOnInteraction: false
                    }
                }
                loop={true}
                modules={[Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 25,
                    },
                    1280: {
                        slidesPerView: 3.2,
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper"
            >
                {
                    swiperData.map((ele, index) => {
                        return <SwiperSlide>
                            <Image src={ele.image} alt='swiperImg' fill objectFit='cover' />
                            <div className='text' >
                                <h1>
                                    {ele.title}
                                </h1>
                                <p>
                                   {ele.desc}
                                </p>
                            </div>
                        </SwiperSlide>
                    })
                }



            </Swiper>
        </div>
    )
}
