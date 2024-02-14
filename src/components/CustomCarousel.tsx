import uniqid from "uniqid"

import { ICourse } from "./ViewSpecificComponents/FlightSchoolView/CoursesSection"

import CourseCard from "./CourseCard"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "@material-tailwind/react/components/Carousel";

interface Props {
    data: ICourse[]
}

function CustomCarousel({
    data
}: Props) {

    const chevronStyles = "text-white text-2xl bg-primary rounded-full py-3 px-5 hover:scale-110 cursor-pointer transition-all ease-in-out hover:bg-green-700 active:bg-green-900"

    return (
        <Carousel
            prevArrow={({ handlePrev }) => (
                <FontAwesomeIcon icon="chevron-left" onClick={handlePrev} className={`absolute top-[10px] left-[45%] -translate-x-[45%] ${chevronStyles}`} />
            )}
            nextArrow={({ handleNext }) => (
                <FontAwesomeIcon icon="chevron-right" onClick={handleNext} className={`absolute top-[10px] right-[45%] translate-x-[45%] ${chevronStyles}`} />
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
            transition={{ duration: 0.3 }} className="rounded-xl py-12">
            <div className="flex gap-5">
                {
                    data.map((course, index) => {
                        if (index <= 2) {
                            return (
                                <div key={uniqid()}>
                                    <CourseCard {...course} />
                                </div>
                            )
                        }
                    })
                }
            </div>

            <div className="flex gap-5">
                {
                    data.map((course, index) => {
                        if (index > 2) {
                            return (
                                <div key={uniqid()}>
                                    <CourseCard {...course} />
                                </div>
                            )
                        }
                    })
                }
            </div>
        </Carousel>
    )
}

export default CustomCarousel