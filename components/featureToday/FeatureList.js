import React from "react";
import styles from "../featureToday/styles/featureList.module.css";
import FeatureVideo from "./FeatureVideo";
import JohnWick from "./assests/JohnWick.jpg";
import TwoActorsSmiling from "./assests/TwoActorsSmiling.jpg";
import St from "./assests/St.jpg";
import rock from "./assests/rock.jpg";
import marvel from "./assests/marvel.jpg";
import guest from "./assests/guest.jpg";
import girls from "./assests/girls.jpg";
import cartoon from "./assests/cartoon.jpg";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ListIcon from "@mui/icons-material/List";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function FeatureList() {
  return (
    <div>
      {/* Crausel here */}
      <Carousel
        className={styles.carousel}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        transitionTime={1000}
      >
        <div>
          <FeatureVideo
            image={JohnWick}
            icon={<PhotoLibraryIcon />}
            iconText="Photos"
            movieCardText="LatestStils: Keanu Reeves in 'John Wick 4'"
            nextImage={St}
            nextIcon={<ListIcon />}
            nextIconText="List"
            nextMovieCardText="The Stranger Things Cast Answer Burining Questions"
            lastImage={marvel}
            lastIcon={<PlayCircleOutlineIcon />}
            lastIconText="Play"
            lastMovieCardText="Annouching the ReFrame TV STamp Recepients"
          />
        </div>
        <div>
          <FeatureVideo
            image={TwoActorsSmiling}
            icon={<ListIcon />}
            iconText="List"
            movieCardText="All the Best Pabels from San Diego Comic-con 2022"
            nextImage={rock}
            nextIcon={<PhotoLibraryIcon />}
            nextIconText="Photos"
            nextMovieCardText="New and Upcoming Superhero Movies and Series"
            lastImage={guest}
            lastIcon={<PlayCircleOutlineIcon />}
            lastIconText="Play"
            lastMovieCardText="Meet Our Guests on the IMDboat at SDCC 2022"
          />
        </div>
        <div>
          <FeatureVideo
            image={cartoon}
            icon={<ListIcon />}
            iconText="List"
            movieCardText="Latest Comic-Con Posters and More"
            nextImage={girls}
            nextIcon={<PhotoLibraryIcon />}
            nextIconText="Photos"
            nextMovieCardText="Photos We Love: The IMDboat Party at Comic-Con"
            lastImage={JohnWick}
            lastIcon={<PhotoLibraryIcon />}
            lastIconText="Photos"
            lastMovieCardText="Annouching the ReFrame TV STamp Recepients"
          />
        </div>
      </Carousel>
    </div>
  );
}
