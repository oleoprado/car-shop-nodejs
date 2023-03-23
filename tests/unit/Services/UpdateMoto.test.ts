import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotorcycleService from '../../../src/Services/MotorcycleService';
import { 
  inputMotorcycle, 
  validIdMotoMock, 
  outputMotorcycle,
  invalidIdMotoMock,
  invalidFormatIdMotoMock, 
} from '../mocks/mockMotorcycleService';

describe('Teste de serviço: UpdateMotorcycle', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('Deve atualizar uma motorcycle por ID com sucesso', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(outputMotorcycle);
    const service = new MotorcycleService();
    const result = await service.update(validIdMotoMock, inputMotorcycle);

    expect(result).to.be.deep.equal(outputMotorcycle);
  });

  it('Deve retornar a mensagem "motorcycle not found" quando o ID não existir', async function () {
    try {
      sinon.stub(Model, 'findByIdAndUpdate');
      const service = new MotorcycleService();
      await service.update(invalidIdMotoMock, inputMotorcycle);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  it('Deve retornar a mensagem "invalid mongo id" quando o ID não existir', async function () {
    try {
      sinon.stub(Model, 'findByIdAndUpdate');
      const service = new MotorcycleService();
      await service.update(invalidFormatIdMotoMock, inputMotorcycle);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});