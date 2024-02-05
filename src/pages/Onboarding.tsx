import { FunctionComponent } from "react";
import FirstGroup from "../components/FirstGroup";
import styles from "./Onboarding.module.css";

const Onboarding: FunctionComponent = () => {
  return (
    <div className={styles.onboarding1}>
      <div className={styles.wrapperImage200}>
        <img className={styles.image200Icon} alt="" src="/image-200@2x.png" />
      </div>
      <header className={styles.maskFrame}>
        <img
          className={styles.maskGroup11}
          loading="eager"
          alt=""
          src="/mask-group-1-12@2x.png"
        />
      </header>
      <FirstGroup />
    </div>
  );
};

export default Onboarding;
