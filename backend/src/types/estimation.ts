type Latitude = number;
type Longitude = number;

type LatLng = {
  lat: Latitude;
  lng: Longitude;
};

export type GetEstimationBody = {
  start: LatLng;
  end: LatLng;
  seatCount?: number;
};

export type EstimationResponse = {
  distance: number;
  duration: number;
  priceRange: string;
  serviceName: string;
  type: string;
};
