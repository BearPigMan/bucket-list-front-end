'use strict';

const GoogleMapsLoader = require('google-maps');
const mapStyle = require('./mapStyle');
const {searchHandler} = require('./searchBox');
GoogleMapsLoader.LIBRARIES = ['places'];
// const {onPostGoal} = require('../goals/events');
// only for common js environments
GoogleMapsLoader.KEY = 'AIzaSyAno98KEm1S4ABBzN4FMRxPtMT58JpAKvk';

const getMap = function(el, options) {
  return new Promise(function(resolve, reject) {
    GoogleMapsLoader.load(function(google) {
      if (!google) {
        reject();
      }
      const opts = {};
      opts.mapTypeControl = false;
      opts.styles = mapStyle;

      let map = new google.maps.Map(el, Object.assign(options, opts));
      let searchInput = document.getElementById('pac-input');

      window.map = map;

      let searchBox = new google.maps.places.SearchBox(searchInput);
      searchHandler(searchBox, map);

      map.controls[google.maps.ControlPosition.TOP_CENTER].push(searchInput);

      google.maps.event.addListener(map, "idle", function() {
        // $('#map').offset({top: 50})

      });
      // createGoalHandler(map);
      resolve(map);

    });
  });
};

module.exports = {
  getMap
};
