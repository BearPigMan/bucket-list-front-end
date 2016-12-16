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
      resolve(new google.maps.Map(el, options));
    });
  });
}

module.exports = getMap
