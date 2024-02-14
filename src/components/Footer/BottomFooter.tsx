import { useEffect, useState } from 'react'

import arielBeharLogo from '../../assets/img/logos/arielbehar-logo.png'

function BottomFooter() {
    const [currentYear, setCurrentYear] = useState<number | null>(null)

    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])

    return (
        <div className='text-center border-t-2 border-t-white pt-4'>
            <p className="text-white">&copy; {currentYear} All RIGHTS RESERVED TO <span className="inline-block italic"> V<sub>x</sub> Aviation</span></p>
            <p className="mb-0"> Powered by&nbsp;
                <a href="http://www.arielbehar.com" className='text-primary hover:text-green-600'>Ariel Behar&nbsp;
                    <img src={arielBeharLogo} alt="Ariel Behar Logo" className="inline h-[25px]" />
                </a>
            </p>
        </div>
    )
}

export default BottomFooter