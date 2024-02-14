import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function RootView() {
	let location = useLocation();

	return (
		<>
			<ScrollRestoration />

			{location.pathname !== '/' && <Header />}

			<Outlet />

			<Footer />
		</>
	)
}

export default RootView