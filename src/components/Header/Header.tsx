import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import uniqid from "uniqid";

import vxAviationLogo from '../../assets/img/logos/vx-aviation-logo-small.png'

import IconButton from "@material-tailwind/react/components/IconButton";
import Navbar from "@material-tailwind/react/components/Navbar";
import Collapse from "@material-tailwind/react/components/Collapse";

interface Route {
    path: string;
    title: string;
}

const routes: Route[] = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/flight-school',
        title: 'Flight\nSchool'
    },
    {
        path: '/services',
        title: 'Maintenance\n& Services'
    },
    {
        path: '/airplanes-for-sale',
        title: 'Airplanes\nfor Sale'
    },
    {
        path: '/flight-school#contact-section',
        title: 'Contact'

    }
]

export function Header() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const scrollWithOffset = (el: HTMLElement) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-xl uppercase">
            {
                routes.map(({ path, title }: Route, index) => {
                    if (index !== 0 && title !== 'Contact') {
                        return (
                            <NavLink
                                to={path}
                                className={({ isActive }) => (isActive && title !== 'Contact' ? 'text-white' : 'text-primary')}
                                key={uniqid()}
                            >
                                <li style={{ textShadow: "3px 3px 2px rgba(15,15,15,0.8)" }} className="p-1 font-normal" >

                                    {title}

                                </li>
                            </NavLink >
                        )
                    } else if (title === 'Contact') {
                        return (

                            <li key={uniqid()} style={{ textShadow: "3px 3px 2px rgba(15,15,15,0.8)" }} className="p-1 font-normal text-primary" >
                                <HashLink className='cursor-pointer' to={path}  scroll={el => scrollWithOffset(el)} >
                                    {title}
                                </HashLink>

                            </li>
                        )
                    }
                })
            }
        </ul>
    )

    return (
        <header className="w-screen shadow-2xl fixed top-0 z-50 bg-tertiary">
            <Navbar blurred={false} variant="filled" className="border-none top-0 h-max max-w-full rounded-none px-4 lg:px-8 bg-transparent">
                <div className="container mx-auto px-2">
                    <div className="flex items-center justify-between">
                        <NavLink to="/">
                            <img className="max-h-[50px] lg:max-h-[70px] w-auto" src={vxAviationLogo} alt="VX Aviation logo" />
                        </NavLink >
                        <div className="flex items-center gap-4">
                            <div className="mr-4 hidden lg:block">
                                <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                                    {navList}
                                </ul>
                            </div>
                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="#2E7D32"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="#2E7D32"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>
                        </div>
                    </div>
                    <Collapse open={openNav}>
                        {navList}

                    </Collapse>
                </div>
            </Navbar>
        </header>
    );
}