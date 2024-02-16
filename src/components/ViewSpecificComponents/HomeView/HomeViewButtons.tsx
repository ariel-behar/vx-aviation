import { NavLink } from 'react-router-dom'
import uniqid from 'uniqid'

import { Button } from '@material-tailwind/react/components/Button';

const navItems = [
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
    }
]

function HomeViewButtons() {

    return (
        <>
            <div className='mt-2 lg:mt-7 md:space-x-3 text-center lg:space-y-0 flex flex-col md:flex-row'>
                {
                    navItems.map((navItem) => (
                        <NavLink to={navItem.path} key={uniqid()} >
                            <Button className='bg-primary rounded-full px-10 lg:px-8 py-3 max-w-[190px] font-thin drop-shadow-lg mt-2' size='lg' variant='filled'>
                                {navItem.title}
                            </Button>
                        </NavLink>
                    ))
                }
            </div>
        </>
    )
}

export default HomeViewButtons