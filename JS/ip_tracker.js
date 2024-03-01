// ipify endpoint
// GET https://geo.ipify.org/api/v2/country?apiKey=at_njfhKTlrrwuKrd28LYnFyxLvHZ2uc&ipAddress=8.8.8.8

// possibl endpoint /country?apiKey=at_njfhKTlrrwuKrd28LYnFyxLvHZ2uc&ipAddress=8.8.8.8

// apiKey
// Required. Get your personal API KEY on My subscriptions page.
// ipAddress
// Optional. IPv4 or IPv6 to search location by.

// If the parameter is not specified, then it defaults to client request's public IP address.
let ipAddress = '8.8.8.8'
const api_key = import.meta.env.VITE_IPIFY_APIKey

try {
    fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ipAddress}`
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let lat = data.location.lat
            let lng = data.location.lng
            L.map('map').setView([lat, lng], 13)
        })
} catch (error) {
    console.error(error)
}
