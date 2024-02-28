export default class FetchWrapper {
    // constructor() and get()

    put(endpoint, body) {
        // pass the endpoint and body parameters to #send
        // and specify the method to be 'put'
        return this.#send("put", endpoint, body);
    }

    post(endpoint, body) {
        // pass the endpoint and body parameters to #send
        // and specify the method to be 'post'
        return this.#send("post", endpoint, body);
    }

    delete(endpoint, body) {
        // pass the endpoint and body parameters to #send
        // and specify the method to be 'delete'
        return this.#send("delete", endpoint, body);
    }

    #send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method, // object shorthand
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then((response) => response.json());
    }
}
