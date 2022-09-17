import React from "react";
import styles from "../UpNextElement/styles/upNext.module.css";
import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function UpNext({ image, time, description, subText }) {
  return (
    <div className={styles.nextMovieSection}>
      {/* Image */}
      <div className={styles.upNextPosterConatienr}>
        {/* <Image src={image} width={100} height={142} /> */}
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
      {/* Video Text */}
      <div className={styles.upNextVideoText}>
        {/* PlayIcon and time */}
        <div className={styles.nextPlayBox}>
          <div className={styles.upNextPlayIconContainer}>
            <PlayArrowIcon />
          </div>
          <span>{time}</span>
        </div>
        {/* Description */}
        <span className={styles.upNextDescriptionText}>
          {/* "Better Call Saul" Finale, New "Resident Evil" Series, and More */}
          {description}
        </span>
        {/* Subtitle */}
        <span className={styles.upNextSubtitle}>{subText}</span>
      </div>
    </div>
  );
}
