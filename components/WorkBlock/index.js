'use client';
import { motion } from 'framer-motion';
import { Image } from '@nextui-org/react';
import { BASE_URL } from '@/service/path';

const Index = ({ campaigns, row }) => {
    return (
        <motion.div whileHover={{ scale: 1.01 }}>
            <div className='h-[350px]'>
                <div className='h-[65%]'>
                    <div
                        style={{
                            backgroundImage: `url(${BASE_URL}/file/${row?.image?.file_name})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',

                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
                <div className='px-[16px] py-[16px] flex flex-col gap-8'>
                    <div className='flex gap-2'>
                        {row?.areas_of_activity?.map((el, i) => (
                            <div className='p-[4px] rounded-[16px] bg-[#FFF] w-[73px] h-[30px] gap-[8px] border-[4px] border-[#F5F6FF] flex justify-center items-center'>
                                <p key={i} className='text-[12px] font-[500] leading-[8px]'>
                                    {el?.name}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='h-[20px] flex justify-between'>
                        <p className='text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#222]'>{row?.name}</p>
                        {campaigns ? '' : <img src='/assets/icons/arrow-up-right.svg' alt='arrow' />}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Index;
