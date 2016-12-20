'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');
const goals = require('../goals/events.js');

const onSignUp = function(e) {
  e.preventDefault();
  let data = getFormFields(this);
  let credentials = data;
  api.signUp(data)
    .then(function() {
    return api.signIn(credentials);
  }).then(ui.signInSuccess).catch(ui.failure);
};

const onSignIn = function(e) {
  e.preventDefault();
  let data = getFormFields(this);
  api.signIn(data).then(ui.signInSuccess).then(() => {
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
};

module.exports = {
  addAuthHandlers
};
