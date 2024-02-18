import { useEffect, useState } from "react";
import Navbar from "@material-tailwind/react/components/Navbar";

import HeaderMenuDesktop from "./HeaderMenuDesktop";
import HeaderMenuMobile from "./HeaderMenuMobile";
import useScreenSize from "../../hooks/useScreenSize";

export interface IRoute {
    path: string;
    title: string;
}

const routes: IRoute[] = [
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
    const screenSize = useScreenSize();

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

    const toggleNavHandler = (close?: boolean) => {
        if(close) {
            setOpenNav(false)
        } else {
            setOpenNav(!openNav);
        }
    }

    return (
        <header onMouseLeave={(screenSize === "xs" || screenSize === "sm") ? () => toggleNavHandler(true) : undefined} className="w-screen shadow-2xl fixed top-0 z-50 bg-tertiary">
            <Navbar blurred={false} variant="filled" className="border-none top-0 h-max max-w-full rounded-none px-4 lg:px-8 bg-transparent">
                <div className="lg:container lg:mx-auto lg:px-2">
                    <HeaderMenuDesktop routes={routes} scrollWithOffset={scrollWithOffset} openNav={openNav} toggleNavHandler={toggleNavHandler}/>

                    <HeaderMenuMobile routes={routes} scrollWithOffset={scrollWithOffset} openNav={openNav} toggleNavHandler={toggleNavHandler}/>
                </div>
            </Navbar>
        </header>
    );
}