import { memo } from "react"
import { BodyContainer } from "./styled";
import LeftSideBar from "./LeftSideBar";
import MainComponentDynamic from "./MainComponentDynamic";


const BodyDynamic = (props) => {

    return (
        <BodyContainer>
            <LeftSideBar/>
            <MainComponentDynamic component={props.component}/>
        </BodyContainer>

    );
}

export default memo(BodyDynamic);