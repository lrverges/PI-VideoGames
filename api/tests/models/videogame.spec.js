const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' })
        .then(() => done())
        .catch(()=> done())
      });
     
    
    });

    describe('description', () => {
      it('should throw an error if description is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid description')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ description: 'Descripcion de Super Mario Bros' });
      });
    });

    describe('platforms', () => {
      it('should throw an error if platforms is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid platforms')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ platforms: ['PlayStation 4', 'iOS'] });
      });
    });
    it('should work when name, description and platforms are valid', async () => {
      const video = await Videogame.create({ 
        name: 'Super Mario Bros', 
        description: "Descripcion de Super Mario Bros",
        platforms: ['PlayStation 4', 'iOS'] 
      });
      expect(video.name).equal("Super Mario Bros")
      expect(video.description).equal('Descripcion de Super Mario Bros')
      expect(video.platforms).to.deep.equal(['PlayStation 4', 'iOS'])
    });
  });
}); 
