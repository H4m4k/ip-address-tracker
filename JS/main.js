// SCSS
import * as bootstrap from 'bootstrap'
// BOOTSTRAP
import '../SCSS/main.scss'
// LEEAFLET custom js
import 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'

import { getCoordinates } from './ip_tracker.js'

import { panTo } from './leaflet.js'

const btn_checkIP = document.querySelector('#checkIp')
const ip_address = document.querySelector('#ip_address').value

console.log({ ip_address })

btn_checkIP.addEventListener('click', (event) => {
    event.preventDefault()
    const coordinates = getCoordinates(ip_address)

    console.log(coordinates)
    panTo(coordinates)
})
