import { FunctionComponent } from "react";
import CardContainer from "../components/CardContainer";
import CalvinBaileyName from "../components/CalvinBaileyName";
import Card from "../components/Card";
import FAQ from "../components/FAQ";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <CardContainer />
      <CalvinBaileyName />
      <main className={styles.frameParent}>
        <section className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.pricingBoxesFrameParent}>
                    <button className={styles.pricingBoxesFrame}>
                      <div className={styles.forTenants}>For tenants</div>
                    </button>
                    <div className={styles.forLandlord}>For landlord</div>
                  </div>
                </div>
                <div className={styles.calvinBaileyTag}>
                  <h1 className={styles.weMakeIt}>
                    We make it easy for tenants and landlords
                  </h1>
                  <div className={styles.ametMinimMollit}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.headerFrame}>
              <div className={styles.searchField}>
                <div className={styles.frameCard}>
                  <div className={styles.descriptionText}>
                    <div className={styles.calvinBaileyGroup}>
                      <div className={styles.cardImage}>
                        <img
                          className={styles.cardImageChild}
                          alt=""
                          src="/rectangle-41493@2x.png"
                        />
                        <div className={styles.cardImageItem} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.groupTag}>
                    <img
                      className={styles.currencySymbolIcon}
                      loading="eager"
                      alt=""
                      src="/frame-1000000820.svg"
                    />
                    <div className={styles.roomsList}>
                      <div className={styles.virtualHomeTour}>
                        Virtual home tour
                      </div>
                      <div className={styles.weProvideYou}>
                        We provide you with virtual tour
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.dividerRectangleIcon}
                loading="eager"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </section>
        <section className={styles.pricingSection}>
          <div className={styles.someMenu}>
            <img className={styles.fAQListing} alt="" src="/vector-1.svg" />
            <div className={styles.cardCollection}>
              <img
                className={styles.headerFrameIcon}
                alt=""
                src="/vector-2.svg"
              />
              <img
                className={styles.footerGroupIcon}
                loading="eager"
                alt=""
                src="/vector-3.svg"
              />
            </div>
          </div>
          <div className={styles.headerGroup}>
            <div className={styles.rectangleFrame}>
              <div className={styles.findTheBest}>Find the best deal</div>
              <div className={styles.browseThousandOf}>
                Browse thousand of properties
              </div>
              <img
                className={styles.groupIcon}
                loading="eager"
                alt=""
                src="/frame-1000000820-1.svg"
              />
            </div>
            <div className={styles.tag}>
              <div className={styles.rooms}>
                <div className={styles.fAQItemFrameParent}>
                  <div className={styles.fAQItemFrame}>
                    <img
                      className={styles.rectangleIcon}
                      loading="eager"
                      alt=""
                      src="/vector-4.svg"
                    />
                    <div className={styles.description}>
                      <img
                        className={styles.frameIcon}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.dividerRectangle}>
                    <img
                      className={styles.fAQ}
                      loading="eager"
                      alt=""
                      src="/vector-6.svg"
                    />
                  </div>
                </div>
                <div className={styles.maskGroup}>
                  <h1 className={styles.basedOnYour}>Based on your location</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.someMenuMonthlyYearly}>
          <div className={styles.footerLinkedinFacebookTwitt}>
            <div className={styles.propertyList}>
              <div className={styles.divider}>
                <div className={styles.cardGroupParent}>
                  <img
                    className={styles.cardGroupIcon}
                    loading="eager"
                    alt=""
                    src="/vector-7.svg"
                  />
                  <b
                    className={styles.someOfOur}
                  >{`Some of our picked properties near you `}</b>
                </div>
              </div>
              <img
                className={styles.descriptionFrameIcon}
                loading="eager"
                alt=""
                src="/vector-8.svg"
              />
            </div>
            <Card currencySymbol="/rectangle-41493@2x.png" />
          </div>
          <div className={styles.cardParent}>
            <Card
              currencySymbol="/rectangle-41493-1@2x.png"
              propAlignSelf="unset"
              propFlex="1"
              propMinWidth="318px"
            />
            <Card
              currencySymbol="/rectangle-41493-2@2x.png"
              propAlignSelf="unset"
              propFlex="1"
              propMinWidth="318px"
            />
          </div>
        </section>
        <section className={styles.cardContainer}>
          <Card
            currencySymbol="/rectangle-41493-1@2x.png"
            propAlignSelf="unset"
            propFlex="unset"
            propMinWidth="unset"
          />
          <Card
            currencySymbol="/rectangle-41493-2@2x.png"
            propAlignSelf="unset"
            propFlex="unset"
            propMinWidth="unset"
          />
          <Card
            currencySymbol="/rectangle-41493@2x.png"
            propAlignSelf="unset"
            propFlex="unset"
            propMinWidth="unset"
          />
        </section>
        <FAQ />
        <footer className={styles.footer5}>
          <div className={styles.maskGroupFrame}>
            <div className={styles.someMenu1}>
              <img
                className={styles.maskGroup11}
                loading="eager"
                alt=""
                src="/mask-group-1-1@2x.png"
              />
              <div className={styles.divider1}>
                <div className={styles.someMenu2}>Home</div>
                <div className={styles.menu}>Navigate</div>
                <div className={styles.menu1}>Location</div>
                <div className={styles.menu2}>Support</div>
                <div className={styles.menu3}>Latest update</div>
              </div>
            </div>
            <div className={styles.frameDivider}>
              <img
                className={styles.linkedinIcon}
                loading="eager"
                alt=""
                src="/linkedin.svg"
              />
              <img
                className={styles.facebookIcon}
                loading="eager"
                alt=""
                src="/facebook.svg"
              />
              <img
                className={styles.twitterIcon}
                loading="eager"
                alt=""
                src="/twitter.svg"
              />
              <img
                className={styles.twitterIcon1}
                loading="eager"
                alt=""
                src="/twitter-1.svg"
              />
            </div>
          </div>
          <div className={styles.facebookicon}>
            <div className={styles.twittericon}>
              <div className={styles.divider2}>
                <div className={styles.divider3} />
              </div>
              <div className={styles.pricingsection}>
                <div
                  className={styles.pricing}
                >{`© 2024  Capstone33. All rights reserved. `}</div>
                <div className={styles.pricingParent}>
                  <div className={styles.pricing1}>Terms</div>
                  <div className={styles.pricing2}>Privacy</div>
                  <div className={styles.pricing3}>Cookies</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
