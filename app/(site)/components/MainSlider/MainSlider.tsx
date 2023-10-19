"use client"

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
 
import { SliderContainer } from "./sliderStyles";

// import Banners
import banners from "./banners";

// import swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SliderType } from "@/types/siteSettings";

function MainSlider({slider} : any ) {
   
    const router = useRouter();
  
    SwiperCore.use([Navigation, Autoplay]);



    return (
        <SliderContainer>
            <Swiper 
                spaceBetween={100}
                slidesPerView={1}
                loop="true" 
                navigation
                autoplay={{ delay: 6000 }}
                centeredSlides ="true" 
            >
                        {slider &&
            slider.map((data : SliderType) => (
                        
                                <SwiperSlide key={data._id}>
                                    <div className="content">
                                        <img
                                            src={data.logo}
                                            width="100%"
                                            height="100%"
                                            alt={`${data.logo} Banner`}
                                        />
                                        <img
                                            src={data.logo}
                                            className="overlay"
                                            width="100%"
                                            height="100%"
                                            alt={`${data.name} Logo`}
                                        />
                                    </div>
                                </SwiperSlide>
                         
                   
                         ))}
            </Swiper>
        </SliderContainer>
    );
}

export default MainSlider;