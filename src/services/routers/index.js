import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
} from 'react-router-dom'
import HomePage from '../../app/component/HomePage'
import About from '../../app/component/BodyDynamic/screens/About'
import Contact from '../../app/component/BodyDynamic/screens/Contact'
import Redirect from '../../app/component/redirect'

const mainDynamicRender = (component) => {
    return <HomePage component={component} />
}
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path=''
                exact
                loader={({ params }) => params}

            >
                <Route path='' element={<Navigate to='home' replace={true} />} />
                <Route
                    path='home'
                    exact
                    element={<HomePage />}
                />
                <Route path='about' element={mainDynamicRender(<About/>)}/>
                <Route path='contacts' element={mainDynamicRender(<Contact/>)}/>
            </Route>
            <Route
                path=':lang'
                element={<Navigate to='standard' replace={false} />}
            />
            <Route path='/' element={<Redirect />} />
        </>,
    ),
)

export default router;

