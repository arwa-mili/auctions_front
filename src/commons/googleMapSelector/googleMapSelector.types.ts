export type GoogleMapSelectorProps = {
  apiKey: string;
  defaultCenter?: google.maps.LatLngLiteral;
  defaultZoom?: number;
  texts?: Texts;
  isLoadingSave?: boolean;
  defaultSelected: Array<{ cell: string }>;
  onClickSave?: (selected: Array<SelectedHex>) => void;
};

export type SelectedHex = {
  cell: string;
  lat: number;
  lng: number;
  path: google.maps.LatLngLiteral[];
  areaKm2: number;
  neighbors: number; // incl. self
};

type Texts = {
  title?: string;
  resetSelection?: string;
  resolution?: string;
  selection?: string;
  hexes?: (value: number) => string;
  totalArea?: (value: number) => string;
  r?: (value: number) => string;
  emptyMessage?: string;
  cells?: string;
  save?: string;
};
