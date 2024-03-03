// BOOTSTRAP
import * as bootstrap from 'bootstrap'

// SCSS
import '../SCSS/main.scss'

// LEAFLET.JS
import 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'

// due to strict type="module" constraints of global variables , a precise function import
import { getCoordinates } from './ip_tracker.js'

const btn_checkIP = document.querySelector('#checkIp')
const ip_address = document.querySelector('#ip_input')

btn_checkIP.addEventListener('click', (event) => {
    event.preventDefault()

    getCoordinates(ip_address.value)
})
