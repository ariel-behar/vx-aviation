import { Outlet, ScrollRestoration } from "react-router-dom";

function RootView() {
  return (
    <>
        <ScrollRestoration />
        <Outlet />
    </>
  )
}

export default RootView