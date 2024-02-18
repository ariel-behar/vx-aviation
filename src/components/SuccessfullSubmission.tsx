import vxAviationLogo from '../assets/img/logos/vx-aviation-logo-with-title-effects.png'

function SuccessfullSubmission() {
    return (
        <div className='h-full flex flex-col items-center justify-center'>
            <h3 className="text-green-500 text-center mb-3">Thank you for your submission!</h3>
            <p className="text-center fw-bold">(Please note that the website is no longer maintained and no actual form submission has been made. Apologies for the inconvenience.)</p>

            <div className='flex items-center mt-5'>
					<p className='text-white'> Sincerely,</p>
					<img src={vxAviationLogo} alt='Vx Aviation Logo' className='ml-5 max-h-[100px] lg:max-h-30' />
				</div>

        </div>
    )
}

export default SuccessfullSubmission