import PhoneIcon from '../../Icons/PhoneIcon'

function HomeViewPhoneNumber() {
	return (
		<div className='mt-10 mx-auto flex flex-row justify-center items-center custom-pulse-animation'>
			<PhoneIcon className="h-12 w-12" fillColor='#2E7D32' strokeColor='#2E7D32' strokeWidth={0.2} />

			<p className='text-3xl text-white'>+1 (111) 222-3334</p>
		</div>
	)
}

export default HomeViewPhoneNumber