import { useState } from "react";
import uniqid from "uniqid";

import getImageUrl from "../../utils/getImageUrl"

import { ICourse } from "../ViewSpecificComponents/FlightSchoolView/CoursesSection"

interface Props extends ICourse { }

function CourseModalTopContent({
    ...course
}: Props) {
    const [activeImage, setActiveImage] = useState<string>(course.courseImages[1])

    const changeActiveImage = (image: string) => {
        let currentImage = image;
        setActiveImage(prevState => currentImage)
    }

    return (
        <div className={`${(course.courseImages.length === 2 ) ? "" : "grid grid-cols-12 gap-4"} py-3 px-2`}>
            <div className={` ${course.courseImages.length > 2 ? "col-span-5" : "col-span-12"}`}>

                {/* Image displayed when course has ONLY 1 image aside from the cover image */}
                {course.courseImages.length == 2 && <img src={getImageUrl(`courses/${course.imagesFolder}`, activeImage)} alt={activeImage} className="w-3/5 float-left pr-5" />}

                {/* Images displayed when course has MORE THAN 1 image aside from the cover image */}
                {course.courseImages.length > 2 && (
                    <>
                        <img src={getImageUrl(`courses/${course.imagesFolder}`, activeImage)} alt={activeImage} className="w-full mt-3" />
                        <div className="grid grid-cols-3 mt-2 gap-2">
                            {
                                course.courseImages.map((image, index) => {
                                    if (index != 0) {
                                        return <img key={uniqid()} src={getImageUrl(`courses/${course.imagesFolder}`, image)} alt={image} className="w-full cursor-pointer hover:shadow-lg hover:scale-110 transition-all duration-300" onClick={() => changeActiveImage(image)} />
                                    }
                                })}
                        </div>
                    </>
                )}

            </div>

            {
                
                (course.courseImages.length === 2 )
                    ? (
                        <>
                            {/* Content display for courses with ONLY 1 image aside from the cover */}
                            <h5 className="text-center">Overview</h5>
                            {course.overview.map((paragraph) => {
                                return <p key={uniqid()} className="text-justify text-sm mt-3">{paragraph}</p>
                            })}
                        </>
                    )
                    : (
                        // Content display for courses with MORE THAN 1 image aside from the cover 
                        <div className={`${(course.bookImage || course.requirements) ? "col-span-7" : "col-span-12"} `}>
                            <h5 className="text-center">Overview</h5>
                            <p className="text-justify text-sm">{course.overview}</p>
                        </div>
                    )
            }
        </div>
    )
}

export default CourseModalTopContent