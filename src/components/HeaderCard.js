import styles from "./HeaderCard.module.css";

const HeaderCard = ({ profileImg, name, view, setView }) => {
  const names = name.split(" ");

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <img src={profileImg} alt={name} />
        <div className={styles.info}>
          <div>Report for</div>
          <div className={styles.name}>{`${names[0]}\n${names[1]}`}</div>
        </div>
      </div>
      <div className={styles.menu}>
        <div
          className={`${styles.menuItem} ${
            view === "daily" ? styles.active : null
          }`}
          onClick={() => setView("daily")}
        >
          Daily
        </div>
        <div
          className={`${styles.menuItem} ${
            view === "weekly" ? styles.active : null
          }`}
          onClick={() => setView("weekly")}
        >
          Weekly
        </div>
        <div
          className={`${styles.menuItem} ${
            view === "monthly" ? styles.active : null
          }`}
          onClick={() => setView("monthly")}
        >
          Monthly
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
