import { FunctionComponent } from "react";
import QuestionList from "./QuestionList";
import styles from "./FAQ.module.css";

const FAQ: FunctionComponent = () => {
  return (
    <section className={styles.faq1}>
      <div className={styles.fAQComponent}>
        <div className={styles.headerParent}>
          <div className={styles.header}>
            <h1 className={styles.frequentlyAskedQuestions}>
              Frequently Asked Questions
            </h1>
            <div className={styles.hereAreSomeContainer}>
              <p className={styles.hereAreSome}>
                Here are some basic questions and answers
              </p>
              <p className={styles.toHelpYou}>to help you get started.</p>
            </div>
          </div>
          <div className={styles.field}>
            <img
              className={styles.iconlylightsearch}
              alt=""
              src="/iconlylightsearch.svg"
            />
            <input
              className={styles.searchQuestions}
              placeholder="Search questions"
              type="text"
            />
          </div>
        </div>
        <div className={styles.switcher}>
          <div className={styles.monthlyYearly} />
          <div className={styles.monthlyYearly1} />
          <b className={styles.monthly}>Landlord</b>
          <b className={styles.yearly}>Tenant</b>
        </div>
      </div>
      <QuestionList />
    </section>
  );
};

export default FAQ;
