const routes = {
    base: ':lang/standard',
    home: ':lang/standard/home',
    sportLeagueMatchups: ':lang/standard/:sportName/:leagueName/matchups',
    sportLeagueEvent: ':lang/standard/:sportName/:leagueName/:eventName/:eventId',
    sportMatchups: ':lang/standard/:sportName/matchups',
    sportMatchupsHighlights: ':lang/standard/:sportName/matchups/highlights',
    sportMatchupsLive: ':lang/standard/:sportName/matchups/live',
    sportLeagues: ':lang/standard/:sportName/leagues',
    sportTeasers: ':lang/standard/:sportName/teasers',
    sportGames: ':lang/standard/:sportName/games',
    esportGamesLeagueMatchups:
        ':lang/standard/esports/games/:leagueName/matchups',
    esportGames: ':lang/standard/esports/games',
}

export default routes