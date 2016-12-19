'use strict';
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');
const localGoals = require('./localGoals.js');

const triggerModal = function(marker) {
  marker.addListener('click', function() {
    $('.click-title-field').val(this.data.title);
    $('.click-description-field').val(this.data.description);
    $('.patch-goal-modal-form').on('submit', function(e) {
      e.preventDefault();
      let data = getFormFields(e.target);
      let id = marker.id;
      api.patchGoal(id, data).then(() => {
        console.log("patched goal success");
        console.log(store.goals[id]);
        store.goals[id].data = data.goal;
      }).then(() => {
        $('.patch-goal-modal-form').off('submit');
        $('#click-marker-modal').modal('hide');
      }).catch(ui.failure);
    });
    $('#click-marker-modal').modal('show');
    $('.delete-goal-modal-form').on('submit', function(e) {
      e.preventDefault();
      console.log(marker.id);
      api.deleteGoal(id).then(localGoals.destroy).catch(ui.failure);
      $('#click-marker-modal').modal('hide');
    });
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
