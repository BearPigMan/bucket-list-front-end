'use strict';

const store = require('../store.js');

const showAll = () => {
  return store.goals;
};

const storeAll = (data) => {
  store.goals = data.goals;
};

const create = (goal) => {
  store.goals.push(goal);
};
// update goal
// delete goal

module.exports = {
  create,
  showAll,
  storeAll,
};
