import { panTo } from './leaflet.js'

// ipify endpoint
// GET https://geo.ipify.org/api/v2/country?apiKey=(API_KEY)&ipAddress=8.8.8.8

// possibl endpoint /country?apiKey=(API_KEY)&ipAddress=8.8.8.8

// apiKey
// Required. Get your personal API KEY on My subscriptions page.
// ipAddress
// Optional. IPv4 or IPv6 to search location by.

// If the parameter is not specified, then it defaults to client request's public IP address.

const info_ip = document.querySelector('#info_ip')
const info_location = document.querySelector('#info_location')
const info_timezone = document.querySelector('#info_timezone')
const info_isp = document.querySelector('#info_isp')

const getCoordinates = (ip = '8.8.8.8') => {
    const api_key = import.meta.env.VITE_IPIFY_APIKey

    try {
        fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip}`
        )
            .then((response) => response.json())
            .then((data) => {
                info_ip.textContent = data.ip
                info_location.textContent = data.location.city
                info_timezone.textContent = data.location.timezone
                info_isp.textContent = data.isp

                panTo([data.location.lat, data.location.lng])
            })

        // panTo([50.85137, 20.61112])
    } catch (error) {
        console.error(error)
    }
}

// [18.66.233.62] - onet
export { getCoordinates }
