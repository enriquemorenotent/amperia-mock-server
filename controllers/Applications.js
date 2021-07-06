'use strict';

var utils = require('../utils/writer.js');
var Applications = require('../service/ApplicationsService');

module.exports.applicationsGET = function applicationsGET (req, res, next) {
  Applications.applicationsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
