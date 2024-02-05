import { FunctionComponent } from "react";
import styles from "./MainFrame.module.css";

const MainFrame: FunctionComponent = () => {
  return (
    <section className={styles.mainFrame}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.parent}>
            <img
              className={styles.icon}
              loading="eager"
              alt=""
              src="/25182811-7061501-1.svg"
            />
            <div className={styles.yesNoFrames}>
              <h2 className={styles.areYouLooking}>
                Are you looking for a new place?
              </h2>
              <div className={styles.ifYoudLike}>
                If you'd like to find a new long-term rental hit Yes. If you're
                happily moved-in just click No.
              </div>
            </div>
          </div>
          <div className={styles.optionFrames}>
            <textarea
              className={styles.yes}
              placeholder="YES"
              rows={7}
              cols={18}
            />
            <div className={styles.no}>
              <div className={styles.noChild} />
              <div className={styles.noInner}>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.noWrapper}>
                <h2 className={styles.no1}>NO</h2>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.logIn}>next</div>
        </button>
      </div>
    </section>
  );
};

export default MainFrame;
