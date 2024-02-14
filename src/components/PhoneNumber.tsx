import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import phoneNumber from '../data/phone'

interface Props {
	size?: "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x"
}

function PhoneNumber({
	size = '2x',
}: Props) {
	return (
		<div className='mx-auto flex flex-row justify-center items-center custom-pulse-animation'>
			<FontAwesomeIcon icon="phone" color="#2E7D32" size={size} className='mr-2'/>
			<p className='text-3xl'>{phoneNumber}</p>
		</div>
	)
}

export default PhoneNumber