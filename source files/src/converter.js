import React from "react";
import { Block } from "./Block";
import "./index.scss";
import axios from "axios";
import { style } from "@mui/system";
import { Style } from "@mui/icons-material";

function Converter() {
  const [fromCurrency, setFromCurrency] = React.useState("UAH");
  const [toCurrency, setToCurrency] = React.useState("USD");
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(1);
  //const [rates, setRates] = React.useState({});

  const ratesRef = React.useRef({});

  React.useEffect(() => {
    axios.get("https://cdn.cur.su/api/latest.json").then((res) => {
      //setRates(res.data.rates);
      ratesRef.current = res.data.rates;
      onChangeToPrice(1);
    });
  }, []);

  const onChangeFromPrice = (value) => {
    const price = value / ratesRef.current[fromCurrency];
    const result = price * ratesRef.current[toCurrency];
    setToPrice(result.toFixed(3));
    setFromPrice(value);
  };

  const onChangeToPrice = (value) => {
    const result =
      (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(3));
    setToPrice(value);
  };

  React.useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  React.useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className="App">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
}

export default Converter;
