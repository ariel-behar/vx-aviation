
import { IRoute } from './Header'
import RoutesList from './RoutesList'

import Collapse from '@material-tailwind/react/components/Collapse'

interface Props {
    openNav: boolean
    routes: IRoute[]
    scrollWithOffset: (el: HTMLElement) => void
    toggleNavHandler: (close?: boolean) => void
}

function HeaderMenuMobile({
    openNav,
    routes,
    scrollWithOffset,
    toggleNavHandler
}:Props) {
    return (
        <Collapse open={openNav} className={`${openNav && "pt-4"}`}>
            <RoutesList routes={routes} scrollWithOffset={scrollWithOffset} toggleNavHandler={toggleNavHandler} />
        </Collapse>
    )
}

export default HeaderMenuMobile