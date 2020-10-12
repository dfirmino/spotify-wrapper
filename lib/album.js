'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbums = exports.getAlbumTrack = exports.getAlbum = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config2.default + '/albums/' + id).then(function (data) {
    return data.json();
  });
};
var getAlbumTrack = exports.getAlbumTrack = function getAlbumTrack(id) {
  return fetch(_config2.default + '/albums/' + id + '/tracks').then(function (data) {
    return data.json();
  });
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config2.default + '/albums?ids=' + ids).then(function (data) {
    return data.json();
  });
};