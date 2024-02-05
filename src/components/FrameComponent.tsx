import { FunctionComponent, useCallback } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRegisterContainerClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <div className={styles.mainFrame}>
      <div className={styles.mainFrameChild} />
      <div className={styles.welcomeToParent}>
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
      <form className={styles.frameParent}>
        <div className={styles.pleaseLoginYourAccountWrapper}>
          <div className={styles.pleaseLoginYour}>
            Please Login your account.
          </div>
        </div>
        <div className={styles.emailInputParent}>
          <div className={styles.emailInput}>
            <div className={styles.email}>Email</div>
            <input
              className={styles.passwordInputFrame}
              placeholder="dave@gmail.com"
              type="text"
            />
          </div>
          <div className={styles.passwordParent}>
            <div className={styles.password}>Password</div>
            <div className={styles.buttonIcon}>
              <div className={styles.buttonIconChild} />
              <input
                className={styles.loginButton}
                placeholder="*********"
                type="text"
              />
              <img className={styles.iconRight} alt="" src="/iconright.svg" />
            </div>
          </div>
          <div className={styles.socialMediaFrame}>
            <div className={styles.googleFacebookFrame}>
              <input className={styles.rememberMeLabel} type="checkbox" />
              <div className={styles.rememberMe}>Remember me</div>
            </div>
            <div className={styles.forgotPassword}>Forgot Password?</div>
          </div>
        </div>
        <div className={styles.emailInputFrame}>
          <button className={styles.button}>
            <Button />
          </button>
          <div className={styles.orContinueWith}>Or Continue With</div>
        </div>
        <div className={styles.socialMediaLogos}>
          <button className={styles.google}>
            <div className={styles.googleChild} />
            <img
              className={styles.image198Icon}
              alt=""
              src="/image-198@2x.png"
            />
            <div className={styles.google1}>Google</div>
          </button>
          <button className={styles.facebook}>
            <div className={styles.facebookChild} />
            <img
              className={styles.image199Icon}
              alt=""
              src="/image-199@2x.png"
            />
            <div className={styles.facebook1}>Facebook</div>
          </button>
        </div>
        <div className={styles.register} onClick={onRegisterContainerClick}>
          <div className={styles.newMemberHereContainer}>
            <span className={styles.newMemberHere}>New member here?</span>
            <span className={styles.registerNow}>{` Register Now `}</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FrameComponent;
