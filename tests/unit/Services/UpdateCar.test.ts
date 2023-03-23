import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { 
  outputUpdatedCar, 
  validIdCar, 
  inputCar, 
  idNotFound, 
  invalidId,
} from '../mocks/mockService';

describe('Teste de serviço: Update car por ID', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('Deve atualizar um car por ID com sucesso', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(outputUpdatedCar);

    const service = new CarService();
    const result = await service.update(validIdCar, inputCar);

    expect(result).to.be.deep.equal(outputUpdatedCar);
  });

  it('Deve retornar a mensagem "car not found" quando ID não existir', async function () {
    try {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
      const service = new CarService();
      await service.update(idNotFound, inputCar);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Deve retornar a mensagem "Invalid mongo id" quando ID for inválido', async function () {
    try {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
      const service = new CarService();
      await service.update(invalidId, inputCar);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});