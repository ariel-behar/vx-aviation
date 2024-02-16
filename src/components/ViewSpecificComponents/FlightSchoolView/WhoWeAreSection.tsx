import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import propeller from '../../../assets/img/propeller.png'
import uniqid from 'uniqid'

type Ratings = string[]

const ratingsList:Ratings = [
    'Private Pilot',
    'Commercial rating',
    'Multi-Engine rating',
    'Flight instructor for single engine, Multi-Engine and Instrument ratings',
    'Airline Transport Pilot rating',
    'Airframe & Power Plant (A&P)',
    'Inspection Authorization rating (I/A)'
]

function WhoWeAreSection() {
    return (
        <section id="who-we-are-section" className='bg-custom-gradient border-primary border-t-[1px] border-b-[1px]'>
            <div style={{ backgroundImage: `url(${propeller})` }} className='py-10 lg:py-20 px-1 lg:px-4 flex justify-end bg-cover bg-center bg-no-repeat'>
                <div className='lg:w-3/5 px-5 lg:px-10'>
                    <h3 className='text-center mb-10'>WHO WE ARE</h3>

                    <p className='text-justify lg:text-xl'>We are what you would consider a “one-stop-shop” for all your aviation needs. Our owner is a licensed flight instructor with over 25 years of experience who got his experience by mowing lawns at 14 years old and paying his way forward. Please see the list of ratings currently held.</p>

                    <ul className='my-10 lg:pl-8'>
                        {
                            ratingsList.map(rating => (
                                <li key={uniqid()} className='my-3 lg:text-xl'>
                                    <FontAwesomeIcon icon="plane" color="#2E7D32" size="xl" className='-rotate-45 mr-3' />
                                    {rating}
                                </li>
                            ))
                        }
                    </ul>

                    <p className='text-center lg:text-xl'>We welcome you to call anytime and look forward to meeting you</p>
                </div>
            </div>


        </section>
    )
}

export default WhoWeAreSection