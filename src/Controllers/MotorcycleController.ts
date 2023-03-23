import { NextFunction, Request, Response, Router } from 'express';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IService from '../Interfaces/IService';
import MotorcycleService from '../Services/MotorcycleService';
import AbstractController from './AbstractController';

const ENDPOINT_MOTORCYCLE_ID = '/motorcycles/:id';

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

  private async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> {
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
  ) : Promise<Response | undefined> {
    try {
      await this.service.delete(req.params.id);
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  initRoutes(): Router {
    this.router
      .post(
        '/motorcycles', 
        this.service.isValidBody, 
        (req, res) => this.create(req, res),
      )
      .get(
        '/motorcycles', 
        (req, res) => this.readAll(req, res),
      )
      .get(
        ENDPOINT_MOTORCYCLE_ID, 
        (req, res, next) => this.readById(req, res, next),
      )
      .put(
        ENDPOINT_MOTORCYCLE_ID, 
        this.service.isValidBody, 
        (req, res, next) => this.update(req, res, next),
      )
      .delete(
        ENDPOINT_MOTORCYCLE_ID,
        (req, res, next) => this.delete(req, res, next),
      );
    
    return this.router;
  }
}

export default MotorcycleController;