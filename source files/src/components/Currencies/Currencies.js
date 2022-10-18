import { ClassNames } from "@emotion/react";
import { style } from "@mui/system";
import { chainPropTypes } from "@mui/utils";
import styles from "./Currencies.module.scss";
import React from "react";
import { ConstructionRounded } from "@mui/icons-material";

function Currencies(props) {
  const currenciesObj = {
    USD: props.rates.USD,
    EUR: props.rates.EUR,
    GBP: props.rates.GBP,
    CHF: props.rates.CHF,
    CAD: props.rates.CAD,
    AUD: props.rates.AUD,
    PLN: props.rates.PLN,
    HUF: props.rates.HUF,
    CZK: props.rates.CZK,
    JPY: props.rates.JPY,
  };

  return (
    <div className={styles.currenciesWrapper}>
      {Object.keys(currenciesObj).map((x, index) => (
        <div key={index} className={styles.currencie}>
          <div className={styles.currencyLogo}>
            <img src={`/img/${x.toLowerCase()}.jpg`} alt={`${x}`} />
            <p className={ClassNames.currencyName}>{`${x}`}</p>
          </div>
          <div className={styles.currencyPrice}>{`${
            props.rates.USD
              ? (
                  (props.rates.USD / currenciesObj[x]) *
                  props.rates.UAH
                ).toFixed(4)
              : 0
          }`}</div>
        </div>
      ))}

      <div>{props.USD}</div>
    </div>
  );
}

export default Currencies;
