import { useEffect, useState } from "react";
import uniqid from "uniqid";

import { ICourse } from "./ViewSpecificComponents/FlightSchoolView/CoursesSection"
import PhoneNumber from "./PhoneNumber";
import getImageUrl from "../utils/getImageUrl";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-tailwind/react/components/Button";

interface Props extends ICourse {
	showModal: boolean
	handleShowModal: () => void
}

function Modal({
	showModal,
	handleShowModal,
	...course
}: Props) {
	const [activeImage, setActiveImage] = useState<string>(course.courseImages[2])

	const changeActiveImage = (image: string) => {
		let currentImage = image;
		console.log('currentImage:', currentImage)
		
		setActiveImage(prevState => currentImage)
	}

	useEffect(() => {
		document.body.classList.add('active-modal')

		return () => document.body.classList.remove('active-modal')
	},[])


	return (
		<>
			<div className={`w-screen h-screen top-0 left-0 bottom-0 right-0 fixed z-[9999] grid`}>
				<div onClick={handleShowModal} className="w-screen h-screen top-0 left-0 bottom-0 right-0 fixed bg-custom-gradient-opaque backdrop-blur"></div>
				{/* <div className={styles['modal-content']}> */}
				<div className="relative justify-self-center self-center text-secondary max-w-[800px] min-w-[300px] bg-white" >
				<header className="bg-custom-gradient p-5  border-b-2 border-primary flex items-center">
					<h4 className="text-white mx-auto text-2xl">{course.courseName}</h4>
					<FontAwesomeIcon className="cursor-pointer" icon="xmark" size="xl" onClick={handleShowModal} />
				</header>

				<section className="p-3">
					<div className="grid grid-cols-12 py-3 gap-3">
						<div className={` ${course.courseImages.length > 2 ? "col-span-6" : "col-span-12"}`}>

							{course.courseImages.length > 2 && <img src={getImageUrl(`courses/${course.imagesFolder}`, activeImage)} alt={activeImage} className=" w-full" />}

							{
								course.courseImages.length > 2 && (
									<div className="grid grid-cols-3 mt-2 gap-2">
										{
										course.courseImages.map((image, index) => {
											if (index != 0) {
												return <img key={uniqid()} src={getImageUrl(`courses/${course.imagesFolder}`, image)} alt={image} className="w-full" onClick={() => changeActiveImage(image)} />
											}

										})}
									</div>
								)
							}
						</div>
						<div className={`${(course.bookImage || course.requirements) ? "col-span-6" : "col-span-12"} `}>
							<h5 className="text-center">Overview</h5>
							{course.overview}
						</div>
					</div>

					{(course.bookImage || course.requirements) && <hr className="mx-auto my-3 w-3/4 border-secondary" />}


					<div className="grid grid-cols-12 py-3 gap-3">
						{
							course.bookImage && (
								<div className="px-3 col-span-6">
									<img key={uniqid()} src={getImageUrl(`courses/${course.imagesFolder}`, course.bookImage)} alt={course.bookImage} loading="lazy" className="w-auto h-full" />
								</div>
							)
						}

						{
							course.requirements && (
								course.requirements?.length > 0 && (
									<div className={`px-3 ${!course.bookImage ? "col-span-12 flex justify-center" : "col-span-6"}`}>
										<ul className="list-disc">
											{
												course.requirements.map(requirement => (
													<li key={uniqid()}>{requirement}</li>
												))
											}
										</ul>
									</div>
								)
							)
						}


					</div>
				</section>

				<footer className="bg-custom-gradient p-5 border-t-2 border-primary flex items-center justify-center">
					<div className="text-white ml-auto">
						<h5 className='uppercase text-center mb-5'>Call us for more details about this program</h5>
						<PhoneNumber />
					</div>
					<Button className="bg-secondary rounded-md ml-auto" onClick={handleShowModal}>Close</Button>
				</footer>
				</div>
			</div>


		</>
	);
}

export default Modal

