import { EstimationResponse, GetEstimationBody } from "../../types/estimation";
import { EstimationService } from "./estimation";

const estimationService = new EstimationService();

export class EstimationApiService {
  async getEstimation(body: GetEstimationBody): Promise<EstimationResponse> {
    return estimationService.getEstimation(body);
  }
}
