import { lazy } from 'react';

const LazyBackgroundVideo = lazy(() => import('../components/ViewSpecificComponents/BackgroundVideo'));

const maskStyles = 'bg-black/30 absolute top-0 left-0 h-full w-full z-[1]'

function HomeView() {
	return (
		<div className="relative h-screen w-screen">
			{/* Mask */}
			<div className={maskStyles}>
			</div>

			<LazyBackgroundVideo />
		</div>
	)
}

export default HomeView