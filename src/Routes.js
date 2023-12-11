import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./app/component/HomePage";
import ErrorPage from "./app/component/ErrorPage";
import About from "./app/component/BodyDynamic/screens/About";
import Contact from "./app/component/BodyDynamic/screens/Contact";

const mainDynamicRender = (component) => {
    return <HomePage component={component} />
}
const Routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" >
                <Route path='' element={<Navigate to='home' replace={true} />} />
                <Route path="home" element={<HomePage />} />
                <Route path="about" element={mainDynamicRender(<About />)} />
                <Route path="contacts" element={mainDynamicRender(<Contact />)} />
                <Route path="*" element={mainDynamicRender(<ErrorPage />)} />
                {/* <Route path="contacts/1" element={}/> */}
            </Route>

        </>
    ));


export default Routes;