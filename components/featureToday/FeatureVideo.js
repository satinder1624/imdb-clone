import Image from "next/image";
import styles from "../featureToday/styles/featureVideo.module.css";
import React from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

export default function FeatureVideo({
  image,
  icon,
  iconText,
  movieCardText,
  nextImage,
  nextIcon,
  nextIconText,
  nextMovieCardText,
  lastImage,
  lastIcon,
  lastIconText,
  lastMovieCardText,
}) {
  return (
    <div className={styles.oneBigCardContainer}>
      <div className={styles.featureVideoCard}>
        <div className={styles.resImageContainer}>
          <Image src={image} />
        </div>
        <div className={styles.iconText}>
          {icon}
          <span>{iconText}</span>
        </div>
        <div className={styles.featureVideoText}>
          <span>{movieCardText}</span>
        </div>
      </div>
      <div className={styles.featureVideoCard}>
        <div className={styles.resImageContainer}>
          <Image src={nextImage} />
        </div>
        {/* <Image src={nextImage} width={319} height={179} /> */}
        <div className={styles.iconText}>
          {nextIcon}
          <span>{nextIconText}</span>
        </div>
        <div className={styles.featureVideoText}>
          <span>{nextMovieCardText}</span>
        </div>
      </div>
      <div className={styles.featureVideoCard}>
        <div className={styles.resImageContainer}>
          <Image src={lastImage} />
        </div>
        {/* <Image src={lastImage} width={319} height={179} /> */}
        <div className={styles.iconText}>
          {lastIcon}
          <span>{lastIconText}</span>
        </div>
        <div className={styles.featureVideoText}>
          <span>{lastMovieCardText}</span>
        </div>
      </div>
    </div>
  );
}
