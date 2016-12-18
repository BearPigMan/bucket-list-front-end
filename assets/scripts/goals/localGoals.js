'use strict';

const store = require('../store.js');
const {convertAndAdd} = require('./goalToMarker.js')

const create = (goal) => {
  console.log(goal);
  convertAndAdd(goal);
  console.log(store.goals)
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
  // console.log(data);
  data.goals.map(convertAndAdd);
  console.log(store.goals);
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
  update
};
