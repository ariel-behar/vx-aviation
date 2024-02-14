import ContactSection from "../components/ViewSpecificComponents/FlightSchoolView/ContactSection"
import CoursesSection from "../components/ViewSpecificComponents/FlightSchoolView/CoursesSection"
import HeroSection from "../components/ViewSpecificComponents/FlightSchoolView/HeroSection"
import ImagesSection from "../components/ViewSpecificComponents/FlightSchoolView/ImagesSection"
import UpToDateTrainingSection from "../components/ViewSpecificComponents/FlightSchoolView/UpToDateTrainingSection"
import WhoWeAreSection from "../components/ViewSpecificComponents/FlightSchoolView/WhoWeAreSection"
import WhyChooseUsSection from "../components/ViewSpecificComponents/FlightSchoolView/WhyChooseUsSection"

function FlightSchoolView() {
	return (
		<>
			<HeroSection />
			<ImagesSection />
			<WhoWeAreSection />
			<UpToDateTrainingSection />
			<div className="bg-custom-gradient border-b-1 border-b-primary">
				<CoursesSection />

				<hr className="border-primary border-1 w-1/4 mx-auto" />

				<WhyChooseUsSection />
			</div>

			<ContactSection /> 
		</>
	)
}

export default FlightSchoolView