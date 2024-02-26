// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '@nextui-org/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
const Index = () => {
    return (
        <div className='h-[100%]'>
            <Image src='/assets/photo/hottest.png' className='w-[100vw]' />
            <div>
                {/* <div className="">
                    <p>
                        Hottest<span>Channel</span>
                    </p>
                    <Swiper
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    {' '}
                    <p>
                        Hottest<span>Marketers</span>
                    </p>
                </div> */}
            </div>
        </div>
    );
};
export default Index;
