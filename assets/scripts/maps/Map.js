'use strict';

const GoogleMapsLoader = require('google-maps');
const {onPostGoal} = require('../goals/events');
// only for common js environments
GoogleMapsLoader.KEY = 'AIzaSyAno98KEm1S4ABBzN4FMRxPtMT58JpAKvk';

const createGoalHandler = function(map) {
  let handler = map.addListener('click', function(event) {
    let coords = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    $('#create-marker-modal').modal().find('form').on('submit', (e) => {
      onPostGoal(e, coords);
      console.log(e);
      $(e.target).off('submit');
      $('.create-title-field').val('');
      $('.create-description-field').val('');
      $('#create-marker-modal').modal('hide');
      $('body').removeClass('modal-open');
      // $('.modal-backdrop').remove();
    });
  });
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
