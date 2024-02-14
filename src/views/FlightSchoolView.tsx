import SideMenu from "../components/SideMenu"
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
			<SideMenu />
			<HeroSection />
			<ImagesSection />
			<WhoWeAreSection />
			<UpToDateTrainingSection />
			<div className="bg-custom-gradient border-primary border-t-[1px] border-b-[1px]">
				<CoursesSection />

				<hr className="border-primary border-1 w-1/4 mx-auto" />

				<WhyChooseUsSection />
			</div>

			<ContactSection /> 
		</>
	)
}

export default FlightSchoolView