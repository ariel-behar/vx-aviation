import uniqid from 'uniqid'

import getImageUrl from '../../utils/getImageUrl'

import { ICourse } from '../ViewSpecificComponents/FlightSchoolView/CoursesSection'

interface Props extends ICourse { }

function CourseModalBottomContent({ ...course }: Props) {
    return (
        <>
            <hr className="mx-auto my-3 w-3/4 border-secondary" />

            <div className="grid grid-cols-12 py-3 gap-4 px-2">
                {
                    course.bookImage && (
                        <div className="px-3 col-span-5">
                            <img key={uniqid()} src={getImageUrl(`courses/${course.imagesFolder}`, course.bookImage)} alt={course.bookImage} loading="lazy" className="w-auto h-full mx-auto" />
                        </div>
                    )
                }

                {
                    course.requirements && (
                        <div className={`px-3 ${!course.bookImage ? "col-span-12 flex justify-center" : "col-span-7"}`}>
                            <ul className="list-disc">
                                {
                                    course.requirements.map((requirement: string) => (
                                        <li key={uniqid()}>
                                            <p className="text-justify text-sm">{requirement}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default CourseModalBottomContent