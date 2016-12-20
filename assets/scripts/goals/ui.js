'use strict';

const failure = (error) => {
  console.log(error);
};

const patchFailure = (error) => {
  $('.response-container').text("There has been an error updating your goal! In order to update this goal, you need to include a title. You do not need to include a description, but a title is required.");
  $('.response-container').fadeOut(10000);
};

const postFailure = (error) => {
  $('.response-container').text("There has been an error creating your goal! In order to create a goal, you need to include a title for the goal. You do not need to include a description, but a title is required");
  $('.response-container').fadeOut(10000);
};

module.exports = {
  failure,
  patchFailure,
  postFailure,
};
