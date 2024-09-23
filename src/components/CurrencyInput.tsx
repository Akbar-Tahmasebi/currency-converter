import Button from "./ButtonTag";
import InputTag from "./InputTag";
import { PropsInput } from "../types/type";

const CurrencyInput = ({
  exchangeRate,
  usd,
  setUsd,
  rial,
  setRial,
}: PropsInput) => {
  const convertToRial = () => {
    const usdValue = typeof usd === "string" ? parseFloat(usd) : usd;
    setRial(usdValue * exchangeRate);
  };

  const convertToUsd = () => {
    const rialValue = typeof rial === "string" ? parseFloat(rial) : rial;
    setUsd((rialValue / exchangeRate).toFixed(2));
  };

  return (
    <>
      <div className="mb-4">
        <InputTag
          placeholder={"مقدار دلار"}
          handelChange={setUsd}
          value={usd}
        />
        <Button title={"تبدیل به ریال"} handelClick={convertToRial} />
      </div>
      <div className="mb-4">
        <InputTag
          placeholder={"مقدار ریال"}
          handelChange={setRial}
          value={rial}
        />
        <Button title={"تبدیل به دلار"} handelClick={convertToUsd} />
      </div>
    </>
  );
};

export default CurrencyInput;
