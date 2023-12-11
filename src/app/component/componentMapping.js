import { lazy } from "react";

// will define late
const IconHeader = lazy(() => import("../component/Header/IconHeader"));
const LeftSideBar = lazy(() => import("../component/BodyDynamic/LeftSideBar/"))

export {
    IconHeader,
    LeftSideBar,
}