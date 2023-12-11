import { SPORT_ID, SPORT_NAME } from '../../constants/sportId'
import { compile, pathToRegexp } from 'path-to-regexp'
import routes from '../Routes/routes'

// TODO transform to use Path-to-RegExp
/**
 *
 * @returns {`wss://${string}/sports-websocket/ws`}
 */
export const generateWebSocketURL = () => {
    return `wss://${window.location.hostname}/sports-websocket/ws`
}

/**
 *
 * @param sportId
 * @returns {string}
 */
export const generateLeftMenuSportsURL = (sportId) => {
    if (typeof sportId !== 'number') {
        return ''
    }
    const sportName = SPORT_ID[sportId]
    switch (sportId) {
        case SPORT_NAME.esports:
        case SPORT_NAME.soccer: {
            return generateRoutesUrl(
                routes.sportMatchupsHighlights,
                { sportName },
                true,
            )
        }
        default: {
            return generateRoutesUrl(routes.sportMatchups, { sportName }, true)
        }
    }
}

// TODO transform to use Path-to-RegExp
/**
 *
 * @param sportId
 * @param leagueId
 * @param leagueName
 * @returns {string}
 */
export const generateLeftMenuLeaguesURL = (sportId, leagueId, leagueName) => {
    if (
        typeof sportId !== 'number' ||
        typeof leagueId !== 'number' ||
        typeof leagueName !== 'string'
    ) {
        return ''
    }
    const leagueNameNoSpace = leagueName.replaceAll(' ', '')
    if (SPORT_NAME.esports === sportId) {
        switch (leagueId) {
            case -1: {
                return generateRoutesUrl(routes.esportGames, {}, true)
            }
            default: {
                return generateRoutesUrl(
                    routes.esportGamesLeagueMatchups,
                    { leagueName: leagueNameNoSpace },
                    true,
                )
            }
        }
    }
    const sportName = SPORT_ID[sportId]
    switch (leagueId) {
        case -1: {
            return generateRoutesUrl(routes.sportLeagues, { sportName }, true)
        }
        default: {
            return generateRoutesUrl(
                routes.sportLeagueMatchups,
                { sportName, leagueName: leagueNameNoSpace },
                true,
            )
        }
    }
}

/**
 *
 * @param {string} path - base of path Ex: :lang/standard/:sportName
 * @param {object} params - params pass to path Ex: {lang: 'vn', sportName: 'soccer'}
 * @param {boolean} withCurrentLang - optional to auto apply current lang to pathname
 * @returns {string} - pathname after convented
 */
export const generateRoutesUrl = (path, params, withCurrentLang = false) => {
    if (withCurrentLang) {
        const currentParams = {}
        const currentPath = window.location.pathname
        const keys = []
        const pathRegExp = pathToRegexp('/' + routes.base, keys)
        const match = pathRegExp.exec(currentPath)
        if (match) {
            keys.forEach((key, index) => {
                currentParams[key.name] = match[index + 1]
            })
        }
        const compileUrl = compile(path)({
            ...params,
            lang: currentParams?.lang || 'en',
        })
        return `/${compileUrl}`
    }
    return compile(path)(params)
}