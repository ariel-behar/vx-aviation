import uniqid from "uniqid"

import { ICourse } from "./ViewSpecificComponents/FlightSchoolView/CoursesSection"

import CourseCard from "./CourseCard"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MuiCarousel from "@material-tailwind/react/components/Carousel";

interface Props {
    data: ICourse[]
}

function CustomCarousel({
    data
}: Props) {

    const chevronStyles = "text-white text-lg bg-primary rounded-full py-3 px-4 hover:scale-110 cursor-pointer transition-all ease-in-out hover:bg-green-700 active:bg-green-900"

    return (
        <MuiCarousel
            className="pt-8 pb-12"
            prevArrow={({ handlePrev }) => (
                <FontAwesomeIcon icon="chevron-left" onClick={handlePrev} className={`absolute top-[10px] left-[48%] -translate-x-[50%] ${chevronStyles}`} />
            )}
            nextArrow={({ handleNext }) => (
                <FontAwesomeIcon icon="chevron-right" onClick={handleNext} className={`absolute top-[10px] right-[48%] translate-x-[50%] ${chevronStyles}`} />
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-[3] flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <FontAwesomeIcon
                            icon="circle"
                            color={`${activeIndex === i ? "#2E7D32" : "#166534"}`}
                            key={uniqid()}
                            className={`cursor-pointer  transition-all content-[''] ${activeIndex === i ? "scale-125" : ""}`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
            transition={{ duration: 0.3 }} >

            {/* Slide 1 */}
            <div className="gap-5 grid grid-cols-3  px-5">
                {
                    data.map((course, index) => (index <= 2) && <CourseCard {...course} key={uniqid()} />)
                }
            </div>

            {/* Slide 2 */}
            <div className="flex gap-5  px-5">
                {
                    data.map((course, index) => (index > 2) && <CourseCard {...course} key={uniqid()} />)
                }
            </div>
        </MuiCarousel>
    )
}

export default CustomCarousel