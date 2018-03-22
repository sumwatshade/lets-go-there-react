

export default class PlacesService {

  constructor(props) {
    this.currentLocation = [-33.8670522, 151.1957362];
    this.apiKey = "AIzaSyBGfqJ7yoKu5S4Ha5Hifqijd5av5Yzk3w4";
    this.promise = null;
    this.getNearbyPlaces = this.getNearbyPlaces.bind(this);
  }

  getNearbyPlaces(params) {
    const {location, radius, keyword, openNow} = params;

    const request = {
      key: this.apiKey,
      location: location ? location : this.currentLocation,
      radius: radius ? radius : '50000',
      keyword: keyword ? keyword : '',
      openNow: openNow ? openNow : false
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
