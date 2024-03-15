'use client';
import { useContext, useEffect, useState } from 'react';
import DetailActivity from '@/components/Detail/detailActivity';
import DetailAds from '@/components/Detail/detailAds';
import DetailCampaign from '@/components/Detail/detailBlocks';
import DetailInfo from '@/components/Detail/detailInfo';
import { AuthContext } from '@/context/auth/authContext';
import { useParams } from 'next/navigation';

const Index = () => {
    const [data, setData] = useState({});
    const [loader, setLoader] = useState(false);
    const param = useParams();
    const {
        authFunc: { GET },
    } = useContext(AuthContext);

    useEffect(() => {
        setLoader(true);
        GET(`agent/${param?.id}`, true)
            .then((result) => {
                setData(result?.data?.data);
            })
            .catch((err) => {
                return;
            })
            .finally(() => {
                setLoader(false);
            });
    }, []);

    return (
        <div className='mt-[120px] mb-[24px] w-[80%]'>
            <div className='w-[100%] mb-[60px]'>
                <DetailCampaign />
            </div>
            <div className='flex gap-[30px]'>
                <div className='w-[70%] shadow-sm h-[80%]'>
                    <p className='w-[100%] p-[20px] text-[#101828] text-[48px] font-[600] leading-[60px] tracking-[-0.96px]'>{data?.name}</p>
                    <div className=' w-[100%]'>
                        <iframe
                            width='100%'
                            height='432px'
                            src='https://www.youtube.com/embed/3yiHZWr6Izc?controls=0&rel=0'
                            frameBorder='0'
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer'
                        ></iframe>
                    </div>
                    <div className='p-[20px]'>
                        <DetailInfo data={data} />
                    </div>
                    <DetailActivity />
                </div>
                <div className='border-[1px] border-[solid] border-[#EAECF0] shadow-xs w-[30%] p-[20px] flex flex-col gap-[20px]'>
                    <DetailAds />
                </div>
            </div>
        </div>
    );
};
export default Index;
