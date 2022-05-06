import styles from "./StatsCard.module.css";
import { ReactComponent as EllipsisIcon } from "../images/icon-ellipsis.svg";

const PREVIOUS_TIME = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

const StatsCard = ({ title, current, previous, view }) => {
  return (
    <article
      className={`${styles.container} ${
        styles[title.replace(/ /g, "").toLowerCase()]
      }`}
    >
      <div className={styles.stats}>
        <div>
          <h2>{title}</h2>
          <EllipsisIcon />
        </div>
        <div>
          <div className={styles.current}>{current}hrs</div>
          <div
            className={styles.previous}
          >{`${PREVIOUS_TIME[view]} - ${previous}hrs`}</div>
        </div>
      </div>
    </article>
  );
};

export default StatsCard;
