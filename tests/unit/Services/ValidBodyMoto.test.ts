import { expect } from 'chai';
import { Response } from 'express';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { 
  reqMock, 
  reqInvalidVehicleMock, 
  reqInvalidMotoMock,
} from '../mocks/mockMotorcycleService';

describe('Teste de serviço: IsValidBody', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deve passar sem erros', async function () {
    const resMock = {} as Response;
    let result;

    try {
      const service = new MotorcycleService();
      service.isValidBody(reqMock, resMock, () => {});
      result = true;
    } catch (error) {
      result = false;
    }

    expect(result).to.be.equal(true);
  });

  it('Deve falhar se não tiver as informações do veiculo', async function () {
    const resMock = {} as Response;
    let result;

    try {
      const service = new MotorcycleService();
      service.isValidBody(reqInvalidVehicleMock, resMock, () => {});
      result = true;
    } catch (error) {
      result = false;
    }

    expect(result).to.be.equal(false);
  });

  it('Deve falhar se não tiver as informações da motorcycle', async function () {
    const resMock = {} as Response;
    let result;

    try {
      const service = new MotorcycleService();
      service.isValidBody(reqInvalidMotoMock, resMock, () => {});
      result = true;
    } catch (error) {
      result = false;
    }

    expect(result).to.be.equal(false);
  });
});