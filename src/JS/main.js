// API wrapper class
import fetchWrapper from "../JS/fetch-wrapper.js";
// SCSS
import "../SCSS/main.scss";
// BOOTSTRAP
import * as bootstrap from "bootstrap";
// LEAFLET map creator JS
import "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
// LEEAFLET custom js
import "../JS/leaflet.js";

const API = new fetchWrapper("https://geo.ipify.org/api/");

// ipify endpoint
// GET https://geo.ipify.org/api/v2/country?apiKey=at_njfhKTlrrwuKrd28LYnFyxLvHZ2uc&ipAddress=8.8.8.8

// possibl endpoint v2/country?apiKey=at_njfhKTlrrwuKrd28LYnFyxLvHZ2uc&ipAddress=8.8.8.8

// apiKey
// Required. Get your personal API KEY on My subscriptions page.
// ipAddress
// Optional. IPv4 or IPv6 to search location by.

// If the parameter is not specified, then it defaults to client request's public IP address.
// **at_njfhKTlrrwuKrd28LYnFyxLvHZ2uc**
