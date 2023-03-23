import { Request } from 'express';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const HONDA_CB = 'Honda Cb 600f Hornet';

const inputMotorcycle: IMotorcycle = {
  model: HONDA_CB,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const outputMotorcycle: Motorcycle = new Motorcycle({
  id: '6348513f34c397abcad040b2',
  model: HONDA_CB,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
});

const reqMock = {
  body: {
    model: HONDA_CB,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
} as Request;

const reqInvalidVehicleMock = {
  body: {
    category: 'Street',
    engineCapacity: 600,
  },
} as Request;

const reqInvalidMotoMock = {
  body: {
    model: HONDA_CB,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
  },
} as Request;

export {
  inputMotorcycle,
  outputMotorcycle,
  reqMock,
  reqInvalidVehicleMock,
  reqInvalidMotoMock,
};