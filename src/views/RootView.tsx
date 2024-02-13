import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Header } from "../components/Header";

function RootView() {
	let location = useLocation();

	return (
		<>
			<ScrollRestoration />

			{location.pathname !== '/' && <Header />}

			<Outlet />
		</>
	)
}

export default RootView