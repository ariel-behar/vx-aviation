import uniqid from 'uniqid'
import vxAviationLogoWithTitle from '../../../assets/img/logos/vx-aviation-logo-with-title.png'
import HomeViewMenuButton from './HomeViewMenuButton'

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

function HomeViewMenu() {

    return (
        <>
            <img className="" src={vxAviationLogoWithTitle} alt="VX Aviation Logo with Title" />

            <div className='mt-8'>
                {
                    navItems.map((item) => (
                        <HomeViewMenuButton {...item} key={uniqid()} />
                    ))
                }

            </div>
        </>
    )
}

export default HomeViewMenu