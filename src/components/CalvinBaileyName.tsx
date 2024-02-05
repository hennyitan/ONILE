import { FunctionComponent } from "react";
import WelcomeContainer from "./WelcomeContainer";
import styles from "./CalvinBaileyName.module.css";

const CalvinBaileyName: FunctionComponent = () => {
  return (
    <div className={styles.calvinBaileyName}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.tag}>
          <div className={styles.rentSmartLiveEasyTheFutParent}>
            <h1 className={styles.rentSmartLiveContainer}>
              <p className={styles.rentSmartLiveEasy}>
                <span className={styles.rent}>Rent</span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.smart}>{`smart, `}</span>
                <span className={styles.live}>Live</span>
                <span className={styles.span1}>{` `}</span>
                <span>Easy.</span>
              </p>
              <p className={styles.theFutureOf}>
                The future of real estate is here
              </p>
            </h1>
            <h3 className={styles.buyRentAnd}>
              Buy, rent and sell your properties with ease.
            </h3>
          </div>
        </div>
        <div className={styles.iconlyLightSearchWrapper}>
          <div className={styles.iconlyLightSearch}>
            <div className={styles.searchQuestions}>
              <div className={styles.questionItem}>
                <WelcomeContainer k="20k+" renters="Renters" />
                <WelcomeContainer
                  k="7k+"
                  renters="Properties"
                  propWidth="171px"
                  propFlex="1"
                  propAlignSelf="stretch"
                  propPadding="0px var(--padding-5xl) 0px var(--padding-xl)"
                />
              </div>
              <div className={styles.frameParent}>
                <div className={styles.search01Parent}>
                  <img
                    className={styles.search01Icon}
                    alt=""
                    src="/search01.svg"
                  />
                  <input
                    className={styles.searchForRentals}
                    placeholder="Search for rentals available near you..."
                    type="text"
                  />
                </div>
                <button className={styles.currencySymbol}>
                  <div className={styles.browseProperties}>
                    Browse Properties
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.questionListFAQ}>
              <img
                className={styles.questionListFAQChild}
                loading="eager"
                alt=""
                src="/arrow-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalvinBaileyName;
