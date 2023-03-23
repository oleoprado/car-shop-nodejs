import { NextFunction, Request, Response, Router } from 'express';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IService from '../Interfaces/IService';
import CarService from '../Services/CarService';
import AbstractController from './AbstractController';

export default class CarController extends AbstractController<IService<ICar, Car>> {
  constructor() {
    super(new CarService());
  }

  private async create(req: Request, res: Response): Promise<Response> {
    const result = await this.service.create(req.body);
    return res.status(201).json(result);
  }

  private async readAll(req: Request, res: Response): Promise<Response> {
    const result = await this.service.readAll();
    return res.status(200).json(result);
  }

  private async readById(
    req: Request, 
    res: Response, 
    next: NextFunction,
  ): Promise<Response | undefined> {
    try {
      const result = await this.service.readById(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  private async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await this.service.update(req.params.id, req.body);
      
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  private async delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await this.service.delete(req.params.id);
      return res.status(204).json(result);
    } catch (error) {
      next(error);
    }
  }

  initRoutes(): Router {
    this.router
      .post('/cars', this.service.isValidBody, (req, res) => this.create(req, res))
      .get('/cars', (req, res) => this.readAll(req, res))
      .get('/cars/:id', (req, res, next) => this.readById(req, res, next))
      .put('/cars/:id', this.service.isValidBody, (req, res, next) => this.update(req, res, next))
      .delete('/cars/:id', (req, res, next) => this.delete(req, res, next));
      
    return this.router;
  }
}