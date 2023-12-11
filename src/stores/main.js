import { configureStore } from '@reduxjs/toolkit'

/** *** slice */
import Layout from './slices/Layout'
/** *** RTK */
import { LOCAL_PATH, localServices } from './RTK/layoutTemplateService.js'

const store = configureStore({
    reducer: {
        Layout,
        [LOCAL_PATH]: localServices.reducer,
        // [SPORT_PATH]: sportServices.reducer,
        // [MEMBER_PATH]: memberServices.reducer,
        // [OTHER_PATH]: otherApi.reducer,
        // [WS_SPORT_PATH]: wsSportServices.reducer,
        // [WS_ODD_PATH]: wsOddPageServices.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            localServices.middleware,
            // sportServices.middleware,
            // memberServices.middleware,
            // otherApi.middleware,
            // wsSportServices.middleware,
            // wsOddPageServices.middleware,
        ]),
})

export default store