'use strict';

const store = require('../store.js');

const success = (data) => {
  console.log(data);
};

const signInSuccess = (data) => {
    // save user token
    store.user = data.user;
    // change dropdown buttons
    $('.sign-in-btn').hide();
    $('.sign-up-btn').hide();
    $('.auth-dropdown-toggle').text(store.user.email);
    $('.change-pw-btn').removeClass('hidden');
    $('#sign-out-btn').removeClass('hidden');
    $('.change-pw-btn').show();
    $('#sign-out-btn').show();
    $('#sign-in-modal').modal('hide');
    success(data);
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
};

const changePasswordFailure = (error) => {
  $('.change-password-modal-title').text('Change password -- Old password incorrect');
  console.error(error);
};

const signOutSuccess = (data) => {
  $('.change-pw-btn').hide();
  $('#sign-out-btn').hide();
  $('.create-med-btn').addClass('hidden');
  $('.sign-in-btn').show();
  $('.sign-up-btn').show();
  $('.auth-dropdown-toggle').text("Sign up/Sign in");
  success(data);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
};
