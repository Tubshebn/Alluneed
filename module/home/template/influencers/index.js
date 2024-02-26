import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Image } from '@nextui-org/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Index = () => {
    let arr = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    return (
        <div className='bg-[#050514] h-[532px] flex flex-col items-center justify-center relative py-[80px] w-[100%]'>
            <p className='text-[#FFF] text-[32px] font-[400] leading-[40px] tracking-[-0.64px] '>
                Hottest <span className=' text-[#FFF] text-[32px] font-[700] leading-[44px] tracking-[-0.64px]'>Influencers</span>
            </p>
            {/* <div className='flex  px-[32px] w-[100%] justify-between h-[100%] items-center'>
                <div className='w-[48px] h-[48px] flex justify-center items-center rounded-[28px] bg-[#ffffff] bg-opacity-[0.1] hover:bg-[#FD3D80]'>
                    <img src='/assets/icons/arrow-left.svg' alt='arrowLeft' />
                </div>
                <div className='w-[48px] h-[48px] flex justify-center items-center rounded-[28px] bg-[#ffffff] bg-opacity-[0.1] hover:bg-[#FD3D80]'>
                    <img src='/assets/icons/arrow-right.svg' alt='arrowRight' />
                </div>
            </div>
            <div className='flex flex-wrap gap-y-[32px] gap-x-[32px] px-[172px] justify-center absolute py-[48px]'>
                {arr?.map((i) => {
                    return <img src='/assets/photo/Avatar.png' alt='arrowLeft' key={i} />;
                })}
            </div> */}
            <Swiper navigation={true} modules={[Navigation]} className='mySwiper' slidesPerView={8} slidesPerGroup={8}>
                {arr.map((i) => (
                    <SwiperSlide key={i}>
                        <div className='flex items-center justify-center'>
                            <Image src='/assets/photo/Avatar.png' alt='arrowLeft' key={i} width={60} height={50} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='w-[137px] h-[40px] py-[10px] px-[16px] flex justify-center items-center bg-[#8557F4]'>
                <button className='text-[#FFF] text-[14px] font-[600] leading-[20px]'>Бүх Influencers</button>
            </div>
        </div>
    );
};

export default Index;
