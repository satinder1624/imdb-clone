import React from "react";
import styles from "../featureToday/styles/feature.module.css";
import FeatureList from "./FeatureList";

export default function Feature() {
  return (
    <div className={styles.featureContainer}>
      <h1>Feature Today</h1>
      {/* List Component Here... */}
      <FeatureList />
    </div>
  );
}
