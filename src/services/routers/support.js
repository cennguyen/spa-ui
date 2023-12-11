import { pathToRegexp, compile } from 'path-to-regexp'

/**
 * @param {*String} route - route
 * @param {*Array} params - array of params in order to match routes
 * @return {*String} - construct tor url for attaching to <Link>
 */
const buildUri = (route, params = {}) => {
    if (!route) {
        throw new Error('The route param passed to buildUri is undefined')
    }
    const toPath = compile(route)
    return toPath(params)
}

/**
 * Ensure a parsed route matches the intended path
 */
export const testRoute = (route, path) => {
    const regex = pathToRegexp(route)
    const result = regex.test(path)
    return result
}

export default buildUri