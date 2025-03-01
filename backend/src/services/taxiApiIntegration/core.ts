export type PriceEstimation = {
  localizedDisplayName: string;
  distance: number;
  displayName: string;
  productId: string;
  highEstimate: number;
  lowEstimate: number;
  duration: number;
  estimate: string;
  currencyCode: string;
};

export abstract class TaxiApiIntegrationCore {
  public abstract getPriceEstimation(params: Record<string, any>): Promise<PriceEstimation>;
}
