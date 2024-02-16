
import { NavLink } from "react-router-dom"
import { IRoute } from "./Header"
import uniqid from "uniqid"
import { HashLink } from "react-router-hash-link"

interface Props {
    routes: IRoute[]
    scrollWithOffset: (el: HTMLElement) => void
}
function RoutesList({
    routes,
    scrollWithOffset
}:Props) {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-3 lg:gap-6 uppercase">
            {
                routes.map(({ path, title }: IRoute, index) => {
                    if (index !== 0 && title !== 'Contact') {
                        return (
                            <NavLink
                                to={path}
                                className={({ isActive }) => (isActive && title !== 'Contact' ? 'text-white' : 'text-primary')}
                                key={uniqid()}
                            >
                                <li style={{ textShadow: "3px 3px 2px rgba(15,15,15,0.8)" }} className="p-1 font-normal text-lg sm:text-base lg:text-lg" >

                                    {title}

                                </li>
                            </NavLink >
                        )
                    } else if (title === 'Contact') {
                        return (

                            <li key={uniqid()} style={{ textShadow: "3px 3px 2px rgba(15,15,15,0.8)" }} className="p-1 font-normal -normal text-lg sm:text-base lg:text-lg text-primary" >
                                <HashLink className='cursor-pointer' to={path} scroll={el => scrollWithOffset(el)} >
                                    {title}
                                </HashLink>

                            </li>
                        )
                    }
                })
            }
        </ul>
    )
}

export default RoutesList