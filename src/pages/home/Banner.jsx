
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='my-6 relative z-10'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.ibb.co.com/R0rZZ7s/Banner-tatting-doilies.jpg" className='w-full max-h-96 rounded-xl' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/YjYyRDj/Banner-embroidery.jpg" className='w-full  max-h-96 rounded-xl ' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/DwrWR3r/Banner-felting.jpg" className='w-full max-h-96 rounded-xl' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/jrkj8pW/Banner-knitting.jpg" className='w-full max-h-96 rounded-xl ' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/LS6ZPj8/Banner-quilting.jpg" className='w-full max-h-96 rounded-xl ' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co.com/SnGn1Pw/Banner-rug-making.jpg" className='w-full max-h-96 rounded-xl ' /></SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Banner
