'use strict';
const store = require('../store')

function triggerModal(marker) {
  marker.addListener('click', function() {
    $('#click-marker-modal').modal('show')

  });
  return marker
};

const convertToMarker = function(goal) {
  let marker = new google.maps.Marker({data: goal, id: goal.id, position: goal.position, map: window.map});
  return marker;
};

const addClickHandlers = function(markerGoal) {
  return triggerModal(markerGoal);
}

const addToStore = function(markerGoal) {
  store.goals[markerGoal.id] = markerGoal;
  return markerGoal;
}

const convertAndAdd = function(goal) {
  addToStore(addClickHandlers(convertToMarker(goal)))
}

module.exports = {
  convertAndAdd
};
