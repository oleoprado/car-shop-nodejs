import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import MotorcycleService from '../../../src/Services/MotorcycleService';
import { inputMotorcycle, outputMotorcycle } from '../mocks/mockMotorcycleService';

describe('Teste de serviço: Create Motorcycle', function () {
  it('Deve cadastrar uma motorcycle com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(outputMotorcycle);

    const service = new MotorcycleService();
    const result = await service.create(inputMotorcycle);

    expect(result).to.be.deep.equal(outputMotorcycle);
    sinon.restore();
  });
});