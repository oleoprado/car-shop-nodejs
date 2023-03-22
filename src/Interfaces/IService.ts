import { Request, Response, NextFunction } from 'express';

export default interface IService<I, D> {
  create(dto: I): Promise<D>;
  readAll(): Promise<D[]>;
  readById(id: string): Promise<D>;
  update(id: string, dto: I): Promise<D>;
  delete(id: string): Promise<void>;

  isValidBody(req: Request, res: Response, next: NextFunction): void;
}