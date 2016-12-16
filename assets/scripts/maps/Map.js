'use strict';

const GoogleMapsLoader = require('google-maps'); // only for common js environments
GoogleMapsLoader.KEY = 'AIzaSyAno98KEm1S4ABBzN4FMRxPtMT58JpAKvk';

const getMap = function(el, options) {
  // console.log(options)
  return new Promise(function (resolve, reject) {
    GoogleMapsLoader.load(function (google) {
      if (!google) {
        reject();
      }
// el is the dom element we want to put the map insde
      let map = new google.maps.Map(el, options);
      map.addListener("click", function (e) {
      //lat and lng is available in e object
        let latLng = e.latLng;
        let marker = new google.maps.Marker({
          position: latLng,
          map: map
        });
      });
    });
  });
};

module.exports = getMap;
