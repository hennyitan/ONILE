import { FunctionComponent, useCallback } from "react";
import FrameQuad from "./FrameQuad";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";

const RegisterForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/onboarding-1");
  }, [navigate]);

  return (
    <form className={styles.registerForm}>
      <div className={styles.registerFormChild} />
      <div className={styles.textFrame}>
        <div className={styles.welcomeTo}>
          <span className={styles.welcome}>{`Welcome `}</span>t
          <span className={styles.o}>{`o `}</span>
        </div>
        <img
          className={styles.maskGroup11}
          loading="eager"
          alt=""
          src="/mask-group-1-11@2x.png"
        />
      </div>
      <div className={styles.inputLabel}>
        <div className={styles.enterYourInformation}>
          Enter your information below to continue
        </div>
      </div>
      <div className={styles.textField}>
        <div className={styles.email}>Email</div>
        <input
          className={styles.subFrame}
          placeholder="dave@gmail.com"
          type="text"
        />
      </div>
      <div className={styles.frameTriple}>
        <FrameQuad
          firstName="First name"
          textFramePairPlaceholder="Dave"
          createPassword="Create Password"
        />
        <FrameQuad
          firstName="Last name"
          textFramePairPlaceholder="Felix"
          createPassword="Confirm Password"
        />
      </div>
      <button className={styles.button} onClick={onButtonClick}>
        <div className={styles.button1}>
          <div className={styles.logIn}>Create Account</div>
        </div>
      </button>
    </form>
  );
};

export default RegisterForm;
