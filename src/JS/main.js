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
