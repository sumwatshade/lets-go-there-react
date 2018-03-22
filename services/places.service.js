import {GoogleApiWrapper} from 'google-maps-react'

public class PlacesService {

  constructor(props) {
    super(props);
    this.currentLocation = new props.google.maps.LatLng(-33.8665, 151.1956);

    this.service = new props.google.maps.places.PlacesService();
    this.promise = null;
    console.log(this.service)

    this.getNearbyPlaces = this.getNearbyPlaces.bind(this);
  }

  getNearbyPlaces(params) {
    const {location, radius, keyword, openNow} = params;

    const request = {
      location: location ? location : this.currentLocation,
      radius: radius ? radius : '400',
      keyword: keyword ? keyword : 'restaraunt',
      openNow: openNow ? openNow : false
    }

    this.service.nearbySearch(request, (results, status) => {
      console.log(results);
      console.log(status);
    })
  }

}

export default GoogleApiWrapper({
  apiKey: (AIzaSyBGfqJ7yoKu5S4Ha5Hifqijd5av5Yzk3w4)
})(PlacesService)
