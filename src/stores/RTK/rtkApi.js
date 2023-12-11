import Api from "../../services/api";

const axiosBaseQuery =
    (baseUrl) =>
        async ({ endpoint, params, method = 'get', headers = {} }) => {
            if (method.toLowerCase() === 'get') {
                const query = Api.parseStringParams(params);
                const path = query ? `${endpoint}?${query}` : endpoint;
                return await Api.rest(
                    `${baseUrl ? `${baseUrl}/` : ''}${path}`,
                    {},
                    { headers: { ...headers }, method: method }
                )
            }
            return await Api.rest(
                `${baseUrl ? `${baseUrl}/` : ''}${endpoint}`,
                params,
                { headers: { ...headers }, method: method }
            )
        }

export default axiosBaseQuery;