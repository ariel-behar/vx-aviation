import { useState } from "react";
import getImageUrl from "../../utils/getImageUrl"
import { ICourse } from "../ViewSpecificComponents/FlightSchoolView/CoursesSection"
import uniqid from "uniqid";

interface Props extends ICourse {}

function CourseModalTopContent({
    ...course
}: Props) {
	const [activeImage, setActiveImage] = useState<string>(course.courseImages[1])

	const changeActiveImage = (image: string) => {
		let currentImage = image;
		setActiveImage(prevState => currentImage)
	}

    return (
        <div className="grid grid-cols-12 py-3 gap-3">
            <div className={` ${course.courseImages.length > 2 ? "col-span-6" : "col-span-12"}`}>

                {
                    course.courseImages.length > 1 && (
                        <img src={getImageUrl(`courses/${course.imagesFolder}`, activeImage)} alt={activeImage} className=" w-3/5 mx-auto float-left" />
                    )
                }

                {
                    course.courseImages.length > 2 && (
                        <div className="grid grid-cols-3 mt-2 gap-2">
                            {
                                course.courseImages.map((image, index) => {
                                    if (index != 0) {
                                        return <img key={uniqid()} src={getImageUrl(`courses/${course.imagesFolder}`, image)} alt={image} className="w-full" onClick={() => changeActiveImage(image)} />
                                    }
                                })}
                        </div>
                    )
                }
            </div>
            {
                (course.courseImages.length > 1 && course.overview.length > 1)
                    ? (
                        <div className={` clear-left `}>
                            <h5 className="text-center">Overview</h5>
                            {course.overview.map((paragraph) => {
                                return <p key={uniqid()}>{paragraph}</p>
                            })}
                        </div>
                    )
                    : (
                        <div className={`${(course.bookImage || course.requirements) ? "col-span-6" : "col-span-12"} `}>
                            <h5 className="text-center">Overview</h5>
                            {course.overview}
                        </div>
                    )
            }
        </div>
    )
}

export default CourseModalTopContent