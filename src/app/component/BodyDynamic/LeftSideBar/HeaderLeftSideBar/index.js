import React, { memo } from "react"
import SearchLeftSideBar from "./SearchLeftSideBar";

const HeaderLeftSideBar = () => {
    return (
        <React.Fragment>
            <SearchLeftSideBar />
        </React.Fragment>
    );
}

export default memo(HeaderLeftSideBar);