
import { Navigate, useLocation } from 'react-router-dom'


const Redirect = () => {
    const location = useLocation()
    return (
        <Navigate
            // to={generateRoutesUrl(routes.base, 'en', true)}
            replace={true}
            state={{ from: location }}
        />
    )
}

export default Redirect