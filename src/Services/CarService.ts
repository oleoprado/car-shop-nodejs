import { Request, Response, NextFunction } from 'express';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IService from '../Interfaces/IService';
import CarODM from '../Models/CarODM';
import BodyNotFound from '../Errors/BodyNotFound';

const MESSAGE = 'Method not implemented.';

export default class CarService implements IService<ICar, Car> {
  protected odm: CarODM = new CarODM();

  async create(dto: ICar): Promise<Car> {
    const car = await this.odm.create(dto);
    return new Car(car);
  }

  async readAll(): Promise<Car[]> {
    throw new Error(MESSAGE);
  }

  async readById(_id: string): Promise<Car> {
    throw new Error(MESSAGE);
  }

  async update(_id: string, _dto: ICar): Promise<Car> {
    throw new Error(MESSAGE);
  }

  async delete(_id: string): Promise<void> {
    throw new Error(MESSAGE);
  }

  isValidBody(req: Request, _res: Response, next: NextFunction): void {
    function isValidVehicle(car: ICar): void {
      if (!car.model || !car.year || !car.color || !car.buyValue) {
        throw new BodyNotFound('Body not found Vehicle');
      }
    }
    
    function isValidCar(car: ICar): void {
      if (!car.doorsQty || !car.seatsQty) throw new BodyNotFound('Body not found Car');
    }

    const car: ICar = {
      ...req.body,
    } as ICar;
    isValidVehicle(car);
    isValidCar(car);
    next();
  }
}