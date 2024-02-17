import { NavLink } from 'react-router-dom'

import vxAviationLogo from '../assets/img/logos/vx-aviation-logo-with-title-effects.png'
import pattern from '../assets/img/pattern/mooning.jpg'

import Button from '@material-tailwind/react/components/Button'
import useScreenSize from '../hooks/useScreenSize'

function ErrorView() {
	const screenSize = useScreenSize()

	return (
		<section className="h-screen w-screen flex flex-col md:flex-row justify-center items-center gap-10" style={{ backgroundImage: `url(${pattern})` }}>
			<div className="mt-12 md:mt-0 text-center order-2 md:order-none" >
				<img src={vxAviationLogo} alt="VX Aviation logo" className='max-w-[200px]' />
			</div>
			<div className="min-h-[150px] md:min-h-[200px] flex flex-col justify-around items-center">
				<div>
					<h3 className='text-red-700 font-bold text-3xl md:text-5xl'>Oops... 404 Error </h3>
					<h4 className='text-secondary mb-3 text-center'>(Page not found)</h4>
				</div>
				<div>
					<NavLink to='/' >
						<Button className='bg-secondary mx-auto' variant='filled' size={(screenSize === "xs" || screenSize === "sm") ? "sm" : "md"}>
							Click here to go back home
						</Button>
					</NavLink>
				</div>

			</div>
		</section>
	)
}

export default ErrorView