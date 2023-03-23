import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import CarService from '../../../src/Services/CarService';
import { outputCar, validIdCar } from '../mockService/mockService';

describe('Teste de serviço: Read car por ID', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deve listar o carro correspondente ao id informado', async function () {
    sinon.stub(Model, 'findById').resolves(outputCar);

    const service = new CarService();
    const result = await service.readById(validIdCar);

    expect(result).to.be.deep.equal(outputCar);
  });

  it('Deve retornar a mensagem "car not found" quando ID não existir', async function () {
    const inputMock = '634852326b35b59438fbea2f';

    try {
      sinon.stub(Model, 'findById').resolves(null);
      const service = new CarService();
      await service.readById(inputMock);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Deve retornar a mensagem "Invalid mongo id" quando ID for inválido', async function () {
    const inputMock = '634852326b35b59438fbea2f420LEO';

    try {
      sinon.stub(Model, 'findById').resolves(null);
      const service = new CarService();
      await service.readById(inputMock);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});