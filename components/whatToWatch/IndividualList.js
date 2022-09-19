import React, { useState } from "react";
import styles from "../whatToWatch/styles/individualList.module.css";
import Thor from "../whatToWatch/assests/Thor.jpg";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import DoneIcon from "@mui/icons-material/Done";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddIcon from "@mui/icons-material/Add";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Image from "next/image";
import { useSession } from "next-auth/react";
import db from "../../firebase";

import {
  addMovieToWatchList,
  deleteMovieFromWatchList,
} from "../../services/watchlistService";

export default function IndividualList({
  id,
  posterImage,
  rating,
  filmName,
  // condition,
  watchListMovie,
}) {
  const [isAdded, setIsAdded] = useState();

  const { data: session } = useSession();

  // condition
  let isAddedToWatchList = watchListMovie?.[0]?.addedMovieId === id;
  // Grabing ID
  let addedMovieDocID = watchListMovie?.[0]?.docId;
  // console.log(watchListMovie);
  // console.log(condition);

  // console.log(docID);
  // console.log("DocID Array: " + docID?.[0]?.docId);
  // console.log("ID: " + id);
  // console.log(docID?.[0]?.addedMovieId === id);

  const addToWatchList = () => {
    const docId = db
      .collection(`register/${session?.user?.email}/watchlist`)
      .doc().id;

    const newObject = {
      addedMovieId: id,
      posterImage,
      rating,
      filmName,
      docId,
    };

    addMovieToWatchList(
      `register/${session?.user?.email}/watchlist`,
      docId,
      newObject
    );
  };

  const deleteFromWatchList = () => {
    deleteMovieFromWatchList(
      `register/${session?.user?.email}/watchlist`,
      addedMovieDocID
    );
  };

  const handler = (e) => {
    e.preventDefault();

    !session
      ? alert("Please Sign in to access watchlist feature")
      : !isAddedToWatchList
      ? addToWatchList()
      : deleteFromWatchList();
  };

  return (
    <div className={styles.container}>
      <div className={styles.OneCard}>
        {/* Image Container */}
        <div className={styles.imageConatiner}>
          {/* BookMArk */}
          <BookmarkAddIcon className={styles.bookmarkIcon} />
          {/* Image Div */}
          <div className={styles.posterContainer}>
            {posterImage && (
              <Image src={posterImage} layout="fill" objectFit="cover" />
            )}
          </div>
        </div>
        {/* Description Div */}
        <div className={styles.descriptionContainer}>
          {/* Rating and Star */}
          <div className={styles.ratingStar}>
            <StarRateIcon className={styles.starIcon} />
            <span>{rating}</span>
          </div>
          {/* Name */}
          <div className={styles.filmNameContaienr}>
            <span>{filmName}</span>
          </div>
          {/* WatchList */}
          <div onClick={handler} className={styles.watchListButton}>
            {isAddedToWatchList ? (
              <>
                <DoneIcon className={styles.addIcon} />
                <span>Added</span>
              </>
            ) : (
              <>
                <AddIcon className={styles.addIcon} />
                <span>Watchlist</span>
              </>
            )}
          </div>
          {/* Trailer and I */}
          <div className={styles.trailerInfoContainer}>
            {/* Trailer and > */}
            <div className={styles.trailerContainer}>
              <ArrowRightIcon />
              <span>Trailer</span>
            </div>
            <InfoOutlinedIcon className={styles.infoIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
