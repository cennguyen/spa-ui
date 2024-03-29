import { memo } from "react"
import {
    IconHeaderContainer
}
    from "./styled";
import withRouter from "../../../hook/withRouteCustome";
const IconHeader = (props) => {
    const redirectHomePageHandler = () => {
        props.router.navigate('/home');
    }
    return (
        <IconHeaderContainer >
            <button onClick={redirectHomePageHandler} />
        </IconHeaderContainer>
    );
}

export default withRouter(memo(IconHeader));