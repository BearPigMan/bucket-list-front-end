'use strict';

const convertToMarker = function(goal) {
  let marker = new google.maps.Marker({data: goal, id: goal.id, position: goal.position, map: window.map});
};

module.exports = {
  convertToMarker
};
