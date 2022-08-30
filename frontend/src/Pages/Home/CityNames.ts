import { CoordinatesType } from "../../Components/ForecastCity/types";

export const CityNames = [
  {
    value: {
      latitude: "40.774042",
      longitude: "-73.974142",
    },
    label: "New York",
  },
  {
    value: {
      latitude: "13.764579",
      longitude: "100.524611",
    },
    label: "Bankgkok",
  },
  {
    value: {
      latitude: "41.909663",
      longitude: "12.451963",
    },
    label: "Roma",
  },
  {
    value: {
      latitude: "48.147954",
      longitude: "11.559681",
    },
    label: "Munich",
  },
  {
    value: {
      latitude: "19.429502",
      longitude: "-99.127723",
    },
    label: "México",
  },
];

export type SelectOptionType = {
  label: string;
  value: CoordinatesType;
};

export {};
