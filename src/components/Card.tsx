import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card.module.css";

type CardType = {
  currencySymbol?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Card: FunctionComponent<CardType> = ({
  currencySymbol,
  propAlignSelf,
  propFlex,
  propMinWidth,
}) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.tag} />
      <img
        className={styles.currencySymbolIcon}
        loading="eager"
        alt=""
        src={currencySymbol}
      />
      <div className={styles.description}>
        <div className={styles.calvinBaileyWrapper}>
          <h3 className={styles.calvinBailey}>Calvin Bailey</h3>
        </div>
        <div className={styles.descriptionInner}>
          <div className={styles.frameParent}>
            <div className={styles.tag11Parent}>
              <input className={styles.tag11} type="checkbox" />
              <b className={styles.b}>₦400000</b>
            </div>
            <div className={styles.fAQItemParent}>
              <img className={styles.fAQItem} alt="" src="/f-a-q-item.svg" />
              <div className={styles.rooms}>20 Rooms</div>
            </div>
          </div>
        </div>
        <div className={styles.welcomeToOceanviewContainer}>
          <span className={styles.welcomeToOceanview}>
            Welcome to Oceanview Retreat, an exquisite beachfront property
            located in the tropical city of
          </span>
          <b> Badagry, Lagos.</b>
          <span className={styles.situatedAlongThe}>
            {" "}
            Situated along the pristine shores of the Atlantic Ocean...
          </span>
        </div>
        <div className={styles.frameGroup}>
          <img className={styles.frameIcon} alt="" src="/frame-1.svg" />
          <img className={styles.frameIcon1} alt="" src="/frame-2.svg" />
        </div>
      </div>
    </div>
  );
};

export default Card;
