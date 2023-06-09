import { Request, Response, NextFunction } from 'express';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IService from '../Interfaces/IService';
import CarODM from '../Models/CarODM';
import BodyNotFound from '../Errors/BodyNotFound';
import NotFoundError from '../Errors/NotFoundError';

const CAR_NOT_FOUND = 'Car not found';

export default class CarService implements IService<ICar, Car> {
  protected odm: CarODM = new CarODM();

  async create(dto: ICar): Promise<Car> {
    const car = await this.odm.create(dto);
    return new Car(car);
  }

  async readAll(): Promise<Car[]> {
    const cars = await this.odm.find();
    return cars.map((car) => new Car(car));
  }

  async readById(id: string): Promise<Car> {
    const car = await this.odm.findById(id);    
    if (!car) throw new NotFoundError(CAR_NOT_FOUND);

    return new Car(car);
  }

  async update(id: string, dto: ICar): Promise<Car> {
    const car = await this.odm.update(id, dto);   
    if (!car) throw new NotFoundError(CAR_NOT_FOUND);

    return new Car(car);
  }

  async delete(id: string): Promise<void> {
    const car = await this.readById(id);
    if (!car) throw new NotFoundError(CAR_NOT_FOUND);

    await this.odm.delete(id);
  }

  isValidBody(req: Request, _res: Response, next: NextFunction): void {
    function isValidVehicle(car: ICar) {
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