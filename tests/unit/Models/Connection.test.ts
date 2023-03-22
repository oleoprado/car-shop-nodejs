import { expect } from 'chai';
import Connection from '../../../src/Models/Connection';

describe('Testes de model: Mongo', function () {
  it('Deve ter uma conexão', async function () {
    let result = false;
    try {
      await Connection();
      result = true;
    } catch (err) {
      result = false;
    }

    expect(result).to.be.equal(true);
  });
});