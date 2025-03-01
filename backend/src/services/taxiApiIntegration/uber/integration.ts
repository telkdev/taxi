import { PriceEstimation, TaxiApiIntegrationCore } from "../core";
import { toQueryString } from "../../../utils/toQueryString";
import { UBER_API } from "./constants";

export class UberIntegration extends TaxiApiIntegrationCore {
  public async getPriceEstimation(
    params: Record<string, any>
  ): Promise<PriceEstimation> {
    try {
      const queryString = toQueryString(params);
      const apiUrl = `${process.env.UBER_API_URL}${UBER_API.getEstimationPrice}?${queryString}`;
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.UBER_API_KEY,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.status >= 400) {
        throw new Error(data.message);
      }

      return {
        localizedDisplayName: data.localized_display_name,
        distance: data.distance,
        displayName: data.display_name,
        productId: data.product_id,
        highEstimate: data.high_estimate,
        lowEstimate: data.low_estimate,
        duration: data.duration,
        estimate: data.estimate,
        currencyCode: data.currency_code,
      };
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
}
