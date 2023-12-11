import axios from 'axios'
import { get } from 'lodash'

const SPORTS_MARKETS = '/sports-service/sv/compact/sports-markets'
const CASINO_SIDE_BAR = 'casino/getCasinoSideBars'

const validResponseUrl = (responseUrl) =>
    responseUrl &&
    (responseUrl.includes(SPORTS_MARKETS) ||
        responseUrl.includes(CASINO_SIDE_BAR))

const onSuccessRequest = (config) => {
    config.params = {
        locale: 'en_US',
        _: new Date().getTime(),
        withCredentials: true,
    }
    return config
}

const onSuccessResponse = (response) => {
    if (
        response?.status === 200 &&
        validResponseUrl(response.request?.responseURL)
    ) {
        // Turn off maintain page
    }
    return response
}

const onFailureResponse = (error) => {
    if (validResponseUrl(error.request?.responseURL)) {
        // Turn on maintain page
    }

    return Promise.reject(error)
}

class Api {
    constructor(pathName) {
        this.pathName = pathName
    }

    static initAxios() {
        const baseURL = `/${this.pathName || ''}`
        return axios.create({
            baseURL,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            },
        })
    }

    static parseStringParams(params) {
        const parts = []
        for (let key in params) {
            // eslint-disable-next-line no-prototype-builtins
            if (params.hasOwnProperty(key)) {
                parts.push(
                    `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
                )
            }
        }
        return parts.join('&')
    }

    static responseApi(response) {
        if (response?.status === 401) {
            /** Handle something */
        }

        return {
            error: {
                data: response?.data,
                status: response?.status,
                isSuccess: false,
                error: response?.error,
            },
        }
    }

    /**
     * Call a service action via REST API
     *
     * @param {any} endpoint end point URL
     * @param {object} params  parameters to request
     * @param {any} options optional add to request
     * @returns  {Promise}
     *
     */

    static async rest(endpoint, params, options = { method: 'get' }) {
        const headers = get(options, 'headers', {})
        const token = { token: '' }
        try {
            const axios = this.initAxios()
            const config = {
                method: options.method,
                data: params,
                headers: {
                    ...headers,
                    ...token,
                },
            }
            axios.defaults.timeout = 60000
            axios.interceptors.request.use(onSuccessRequest, (error) =>
                Promise.reject(error),
            )
            axios.interceptors.response.use(onSuccessResponse, onFailureResponse)
            return await axios?.request(endpoint, config)
        } catch (err) {
            return this.responseApi(err.response)
        }
    }

    static setToken(token) {
        axios.defaults.headers.common['token'] = `${token}`
    }

    static removeToken() {
        axios.defaults.headers.common['token'] = undefined
    }

    static get(endpoint, params, options = {}, responseType) {
        const query = this.parseStringParams(params) || []
        const path = query.length > 0 ? `${endpoint}?${query}` : endpoint
        return this.rest(
            path,
            {},
            { method: 'get', headers: options.headers || {} },
            responseType,
        )
    }

    static post(endpoint, params, options = {}, responseType) {
        return this.rest(
            endpoint,
            params,
            { method: 'post', headers: options.headers || {} },
            responseType,
        )
    }

    static put(endpoint, params, options = {}) {
        return this.rest(endpoint, params, {
            method: 'put',
            headers: options.headers || {},
        })
    }

    static deleted(endpoint, params, options = {}) {
        return this.rest(endpoint, params, {
            method: 'delete',
            headers: options.headers || {},
        })
    }
}

export default Api