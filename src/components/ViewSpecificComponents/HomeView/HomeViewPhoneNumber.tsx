import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import phoneNumber from '../../../data/phone'

function HomeViewPhoneNumber() {
	return (
		<div className='mt-10 mx-auto flex flex-row justify-center items-center custom-pulse-animation'>
			<FontAwesomeIcon icon="phone" color="#2E7D32" size="3x" className='mr-2'/>
			<p className='text-3xl'>{phoneNumber}</p>
		</div>
	)
}

export default HomeViewPhoneNumber