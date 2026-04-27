export type Country = {
  code: string;
  label: string;
  dialCode: string;
};

export const DEFAULT_COUNTRY: Country = {
  code: "US",
  label: "United States",
  dialCode: "+1",
};
