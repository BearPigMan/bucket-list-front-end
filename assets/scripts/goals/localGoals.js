'use strict';

const store = require('../store.js');
const {convertAndAdd} = require('./goalToMarker.js');

const create = (goal) => {
  convertAndAdd(goal);
  return store.goals;
};

const destroy = (id) => {
  let index = store.goals.findIndex((goal) => id === goal.id);
  store.goals.splice(index, 1);
};

const showAll = () => {
  return store.goals;
};

const storeAll = (data) => {
  data.goals.map(convertAndAdd);
  return store.goals;
};

const update = (id, data) => {
  store.goals[id].data = data.goal;
  return store.goals;
};

module.exports = {
  create,
  destroy,
  showAll,
  storeAll,
  update
};
