import { memo } from "react"
import Header from "../Header";
import Footer from "../Footer";
import BodyDynamic from "../BodyDynamic";

const HomePage = (props) => {

    return (
        <>
            <Header />
            <BodyDynamic component={props.component} />
            <Footer />
        </>
    );
}
export default memo(HomePage);