'use client';
//react
import { useContext, useEffect, useState } from 'react';
//components
import Dropdown from '@/components/Dropdown/index';
import Hero from '@/components/Hero';
import AgencyList from '@/module/agency/template/agency';
//layout
import AgencyLayout from '@/module/agency/layout/main';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/auth/authContext';

const Agency = () => {
    const [filter, setFilter] = useState(4);
    const [selectedOption, setSelectedOption] = useState('');
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [ref, setRef] = useState([]);
    const {
        authFunc: { POST },
    } = useContext(AuthContext);

    let pagination = {
        default_param: [
            {
                key: 'string',
                value: 'string',
            },
        ],
        filter: [
            filter === '1'
                ? null
                : {
                      field_name: 'type.id',
                      field_type: 'number',
                      operation: '=',
                      value: filter,
                      //   values: [filter],
                  },
        ],
        glob_operation: 'string',
        page_no: 0,
        per_page: 0,
        sort: 'string',
    };

    let FilterPagination = {
        default_param: [],
        filter: [
            {
                field_name: 'code',
                field_type: 'string',
                operation: '=',
                // value: 8,
                value: 'AGENCY_TYPE',
            },
        ],
        glob_operation: 'string',
        page_no: 0,
        per_page: 0,
        sort: 'string',
    };

    useEffect(() => {
        setLoader(true);
        POST('agent/list', true, pagination)
            .then((result) => {
                setData(result);
            })
            .catch((err) => {
                return;
            })
            .finally(() => {
                setLoader(false);
            });
    }, [filter]);

    useEffect(() => {
        getRef();
    }, []);

    const getRef = () => {
        setLoader(true);
        POST('reference/list', true, FilterPagination)
            .then((result) => {
                setRef(result?.data);
            })
            .catch((err) => {
                return;
            })
            .finally(() => {
                setLoader(false);
            });
    };

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <div className='relative'>
                <Hero imageUrl={'/assets/photo/campaings.png'} />
                <div className='absolute top-[40%] left-[20%] z-[9999]'>
                    <p className='text-[12px] font-[500] leading-[18px] text-[#8557F4] mb-[12px]'>Agencies</p>
                    <p className='text-[36px] font-[500] leading-[40px] tracking-[-1.44px] text-[#FFF] mb-[24px]'>
                        Marketing <span className='text-[36px] font-[700] leading-[40px] tracking-[-1.44px] text-[#FFF]'>Agencies</span>
                    </p>
                    <p className='text-[16px] font-[400] leading-[28px] text-[#EAECF0]'>
                        Хамгийн сүүлийн үеийн салбарын мэдээ, ярилцлага, технологи, нөөц.
                    </p>
                </div>
            </div>
            <AgencyLayout>
                <div className='flex w-[100%] justify-between mb-[32px]'>
                    <div className='h-[44px] p-[4px] flex gap-[8px] rounded-[8px] border-[1px]  border-[#F2F4F7] border-[solid] bg-[#F2F4F7] mt-[48px]'>
                        {ref?.map((i) => (
                            <div
                                key={i.ID}
                                className={`flex items-center px-[8px] py-[8px] cursor-pointer hover:bg-[#FFF] ${
                                    filter === i.ID && 'shadow-md rounded-[6px] bg-[#FFF]'
                                }`}
                                onClick={() => {
                                    setFilter(i.ID);
                                }}
                            >
                                <p className='text-[14px] font-[600] leading-[20px]'>{i.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-end justify-start'>
                        <Dropdown selectedOption={selectedOption} handler={handleDropdownChange} />
                    </div>
                </div>
                <AgencyList data={data} />
            </AgencyLayout>
        </>
    );
};
export default Agency;
