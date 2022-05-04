import styles from "./StatsCard.module.css";
import { ReactComponent as EllipsisIcon } from "../images/icon-ellipsis.svg";

const PREVIOUS_TIME = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

const StatsCard = ({ title, current, previous, view }) => {
  return (
    <div
      className={`${styles.container} ${
        styles[title.replace(/ /g, "").toLowerCase()]
      }`}
    >
      <div className={styles.stats}>
        <header>
          <h1>{title}</h1>
          <EllipsisIcon />
        </header>
        <main>
          <div className={styles.current}>{current}hrs</div>
          <div
            className={styles.previous}
          >{`${PREVIOUS_TIME[view]} - ${previous}hrs`}</div>
        </main>
      </div>
    </div>
  );
};

export default StatsCard;
