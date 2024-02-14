import CoursesSection from "../components/ViewSpecificComponents/FlightSchoolView/CoursesSection"
import HeroSection from "../components/ViewSpecificComponents/FlightSchoolView/HeroSection"
import ImagesSection from "../components/ViewSpecificComponents/FlightSchoolView/ImagesSection"
import UpToDateTrainingSection from "../components/ViewSpecificComponents/FlightSchoolView/UpToDateTrainingSection"
import WhoWeAreSection from "../components/ViewSpecificComponents/FlightSchoolView/WhoWeAreSection"

function FlightSchoolView() {
	return (
		<>
			<HeroSection />
			<ImagesSection />
			<WhoWeAreSection />
			<UpToDateTrainingSection />
			<CoursesSection />
			
		</>
	)
}

export default FlightSchoolView