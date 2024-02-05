import { FunctionComponent } from "react";
import styles from "./FrameQuad.module.css";

type FrameQuadType = {
  firstName?: string;
  textFramePairPlaceholder?: string;
  createPassword?: string;
};

const FrameQuad: FunctionComponent<FrameQuadType> = ({
  firstName,
  textFramePairPlaceholder,
  createPassword,
}) => {
  return (
    <div className={styles.frameQuad}>
      <div className={styles.frameWithTwoChildren}>
        <div className={styles.firstName}>{firstName}</div>
        <input
          className={styles.textFramePair}
          placeholder={textFramePairPlaceholder}
          type="text"
        />
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.createPassword}>{createPassword}</div>
        <div className={styles.frameWithInstance}>
          <div className={styles.frameWithInstanceChild} />
          <input
            className={styles.passwordConfirmation}
            placeholder="*********"
            type="text"
          />
          <img className={styles.iconRight} alt="" src="/iconright.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameQuad;
