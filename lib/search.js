'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbum = exports.search = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = exports.search = function search(name, type) {
  return fetch(_config2.default + '/search?q=' + name + '&type=' + type).then(function (data) {
    return data.json();
  });
};

var searchAlbum = exports.searchAlbum = function searchAlbum(name) {
  return search(name, 'album');
};

var searchArtists = exports.searchArtists = function searchArtists(name) {
  return search(name, 'artist');
};

var searchTracks = exports.searchTracks = function searchTracks(name) {
  return search(name, 'track');
};

var searchPlaylists = exports.searchPlaylists = function searchPlaylists(name) {
  return search(name, 'playlist');
};