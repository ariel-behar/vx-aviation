import { lazy, useState, useTransition } from "react";
import getImageUrl from "../utils/getImageUrl";

import { ICourse } from "./ViewSpecificComponents/FlightSchoolView/CoursesSection";
const LazyModal = lazy(() => import("./Modal"));

import Button from "@material-tailwind/react/components/Button";

interface Props extends ICourse { }

function CourseCard({
    ...course
}: Props) {
    const [, startTransition] = useTransition();
    const [showModal, setShowModal] = useState(false)

    const handleReadMoreBtnClock = () => {
        startTransition(() => {
            setShowModal(true);
          });
    }

    return (
        <>
            <div className="bg-white mt-10 w-full rounded-md flex flex-col overflow-hidden shadow-md
        hover:shadow-2xl transition-all ease-in-out border-none">
                <img
                    className=" w-full  border-none"
                    src={getImageUrl(`courses/${course.imagesFolder}`, course.courseImages[0])}
                    alt="card-image"
                    loading="lazy"
                />
                <div className="p-5">
                    <h4 className="text-secondary mb-2">
                        {course.courseName}
                    </h4>
                    <p className="text-secondary">
                        {course.headline}
                    </p>
                </div>
                <div className="p-5 mt-auto">
                    <Button className="bg-secondary font-font1 font-light w-full text-md" onClick={handleReadMoreBtnClock}>Read More</Button>
                </div>
            </div>

            {showModal && <LazyModal {...course} />} 
        </>
    );
}

export default CourseCard;