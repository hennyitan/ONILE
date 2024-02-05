import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FirstGroup.module.css";

const FirstGroup: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNextButtonClick = useCallback(() => {
    navigate("/onboarding-2");
  }, [navigate]);

  return (
    <section className={styles.firstGroup}>
      <div className={styles.secondGroup}>
        <div className={styles.secondGroupChild} />
        <div className={styles.objects}>
          <div className={styles.fourthGroup}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
            <img className={styles.groupIcon2} alt="" src="/group-2.svg" />
            <img className={styles.groupIcon3} alt="" src="/group-3.svg" />
            <div className={styles.group}>
              <img className={styles.groupIcon4} alt="" src="/group-4.svg" />
              <img className={styles.groupIcon5} alt="" src="/group-5.svg" />
              <div className={styles.group1}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img
                  className={styles.groupIcon6}
                  loading="eager"
                  alt=""
                  src="/group-6.svg"
                />
                <input className={styles.vector} type="checkbox" />
                <img
                  className={styles.groupIcon7}
                  loading="eager"
                  alt=""
                  src="/group-7.svg"
                />
                <img
                  className={styles.groupIcon8}
                  loading="eager"
                  alt=""
                  src="/group-8.svg"
                />
                <img
                  className={styles.groupIcon9}
                  loading="eager"
                  alt=""
                  src="/group-9.svg"
                />
              </div>
              <img
                className={styles.groupIcon10}
                loading="eager"
                alt=""
                src="/group-10.svg"
              />
              <img className={styles.vectorIcon1} alt="" src="/vector-21.svg" />
            </div>
            <img className={styles.groupIcon11} alt="" src="/group-11.svg" />
            <img
              className={styles.groupIcon12}
              loading="eager"
              alt=""
              src="/group-12.svg"
            />
          </div>
        </div>
        <div className={styles.accountTypeSelectorParent}>
          <div className={styles.accountTypeSelector}>
            <h1 className={styles.accountType}>Account type</h1>
            <div className={styles.chooseTheAccount}>
              Choose the account type that suits your needs. Each has a
              different set of tools and features.
            </div>
          </div>
          <div className={styles.tenantInfoFrame}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.serviceProviderFrame}
                loading="eager"
                alt=""
                src="/frame.svg"
              />
              <div className={styles.tenantDashboardFrameParent}>
                <div className={styles.tenantDashboardFrame}>
                  <h3 className={styles.tenant}>Tenant</h3>
                  <div className={styles.manageRequestsFrame} />
                </div>
                <div
                  className={styles.findAPlace}
                >{`Find a place & pay rent online.`}</div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.frameParent}>
                <img
                  className={styles.frameIcon}
                  loading="eager"
                  alt=""
                  src="/frame-11.svg"
                />
                <div className={styles.landlordEllipse}>
                  <h3 className={styles.landlord}>Landlord</h3>
                </div>
                <img
                  className={styles.frameInner}
                  loading="eager"
                  alt=""
                  src="/ellipse-6789.svg"
                />
              </div>
              <div className={styles.acceptRentOnlineManageReWrapper}>
                <div
                  className={styles.acceptRentOnline}
                >{`Accept rent online & manage rental`}</div>
              </div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <div className={styles.frameGroup}>
                <div className={styles.logoAndNameWrapper}>
                  <div className={styles.logoAndName}>
                    <img
                      className={styles.frameIcon1}
                      loading="eager"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <h3 className={styles.servicePro}>Service Pro</h3>
                  </div>
                </div>
                <div className={styles.ellipseDiv} />
              </div>
              <div className={styles.manageRequestsFromLandlordsWrapper}>
                <div
                  className={styles.manageRequestsFrom}
                >{`Manage requests from landlords & find new jobs.`}</div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.nextButton} onClick={onNextButtonClick}>
          <div className={styles.button}>
            <div className={styles.logIn}>next</div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default FirstGroup;
