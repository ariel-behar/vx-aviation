import { lazy } from 'react';
import { motion } from 'framer-motion';

import vxAviationLogoWithTitleEffects from '../assets/img/logos/vx-aviation-logo-with-title-effects.png'

import HomeViewButtons from '../components/ViewSpecificComponents/HomeView/HomeViewButtons';
import PhoneNumber from '../components/PhoneNumber';
import HelmetSEO from '../components/HelmetSEO';

const LazyBackgroundVideo = lazy(() => import('../components/ViewSpecificComponents/HomeView/HomeViewBackgroundVideo'));

function HomeView() {
	return (
		<>
			<HelmetSEO title='HOME' description='Launch Your Aviation Career: VX Aviation offers premier pilot training programs with expert instructors and cutting-edge facilities. Your journey to the skies starts here!' />

			<div className="relative h-screen w-screen">
				{/* Mask */}
				<div className='bg-black/50 absolute top-0 left-0 h-full w-full z-[1]'></div>
				<LazyBackgroundVideo />

				<section className='container mx-auto h-screen w-screen relative'>
					<div className='z-[2] relative flex flex-col justify-center items-center h-full lg:h-auto lg:block lg:top-[50%] lg:absolute lg:right-[100px] lg:translate-y-[-50%] lg:translate-x-0'>
						<motion.img
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.5 }}
							className="mx-auto rounded-2xl p-3 max-w-[250px] md:max-w-full " src={vxAviationLogoWithTitleEffects} alt="VX Aviation Logo with Title" />

						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.5 }}
						>
							<HomeViewButtons />

							<div className='mt-10'>
								<PhoneNumber />
							</div>
						</motion.div>
					</div>
				</section>
			</div>
		</>
	)
}

export default HomeView