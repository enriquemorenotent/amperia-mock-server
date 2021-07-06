'use strict';

var utils = require('../utils/writer.js');
var Information = require('../service/InformationService');

module.exports.informationGET = function informationGET (req, res, next) {
  Information.informationGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.informationIdDELETE = function informationIdDELETE (req, res, next, id) {
  Information.informationIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.informationIdDescriptionPUT = function informationIdDescriptionPUT (req, res, next, body, id) {
  Information.informationIdDescriptionPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.informationIdFileGET = function informationIdFileGET (req, res, next, id) {
  Information.informationIdFileGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.informationIdFilePUT = function informationIdFilePUT (req, res, next, body, id) {
  Information.informationIdFilePUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.informationPOST = function informationPOST (req, res, next, body) {
  Information.informationPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
