import { motion } from 'framer-motion'

import pattern from '../assets/img/pattern/mooning.jpg'
import airplaneBanner from '../assets/img/airplane-banner.png'
import vxAviationLogo from '../assets/img/logos/vx-aviation-logo-with-title-effects.png'

function AirplanesForSaleView() {
	return (
		<section className="mt-[10vh] flex flex-col justify-center items-center py-20" style={{ backgroundImage: `url(${pattern})` }}>
			<h3 className='uppercase text-4xl text-center text-black mt-10 mb-16 font-medium'>No active listings are currently available</h3>
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
				<p className='text-black'>Sincerely,</p>
				<img src={vxAviationLogo} alt='Vx Aviation Logo' className='h-40' />
			</div>
		</section>
	)
}

export default AirplanesForSaleView