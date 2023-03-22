import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import CarService from '../../../src/Services/CarService';
import { outputReadAll } from '../mockService/mockService';

describe('Teste de serviço: Read all cars', function () {
  it('Deve ler uma lista com 1 car', async function () {
    sinon.stub(Model, 'find').resolves(outputReadAll);

    const service = new CarService();
    const result = await service.readAll();

    expect(result.length).to.be.equal(1);
    expect(result).to.be.deep.equal(outputReadAll);
  });
});