import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const LazyRootView = lazy(() => import("../views/RootView"));
const LazyErrorView = lazy(() => import("../views/ErrorView"));

const LazyHomeView = lazy(() => import("../views/HomeView"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <LazyRootView />,
        errorElement: <LazyErrorView />,
        children: [
            {
                path: "/",
                element: <LazyHomeView />
            }
        ]
    }
]);

export default router;