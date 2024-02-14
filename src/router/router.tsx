import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const LazyRootView = lazy(() => import("../views/RootView"));
const LazyErrorView = lazy(() => import("../views/ErrorView"));

const LazyHomeView = lazy(() => import("../views/HomeView"));
const LazyFlightSchoolView = lazy(() => import("../views/FlightSchoolView"));
const LazyMaintenanceServicesView = lazy(() => import("../views/MaintenanceServicesView"));
const LazyAirplanesForSaleView = lazy(() => import("../views/AirplanesForSaleView"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <LazyRootView />,
        errorElement: <LazyErrorView />,
        children: [
            {
                path: "/",
                element: <LazyHomeView />
            },
            {
                path: '/flight-school',
                element: <LazyFlightSchoolView />
            },
            {
                path: '/services',
                element: <LazyMaintenanceServicesView />
            },
            {
                path: '/airplanes-for-sale',
                element: <LazyAirplanesForSaleView />
            }
        ]
    }
]);

export default router;