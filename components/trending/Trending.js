import Image from "next/image";
import React from "react";
import styles from "../trending/styles/trending.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import TrendingVideo from "../../ui/TrendingVideo/TrendingVideo";
import UpNext from "../../ui/UpNextElement/UpNext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import black from "../../assests/trendingVideo/black.jpg";
import blackWishList from "../../assests/trendingVideo/blackWishList.jpg";
import JohnWick from "../../assests/trendingVideo/JohnWick.jpg";
import JohnWickPoster from "../../assests/trendingVideo/JohnWickPoster.jpg";
import Shazam from "../../assests/trendingVideo/Shazam.jpg";
import ShazamPoster from "../../assests/trendingVideo/ShazamPoster.jpg";
import WalkingDead from "../../assests/trendingVideo/WalkingDead.jpg";
import WalkingDeadPoster from "../../assests/trendingVideo/WalkingDeadPoster.jpg";
import LOTR from "../../assests/trendingVideo/LOTR.jpg";
import LORTPoster from "../../assests/trendingVideo/LORTPoster.jpg";

export default function Trending() {
  return (
    <div className={styles.trendingContainer}>
      <div className={styles.carouselContainer}>
        {/* Video Craosel */}
        <Carousel
          autoPlay={false}
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          transitionTime={750}
        >
          <div className={styles.crDiv}>
            {/* Video Element  */}
            <TrendingVideo
              image={JohnWick}
              poster={JohnWickPoster}
              description={"'John Wick 4' Sneak Peak"}
              subText={"Watch the Comic-Con Trailer"}
              time={"1:06"}
            />
          </div>
          <div className={styles.crDiv}>
            {/* Video Element  */}
            <TrendingVideo
              image={black}
              poster={blackWishList}
              description={"'The Outlaws' Return on Aug 5"}
              subText={"Watch the Season 2 Trailer"}
              time={"2:04"}
            />
          </div>
          <div className={styles.crDiv}>
            {/* Video Element  */}
            <TrendingVideo
              image={Shazam}
              poster={ShazamPoster}
              description={"The 'Shazam! Fury of the Gods' Trailer is Here"}
              subText={"The 'Shazam! Fury of the Gods' Trailer is Here"}
              time={"2:25"}
            />
          </div>
          <div className={styles.crDiv}>
            {/* Video Element  */}
            <TrendingVideo
              image={WalkingDead}
              poster={WalkingDeadPoster}
              description={"'The Walking Dead' Comes to an End"}
              subText={"Watch the Final Season 11 Trailer"}
              time={"3:09"}
            />
          </div>
          <div className={styles.crDiv}>
            {/* Video Element  */}
            <TrendingVideo
              image={LOTR}
              poster={LORTPoster}
              description={"The Lord of the Rings: The Rings of Power"}
              subText={"Watch the Official San Diego Comic-Con Trailer"}
              time={"3:02"}
            />
          </div>
        </Carousel>
      </div>

      {/* Up next */}
      <div className={styles.upNextContainer}>
        <h2>Up next</h2>
        <div className={styles.nextMoivesContainer}>
          {/* Up Next Element */}
          <UpNext
            image={JohnWickPoster}
            time={"1:06"}
            description={"'John Wick 4' Sneak Peak"}
            subText={"Watch the Comic-Con Trailer"}
          />
          <UpNext
            image={blackWishList}
            time={"2:04"}
            description={"'The Outlaws' Return on Aug 5"}
            subText={"Watch the Season 2 Trailer"}
          />
          <UpNext
            image={ShazamPoster}
            time={"1:06"}
            description={"The 'Shazam! Fury of the Gods' Trailer is Here"}
            subText={"The 'Shazam! Fury of the Gods' Trailer is Here"}
          />
          <UpNext
            image={WalkingDeadPoster}
            time={"1:06"}
            description={"'The Walking Dead' Comes to an End"}
            subText={"Watch the Final Season 11 Trailer"}
          />
          <UpNext
            image={LORTPoster}
            time={"1:06"}
            description={"The Lord of the Rings: The Rings of Power"}
            subText={"Watch the Official San Diego Comic-Con Trailer"}
          />
        </div>
        <h3>Browse Trailers</h3>
      </div>
    </div>
  );
}
