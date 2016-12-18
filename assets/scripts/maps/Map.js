'use strict';

const GoogleMapsLoader = require('google-maps');
const {onPostGoal} = require('../goals/events');
// only for common js environments
GoogleMapsLoader.KEY = 'AIzaSyAno98KEm1S4ABBzN4FMRxPtMT58JpAKvk';

const createGoalHandler = function(map) {
  let handler = map.addListener('click', function({latLng}) {
    let coords = {
      lat: latLng.lat(),
      lng: latLng.lng()
    };
    $('#create-marker-modal').modal().find('form').on('submit', (e) => onPostGoal(e, coords));
  });
  $('#create-marker-modal').on('hidden.bs.modal', () => $('#create-marker-modal').modal().find('form').removeEventListener('submit'));
  return map;
};

const getMap = function(el, options) {
  console.log("INTIALIZING");
  return new Promise(function(resolve, reject) {
    GoogleMapsLoader.load(function(google) {
      if (!google) {
        reject();
      }
      let map = new google.maps.Map(el, options);
      window.map = map;
      createGoalHandler(map);
      resolve(map);

    });
  });
};

module.exports = getMap;
