import { NextFunction, Request, Response, Router } from 'express';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IService from '../Interfaces/IService';
import MotorcycleService from '../Services/MotorcycleService';
import AbstractController from './AbstractController';

class MotorcycleController extends AbstractController<IService<IMotorcycle, Motorcycle>> {
  constructor() {
    super(new MotorcycleService());
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

  initRoutes(): Router {
    this.router
      .post('/motorcycles', this.service.isValidBody, (req, res) => this.create(req, res))
      .get('/motorcycles', (req, res) => this.readAll(req, res))
      .get('/motorcycles/:id', (req, res, next) => this.readById(req, res, next));
    
    return this.router;
  }
}

export default MotorcycleController;