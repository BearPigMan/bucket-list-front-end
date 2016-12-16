'use strict';

function triggerModal(marker) {
  marker.addListener('click', function() {
    $('#click-marker-modal').modal('show')
    console.log(marker.id);

  });
};

const convertToMarker = function(goal) {
  let marker = new google.maps.Marker({data: goal, id: goal.id, position: goal.position, map: window.map});
  triggerModal(marker);
};

module.exports = {
  convertToMarker
};
