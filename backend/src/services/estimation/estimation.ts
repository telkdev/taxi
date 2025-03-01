import { UberIntegration } from "../taxiApiIntegration/uber/integration";

type EstimationPrice = {
  distance: number;
  duration: number;
  priceRange: string;
  serviceName: string;
  type: string;
}

export class EstimationService {
  private uberIntegration = new UberIntegration();

  public async getEstimation(
    params: Record<string, any>
  ): Promise<EstimationPrice> {
    const estimation = await this.uberIntegration.getPriceEstimation(params);

    return {
      distance: estimation.distance,
      duration: estimation.duration,
      priceRange: `${estimation.lowEstimate}-${estimation.highEstimate}`,
      serviceName: estimation.displayName,
      type: estimation.localizedDisplayName,
    };
  }
}
