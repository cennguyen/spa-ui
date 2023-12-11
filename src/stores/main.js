import { configureStore } from '@reduxjs/toolkit'

/** *** slice */
import Layout from './slices/Layout'
/** *** RTK */
import { LOCAL_PATH, localServices } from './RTK/layoutTemplateService.js'

const store = configureStore({
    reducer: {
        Layout,
        [LOCAL_PATH]: localServices.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            localServices.middleware,
        ]),
})

export default store