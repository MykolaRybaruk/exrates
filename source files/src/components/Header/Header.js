import styles from "./header.module.scss";
import React from "react";
import { style } from "@mui/system";

function Header(props) {
  return (
    <div className={styles.headerWrapper}>
      <header>
        <div className={styles.logo}>
          <h2>ExRates</h2>
          <p>Be informed</p>
        </div>

        <div className={styles.coursesWrapper}>
          <div className={styles.courses}>
            <div className={styles.currency}>
              <p className={styles.currencyName}>USD:</p>
              <p>{props.rates.UAH ? props.rates.UAH.toFixed(2) : 0} UAH</p>
            </div>

            <div className={styles.currency}>
              <p className={styles.currencyName}>EUR:</p>
              <p>
                {props.rates.EUR
                  ? (
                      (props.rates.USD / props.rates.EUR) *
                      props.rates.UAH
                    ).toFixed(2)
                  : 0}{" "}
                UAH
              </p>
            </div>

            <div className={styles.currency}>
              <p className={styles.currencyName}>GBP:</p>
              <p>
                {props.rates.GBP
                  ? (
                      (props.rates.USD / props.rates.GBP) *
                      props.rates.UAH
                    ).toFixed(2)
                  : 0}{" "}
                UAH
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
