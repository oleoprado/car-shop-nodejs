import express, { Router } from 'express';

export default abstract class AbstractController<S> {
  router: express.Router;
  service: S;

  constructor(service: S) {
    this.router = Router();
    this.service = service;
  }

  abstract initRoutes(): Router;
}