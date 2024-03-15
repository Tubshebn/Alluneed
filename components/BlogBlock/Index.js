'use client';

import { BASE_URL } from '@/service/path';

const Index = ({ shadow, i }) => {
    return (
        <div className={`${shadow} w-[100%] hover:shadow-2xl h-[350px]`}>
            <div className='h-[65%]'>
                <div
                    style={{
                        backgroundImage: `url(${BASE_URL}/file/${i?.image?.file_name})`,
                        backgroundSize: '90%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>
            <div className='py-[20px] mx-[16px]'>
                <div className=' w-[161px] h-[30px]'>
                    <div className='bg-[#F5F6FF] py-[4px] pl-[4px] pr-[10px] flex items-center justify-center rounded-[16px] mb-[16px]'>
                        <div className='rounded-[16px] bg-[#FFF] w-[77px] h-[22px] flex py-[2px]'>
                            <img src='/assets/photo/Avatar.png' width='18px' height='16px' className='ml-[3px] mr-[6px]' />
                            <p className='text-[#8557F4] font-[500] text-[12px]'>{i?.type?.name}</p>
                        </div>
                        <p className='text-[#8557F4] font-[500] text-[12px] ml-[8px]'>8 мин унш</p>
                    </div>
                </div>
                <div className='flex w-[100%] justify-between mt-[16px] items-center mb-[8px]'>
                    <p className='text-[18px] font-[600] leading-[4px] tracking-[-0.36px]'>{i?.name}</p>
                    <img src='/assets/icons/right-up.svg' alt='right' />
                </div>
                <p className='font-[400] text-[15px] leading-[20px]'>{i?.description}</p>
            </div>
        </div>
    );
};

export default Index;
