import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { inputCar, outputCar } from '../mocks/mockCarService';

describe('Testes de serviço: Create Car', function () {
  it('Deve criar um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(outputCar);

    const service = new CarService();
    const result = await service.create(inputCar);

    expect(result).to.be.deep.equal(outputCar);
    sinon.restore();
  });
});