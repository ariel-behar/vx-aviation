import { useCourseModalContext } from '../../context/CourseModalContext';

import PhoneNumber from '../PhoneNumber'

import Button from '@material-tailwind/react/components/Button'

function CourseModalFooter() {
    const { handleShowModal } = useCourseModalContext();

    return (
        <footer className="bg-custom-gradient p-5 border-t-2 border-primary flex items-center justify-center">
            <div className="text-white ml-auto">
                <h5 className='uppercase text-center mb-5'>Call us for more details about this program</h5>
                <PhoneNumber />
            </div>
            <Button className="bg-secondary rounded-md ml-auto" onClick={handleShowModal}>Close</Button>
        </footer>
    )
}

export default CourseModalFooter