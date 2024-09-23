import { useState } from "react";
import CurrencyInput from "./components/CurrencyInput";
import CurrencyOutput from "./components/CurrencyOutput";
import { Currency } from "./components/types/type";

const App = () => {
  const exchangeRate = 597800;
  const [usd, setUsd] = useState<Currency>("");
  const [rial, setRial] = useState<Currency>("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-200">
      <h1 className="text-2xl font-bold mb-4 cursor-default">
        تبدیل واحد پول دلار به ریال یا بالعکس
      </h1>
      <h4 className="text-sm mb-4">
        قیمت هر یک دلار معادل {exchangeRate} ریال است.
      </h4>

      <div className="mb-4">
        <CurrencyInput
          exchangeRate={exchangeRate}
          usd={usd}
          setUsd={setUsd}
          rial={rial}
          setRial={setRial}
        />
        <CurrencyOutput usd={usd} rial={rial} />
      </div>
    </div>
  );
};

export default App;
