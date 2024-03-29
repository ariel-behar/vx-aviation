import { useState } from 'react'

import airplaneSunset from '../../../assets/img/airplane-sunset.jpg'
import ContactForm from '../../ContactForm'
import PhoneNumber from '../../PhoneNumber'
import SuccessfullSubmission from '../../SuccessfullSubmission'

function ContactSection() {
	const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false)

	const handleSubmissionSuccess = () => {
		setSubmissionSuccess(!submissionSuccess)
	}


	return (
		<section id="contact-section" style={{ backgroundImage: `url(${airplaneSunset})` }}
			className='py-5 bg-cover bg-custom-inset-shadow md:bg-fixed'
		>
			<div className='lg:w-[82vw] mx-auto grid grid-cols-12 gap-x-3 lg:gap-x-0 gap-y-5 lg:gap-y-0 px-3 lg-px-0'>
				<div className='col-span-12 md:col-span-4 lg:col-span-5 h-min bg-custom-gradient-opaque p-5 lg:p-9 rounded-xl'>
					<h3 className='uppercase text-center mb-5'>Call Us</h3>
					<p className='text-justify mb-5 '>Call us now to get more detailed information about each program and schedule your first lesson. We look forward to meeting you</p>
					<PhoneNumber />
				</div>
				<div className='col-span-1 hidden lg:block'>
					<p className='text-center text-2xl mt-5'>OR</p>
				</div>
				<section className='col-span-12 md:col-span-8 lg:col-span-6 bg-custom-gradient-opaque rounded-xl p-5 lg:p-9'>
					{
						submissionSuccess
							? <SuccessfullSubmission />
							: <>
								<h3 className='text-center uppercase'>Leave us your details</h3>
								<p className='text-justify my-5'>We will contact you with detailed information about the program of your choice at a convenient time for you!</p>

								<ContactForm handleSubmissionSuccess={handleSubmissionSuccess} />
							</>
					}
				</section>
			</div>
		</section>
	)
}

export default ContactSection