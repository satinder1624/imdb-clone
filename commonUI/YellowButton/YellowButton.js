import React from "react";
import styles from "../YellowButton/styles/styles.module.css";
import Link from "next/link";

export default function YellowButton({
  url = "/",
  text = "IMDb",
  action = null,
}) {
  return (
    <div onClick={action} className={styles.logoContainer}>
      <Link href={url}>
        <span className={styles.logoText}>{text}</span>
      </Link>
    </div>
  );
}
