'use strict';
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');

const populateUpdateModal = function(marker) {
  $('.click-title-field').val(marker.data.title);
  $('.click-description-field').val(marker.data.description);
};

const triggerModal = function(marker) {
  marker.addListener('click', function() {
    populateUpdateModal(marker);
    store.currentMarker = marker.id;
    $('#click-marker-modal').modal('show');
  });
  return marker;
};

const convertToMarker = function(goal) {
  let marker = new google.maps.Marker({data: goal, id: goal.id, position: goal.position, map: window.map});
  return marker;
};

function convertAndAdd(goal) {
  store.goals[goal.id] = triggerModal(convertToMarker(goal));
  return goal;
}

module.exports = {
  convertAndAdd
};
