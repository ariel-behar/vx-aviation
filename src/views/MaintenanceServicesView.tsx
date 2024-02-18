import uniqid from 'uniqid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import airplaneRepair from '../assets/img/airplane-repair.jpg'
import mechanic from '../assets/img/mechanic.png'

import PhoneNumber from '../components/PhoneNumber'
import HelmetSEO from '../components/HelmetSEO'
import useScreenSize from '../hooks/useScreenSize'

type Service = string

const servicesList: Service[] = [
	"Annual Inspections",
	"100 Hour Inspections",
	"Airworthiness Directive compliance",
	"ELT inspections",
	"Transponder inspections",
	"IFR certifications",
	"Preventative Maintenance",
	"General aviation maintenance"
]


function MaintenanceServicesView() {
	const screenSize = useScreenSize()

	return (
		<>
			<HelmetSEO title='MAINTENANCE & SERVICES' description='Elevate Your Aircraft: Explore our Maintenance and Services page for top-notch aircraft care. Trust VX Aviation for meticulous maintenance, repairs, and unparalleled service excellence.' />

			<div className="mt-[10vh] h-[30vh] xl:h-[55vh] bg-no-repeat bg-cover bg-top md:bg-top md:bg-fixed relative" style={{ backgroundImage: `url(${airplaneRepair})` }}>
				<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center'>
					<h2 className='uppercase text-white text-3xl lg:text-5xl text-center'>Maintenance and Services</h2>
				</div>
			</div>

			<section className='bg-custom-gradient border-primary border-t-[1px] border-b-[1px]' >
				<div className='px-5 lg-px-0 py-10 xl:py-20 bg-no-repeat bg-contain bg-right'
					style={(screenSize ==="xs" || screenSize === "sm") ? undefined : { backgroundImage: `url(${mechanic})` }}
				>
					<div className="container mx-auto grid grid-cols-12 gap-5 xl:gap-x-10" >
						<div className="col-span-12 md:col-span-7 xl:col-span-5 xl:col-start-2 flex items-center">
							<p className="indent-10 text-justify mb-2 lg:text-lg">One of the biggest questions we receive, as it pertains to aviation maintenance is "what can I do on my own plane"? The answer is very simple. Look in FAR part 43 (Preventative Maintenance) and you will see a list of the approved items any appropriately rated pilot may accomplish. In the event a specific task is not listed, the need for a licensed Airframe & Power Plant (A&P) mechanic may be needed. There is even a higher level of mechanic that is required to fulfill major inspections such as an "annual inspection", of which we are licensed to do. Please see a list of inspections that we can assist you with.</p>

						</div>

						<div className="col-span-12 md:col-span-5 xl:col-span-5">
							<ul>
								{
									servicesList.map(service => (
										<li key={uniqid()} className='my-3 lg:text-xl'>
											<FontAwesomeIcon icon="wrench" color="#2E7D32" size="xl" className='mr-3' />
											{service}
										</li>
									))
								}
							</ul>
						</div>
					</div>

					<div className='py-5 md:w-3/4 lg:w-3/4 xl:w-fit xl:px-5 mx-auto mt-10 xl:mt-20 bg-custom-gradient-opaque rounded-md'>
						<h5 className='uppercase text-center mb-5 xl:text-3xl'>Call us for any assistance you might need</h5>
						<PhoneNumber />
					</div>
				</div>

			</section>
		</>
	)
}

export default MaintenanceServicesView