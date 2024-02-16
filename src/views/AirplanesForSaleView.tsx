import { motion } from 'framer-motion'

import pattern from '../assets/img/pattern/mooning.jpg'
import airplaneBanner from '../assets/img/airplane-banner.png'
import vxAviationLogo from '../assets/img/logos/vx-aviation-logo-with-title-effects.png'

function AirplanesForSaleView() {
	return (
		<section className="mt-[10vh] flex flex-col justify-center items-center pt-5 pb-10 md:py-20 px-5" style={{ backgroundImage: `url(${pattern})` }}>
			<h3 className='uppercase text-2xl sm:text-4xl text-center text-tertiary mt-10 mb-16 font-medium'>No active listings are currently available</h3>
			<div className='overflow-hidden'>
				<motion.img
					src={airplaneBanner}
					alt="Airplane Banner"
					initial={{ x: "100%" }}
					animate={{ x: 0}}
					transition={{ duration: 1, ease: "easeInOut" }}
				/>
			</div>
			<div className='flex items-center mt-12'>
				<p className='text-tertiary'>Sincerely,</p>
				<img src={vxAviationLogo} alt='Vx Aviation Logo' className='ml-5 max-h-[100px] lg:max-h-40' />
			</div>
		</section>
	)
}

export default AirplanesForSaleView