import Image from "next/image";
import styles from "../TrendingVideo/styles/trendingVideo.module.css";
import black from "../../assests/trendingVideo/black.jpg";
import blackWishList from "../../assests/trendingVideo/blackWishList.jpg";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function TrendingVideo({
  image,
  poster,
  description,
  subText,
  time,
}) {
  return (
    <div className={styles.videoFeatureBox}>
      {/* Image Container */}
      <div className={styles.imageContainer}>
        {image && <Image priority src={image} />}
      </div>
      {/* shadow effect */}
      <div className={styles.shadowEffect}></div>
      {/* Description Container */}
      <div className={styles.descriptionContainer}>
        <div className={styles.hopeSo}>
          <BookmarkAddIcon className={styles.addtoWishIcon} />
          {/* {poster && <Image src={poster} width={200} height={300} />} */}
          <div className={styles.posterImage}>
            {poster && <Image src={poster} layout="fill" objectFit="contain" />}
            {/* {poster && <Image src={poster} layout="fill" objectFit="cover" />} */}
          </div>
        </div>
        <div className={styles.filmDescriptonContaienr}>
          <div className={styles.playIconContainer}>
            <PlayArrowIcon />
          </div>
          <div className={styles.filmNameContaienr}>
            <span>{description}</span>
            <span>{subText}</span>
          </div>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
