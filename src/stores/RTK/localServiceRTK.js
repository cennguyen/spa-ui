import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from './rtkApi'
export const LOCAL_PATH = 'localServices'

export const localServices = createApi({
    reducerPath: LOCAL_PATH,
    baseQuery: axiosBaseQuery(LOCAL_PATH),
    endpoints: () => ({}),
});

const localApiQuery = localServices.injectEndpoints({
    endpoints: (builder) => ({
        getTemplateFromLocal: builder.query({
            query: (skin) => ({
                endpoint: `${process.env.PUBLIC_URL}/template/${skin}.json`,
                method: 'get',
            }),
        }),
    }),
});

export const {
    useGetTemplateFromLocalQuery,
    useGetMessagesByLocaleQuery
} = localApiQuery;