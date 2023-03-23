import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { validIdCar, outputCar, idNotFound, invalidId } from '../mocks/mockCarService';

describe('Teste de serviço: Delete um car', function () {
  beforeEach(function () {
    sinon.stub();
  });

  it('Deve deletar um carro com sucesso', async function () {
    let result = false;

    try {
      sinon.stub(Model, 'findById').resolves(outputCar);
      sinon.stub(Model, 'deleteOne').resolves();

      const service = new CarService();
      await service.delete(validIdCar);

      result = true;
    } catch (error) {
      result = false;
    }
    expect(result).to.be.equal(true);
  });

  it('Deve retornar "Car not found" quando o ID não existir', async function () {
    let result;

    try {
      sinon.stub(Model, 'findById').resolves(null);
      sinon.stub(Model, 'deleteOne').resolves();

      const service = new CarService();
      await service.delete(idNotFound);
      
      result = true;
    } catch (error) {
      result = false;
    }
    expect(result).to.be.equal(false);
  });

  it('Deve retornar "Invalid mongo id" quando o ID não for válido', async function () {
    let result;

    try {
      sinon.stub(Model, 'findById').resolves(null);
      sinon.stub(Model, 'deleteOne').resolves();

      const service = new CarService();
      await service.delete(invalidId);
      
      result = true;
    } catch (error) {
      result = false;
    }
    expect(result).to.be.equal(false);
  });
});
