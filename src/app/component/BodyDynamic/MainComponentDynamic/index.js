import React, { memo } from "react";
import { MainContainer } from "./styled";


const MainComponentDynamic = (props) => {
    const renderHomePageDefault = () => {
        return (
            <>
                <h1>This is Home Page</h1>
            </>
        );
    }
    return (
        <MainContainer>
            {props.component || renderHomePageDefault()}
        </MainContainer>
    );
}

export default memo(MainComponentDynamic);