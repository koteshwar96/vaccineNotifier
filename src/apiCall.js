const axios = require("axios")

export function apiCall(httpMethod, url, headers){
    console.log(httpMethod, url, new Date().toISOString() )
    return axios({
        url: url,
        method: httpMethod,
        headers: headers,
    });
};
