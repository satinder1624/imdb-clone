import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { getMoviesFromWatchList } from "../../services/watchlistService";
import IndividualList from "../whatToWatch/IndividualList";
import styles from "./styles/WatchListMovies.module.css";

export default function WatchListMovies() {
  const { data: session } = useSession();
  const [addedMoviesResult, setAddedMovieResult] = useState();

  useEffect(() => {
    getMoviesFromWatchList(session?.user?.email, setAddedMovieResult);
  }, [session?.user]);

  console.log(addedMoviesResult);

  return (
    <div className={styles.container}>
      {addedMoviesResult?.map((movie, i) => (
        <IndividualList
          key={i}
          id={movie.addedMovieId}
          posterImage={movie.posterImage}
          rating={movie.rating}
          filmName={movie.filmName}
          watchListMovie={addedMoviesResult?.filter(function value(v) {
            return v.addedMovieId == movie.addedMovieId;
          })}
        />
      ))}
    </div>
  );
}
