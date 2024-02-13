import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomeViewPhoneNumber() {
	return (
		<div className='mt-10 mx-auto flex flex-row justify-center items-center custom-pulse-animation'>
			<FontAwesomeIcon icon="phone" color="#2E7D32" size="3x" className='mr-2'/>
			<p className='text-3xl text-white'>+1 (111) 222-3334</p>
		</div>
	)
}

export default HomeViewPhoneNumber