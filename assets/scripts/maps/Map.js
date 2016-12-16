'use strict';

const GoogleMapsLoader = require('google-maps'); // only for common js environments
GoogleMapsLoader.KEY = 'AIzaSyAno98KEm1S4ABBzN4FMRxPtMT58JpAKvk';
const getMap = function(el, options) {
  // console.log(options)
  return new Promise(function(resolve, reject) {
    GoogleMapsLoader.load(function(google) {
      if (!google) {
        reject();
      }
      let map = new google.maps.Map(el, options);
      window.map = map;
      // PLACE CLICK HANDLERS FOR THE MAP HERE
      resolve(map);

    });
  });
};

module.exports = getMap;
