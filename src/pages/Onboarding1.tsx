import { FunctionComponent } from "react";
import MainFrame from "../components/MainFrame";
import styles from "./Onboarding1.module.css";

const Onboarding: FunctionComponent = () => {
  return (
    <div className={styles.onboarding2}>
      <div className={styles.wrapperImage200}>
        <img className={styles.image200Icon} alt="" src="/image-200@2x.png" />
      </div>
      <div className={styles.maskGroup11Wrapper}>
        <img
          className={styles.maskGroup11}
          loading="eager"
          alt=""
          src="/mask-group-1-12@2x.png"
        />
      </div>
      <MainFrame />
    </div>
  );
};

export default Onboarding;
