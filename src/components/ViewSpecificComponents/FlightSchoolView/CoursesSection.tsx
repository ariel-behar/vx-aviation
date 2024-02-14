import Carousel from "../../Carousel"
import _courses from "../../../data/courses.json";

export interface ICourse {
    id: number,
    courseName: string,
    imagesFolder: string,
    courseImages: string[],
    bookImage: string | null,
    headline: string,
    overview: string[],
    requirements: string[] | null
}

const courses = _courses as ICourse[]

function CoursesSection() {
    return (
        <section id="courses-section">
            <div className="py-12 relative">
                <h3 className="uppercase text-center absolute left-[50px] top-[70px]">Our Courses</h3>
                <Carousel data={courses}/>
            </div>
        </section>
    )
}

export default CoursesSection