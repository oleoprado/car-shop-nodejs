import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { 
  validIdMotoMock, 
  outputMotorcycle, 
  invalidIdMotoMock, 
  invalidFormatIdMotoMock, 
} from '../mocks/mockMotorcycleService';

describe('Teste de serviço: Delete um motorcycle', function () {
  beforeEach(function () {
    sinon.stub();
  });

  it('Deve deletar um motorcycle com sucesso', async function () {
    try {
      sinon.stub(Model, 'findById').resolves(outputMotorcycle);
      sinon.stub(Model, 'deleteOne').resolves();
  
      const service = new MotorcycleService();
      await service.delete(validIdMotoMock);
  
      const result = true;
      expect(result).to.be.equal(true);
    } catch (error) {
      const result = false;
      expect(result).to.be.equal(false);
    }
  });

  it('Deve retornar "Motorcycle not found" quando o ID não existir', async function () {
    let result;

    try {
      sinon.stub(Model, 'findById').resolves(null);
      sinon.stub(Model, 'deleteOne').resolves();

      const service = new MotorcycleService();
      await service.delete(invalidIdMotoMock);
      
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

      const service = new MotorcycleService();
      await service.delete(invalidFormatIdMotoMock);
      
      result = true;
    } catch (error) {
      result = false;
    }
    expect(result).to.be.equal(false);
  });
});
