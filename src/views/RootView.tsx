import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useCourseModalContext } from "../context/CourseModalContext";
import { lazy } from "react";
const LazyCourseModal = lazy(() => import("../components/CourseModal"));

function RootView() {
	let location = useLocation();
	const { selectedCourse, showModal, handleShowModal } = useCourseModalContext();

	return (
		<>
			<ScrollRestoration />

			{location.pathname !== '/' && <Header />}

			<Outlet />

			<Footer />

			{(selectedCourse && showModal) && <LazyCourseModal {...selectedCourse} showModal={showModal} handleShowModal={handleShowModal} />}
		</>
	)
}

export default RootView