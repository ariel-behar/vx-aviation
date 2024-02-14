import { lazy } from 'react';

import vxAviationLogoWithTitleEffects from '../assets/img/logos/vx-aviation-logo-with-title-effects.png'

import HomeViewButtons from '../components/ViewSpecificComponents/HomeView/HomeViewButtons';
import PhoneNumber from '../components/PhoneNumber';

const LazyBackgroundVideo = lazy(() => import('../components/ViewSpecificComponents/HomeView/HomeViewBackgroundVideo'));

function HomeView() {
	return (
		<div className="relative h-screen w-screen">
			{/* Mask */}
			<div className='bg-black/50 absolute top-0 left-0 h-full w-full z-[1]'></div>
			<LazyBackgroundVideo />

			<section className='container mx-auto h-screen w-screen relative'>
				<div className='z-[2] relative flex flex-col justify-center items-center h-full lg:h-auto lg:block lg:top-[50%] lg:absolute lg:right-[100px] lg:translate-y-[-50%] lg:translate-x-0'>
					<img className="mx-auto rounded-2xl p-3" src={vxAviationLogoWithTitleEffects} alt="VX Aviation Logo with Title" />

					<HomeViewButtons />

					<div className='mt-10'>
						<PhoneNumber />
					</div>
				</div>
			</section>
		</div>
	)
}

export default HomeView