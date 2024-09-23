import { PropsOutput } from "../types/type";

const CurrencyOutput = ({ usd, rial }: PropsOutput) => {
  return (
    <>
      <p className="text-lg text-center">
        {usd && `هر ${usd} دلار برابر است با ${rial} ریال`}
      </p>
      <p className="text-lg text-center">
        {rial && `هر ${rial} ریال برابر است با ${usd} دلار`}
      </p>
    </>
  );
};

export default CurrencyOutput;
