import Image from 'next/image';
const Index = () => {
    const arr = [0, 1, 2, 3, 4, 5];
    return (
        <div className='my-[48px] w-[100%]'>
            <h4 className='text-[22px] text-[##050514] font-[400] mb-[30px] text-center leading-[24x] '>
                Онцлох маркетингийн <span className='text-[22px] text-[##050514] font-[700] text-center my-[40px] leading-[24px]'>агентлагууд</span>
            </h4>
            <div className='w-[100%] flex justify-between max-md:flex-wrap max-md:gap-[8px]'>
                {arr?.map((i) => {
                    return (
                        <div key={i} className='max-md:w-[30%] flex justify-center w-[11%]'>
                            <img src='/assets/icons/agency.svg' alt='agency' style={{ height: '28px' }} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Index;
