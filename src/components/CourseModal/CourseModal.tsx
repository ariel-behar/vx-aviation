import { useEffect } from "react";

import { ICourse } from "../ViewSpecificComponents/FlightSchoolView/CoursesSection"

import CourseModalBottomContent from "./CourseModalBottomContent";
import CourseModalFooter from "./CourseModalFooter";
import CourseModalHeader from "./CourseModalHeader";
import CourseModalTopContent from "./CourseModalTopContent";

interface Props extends ICourse {
	showModal: boolean
	handleShowModal: () => void
}

function CourseModal({
	showModal,
	handleShowModal,
	...course
}: Props) {

	useEffect(() => {
		document.body.classList.add('active-modal')

		return () => document.body.classList.remove('active-modal')
	}, [])

	return (
		<>
			<div className={`w-screen h-screen inset-0 fixed z-[9999] overflow-auto grid`}>
				<div onClick={handleShowModal} className="w-screen h-screen inset-0 fixed bg-custom-gradient-opaque backdrop-blur"></div>
				{/* <div className={styles['modal-content']}> */}
				<div className="relative justify-self-center self-center text-secondary max-w-[800px] min-w-[300px] bg-white" >
					<CourseModalHeader {...course} />

					<section className="p-3">
						<CourseModalTopContent {...course} />

						{
							(course.bookImage || course.requirements) && (
								<CourseModalBottomContent {...course}/>
							)
						}
					</section>

					<CourseModalFooter />
				</div>
			</div>
		</>
	);
}

export default CourseModal