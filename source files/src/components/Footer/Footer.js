import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer>
        <div className={styles.ownerBox}>
          <div>
            <p className={styles.footerLogo}>ExRates</p>
            <p className={styles.footerOwner}>Mykola Rybaruk</p>
          </div>
        </div>

        <div className={styles.stores}>
          <a href="https://play.google.com/" target="_blank">
            <img
              className={styles.storesImage}
              src="/img/playmarket.svg"
              alt="Playmarket"
            />
          </a>

          <a href="https://www.apple.com/app-store/" target="_blank">
            <img
              className={styles.storesImage}
              src="./img/appstore.svg"
              alt="AppStore"
            />
          </a>
        </div>

        <div className={styles.reserved}>
          <p>
            2022 <span className={styles.character}>©</span> All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
