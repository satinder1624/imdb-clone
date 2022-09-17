import React from "react";
import styles from "../banner/styles/banner.module.css";
import header1 from "../banner/assests/doctorStrange2.jpg";
import header2 from "../banner/assests/doctorStrange4.jpg";
import header3 from "../banner/assests/caption1.webp";
import header4 from "../banner/assests/ds5.jpg";
import header5 from "../banner/assests/iron1.jpg";
import header6 from "../banner/assests/iron2.jpg";
import header7 from "../banner/assests/ironCap1.jpg";
import header8 from "../banner/assests/thor1.jpg";
import header9 from "../banner/assests/thor2.jpg";
import Image from "next/image";

export default function Banner() {
  const imageArray = [
    header1,
    header2,
    header3,
    header4,
    header5,
    header6,
    header7,
    header8,
    header9,
  ];
  let index = Math.floor(Math.random() * imageArray.length);

  return (
    <div>
      <div className={styles.bannerImagesContainer}>
        <Image priority width={1080} height={608} src={imageArray[index]} />
      </div>
    </div>
  );
}
