'use strict';

const GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.LIBRAIRIES = ['places'];
// const {onPostGoal} = require('../goals/events');
// only for common js environments
GoogleMapsLoader.KEY = 'AIzaSyAno98KEm1S4ABBzN4FMRxPtMT58JpAKvk';

const getMap = function(el, options) {
  return new Promise(function(resolve, reject) {
    GoogleMapsLoader.load(function(google) {
      if (!google) {
        reject();
      }
      let map = new google.maps.Map(el, options);
      // let autocomplete = new google.maps.places.AutoComplete()
      window.map = map;
      google.maps.event.addListener(map, "idle", function() {
        $('#map').offset({top: 0})

      });
      // createGoalHandler(map);
      resolve(map);

    });
  });
};

module.exports = {
  getMap
};
