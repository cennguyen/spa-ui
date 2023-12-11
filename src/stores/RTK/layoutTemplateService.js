import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './rtkApi';
import { getTemplateFromLocal } from '../../services';
export const LOCAL_PATH = 'localServices';

export const localServices = createApi({
    reducerPath: LOCAL_PATH,
    baseQuery: axiosBaseQuery(),
    endpoints: () => ({}),
})

const layoutTemplateServiceQuery = localServices.injectEndpoints({
    endpoints: (builder) => ({
        getTemplate: builder.query({
            async queryFn(_arg, _queryApi, _extraOptions, memberServicesBQ) {
                try {
                    const template = _arg
                        ? await getTemplateFromLocal(_arg)
                        : await memberServicesBQ({
                            endpoint: 'load-template',
                        });
                    return {
                        data: {
                            globalAttribute: template.data.globalAttribute,
                        },
                    }
                } catch (e) {
                    console.warn('warn: ', e)
                    return { error: e.error }
                }
            },
        }),
    }),
})

export const {
    useGetTemplateQuery,
    useGetAccountBalanceQuery,
    useLoginMutation,
    useLogoutMutation,
    useGetDataNoCacheQuery,
} = layoutTemplateServiceQuery
