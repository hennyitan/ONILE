import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import styles from "./LoginPage.module.css";

const LoginPage: FunctionComponent = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.wrapperImage200}>
        <img className={styles.image200Icon} alt="" src="/image-200@2x.png" />
      </div>
      <div className={styles.button} />
      <FrameComponent />
    </div>
  );
};

export default LoginPage;
