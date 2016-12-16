'use strict';

const store = require('../store.js');

const showAll = () => {
  return store.goals;
};

const storeAll = (goals) => {
  store.goals = goals;
};
// update goal
// delete goal

module.exports = {
  showAll,
  storeAll
};
