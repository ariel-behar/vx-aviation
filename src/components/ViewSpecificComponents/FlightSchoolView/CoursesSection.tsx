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
        <section className="bg-custom-gradient">
            <div className=" py-12">
                <Carousel data={courses}/>
            </div>
        </section>
    )
}

export default CoursesSection