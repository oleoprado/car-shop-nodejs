import { expect } from 'chai';
import { Response } from 'express';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { 
  reqMock,
  reqInvalidVehicleMock,
  reqInvalidMotoMock, 
} from '../mocks/mockCarService';

describe('Teste de serviço: IsValidBody Car', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deve passar sem erros', async function () {
    const resMock = {} as Response;
    let result;

    try {
      const service = new CarService();
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
      const service = new CarService();
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
      const service = new CarService();
      service.isValidBody(reqInvalidMotoMock, resMock, () => {});
      result = true;
    } catch (error) {
      result = false;
    }

    expect(result).to.be.equal(false);
  });
});