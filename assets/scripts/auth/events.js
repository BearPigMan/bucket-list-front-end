'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');
const goals = require('../goals/events.js');

const onSignUp = function(e) {
  e.preventDefault();
  let data = getFormFields(this);
  let credentials = data;
  if (data.credentials.password !== data.credentials.confirm_password) {
    ui.signUpFailure();
  } else {
    api.signUp(data)
    .then(function() {
      return api.signIn(credentials);
    })
    .then(ui.signInSuccess)
    .then(() => {
      goals.getGoals();
    })
    .then(() => {
      goals.addHandlers();
    });
  }
};

const onSignIn = function(e) {
  e.preventDefault();
  let data = getFormFields(this);
  api.signIn(data).then(ui.signInSuccess)
    .then(() => {
      goals.getGoals();
    })
    .then(() => {
      goals.addHandlers();
    })
    .catch(ui.signInFailure);
};

const onChangePassword = function(e) {
  e.preventDefault();
  let data = getFormFields(this);
  api.changePassword(data).then(ui.changePasswordSuccess).catch(ui.changePasswordFailure);
};

const onSignOut = function(e) {
  e.preventDefault();
  api.signOut().then(ui.signOutSuccess).catch(ui.failure);
  goals.offMapClick();
};

const addAuthHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('#sign-out-btn').on('click', onSignOut);
  $('#sign-up-modal').on('hidden.bs.modal', function(){
    $('.sign-up-form input').val('');
  });
  $('#sign-in-modal').on('hidden.bs.modal', function(){
    $('.sign-in-form input').val('');
  });
  $('#change-password-modal').on('hidden.bs.modal', function(){
    $('.change-password-form input').val('');
  });
};

module.exports = {
  addAuthHandlers
};
