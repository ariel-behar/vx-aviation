
import { IRoute } from './Header'
import RoutesList from './RoutesList'

import Collapse from '@material-tailwind/react/components/Collapse'

interface Props {
    openNav: boolean
    routes: IRoute[]
    scrollWithOffset: (el: HTMLElement) => void
}

function HeaderMenuMobile({
    openNav,
    routes,
    scrollWithOffset
}:Props) {
    return (
        <Collapse open={openNav} className={`${openNav && "pt-4"}`}>
            <RoutesList routes={routes} scrollWithOffset={scrollWithOffset} />
        </Collapse>
    )
}

export default HeaderMenuMobile