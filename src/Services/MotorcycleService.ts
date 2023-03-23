import { Request, Response, NextFunction } from 'express';
import Motorcycle from '../Domains/Motorcycle';
import BodyNotFound from '../Errors/BodyNotFound';
import NotFoundError from '../Errors/NotFoundError';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IService from '../Interfaces/IService';
import MotorcycleODM from '../Models/MotorcycleODM';

const MOTO_NOT_FOUND = 'Motorcycle not found';

export default class MotorcycleService implements IService<IMotorcycle, Motorcycle> {
  protected odm: MotorcycleODM = new MotorcycleODM();

  async create(dto: IMotorcycle): Promise<Motorcycle> {
    const motorcycle = await this.odm.create({ ...dto });
    return new Motorcycle(motorcycle);
  }

  async readAll(): Promise<Motorcycle[]> {
    const motorcycles = await this.odm.find();
    return motorcycles.map((moto) => new Motorcycle(moto));
  }

  async readById(id: string): Promise<Motorcycle> {
    const motorcycle = await this.odm.findById(id);
    if (!motorcycle) throw new NotFoundError(MOTO_NOT_FOUND);

    return new Motorcycle(motorcycle);
  }

  async update(id: string, dto: IMotorcycle): Promise<Motorcycle> {
    const motorcycle = await this.odm.update(id, dto);
    if (!motorcycle) throw new NotFoundError(MOTO_NOT_FOUND);

    return new Motorcycle(motorcycle);
  }

  async delete(id: string): Promise<void> {
    const motorcycle = await this.readById(id);
    if (!motorcycle) throw new NotFoundError(MOTO_NOT_FOUND);
    
    await this.odm.delete(id);
  }

  isValidBody(req: Request, res: Response, next: NextFunction): void {
    function isValidVehicle(motorcycle: IMotorcycle) {
      if (!motorcycle.model || !motorcycle.year || !motorcycle.color || !motorcycle.buyValue) {
        throw new BodyNotFound('Body not found Vehicle');
      }
    }

    function isValidMotorcycle(motorcycle: IMotorcycle): void {
      if (!motorcycle.category || !motorcycle.engineCapacity) {
        throw new BodyNotFound('Body not found Car');
      }
    }

    const motorcycle: IMotorcycle = {
      ...req.body,
    } as IMotorcycle;
    isValidVehicle(motorcycle);
    isValidMotorcycle(motorcycle);
    next();
  }
}