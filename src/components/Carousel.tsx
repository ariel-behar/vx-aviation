import uniqid from "uniqid"

import { ICourse } from "./ViewSpecificComponents/FlightSchoolView/CoursesSection"
import {} from '@material-tailwind/react/components/Carousel/index'

import CourseCard from "./CourseCard"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MuiCarousel from "@material-tailwind/react/components/Carousel";
import useScreenSize from "../hooks/useScreenSize";

interface Props {
    data: ICourse[]
}

function CustomCarousel({
    data
}: Props) {
    const screenSize = useScreenSize();

    const chevronStyles = "text-white text-lg bg-primary rounded-full py-3 px-4 hover:scale-110 cursor-pointer transition-all ease-in-out hover:bg-green-700 active:bg-green-900"

    return (
        <MuiCarousel
            loop
            autoplay
            className="pt-8 pb-12"
            prevArrow={({ handlePrev }) => (
                <FontAwesomeIcon icon="chevron-left" onClick={handlePrev} className={`absolute top-[10px] left-[10%] sm:left-[45%] md:left-[46%] lg:left-[47%] xl:left-[48%] -translate-x-[50%] ${chevronStyles}`} />
            )}
            nextArrow={({ handleNext }) => (
                <FontAwesomeIcon icon="chevron-right" onClick={handleNext} className={`absolute top-[10px] right-[77%] sm:right-[45%] lg:right-[47%] md:right-[46%] xl:right-[48%] translate-x-[50%] ${chevronStyles}`} />
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute top-4 right-[50px] z-[3] flex  gap-2">
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

            {/* The below code is done this way, because the Carousel component is looking for the children div elements to create the slides. For this reason, each potential slide is separated in this strange way. If the slides are exported to a different component (ex. CarouselSlides), it will not work as expected, because Carousel will consider the fragment as a child and the slides will not be displayed properly. */}

            {/* On "xs" display 6 slides with 1 card*/}
            {(screenSize === "xs") && (
                data.map(course => (
                    <div key={uniqid()} className="px-5">
                        <CourseCard {...course} />
                    </div>
                ))
            )}

            {/* On "sm" and "md" display 3 slides with 2 cards*/}
            {(screenSize === "sm" || screenSize === "md") && (
                <div className="px-5 grid grid-cols-2 gap-3">
                    {data.map((course, index) => (index <= 1) && <CourseCard {...course} key={uniqid()} />)}
                </div>
            )}

            {(screenSize === "sm" || screenSize === "md") && (
                <div className="px-5 grid grid-cols-2 gap-3">
                    {data.map((course, index) => (index > 1 && index <= 3) && <CourseCard {...course} key={uniqid()} />)}
                </div>
            )}

            {(screenSize === "sm" || screenSize === "md") && (
                <div className="px-5 grid grid-cols-2 gap-3">
                    {data.map((course, index) => (index > 3 && index <= 5) && <CourseCard {...course} key={uniqid()} />)}
                </div>
            )}

            {/* On "lg", "xl" and "2xl" display 2 slides with 3 cards*/}
            {(screenSize === "lg" || screenSize === "xl" || screenSize === "2xl") && (
                <div className="px-5 grid grid-cols-3 gap-3">
                    {data.map((course, index) => (index <= 2) && <CourseCard {...course} key={uniqid()} />)}
                </div>
            )}

            {(screenSize === "lg" || screenSize === "xl" || screenSize === "2xl") && (
                <div className="px-5 grid grid-cols-3 gap-3">
                    {data.map((course, index) => (index > 2) && <CourseCard {...course} key={uniqid()} />)}
                </div>
            )}
        </MuiCarousel >
    )
}

export default CustomCarousel