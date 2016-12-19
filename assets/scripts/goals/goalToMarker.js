'use strict';
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');
// const localGoals = require('./localGoals.js');

const populateUpdateModal = function(marker) {
  $('.click-title-field').val(marker.data.title);
  $('.click-description-field').val(marker.data.description);
};

const triggerModal = function(marker) {
  marker.addListener('click', function() {
    populateUpdateModal(marker);

    $('.patch-goal-modal-form').on('submit', function(e) {
      e.preventDefault();
      let data = getFormFields(e.target);
      let id = marker.id;
      api.patchGoal(id, data)
        .then((id, data) => {
          localGoals.update(id, data);
        })
        .then(() => {
          $('.patch-goal-modal-form').off('submit');
          $('#click-marker-modal').modal('hide');
        })
        .catch(ui.failure);
      });
      $('#click-marker-modal').modal('show');
      $('.delete-goal-modal-form').on('submit', function(e) {
        e.preventDefault();
        api.deleteGoal(marker.id).then(() => {
          store.goals[marker.id].setMap(null);
          $('.delete-goal-modal-form').off('submit');
        })
        .catch(ui.failure);
        $('#click-marker-modal').modal('hide');
      });
  });
  return marker;
};

const convertToMarker = function(goal) {
  let marker = new google.maps.Marker({data: goal, id: goal.id, position: goal.position, map: window.map});
  return marker;
};
//
// const addClickHandlers = function(markerGoal) {
//   return triggerModal(markerGoal);
// };

const addToStore = function(markerGoal) {
  store.goals[markerGoal.id] = markerGoal;
  return markerGoal;
};

const convertAndAdd = function(goal) {
  addToStore(triggerModal(convertToMarker(goal)));
};

module.exports = {
  convertAndAdd
};
