'use strict';

var _search = require('./search');

var _album = require('./album');

module.exports = {
  search: _search.search,
  searchAlbum: _search.searchAlbum,
  searchArtists: _search.searchArtists,
  searchTracks: _search.searchTracks,
  searchPlaylists: _search.searchPlaylists,
  getAlbum: _album.getAlbum,
  getAlbumTrack: _album.getAlbumTrack,
  getAlbums: _album.getAlbums
};