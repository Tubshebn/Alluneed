'use client';
import Link from 'next/link';
import route from '@/route/index';
import { useRouter, usePathname } from 'next/navigation';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '@/context/auth/authContext';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, NavbarMenu } from '@nextui-org/react';
const Index = () => {
    const [isHover, setIsHover] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedNavItem, setSelectedNavItem] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();
    const path = usePathname();
    const {
        authState: { isLoggedIn, user },
        authFunc: { logOut },
    } = useContext(AuthContext);

    useEffect(() => {
        setSelectedNavItem(path);
        setIsDropdownOpen(false);
    }, [path]);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const handlePopover = () => {
        setIsOpen(!isOpen);
    };

    const dropdownNavbarLink = document.getElementById('dropdownNavbarLink');
    const dropdownNavbar = document.getElementById('dropdownNavbar');

    dropdownNavbarLink?.addEventListener('click', () => {
        dropdownNavbar.classList.toggle('hidden');
    });

    return (
        <header className='bg-[#ffffff] w-[100%] fixed z-[999] flex items-center justify-center'>
            <nav className='flex h-[72px] items-center w-[1280px] justify-between max-xl:w-[95%]' aria-label='Global'>
                <div className='w-[154px] h-[44px] cursor-pointer max-2xl:hidden'>
                    <img src='/assets/icons/mainLogo.svg' alt='LOGO' width={154} onClick={() => router.push(route.home)} />
                </div>
                <div className='flex gap-x-8 max-lg:hidden'>
                    <NavItem href={route.campaigns} text='Company' selected={selectedNavItem === route.campaigns} />
                    <NavItem href={route.news} text='News' selected={selectedNavItem === route.news} />
                    <NavItem href={route.agency} text='Agencies' selected={selectedNavItem === route.agency} />
                    <NavItem href={route.channels} text='Channels' selected={selectedNavItem === route.channels} />
                    <NavItem href='#' text='Influencers' selected={selectedNavItem === '#'} />
                    <NavItem href={route.resources} text='Resources' selected={selectedNavItem === route.resources} />
                    <NavItem href={route.events} text='Events' selected={selectedNavItem === route.events} />
                    <NavItem href={route.marketers} text='Marketers' selected={selectedNavItem === route.marketers} />
                </div>
                <button
                    id='dropdownNavbarLink'
                    data-dropdown-toggle='dropdownNavbar'
                    className='flex items-center w-full px-3 py-2 text-gray-900 rounded lg:hidden'
                    onClick={handleDropdownToggle}
                >
                    Menu
                    <svg className='w-2.5 h-2.5 ms-2.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                    </svg>
                </button>
                <div
                    id='dropdownNavbar'
                    className={`z-10 ${
                        isDropdownOpen ? '' : 'hidden'
                    } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-[50px]`}
                >
                    <ul className='py-2 text-sm ' aria-labelledby='dropdownNavbarLink'>
                        <NavItem href={route.campaigns} text='Company' selected={selectedNavItem === route.campaigns} />
                        <NavItem href={route.news} text='News' selected={selectedNavItem === route.news} />
                        <NavItem href={route.agency} text='Agencies' selected={selectedNavItem === route.agency} />
                        <NavItem href={route.channels} text='Channels' selected={selectedNavItem === route.channels} />
                        <NavItem href='#' text='Influencers' selected={selectedNavItem === '#'} />
                        <NavItem href={route.resources} text='Resources' selected={selectedNavItem === route.resources} />
                        <NavItem href={route.events} text='Events' selected={selectedNavItem === route.events} />
                        <NavItem href={route.marketers} text='Marketers' selected={selectedNavItem === route.marketers} />
                    </ul>
                </div>
                <div className='flex gap-x-[16px]'>
                    {/* <div className="h-[40px] w-[40px] bg-[#F9FAFB] flex justify-center">
                        <button>
                            <img src="/assets/icons/moon-01.svg" alt="dark" />
                        </button>
                    </div>
                    <div className="w-[40px] h-[40px] bg-[#F9FAFB] flex justify-center">
                        <button>
                            <img src="/assets/icons/search-md.svg" alt="dark" />
                        </button>
                    </div> */}
                    {isLoggedIn ? (
                        <Dropdown>
                            <DropdownTrigger>
                                <Avatar
                                    onClick={handlePopover}
                                    name={user?.name?.substring(0, 1)}
                                    size='md'
                                    isBordered
                                    as='button'
                                    className='text-[20px] font-serif bg-[#FD3D80] border-[#FD3D80] text-[#FFFFFF] cursor-pointer transition-transform'
                                />
                            </DropdownTrigger>
                            <DropdownMenu variant='faded' aria-label='Dropdown menu with icons'>
                                <DropdownItem key='profile' className='gap-2 h-14'>
                                    <p className='font-semibold text-[10px]'>Signed in as</p>
                                    <p className='font-semibold text-[10px]'>{user?.name}</p>
                                </DropdownItem>
                                <DropdownItem onClick={() => router.push(route.myAccount)}>My account</DropdownItem>
                                <DropdownItem onClick={logOut}>Гарах</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    ) : (
                        <div
                            className={`px-[16px] py-[10px] h-[40px] transition-all duration-300 cursor-pointer ${
                                isHover ? 'bg-[#f7f1f1]' : 'bg-[#FD3D80]'
                            }`}
                            onClick={() => router.push(route.signIn)}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <p className={`text-[14px] font-[600] leading-[20px] ${isHover ? 'text-[#FD3D80]' : 'text-[#FFFFFF]'}`}>Нэвтрэх</p>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};
export default Index;

const NavItem = ({ href, text, selected }) => {
    return (
        <div className={`p-[8px] ${selected ? 'text-[#000000]' : 'text-[#050514]'} hover:text-[#FD3D80]`}>
            <Link href={href}>
                <div className={`text-[17px] font-[500] leading-[24px] ${selected ? 'font-bold' : ''} flex`}>
                    {selected && (
                        <>
                            <span className='mr-1 text-[#FD3D80]' style={{ fontSize: '50px', lineHeight: '24px' }}>
                                &#8226;
                            </span>
                            <span style={{ marginLeft: '5px' }}>{text}</span>
                        </>
                    )}
                    {!selected && text}
                </div>
            </Link>
        </div>
    );
};
