import { HashLink } from 'react-router-hash-link';

import pilotGear from '../../../assets/img/pilot-gear.jpg'

import Button from '@material-tailwind/react/components/Button'

function HeroSection() {
    return (
        <section className='relative'>
            <img src={pilotGear} alt="Pilot gear" className="object-cover object-top w-full h-screen top-0 left-0 z-0" />
            <div className='bg-black/50 absolute  top-0 left-0 h-screen w-full z-[1] flex justify-center items-center'>
                <div className='text-center'>
                    <h1 className='text-white text-3xl lg:text-7xl'>WELCOME TO V<sub>x</sub> AVIATION</h1>
                    <h2 className='text-white text-xl lg:text-4xl mt-5'>Flight school lessons all over Tampa Bay</h2>

                    <HashLink to="/flight-school#who-we-are-section">
                        <Button size='lg' className='uppercase bg-primary text-white rounded-none mt-10'>Begin tour</Button>
                    </HashLink>
                </div>
            </div>
        </section>
    )
}

export default HeroSection