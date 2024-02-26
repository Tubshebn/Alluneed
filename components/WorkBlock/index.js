'use client';

import { Image } from '@nextui-org/react';

const Index = ({ campaigns }) => {
    return (
        <div className='h-[400px]'>
            <div className='mb-[20px] w-[100%] h-[63%]'>
                <Image src='/assets/photo/image2.png' alt='photo' sizes='full' className='w-[100vw]' />
            </div>
            <div className='px-[16px] flex flex-col gap-[12px]'>
                <div className='mb-[15px]'>
                    <div className='p-[4px] rounded-[16px] bg-[#FFF] w-[73px] h-[30px] gap-[8px] border-[4px] border-[#F5F6FF] flex justify-center items-center mt-4'>
                        <p className='text-[12px] font-[500] leading-[8px]'>SG Enable</p>
                    </div>
                </div>
                <div className='h-[20px] flex justify-between'>
                    <p className='text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#222]'>UnAwkward</p>
                    {campaigns ? '' : <img src='/assets/icons/arrow-up-right.svg' alt='arrow' />}
                </div>
            </div>
        </div>
    );
};

export default Index;
