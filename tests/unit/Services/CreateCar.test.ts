import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { inputCreateCar, outputCar } from '../mockService/mockService';

describe('Testes de serviço: Create Car', function () {
  it('Deve criar um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(outputCar);

    const service = new CarService();
    const result = await service.create(inputCreateCar);

    expect(result).to.be.deep.equal(outputCar);
  });
});