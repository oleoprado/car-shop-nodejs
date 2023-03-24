import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { validIdCar, outputCar, idNotFound, invalidId } from '../mocks/mockCarService';
import NotFoundError from '../../../src/Errors/NotFoundError';
import IdInvalidError from '../../../src/Errors/IdInvalidError';

describe('Teste de serviço: Delete um car', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('Deve deletar um carro com sucesso', async function () {
    sinon.stub(Model, 'findById').resolves(outputCar);
    const deleteOneStub = sinon.stub(Model, 'deleteOne').resolves();
  
    const service = new CarService();
    await service.delete(validIdCar);
  
    sinon.assert.calledWith(deleteOneStub, { id: validIdCar });
  });

  it('Deve retornar "Car not found" quando o ID não existir', async function () {
    sinon.stub(Model, 'findById').resolves(null);
    try {
      const service = new CarService();
      await service.delete(idNotFound);
    } catch (error) {
      expect(error).to.be.instanceOf(NotFoundError);
      expect((error as Error).message).to.equal('Car not found');
    }
  });

  it('Deve retornar "Invalid mongo id" quando o ID não for válido', async function () {
    sinon.stub(Model, 'findById').resolves(null);
    try {
      const service = new CarService();
      await service.delete(invalidId);
    } catch (error) {
      expect(error).to.be.instanceOf(IdInvalidError);
      expect((error as Error).message).to.equal('Invalid mongo id');
    }
  });
});
