'use strict';

const searchHandler = (searchBox, map) => {
  searchBox.addListener('places_changed', function() {
    console.log("COOOOL");
    let place = searchBox.getPlaces()[0];
    let loc = place.geometry.location;
    map.setCenter({lat: loc.lat(), lng: loc.lng()});
    map.fitBounds(place.geometry.viewport.toJSON());
    // debugger;
  });
};

module.exports = {
  searchHandler
};
