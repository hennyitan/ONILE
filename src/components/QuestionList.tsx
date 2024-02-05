import { FunctionComponent } from "react";
import styles from "./QuestionList.module.css";

const QuestionList: FunctionComponent = () => {
  return (
    <div className={styles.questionList}>
      <div className={styles.faqItem1}>
        <div className={styles.loremIpsumDolorSitAmetCon}>
          <div className={styles.aQuestionGoes}>A question goes here</div>
          <img className={styles.vectorIcon} alt="" src="/vector-9.svg" />
        </div>
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}</div>
      </div>
      <div className={styles.faqList2}>
        <div className={styles.aQuestionGoes1}>A question goes here</div>
        <img className={styles.fAQItemContent} alt="" src="/vector-10.svg" />
      </div>
      <div className={styles.faqList3}>
        <div className={styles.aQuestionGoes2}>A question goes here</div>
        <img className={styles.vectorIcon1} alt="" src="/vector-10.svg" />
      </div>
      <div className={styles.faqList4}>
        <div className={styles.aQuestionGoes3}>A question goes here</div>
        <img className={styles.vectorIcon2} alt="" src="/vector-10.svg" />
      </div>
      <div className={styles.faqList5}>
        <div className={styles.aQuestionGoes4}>A question goes here</div>
        <img className={styles.vectorIcon3} alt="" src="/vector-10.svg" />
      </div>
      <div className={styles.faqList6}>
        <div className={styles.aQuestionGoes5}>A question goes here</div>
        <img className={styles.vectorIcon4} alt="" src="/vector-10.svg" />
      </div>
    </div>
  );
};

export default QuestionList;
