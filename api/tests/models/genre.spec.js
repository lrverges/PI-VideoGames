const { Genre, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Genre model', () => {
    before(() => conn.authenticate()
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      }));
    describe('Validators', () => {
      beforeEach(() => Genre.sync({ force: true }));
      describe('name', () => {
       
        it('should work when id and name are valid', async () => {
            const genre = await Genre.create({ 
              id: 1, 
              name: "Puzzle" 
            });
            expect(genre.dataValues.id).equal(1)
            expect(genre.dataValues.name).equal("Puzzle")
          });
        it('It should throw an error if an id is repeated', (done) => {
            Genre.create({id: 9, name: "Arcade"})
          Genre.create({id: 9, name: "Shooter"})
            .then(() => done(new Error('ID attribute values ​​must be unique for each genre')))
            .catch(() => done());
        });
      });
    });
  });
;