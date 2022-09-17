import db from "../firebase";

export const getMoviesFromWatchList = (registerDocID, setWatchListMovies) => {
  db.collection("register")
    .doc(registerDocID)
    .collection("watchlist")
    .onSnapshot((snap) => {
      const MoviesArr = [];
      snap.forEach((doc) => MoviesArr.push(doc.data()));
      setWatchListMovies(MoviesArr);
      // console.log(MoviesArr);
    });
};

export const deleteMovieFromWatchList = (path, docID) => {
  db.collection(path).doc(docID).delete();
};

// docID and docId are not same that's how it worked
export const addMovieToWatchList = (path, docId, object) => {
  db.collection(path).doc(docId).set(object);
};
