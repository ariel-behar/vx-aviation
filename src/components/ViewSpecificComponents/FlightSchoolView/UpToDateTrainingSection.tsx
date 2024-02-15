import { useRef } from 'react'
import { useInView } from 'framer-motion'

import clouds from '../../../assets/img/clouds.jpg'
import halfPlaneParked from '../../../assets/img/half-plane-parked.png'

function UpToDateTrainingSection() {
	const textDivRef = useRef(null)
	const isInView = useInView(textDivRef, { once: true, amount: 1 })

	return (
		<section ref={textDivRef} style={{ backgroundImage: `url(${clouds})` }} className='min-h-[320px] bg-no-repeat bg-fixed bg-cover bg-bottom grid relative'>
			<img src={halfPlaneParked} alt="Flying plane" className='justify-self-end align-self-end ' />

			<div className='h-full w-full bg-white/30 absolute'
				style={{
					transform: isInView ? "none" : "translateX(-20%)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.8s ease-in-out"
				}}>
				<div className='container mx-auto h-full flex flex-col justify-center'>
					<h3 className='text-4xl font-bold uppercase text-shadow'>Safe and up to date</h3>
					<h3 className='text-8xl font-bold uppercase text-shadow'>Training</h3>
				</div>
			</div>
		</section>
	)
}

export default UpToDateTrainingSection