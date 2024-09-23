export type Currency = number | string;

export interface PropsOutput {
  usd: Currency;
  rial: Currency;
}

export interface PropsInput extends PropsOutput {
  exchangeRate: number;
  setUsd: (usd: Currency) => void;
  setRial: (rial: Currency) => void;
}

export interface PropsButtonTag {
  title: string;
  handelClick: () => void;
}
export interface PropsInputTag {
  value: Currency;
  placeholder: string;
  handelChange: (value: Currency) => void;
}
