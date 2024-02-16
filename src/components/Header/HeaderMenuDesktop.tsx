import { NavLink } from 'react-router-dom'

import RoutesList from './RoutesList'
import vxAviationLogo from '../../assets/img/logos/vx-aviation-logo-small.png'
import { IRoute } from './Header'

import HeaderHamburgerIcon from './HeaderHamburgerIcon'

interface Props {
    routes: IRoute[]
    scrollWithOffset: (el: HTMLElement) => void
    openNav: boolean,
    openNavHandler: (openNav: boolean) => void
}

function HeaderMenuDesktop({
    routes,
    scrollWithOffset,
    openNav,
    openNavHandler
}: Props) {
    return (
        <div className="flex items-center justify-between">
            <NavLink to="/">
                <img className="max-h-[50px] lg:max-h-[70px] w-auto" src={vxAviationLogo} alt="VX Aviation logo" />
            </NavLink >
            <div className="flex items-center gap-4">
                <div className="lg:mr-4 hidden md:block">
                    <RoutesList routes={routes} scrollWithOffset={scrollWithOffset} />
                </div>

                <HeaderHamburgerIcon openNav={openNav} openNavHandler={openNavHandler} />
            </div>
        </div>
    )
}

export default HeaderMenuDesktop