// ipify endpoint
// GET https://geo.ipify.org/api/v2/country?apiKey=(API_KEY)&ipAddress=8.8.8.8

// possibl endpoint /country?apiKey=(API_KEY)&ipAddress=8.8.8.8

// apiKey
// Required. Get your personal API KEY on My subscriptions page.
// ipAddress
// Optional. IPv4 or IPv6 to search location by.

// If the parameter is not specified, then it defaults to client request's public IP address.

export const getCoordinates = (ip = '8.8.8.8') => {
    const api_key = import.meta.env.VITE_IPIFY_APIKey

    try {
        fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip}`
        )
            .then((response) => response.json())
            .then((data) => {
                const coordinates = [data.location.lat, data.location.lng]

                console.log({ coordinates })

                return coordinates
            })

        // const _coordinates = [50.85137, 20.61112]
        // return _coordinates
    } catch (error) {
        console.error(error)
    }
}
