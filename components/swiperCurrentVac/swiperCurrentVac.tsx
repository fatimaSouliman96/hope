"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import CurrentVacCard from '@/components/CurrentVacCard/CurrentVacCard';



export default function SwiperCurrentVac() {
    return (
        <div className='swiperCurrentVac'>
            <h1 className='section-title'>Current Vacancies</h1>
            <p className='des-text'>Be part of a team that creates lasting impact. Explore current opportunities below</p>
            <Swiper
                slidesPerView={3.2}
                spaceBetween={0}
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
                <SwiperSlide>
                    <CurrentVacCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CurrentVacCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CurrentVacCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CurrentVacCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CurrentVacCard />
                </SwiperSlide>


            </Swiper>
        </div>
    )
}
