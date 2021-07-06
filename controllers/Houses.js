'use strict';

var utils = require('../utils/writer.js');
var Houses = require('../service/HousesService');

module.exports.housesGET = function housesGET (req, res, next) {
  Houses.housesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.housesHouseIdFileFileIdGET = function housesHouseIdFileFileIdGET (req, res, next, houseId, fileId) {
  Houses.housesHouseIdFileFileIdGET(houseId, fileId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.housesIdDELETE = function housesIdDELETE (req, res, next, id) {
  Houses.housesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.housesIdPUT = function housesIdPUT (req, res, next, body, id) {
  Houses.housesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.housesPOST = function housesPOST (req, res, next, body) {
  Houses.housesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
