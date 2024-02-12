import { lazy } from 'react';
import HomeViewMenu from '../components/ViewSpecificComponents/HomeView/HomeViewMenu';

const LazyBackgroundVideo = lazy(() => import('../components/ViewSpecificComponents/HomeView/BackgroundVideo'));

function HomeView() {
	return (
		<div className="relative h-screen w-screen">
			{/* Mask */}
			<div className='bg-black/30 absolute top-0 left-0 h-full w-full z-[1]'></div>
			<LazyBackgroundVideo />

			<section className='container mx-auto h-screen w-screen relative'>
				<div className='z-2 absolute top-[50%] right-[50%] lg:right-[200px] translate-y-[-50%] translate-x-[50%] lg:translate-x-0'>
					<HomeViewMenu />
				</div>
			</section>
		</div>
	)
}

export default HomeView