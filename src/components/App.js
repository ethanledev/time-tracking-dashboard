import styles from "./App.module.css";
import HeaderCard from "./HeaderCard";
import data from "../data.json";
import { useState } from "react";
import profileImg from "../images/image-jeremy.png";
import StatsCard from "./StatsCard";

const App = () => {
  const [view, setView] = useState("daily");

  const renderStatsCard = () => {
    return data.map((stats) => (
      <StatsCard
        key={stats.title}
        title={stats.title}
        current={stats.timeframes[view].current}
        previous={stats.timeframes[view].previous}
        view={view}
      />
    ));
  };

  return (
    <div className={styles.container}>
      <main className={styles.dashboard}>
        <h1 className={styles.srOnly}>Time Tracking Dashboard</h1>
        <HeaderCard
          profileImg={profileImg}
          name="Jeremy Robson"
          view={view}
          setView={setView}
        />
        {renderStatsCard()}
      </main>
    </div>
  );
};

export default App;
