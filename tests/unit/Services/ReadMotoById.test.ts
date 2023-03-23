import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';

import MotorcycleService from '../../../src/Services/MotorcycleService';
import { validIdMotoMock, outputMotorcycle } from '../mocks/mockMotorcycleService';

describe('Teste de serviço: ReadById motorcycles', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deve listar a moto corresponde ao id informado', async function () {
    sinon.stub(Model, 'findById').resolves(outputMotorcycle);

    const service = new MotorcycleService();
    const result = await service.readById(validIdMotoMock);

    expect(result).to.be.deep.equal(outputMotorcycle);
  });

  it('Deve retornar a mensagem "motorcycle not found" quando o ID não existir', async function () {
    const inputMock = '634852326b35b59438fbea2f';

    try {
      sinon.stub(Model, 'findById').resolves(null);
      const service = new MotorcycleService();
      await service.readById(inputMock);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  it('Deve retornar a mensagem "Invalid mongo id" quando ID for inválido', async function () {
    const inputMock = '634852326b35b59438fbea2f420LEO';

    try {
      sinon.stub(Model, 'findById').resolves(null);
      const service = new MotorcycleService();
      await service.readById(inputMock);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});