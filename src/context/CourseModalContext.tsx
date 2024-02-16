import { createContext, useContext, useState, useTransition } from "react";

import { ICourse } from "../components/ViewSpecificComponents/FlightSchoolView/CoursesSection";

interface CourseModalContextProps {
    selectedCourse: ICourse | null,
    selectCourseHandler: (course: ICourse) => void,
    showModal: boolean,
    handleShowModal: () => void
}

const CourseModalContext = createContext<CourseModalContextProps>({
    selectedCourse: null,
    selectCourseHandler: () => {},
    showModal: false,
    handleShowModal: () => {}
})

interface Props {
    children: React.ReactNode
}

export const CourseModalProvider = ({
    children
}:Props) => {
    const [, startTransition] = useTransition();
    const [showModal, setShowModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<ICourse | null>(null)

    const selectCourseHandler = (course: ICourse) => {
        setSelectedCourse(prevState => course)
        startTransition(() => {
            setShowModal(!showModal);
        });
    }

    const handleShowModal = () => {
        startTransition(() => {
            setShowModal(!showModal);
        });
    }

    return (
        <CourseModalContext.Provider value={{selectedCourse, showModal, selectCourseHandler, handleShowModal}} >
            {children}
        </CourseModalContext.Provider>
    )
}

export const useCourseModalContext = () => {
    const courseModalState = useContext(CourseModalContext);

    return courseModalState;
}

