import { Request } from 'express';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

const inputCar: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const outputCar: Car = new Car({
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
});

const outputReadAll: Car[] = [new Car({
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
})];

const validIdCar = '6348513f34c397abcad040b2';
const idNotFound = '5542013f34c397abcad040c9';
const invalidId = '5542013f34c397abcad040c9LEO';

const outputUpdatedCar: Car = new Car({
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2000,
  color: 'Blue',
  status: true,
  buyValue: 35.990,
  doorsQty: 4,
  seatsQty: 5,
});

const reqMock = {
  body: {
    model: 'Marea',
    year: 1992,
    color: 'Black',
    status: true,
    buyValue: 10.990,
    doorsQty: 2,
    seatsQty: 5,
  },
} as Request;

const reqInvalidVehicleMock = {
  body: {
    doorsQty: 2,
    seatsQty: 5,
  },
} as Request;

const reqInvalidMotoMock = {
  body: {
    model: 'Marea',
    year: 1992,
    color: 'Black',
    status: true,
    buyValue: 10.990,
  },
} as Request;

export {
  inputCar,
  outputCar,
  outputReadAll,
  validIdCar,
  idNotFound,
  invalidId,
  outputUpdatedCar,
  reqMock,
  reqInvalidVehicleMock,
  reqInvalidMotoMock,
};