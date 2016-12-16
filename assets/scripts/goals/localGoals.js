'use strict';

const store = require('../store.js');

const create = (goal) => {
  store.goals.push(goal);
  return store.goals;
};

// id is expected to be string
const destroy = (id) => {
  let index = store.goals.findIndex((goal) => id === goal.id);
  store.goals.splice(index, 1);
};

const showAll = () => {
  return store.goals;
};

const storeAll = (data) => {
  store.goals = data.goals;
  return store.goals;
};

const update = (newGoal) => {
    let index = store.goals.findIndex((goal) => newGoal.id === goal.id);
    store.goals[index] = newGoal;
    return store.goals;
};

module.exports = {
  create,
  destroy,
  showAll,
  storeAll,
  update,
};
