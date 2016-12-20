'use strict';

const store = require('../store.js');

const signInSuccess = (data) => {
  store.user = data.user;
  $('.sign-in-btn').hide();
  $('.sign-up-btn').hide();
  $('.auth-dropdown-toggle').text(store.user.email);
  $('.change-pw-btn').removeClass('hidden');
  $('#sign-out-btn').removeClass('hidden');
  $('.change-pw-btn').show();
  $('#sign-out-btn').show();
  $('#sign-in-modal').modal('hide');
  $('#sign-up-modal').modal('hide');
  $('.sign-in-form input').val('');
  $('.sign-up-form input').val('');
};

const failure = (error) => {
  $('#messages').text(error);
  console.error(error);
};

const signInFailure = (error) => {
  $('.sign-in-modal-title').text('Sign-in -- email or password incorrect');
  console.error(error);
};

const changePasswordSuccess = () => {
  $('#change-password-modal').modal('hide');
  $('.change-password-form input').val('');
};

const changePasswordFailure = (error) => {
  $('.change-password-modal-title').text('Change password -- Old password incorrect');
  console.error(error);
};

const removeMarkers = () => {
  Object.keys(store.goals).map(id => store.goals[id].setMap(null));
};

const signOutSuccess = (data) => {
  $('.change-pw-btn').hide();
  $('#sign-out-btn').hide();
  $('.create-med-btn').addClass('hidden');
  $('.sign-in-btn').show();
  $('.sign-up-btn').show();
  $('.create-title-field').val('');
  $('.create-description-field').val('');
  $('.click-title-field').val('');
  $('.click-description-field').val('');
  $('.auth-dropdown-toggle').text("Sign up/Sign in");
  removeMarkers();
};

const signUpFailure = (error) => {
  $('.signup-modal-title').text('Sign up failed -- Passwords must match');
};

module.exports = {
  failure,
  signInSuccess,
  signInFailure,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
};
