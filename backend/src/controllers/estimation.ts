import { NextFunction, Request, Response } from "express";
import { GetEstimationBody } from "../types/estimation";
import { EstimationApiService } from "../services/estimation/api";

const api = new EstimationApiService();

export class EstimationController {
  async getEstimation(
    req: Request<any, any, GetEstimationBody>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const estimation = await api.getEstimation(req.body);

      res.status(200).send(estimation);
    } catch (error) {
      next(error);
    }
  }
}
