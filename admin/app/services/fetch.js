const fetch = require("node-fetch");


const baseUrl = process.env.BASE_URL;

/**
 * this function fetch request
 * @param {string} method http verb: GET, POST, DELETE or PATCH
 * @param {string} url the slug url
 * @param {object} header an header object for fetch request
 * @param {object} body an object javadcript
 * @returns 
 */
async function methodFetch(method, url, header = null, body = null) {

    try {
        if (!baseUrl) {
            throw new Error("baseUrl must be required in env");
        }

        if (!method || !url) {
            throw new Error("method or url is required...");
        }

        if (typeof method != "string") {
            throw new Error("method must be a string...");
        }

        if (header) {
            if (!(header instanceof Object)) {
                throw new Error("header must be an object...");
            }
        }

        if (body) {
            if (!(body instanceof Object)) {
                throw new Error("body must be an object...");
            }
        }

        const formattedMethod = method.toUpperCase();

        const requestUrl = baseUrl + url;

        let request;

        if (formattedMethod === "GET") {
            request = await fetch(requestUrl, {
                method: formattedMethod,
                headers: header
            })
        } else {
            request = await fetch(requestUrl, {
                method: formattedMethod,
                headers: header,
                body: JSON.stringify(body)
            })
        }

        if(formattedMethod == "DELETE" && request){
            return request;
        }

        if (request) {
            const results = await request.json();
            return results;
        } else {
            return new Error(request)
        }
    } catch (err) {
        console.error(err);
        return new Error(err);
    }
}


module.exports = methodFetch;