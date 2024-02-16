import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'

import pilotGear from '../../../assets/img/pilot-gear.jpg'
import pilot from '../../../assets/img/pilot.png'

import Button from '@material-tailwind/react/components/Button'

function HeroSection() {
    const isXsSm = window.innerWidth < 768

    return (
        <section className='relative h-screen bg-no-repeat bg-cover bg-top lg:bg-fixed' style={{ backgroundImage: `url(${pilotGear})` }}>
            <div className='bg-black/60 absolute  top-0 left-0 h-screen w-full z-[1] flex justify-center items-center px-3'>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='text-center'
                >
                    <h1>WELCOME TO V<sub>x</sub> AVIATION</h1>
                    <h2 className='mt-5 text-sm'>Flight school lessons all over Tampa Bay</h2>

                    <ScrollLink className='cursor-pointer' to="who-we-are-section" smooth={true} offset={-100} duration={500}>
                        <Button size={isXsSm ? 'md' : 'lg'} className='uppercase bg-primary rounded-md mt-10 font-thin'>Begin tour</Button>
                    </ScrollLink>
                </motion.div>
            </div>

            <img src={pilot} alt='Pilot' className='absolute bottom-0 right-20 z-[3] hidden lg:block' />
        </section>
    )
}

export default HeroSection