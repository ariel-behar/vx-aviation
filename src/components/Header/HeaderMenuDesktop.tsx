import { NavLink } from 'react-router-dom'

import RoutesList from './RoutesList'
import vxAviationLogo from '../../assets/img/logos/vx-aviation-logo-small.png'
import { IRoute } from './Header'

import HeaderHamburgerIcon from './HeaderHamburgerIcon'

interface Props {
    routes: IRoute[]
    scrollWithOffset: (el: HTMLElement) => void
    openNav: boolean,
    toggleNavHandler: (close?: boolean) => void
}

function HeaderMenuDesktop({
    routes,
    scrollWithOffset,
    openNav,
    toggleNavHandler
}: Props) {
    return (
        <div className="flex items-center justify-between">
            <NavLink to="/">
                <img className="max-h-[50px] lg:max-h-[70px] w-auto" src={vxAviationLogo} alt="VX Aviation logo" />
            </NavLink >
            <div className="flex items-center gap-4">
                <div className="lg:mr-4 hidden md:block">
                    <RoutesList routes={routes} scrollWithOffset={scrollWithOffset} toggleNavHandler={toggleNavHandler} />
                </div>

                <HeaderHamburgerIcon openNav={openNav} toggleNavHandler={toggleNavHandler} />
            </div>
        </div>
    )
}

export default HeaderMenuDesktop