'use strict';

const app = require('../app.js');
const store = require('../store.js');

const getGoals = function() {
  return $.ajax({
    url: app.host + 'goals',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};
window.getGoals = getGoals;

const postGoal = function(data) {
  return $.ajax({
    url: app.host + 'goals/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  });
};

const deleteGoal = function(id) {
  return $.ajax({
    method: 'DELETE',
    url: app.host + 'goals/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

const patchGoal = function(id, data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + 'goals/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  });
};

module.exports = {
  getGoals,
  postGoal,
  deleteGoal,
  patchGoal
};
