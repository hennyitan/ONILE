import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./WelcomeContainer.module.css";

type WelcomeContainerType = {
  k?: string;
  renters?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
};

const WelcomeContainer: FunctionComponent<WelcomeContainerType> = ({
  k,
  renters,
  propWidth,
  propFlex,
  propAlignSelf,
  propPadding,
}) => {
  const welcomeContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const calvinBaileyBoxStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const kStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const descriptionFrameStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.welcomeContainer} style={welcomeContainerStyle}>
      <div className={styles.welcomeContainerChild} />
      <div className={styles.calvinBaileyBox} style={calvinBaileyBoxStyle}>
        <div className={styles.k} style={kStyle}>
          {k}
        </div>
        <div className={styles.descriptionFrame} style={descriptionFrameStyle}>
          <div className={styles.renters}>{renters}</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeContainer;
