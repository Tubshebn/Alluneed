'use client';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NewsLayout from '@/module/news/layout/main';
import Hero from '@/components/Hero';
import BlogBlock from '@/components/BlogBlock/Index';
import Dropdown from '@/components/Dropdown/index';
import route from '@/route';
import { Pagination } from '@nextui-org/react';
import { AuthContext } from '@/context/auth/authContext';

let filterArray = [
    { id: 1, value: '4', label: 'Бүгд' },
    { id: 2, value: '1', label: 'Маркетинг' },
    { id: 3, value: '2', label: 'Дизайн' },
    { id: 4, value: '3', label: 'Сошиал медиа' },
];

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Index = () => {
    const [activeRole, setActiveRole] = useState(1);
    const [selectedOption, setSelectedOption] = useState('');
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [page, setPage] = useState(1);
    const [ref, setRef] = useState([]);
    const {
        authFunc: { POST },
    } = useContext(AuthContext);

    let pagination = {
        default_param: [],
        filter: [
            {
                // field_name: 'type.id',
                // field_type: 'number',
                // operation: '=',
                // value: `${activeRole}`,
                // values: [activeRole],
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
                value: 'Resources_type',
            },
        ],
        glob_operation: 'string',
        page_no: 0,
        per_page: 0,
        sort: 'string',
    };

    useEffect(() => {
        getList();
    }, [activeRole]);

    useEffect(() => {
        getRef();
    }, []);

    const getList = () => {
        setLoader(true);
        POST('resources/list', true, pagination)
            .then((result) => {
                setData(result?.data);
            })
            .catch((err) => {
                return;
            })
            .finally(() => {
                setLoader(false);
            });
    };

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
    const router = useRouter();

    return (
        <>
            <div className='relative'>
                <Hero imageUrl={'/assets/photo/blogs.png'} />
                <div className='absolute top-[40%] left-[20%]'>
                    <p className='text-[12px] font-[500] leading-[18px] text-[#8557F4] mb-[12px]'>Resources</p>
                    <p className='text-[36px] font-[500] leading-[40px] tracking-[-1.44px] text-[#050514] mb-[24px]'>
                        Hottest <span className='text-[36px] font-[700] leading-[40px] tracking-[-1.44px] text-[#050514]'>Resources</span>
                    </p>
                    <p className='text-[16px] font-[400] leading-[28px] text-[#475467]'>
                        Хамгийн сүүлийн үеийн салбарын мэдээ, ярилцлага, технологи, нөөц.
                    </p>
                </div>
            </div>
            <NewsLayout>
                <div className='flex items-center justify-between'>
                    <div className='w-[100%]'>
                        <div className='flex justify-start gap-[16px]'>
                            {ref?.map((i) => {
                                return (
                                    <div
                                        key={i.ID}
                                        className={`hover:text-[#FD3D80] cursor-pointer ${
                                            activeRole === i.ID && 'border-[solid] border-b-[2px] border-[#FD3D80] text-[#FD3D80]'
                                        }`}
                                        onClick={() => {
                                            setActiveRole(i.ID);
                                        }}
                                    >
                                        <p className='p-[4px] text-[16px] font-[500] leading-[24px]'>{i?.name}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='border-[#EAECF0] border-[0.5px] border-[solid] w-[80%]' />
                    </div>
                    <div className='flex items-end justify-start'>
                        <Dropdown selectedOption={selectedOption} handler={handleDropdownChange} />
                    </div>
                </div>
                <div className='grid grid-rows-2 grid-cols-4 gap-10 w-[100%] gap-x-[32px] gap-y-[40px] mt-[40px] justify-center ax-md:grid-rows-4 max-md:grid-cols-2 max-md:w-[98%] max-sm:grid-rows-8 max-sm:grid-cols-1 items-center'>
                    {data?.map((i) => {
                        return (
                            <div className='shadow-md hover:shadow-xl' key={i} onClick={() => router.push(`${route.resources}/${i.id}`)}>
                                <BlogBlock i={i} />
                            </div>
                        );
                    })}
                </div>
            </NewsLayout>
            <Pagination
                isCompact
                showControls
                total={data?.pagination?.total_pages}
                initialPage={page}
                variant='light'
                size='lg'
                color='primary'
                onChange={(page) => setPage(page)}
            />
        </>
    );
};
export default Index;
