import uniqid from 'uniqid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import airplaneRepair from '../assets/img/airplane-repair.jpg'
import mechanic from '../assets/img/mechanic.png'

import PhoneNumber from '../components/PhoneNumber'

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
	return (
		<>
			<div className="mt-[10vh] h-[55vh] bg-no-repeat bg-cover bg-fixed relative" style={{ backgroundImage: `url(${airplaneRepair})` }}>
				<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center'>
					<h2 className='uppercase text-white text-5xl'>Maintenance and Services</h2>
				</div>
			</div>

			<section className='bg-custom-gradient border-primary border-t-[1px] border-b-[1px]' >
				<div className='py-20 bg-no-repeat bg-contain bg-right' style={{ backgroundImage: `url(${mechanic})` }}>
					<div className="container mx-auto grid grid-cols-12 gap-5" >
						<div className="col-span-6 col-start-2 flex items-center">
							<p className="indent-10 text-justify mb-2 text-lg">One of the biggest questions we receive, as it pertains to aviation maintenance is "what can I do on my own plane"? The answer is very simple. Look in FAR part 43 (Preventative Maintenance) and you will see a list of the approved items any appropriately rated pilot may accomplish. In the event a specific task is not listed, the need for a licensed Airframe & Power Plant (A&P) mechanic may be needed. There is even a higher level of mechanic that is required to fulfill major inspections such as an "annual inspection", of which we are licensed to do. Please see a list of inspections that we can assist you with.</p>

						</div>

						<div className="col-span-5">
							<ul>
								{
									servicesList.map(service => (
										<li key={uniqid()} className='my-3 text-xl'>
											<FontAwesomeIcon icon="wrench" color="#2E7D32" size="xl" className='mr-3' />
											{service}
										</li>
									))
								}
							</ul>
						</div>
					</div>

					<div className='py-5 w-2/4 mx-auto mt-20 bg-custom-gradient-opaque rounded-md'>
						<h3 className='uppercase text-center mb-5'>Call us for any assistance you might need</h3>
						<PhoneNumber />
					</div>
				</div>

			</section>
		</>
	)
}

export default MaintenanceServicesView