import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { inputCreateCar, outputCreateCar } from '../mockService/mockService';

describe('Testes de serviço: Create Car', function () {
  it('Deve criar um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(outputCreateCar);

    const service = new CarService();
    const result = await service.create(inputCreateCar);

    expect(result).to.be.deep.equal(outputCreateCar);
  });
});