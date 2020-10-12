import chai, { expect } from 'chai';
import { search, searchAlbum, searchArtists, searchTracks, searchPlaylists } from '../src/search'
import sinon from 'sinon';
import sinonChai from 'sinon-chai'

global.fetch = require('node-fetch')
chai.use(sinonChai);


describe('Search', () => {

  let fetchedStub;

  beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      fetchedStub.resolves({ json: () => ({ album: 'Name' }) });
    })

    afterEach(() => {
      fetchedStub.restore()
    })

    it('should call fetch function', () => {
      const artists = search();
      expect(fetchedStub).to.have.been.calledOnce;
      // Caso eu tente atribuir novamente o fetchStub antes tenho que da um restore
      // fetchedStub.restore()
    });

    //Smoking test
    describe('smoke tests', () => {
    it('should exists the search method', () => {
      expect(search).to.exist;
    });

    it('should exists the searchAlbums method', () => {
      expect(searchAlbum).to.exist;
    });

    it('should exists the searchArtists albums method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exists the searchTracks albums method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exists the searchPlaylists albums method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    it('should receive the correct url to fetch', () => {

      context('passing one type', () => {
        const artists = search('Belchior', 'artist')
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Belchior&type=artist')
        const albums = search('Belchior', 'album')
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Belchior&type=album')
      });

      context('passing more than one type', () => {
        const artists = search('Belchior', ['artist', 'album'])
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Belchior&type=artist,album');
      });
    });

      it('should return the JSON Data from the promise', () => {
        const artists = search('Belchior', 'artist')
        artists.then(data => {
          expect(data).to.be.eql({ album: 'Name' });
        })
      })
    });

  describe('SearchArtists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Belchior')
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = searchArtists('Belchior')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Belchior&type=artist');
    });
  })

  describe('SearchAlbums', () => {
    it('should call fetch function', () => {
      const artists = searchAlbum('Belchior')
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = searchAlbum('Belchior')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Belchior&type=album');
    });
  })

  describe('SearchPlaylist', () => {
    it('should call fetch function', () => {
      const artists = searchPlaylists('Belchior')
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = searchPlaylists('Belchior')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Belchior&type=playlist');
    });
  })

  describe('SearchTracks', () => {
    it('should call fetch function', () => {
      const artists = searchTracks('Belchior')
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = searchTracks('Belchior')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Belchior&type=track');
    });
  })

});
