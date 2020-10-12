import chai, {expect} from 'chai';
import { getAlbum, getAlbumTrack, getAlbums } from '../src/album'
import sinon from 'sinon';
import sinonChai from 'sinon-chai'

global.fetch = require('node-fetch')
chai.use(sinonChai);

describe('Album', () => {
  let stubedFetch;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch')
    stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    stubedFetch.restore()
  });

  //smoke tests
  describe('smoke tests', () => {

    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTrack method', () => {
      expect(getAlbumTrack).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch method with correct url', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');
    });

    it('should return the correct json', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      album.then(data => {
        expect(data).to.be.eql({ album: 'name'});
      })
      .catch(console.log)
    });
  });

  describe('getAlbumTrack', () => {
    it('should call fetch method', () => {
      const album = getAlbumTrack();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch method with correct url', () => {
      const album = getAlbumTrack('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    it('should return the correct json', () => {
      const album = getAlbumTrack('4aawyAB9vmqN3uQ7FjRGTy');
      album.then(data => {
        expect(data).to.be.eql({ album: 'name' });
      })
      .catch(console.log)
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const album = getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch method with correct url', () => {
      const album = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
    });

    it('should return the correct json', () => {
      const album = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      album.then(data => {
        expect(data).to.be.eql({ album: 'name' });
      })
      .catch(console.log)
    });
  });

});
