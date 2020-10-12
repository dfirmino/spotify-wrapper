import API_URL from './config';

export const search = (name, type) => fetch(`${API_URL}/search?q=${name}&type=${type}`)
  .then((data) => data.json());

export const searchAlbum = (name) => search(name, 'album');

export const searchArtists = (name) => search(name, 'artist');

export const searchTracks = (name) => search(name, 'track');

export const searchPlaylists = (name) => search(name, 'playlist');
