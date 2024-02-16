import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ICourse } from "../ViewSpecificComponents/FlightSchoolView/CoursesSection"
import { useCourseModalContext } from "../../context/CourseModalContext";

interface Props extends ICourse {}

function CourseModalHeader({
    ...course
}:Props) {
    const { handleShowModal } = useCourseModalContext();
    
    return (
        <header className="bg-custom-gradient p-5  border-b-2 border-primary flex items-center">
            <h4 className="text-white mx-auto text-2xl">{course.courseName}</h4>
            <FontAwesomeIcon className="cursor-pointer" icon="xmark" size="xl" onClick={handleShowModal} />
        </header>
    )
}

export default CourseModalHeader