import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotorcycleService from '../../../src/Services/MotorcycleService';
import { outputReadAllMotorcycle } from '../mocks/mockMotorcycleService';

describe('Teste de serviço: ReadAll motorcycle', function () {
  it('Deve retornar uma lista com 1 motorcycle', async function () {
    sinon.stub(Model, 'find').resolves(outputReadAllMotorcycle);

    const service = new MotorcycleService();
    const result = await service.readAll();

    expect(result.length).to.equal(1);
    expect(result).to.be.deep.equal(outputReadAllMotorcycle);
    sinon.restore();
  });
});