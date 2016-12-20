'use strict';

const GoogleMapsLoader = require('google-maps');
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
      window.map = map;
      // createGoalHandler(map);
      resolve(map);

    });
  });
};

module.exports = {
  getMap,
};
