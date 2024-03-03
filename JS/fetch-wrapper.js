export default class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
    }

    put(endpoint, body) {
        // pass the endpoint and body parameters to #send
        // and specify the method to be 'put'
        return this.#send('put', endpoint, body)
    }

    post(endpoint, body) {
        // pass the endpoint and body parameters to #send
        // and specify the method to be 'post'
        return this.#send('post', endpoint, body)
    }

    delete(endpoint, body) {
        // pass the endpoint and body parameters to #send
        // and specify the method to be 'delete'
        return this.#send('delete', endpoint, body)
    }

    #send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    data: responseJson,
                })
            })
    }
}
