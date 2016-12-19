'use strict';
const store = require('../store');

const triggerModal = function(marker) {
  marker.addListener('click', function() {
    debugger;
    $('.goal-title-field').val(this.data.title);
    $('.goal-description-field').val(this.data.description);
    $('.patch-goal-modal-form').on('submit', function(e) {
     e.preventDefault();
     console.log("THIS IS WHAT HAPPENS WHEN YOU CLICK SUBMIT!!! WHEN YOU ARE trying to change it")
   })
    $('#click-marker-modal').modal('show');

  });
  return marker;
};

const convertToMarker = function(goal) {
  let marker = new google.maps.Marker({data: goal, id: goal.id, position: goal.position, map: window.map});
  return marker;
};

const addClickHandlers = function(markerGoal) {
  return triggerModal(markerGoal);
};

const addToStore = function(markerGoal) {
  store.goals[markerGoal.id] = markerGoal;
  return markerGoal;
};

const convertAndAdd = function(goal) {
  addToStore(addClickHandlers(convertToMarker(goal)));
};

module.exports = {
  convertAndAdd
};
