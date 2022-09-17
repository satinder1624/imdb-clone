import React from "react";
import styles from "../whatToWatch/styles/whatToWatch.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WatchList from "./WatchList";

export default function WhatToWatch() {
  return (
    <div className={styles.whatToWatchContainer}>
      <div className={styles.getRecomendation}>
        <h1>WhatToWatch</h1>
        <span className={styles.customRecomendation}>
          Get more recommendations {<ChevronRightIcon />}
        </span>
      </div>
      <div>
        <h3 className={styles.topPicks}>
          Top picks {<ChevronRightIcon className={styles.rightIcon} />}
        </h3>
        <span className={styles.topPicksSubText}>
          TV shows and movies for you
        </span>
      </div>
      {/* Lists */}
      <WatchList />
    </div>
  );
}
