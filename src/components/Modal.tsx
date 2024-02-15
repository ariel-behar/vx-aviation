import { ICourse } from "./ViewSpecificComponents/FlightSchoolView/CoursesSection"
import PhoneNumber from "./PhoneNumber";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dialog from "@material-tailwind/react/components/Dialog";
import Button from "@material-tailwind/react/components/Button";

interface Props extends ICourse {
	showModal: boolean
	handleShowModal: () => void
}

function Modal({
	showModal,
	handleShowModal,
	...course
}: Props) {

	return (
		<>
			<Dialog open={showModal} handler={handleShowModal}>
				<div className="bg-custom-gradient p-5  border-b-2 border-primary flex items-center">
					<h4 className="text-white mx-auto text-2xl">{course.courseName}</h4>
					<FontAwesomeIcon icon="xmark" size="xl" />
				</div>

				<div className="">
					<h5 className="text-center">Overview</h5>
					{course.overview}
				</div>

				<div className="bg-custom-gradient p-5 border-t-2 border-primary flex items-center justify-center">
					<div className="text-white ml-auto">
						<h5 className='uppercase text-center mb-5'>Call us for more details about this program</h5>
						<PhoneNumber />
					</div>
					<Button className="bg-secondary rounded-md ml-auto" onClick={handleShowModal}>Close</Button>
				</div>

			</Dialog>
		</>
	);
}

export default Modal