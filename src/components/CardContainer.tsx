import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CardContainer.module.css";

const CardContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMonthlyYearlySwitcherClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onMonthlyYearlySwitcher1Click = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <header className={styles.cardContainer}>
      <div className={styles.cardGroup}>
        <img
          className={styles.maskGroup11}
          loading="eager"
          alt=""
          src="/mask-group-1-1@2x.png"
        />
      </div>
      <div className={styles.symbol}>
        <div className={styles.groupFrame}>
          <div className={styles.rent}>Rent</div>
          <div className={styles.buy}>Buy</div>
          <div className={styles.sell}>Sell</div>
        </div>
        <img
          className={styles.symbolChild}
          loading="eager"
          alt=""
          src="/line-11.svg"
        />
      </div>
      <div className={styles.monthlyYearlySwitcherParent}>
        <button
          className={styles.monthlyYearlySwitcher}
          onClick={onMonthlyYearlySwitcherClick}
        >
          <div className={styles.login}>Login</div>
        </button>
        <button
          className={styles.monthlyYearlySwitcher1}
          onClick={onMonthlyYearlySwitcher1Click}
        >
          <div className={styles.signUp}>Sign up</div>
        </button>
      </div>
    </header>
  );
};

export default CardContainer;
