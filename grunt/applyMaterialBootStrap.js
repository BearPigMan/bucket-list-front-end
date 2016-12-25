'use strict';

const fs = require('fs');

const getVariables = function() {
  return new Promise(function(resolve, reject) {
    fs.readFile('assets/styles/variables.scss', 'utf-8', function(err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const writeVariables = function(data) {
  return new Promise(function(resolve, reject) {
    fs.writeFile('node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss', data, 'utf-8', function(err) {
      if (err) {
        reject(err);
      }
      resolve()
    });
  });
}

const applyMaterialBootStrap = () => {
  return getVariables().then(writeVariables).then(() => console.log("Write success")).catch(console.error);
};

// applyMaterialBootStrap();
// fs.watchFile
module.exports = applyMaterialBootStrap;
