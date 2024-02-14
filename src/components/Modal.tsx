import { ICourse } from "./ViewSpecificComponents/FlightSchoolView/CoursesSection"

interface Props extends ICourse {}

function Modal({
    ...course
}:Props) {
  return (
    <div>Modal</div>
  )
}

export default Modal