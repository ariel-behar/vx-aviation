import { useRef } from 'react'
import { useInView } from 'framer-motion'

import clouds from '../../../assets/img/clouds.jpg'
import halfPlaneParked from '../../../assets/img/half-plane-parked.png'

function UpToDateTrainingSection() {
	const textDivRef = useRef(null)
	const isInView = useInView(textDivRef, { once: true, amount: 1 })

	return (
		<section ref={textDivRef} style={{ backgroundImage: `url(${clouds})` }} className='max-h-[220px] lg:min-h-[320px] bg-no-repeat bg-fixed bg-cover bg-bottom grid relative'>
			<div className='flex justify-end items-end max-h-[220px] lg:min-h-[320px]'>
				<img src={halfPlaneParked} alt="Flying plane" className="h-3/4" />
			</div>

			<div className='h-full w-full bg-white/30 absolute'
				style={{
					transform: isInView ? "none" : "translateX(-20%)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.8s ease-in-out"
				}}>
				<div className='container pl-5 lg:pl-0 mx-auto h-full flex flex-col justify-center'>
					<h3 className='text-lg lg:text-4xl font-bold uppercase text-shadow'>Safe and up to date</h3>
					<h3 className=' text-5xl lg:text-8xl font-bold uppercase text-shadow'>Training</h3>
				</div>
			</div>
		</section>
	)
}

export default UpToDateTrainingSection