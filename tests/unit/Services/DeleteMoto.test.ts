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
import NotFoundError from '../../../src/Errors/NotFoundError';
import IdInvalidError from '../../../src/Errors/IdInvalidError';

describe('Teste de serviço: Delete um motorcycle', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('Deve deletar um motorcycle com sucesso', async function () {
    sinon.stub(Model, 'findById').resolves(outputMotorcycle);
    const deleteOneStub = sinon.stub(Model, 'deleteOne').resolves();
  
    const service = new MotorcycleService();
    await service.delete(validIdMotoMock);
  
    sinon.assert.calledWith(deleteOneStub, { id: validIdMotoMock });
  });

  it('Deve retornar "Motorcycle not found" quando o ID não existir', async function () {
    sinon.stub(Model, 'findById').resolves(null);
    try {
      const service = new MotorcycleService();
      await service.delete(invalidIdMotoMock);
    } catch (error) {
      expect(error).to.be.instanceOf(NotFoundError);
      expect((error as Error).message).to.equal('Motorcycle not found');
    }
  });

  it('Deve retornar "Invalid mongo id" quando o ID não for válido', async function () {
    sinon.stub(Model, 'findById').resolves(null);
    try {
      const service = new MotorcycleService();
      await service.delete(invalidFormatIdMotoMock);
    } catch (error) {
      expect(error).to.be.instanceOf(IdInvalidError);
      expect((error as Error).message).to.equal('Invalid mongo id');
    }
  });
});
