import {API_KEY, DEFAULT_RADIUS} from "./config";

export default class PlacesService {

  constructor(props) {
    this.currentLocation = [-33.8670522, 151.1957362];
    this.promise = null;
    this.getNearbyPlaces = this.getNearbyPlaces.bind(this);
  }

  getNearbyPlaces(params) {
    const {location, radius, keyword, openNow} = params;

    const request = {
      key: API_KEY,
      location: location ? location : this.currentLocation,
      radius: radius ? radius : DEFAULT_RADIUS,
      keyword: keyword ? keyword : '',
      openNow: openNow ? openNow : "false"
    }

    const url = this.buildUrl(request);
    return fetch(url);
  }

  buildUrl(params) {
    const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"
    const paramsUrl = Object.keys(params).map((param) => `${param}=${params[param]}`).join("&");
    return url + paramsUrl
  }
}
