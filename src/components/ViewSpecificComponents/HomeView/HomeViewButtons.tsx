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
        path: '/for-sale',
        title: 'Airplanes\nfor Sale'
    }
]

function HomeViewButtons() {

    return (
        <>
            <div className='mt-7 lg:space-x-3 text-center space-y-2 lg:space-y-0 flex flex-col lg:flex-row'>
                {
                    navItems.map((item) => (
                        <Button className='bg-primary rounded-full px-12 py-3 max-w-[190px] font-thin drop-shadow-lg ' size='lg' variant='filled' key={uniqid()} placeholder={item.title}>
                            {item.title}
                        </Button>
                    ))
                }
            </div>
        </>
    )
}

export default HomeViewButtons