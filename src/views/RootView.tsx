import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useCourseModalContext } from "../context/CourseModalContext";
import { lazy } from "react";
const LazyCourseModal = lazy(() => import("../components/CourseModal/CourseModal"));

function RootView() {
	let location = useLocation();
	const { selectedCourse, showModal } = useCourseModalContext();

	return (
		<>
			<ScrollRestoration />

			{location.pathname !== '/' && <Header />}

			<Outlet />

			{location.pathname !== '/' && <Footer />}

			{(selectedCourse && showModal) && <LazyCourseModal {...selectedCourse} />}
		</>
	)
}

export default RootView